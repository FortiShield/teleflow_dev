import {
  mailerSendConfig,
  mailgunConfig,
  mailjetConfig,
  mailtrapConfig,
  mandrillConfig,
  netCoreConfig,
  nodemailerConfig,
  postmarkConfig,
  sendgridConfig,
  sendinblueConfig,
  sesConfig,
  outlook365Config,
  infobipEmailConfig,
  resendConfig,
  plunkConfig,
  sparkpostConfig,
  emailWebhookConfig,
  brazeEmailConfig,
} from '../credentials';
import { IProviderConfig } from '../provider.interface';
import { EmailProviderIdEnum } from '../provider.enum';
import { ChannelTypeEnum } from '../../../types';
import { UTM_CAMPAIGN_QUERY_PARAM } from '../../../ui';

export const emailProviders: IProviderConfig[] = [
  {
    id: EmailProviderIdEnum.Teleflow,
    displayName: 'Teleflow Email',
    channel: ChannelTypeEnum.EMAIL,
    credentials: [],
    docReference: `https://docs.teleflow.co/channels-and-providers/default-providers${UTM_CAMPAIGN_QUERY_PARAM}#teleflow-email-provider`,
    logoFileName: { light: 'teleflow.png', dark: 'teleflow.png' },
  },
  {
    id: EmailProviderIdEnum.Mailgun,
    displayName: 'Mailgun',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailgunConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/mailgun${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'mailgun.svg', dark: 'mailgun.svg' },
  },
  {
    id: EmailProviderIdEnum.Mailjet,
    displayName: 'Mailjet',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailjetConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/mailjet${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'mailjet.png', dark: 'mailjet.png' },
  },
  {
    id: EmailProviderIdEnum.Mailtrap,
    displayName: 'Mailtrap',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailtrapConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/mailtrap${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'mailtrap.svg', dark: 'mailtrap.svg' },
  },
  {
    id: EmailProviderIdEnum.Mandrill,
    displayName: 'Mandrill',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mandrillConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/mandrill${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'mandrill.svg', dark: 'mandrill.svg' },
  },
  {
    id: EmailProviderIdEnum.Postmark,
    displayName: 'Postmark',
    channel: ChannelTypeEnum.EMAIL,
    credentials: postmarkConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/postmark${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'postmark.png', dark: 'postmark.png' },
  },
  {
    id: EmailProviderIdEnum.SendGrid,
    displayName: 'SendGrid',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sendgridConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/sendgrid${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'sendgrid.png', dark: 'sendgrid.png' },
  },
  {
    id: EmailProviderIdEnum.Sendinblue,
    displayName: 'Sendinblue',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sendinblueConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/sendinblue${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'sendinblue.png', dark: 'sendinblue.png' },
  },
  {
    id: EmailProviderIdEnum.SES,
    displayName: 'SES',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sesConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/amazonses${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'ses.svg', dark: 'ses.svg' },
  },
  {
    id: EmailProviderIdEnum.NetCore,
    displayName: 'Netcore',
    channel: ChannelTypeEnum.EMAIL,
    credentials: netCoreConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/netcore${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'netcore.png', dark: 'netcore.png' },
  },
  {
    id: EmailProviderIdEnum.CustomSMTP,
    displayName: 'Custom SMTP',
    channel: ChannelTypeEnum.EMAIL,
    credentials: nodemailerConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/custom-smtp${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'custom_smtp.svg', dark: 'custom_smtp.svg' },
  },
  {
    id: EmailProviderIdEnum.MailerSend,
    displayName: 'MailerSend',
    channel: ChannelTypeEnum.EMAIL,
    credentials: mailerSendConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/mailersend${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'mailersend.svg', dark: 'mailersend.svg' },
  },
  {
    id: EmailProviderIdEnum.Outlook365,
    displayName: 'Microsoft Outlook365',
    channel: ChannelTypeEnum.EMAIL,
    credentials: outlook365Config,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/outlook365${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'outlook365.png', dark: 'outlook365.png' },
  },
  {
    id: EmailProviderIdEnum.Infobip,
    displayName: 'Infobip',
    channel: ChannelTypeEnum.EMAIL,
    credentials: infobipEmailConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/infobip${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'infobip.png', dark: 'infobip.png' },
  },
  {
    id: EmailProviderIdEnum.Braze,
    displayName: 'Braze',
    channel: ChannelTypeEnum.EMAIL,
    credentials: brazeEmailConfig,
    docReference: 'https://www.braze.com/docs/api/endpoints/messaging/send_messages/post_send_messages/',
    logoFileName: { light: 'braze.svg', dark: 'braze.svg' },
  },
  {
    id: EmailProviderIdEnum.Resend,
    displayName: 'Resend',
    channel: ChannelTypeEnum.EMAIL,
    credentials: resendConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/resend${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'resend.svg', dark: 'resend.svg' },
  },
  {
    id: EmailProviderIdEnum.Plunk,
    displayName: 'Plunk',
    channel: ChannelTypeEnum.EMAIL,
    credentials: plunkConfig,
    docReference: `https://docs.teleflow.co/channels/email/plunk${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'plunk.png', dark: 'plunk.png' },
  },
  {
    id: EmailProviderIdEnum.SparkPost,
    displayName: 'SparkPost',
    channel: ChannelTypeEnum.EMAIL,
    credentials: sparkpostConfig,
    docReference: `https://docs.teleflow.co/channels-and-providers/email/sparkpost${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'sparkpost.svg', dark: 'sparkpost.svg' },
  },
  {
    id: EmailProviderIdEnum.EmailWebhook,
    displayName: 'Email Webhook',
    channel: ChannelTypeEnum.EMAIL,
    credentials: emailWebhookConfig,
    betaVersion: true,
    docReference: `https://docs.teleflow.co/channels/email/email-webhook${UTM_CAMPAIGN_QUERY_PARAM}`,
    logoFileName: { light: 'email_webhook.svg', dark: 'email_webhook.svg' },
  },
];
