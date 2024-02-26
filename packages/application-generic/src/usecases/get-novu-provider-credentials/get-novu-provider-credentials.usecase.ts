import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  EmailProviderIdEnum,
  ICredentials,
  SmsProviderIdEnum,
} from '@teleflow/shared';
import { AnalyticsService } from '../../services/analytics.service';
import { CalculateLimitTeleflowIntegration } from '../calculate-limit-teleflow-integration';

import { GetTeleflowProviderCredentialsCommand } from './get-teleflow-provider-credentials.command';

@Injectable()
export class GetTeleflowProviderCredentials {
  constructor(
    private analyticsService: AnalyticsService,
    protected calculateLimitTeleflowIntegration: CalculateLimitTeleflowIntegration
  ) {}

  async execute(
    integration: GetTeleflowProviderCredentialsCommand
  ): Promise<ICredentials> {
    if (
      integration.providerId === EmailProviderIdEnum.Teleflow ||
      integration.providerId === SmsProviderIdEnum.Teleflow
    ) {
      const limit = await this.calculateLimitTeleflowIntegration.execute({
        channelType: integration.channelType,
        environmentId: integration.environmentId,
        organizationId: integration.organizationId,
      });

      if (!limit) {
        throw new ConflictException(
          `Limit for Teleflow's ${integration.channelType.toLowerCase()} provider does not exists.`
        );
      }

      if (limit.count >= limit.limit) {
        this.analyticsService.track(
          '[Teleflow Integration] - Limit reached',
          integration.userId,
          {
            channelType: integration.channelType,
            environmentId: integration.environmentId,
            organizationId: integration.organizationId,
            providerId: integration.providerId,
            ...limit,
          }
        );
        throw new ConflictException(
          `Limit for Teleflow's ${integration.channelType.toLowerCase()} provider was reached.`
        );
      }
    }

    if (integration.providerId === EmailProviderIdEnum.Teleflow) {
      return {
        apiKey: process.env.TELEFLOW_EMAIL_INTEGRATION_API_KEY,
        from: 'no-reply@teleflow.khulnasoft.com',
        senderName: 'Teleflow',
        ipPoolName: 'Demo',
      };
    }

    if (integration.providerId === SmsProviderIdEnum.Teleflow) {
      return {
        accountSid: process.env.TELEFLOW_SMS_INTEGRATION_ACCOUNT_SID,
        token: process.env.TELEFLOW_SMS_INTEGRATION_TOKEN,
        from: process.env.TELEFLOW_SMS_INTEGRATION_SENDER,
      };
    }

    throw new NotFoundException(
      `Credentials for Teleflow's ${integration.channelType.toLowerCase()} provider could not be found`
    );
  }
}
