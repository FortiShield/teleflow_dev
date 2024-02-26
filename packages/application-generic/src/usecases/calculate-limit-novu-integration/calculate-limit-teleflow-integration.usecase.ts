import { Injectable } from '@nestjs/common';
import { startOfMonth, endOfMonth } from 'date-fns';
import { MessageRepository } from '@teleflow/dal';
import {
  ChannelTypeEnum,
  EmailProviderIdEnum,
  SmsProviderIdEnum,
} from '@teleflow/shared';

import {
  areTeleflowEmailCredentialsSet,
  areTeleflowSmsCredentialsSet,
} from '../../utils/teleflow-integrations';
import { CalculateLimitTeleflowIntegrationCommand } from './calculate-limit-teleflow-integration.command';

@Injectable()
export class CalculateLimitTeleflowIntegration {
  constructor(private messageRepository: MessageRepository) {}

  static MAX_TELEFLOW_INTEGRATION_MAIL_REQUESTS = parseInt(
    process.env.MAX_TELEFLOW_INTEGRATION_MAIL_REQUESTS || '300',
    10
  );

  static MAX_TELEFLOW_INTEGRATION_SMS_REQUESTS = parseInt(
    process.env.MAX_TELEFLOW_INTEGRATION_SMS_REQUESTS || '20',
    10
  );

  async execute(
    command: CalculateLimitTeleflowIntegrationCommand
  ): Promise<{ limit: number; count: number } | undefined> {
    const channelType = command.channelType;

    if (
      channelType === ChannelTypeEnum.EMAIL &&
      !areTeleflowEmailCredentialsSet()
    ) {
      return;
    }

    if (channelType === ChannelTypeEnum.SMS && !areTeleflowSmsCredentialsSet()) {
      return;
    }

    const providerId = CalculateLimitTeleflowIntegration.getProviderId(channelType);

    if (providerId === undefined) {
      return;
    }
    const limit =
      channelType === ChannelTypeEnum.EMAIL
        ? CalculateLimitTeleflowIntegration.MAX_TELEFLOW_INTEGRATION_MAIL_REQUESTS
        : CalculateLimitTeleflowIntegration.MAX_TELEFLOW_INTEGRATION_SMS_REQUESTS;

    const messagesCount = await this.messageRepository.count(
      {
        channel: command.channelType,
        _environmentId: command.environmentId,
        providerId,
        createdAt: {
          $gte: startOfMonth(new Date()),
          $lte: endOfMonth(new Date()),
        },
      },
      limit
    );

    return {
      limit,
      count: messagesCount,
    };
  }

  static getProviderId(type: ChannelTypeEnum) {
    switch (type) {
      case ChannelTypeEnum.EMAIL:
        return EmailProviderIdEnum.Teleflow;
      case ChannelTypeEnum.SMS:
        return SmsProviderIdEnum.Teleflow;
      default:
        return undefined;
    }
  }
}
