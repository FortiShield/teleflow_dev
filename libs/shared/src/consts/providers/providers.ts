import { IProviderConfig } from './provider.interface';
import { chatProviders, emailProviders, smsProviders, pushProviders, inAppProviders } from './channels';
import { InAppProviderIdEnum, EmailProviderIdEnum, ProvidersIdEnum, SmsProviderIdEnum } from './provider.enum';

export { chatProviders, emailProviders, smsProviders, pushProviders, inAppProviders } from './channels';

export const providers: IProviderConfig[] = [
  ...emailProviders,
  ...smsProviders,
  ...chatProviders,
  ...pushProviders,
  ...inAppProviders,
];

export const TELEFLOW_PROVIDERS: ProvidersIdEnum[] = [
  InAppProviderIdEnum.Teleflow,
  SmsProviderIdEnum.Teleflow,
  EmailProviderIdEnum.Teleflow,
];

export const TELEFLOW_SMS_EMAIL_PROVIDERS: ProvidersIdEnum[] = [SmsProviderIdEnum.Teleflow, EmailProviderIdEnum.Teleflow];
