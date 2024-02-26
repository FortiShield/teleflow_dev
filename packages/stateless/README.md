## 📦 Install

```bash
npm install @teleflow/stateless
```

```bash
yarn add @teleflow/stateless
```

## 🔨 Usage

```ts
import { TeleflowStateless, ChannelTypeEnum } from '@teleflow/stateless';
import { SendgridEmailProvider } from '@teleflow/sendgrid';

const teleflow = new TeleflowStateless();

await teleflow.registerProvider(
  new SendgridEmailProvider({
    apiKey: process.env.SENDGRID_API_KEY,
    from: 'sender@mail.com',
  })
);

const passwordResetTemplate = await teleflow.registerTemplate({
  id: 'password-reset',
  messages: [
    {
      subject: 'Your password reset request',
      channel: ChannelTypeEnum.EMAIL,
      template: `
          Hi {{firstName}}!
          
          To reset your password click <a href="{{resetLink}}">here.</a>
          
          {{#if organization}}
            <img src="{{organization.logo}}" />
          {{/if}}
      `,
    },
  ],
});

await teleflow.trigger('<REPLACE_WITH_EVENT_NAME>', {
  $user_id: '<USER IDENTIFIER>',
  $email: 'test@email.com',
  firstName: 'John',
  lastName: 'Doe',
  organization: {
    logo: 'https://evilcorp.com/logo.png',
  },
});
```

## Providers

Teleflow provides a single API to manage providers across multiple channels with a simple-to-use interface.

#### 💌 Email

- [x] [Sendgrid](https://github.com/khulnasoft/teleflow/tree/main/providers/sendgrid)
- [x] [Netcore](https://github.com/khulnasoft/teleflow/tree/main/providers/netcore)
- [x] [Mailgun](https://github.com/khulnasoft/teleflow/tree/main/providers/mailgun)
- [x] [SES](https://github.com/khulnasoft/teleflow/tree/main/providers/ses)
- [x] [Postmark](https://github.com/khulnasoft/teleflow/tree/main/providers/postmark)
- [x] [Custom SMTP](https://github.com/khulnasoft/teleflow/tree/main/providers/nodemailer)
- [x] [Mailjet](https://github.com/khulnasoft/teleflow/tree/main/providers/mailjet)
- [x] [Mandrill](https://github.com/khulnasoft/teleflow/tree/main/providers/mandrill)
- [x] [SendinBlue](https://github.com/khulnasoft/teleflow/tree/main/providers/sendinblue)
- [ ] SparkPost

#### 📞 SMS

- [x] [Twilio](https://github.com/khulnasoft/teleflow/tree/main/providers/twilio)
- [x] [Plivo](https://github.com/khulnasoft/teleflow/tree/main/providers/plivo)
- [x] [SNS](https://github.com/khulnasoft/teleflow/tree/main/providers/sns)
- [x] [Nexmo - Vonage](https://github.com/khulnasoft/teleflow/tree/main/providers/nexmo)
- [x] [Sms77](https://github.com/khulnasoft/teleflow/tree/main/providers/sms77)
- [x] [Telnyx](https://github.com/khulnasoft/teleflow/tree/main/providers/telnyx)
- [x] [Termii](https://github.com/khulnasoft/teleflow/tree/main/providers/termii)
- [x] [Gupshup](https://github.com/khulnasoft/teleflow/tree/main/providers/gupshup)
- [ ] Bandwidth
- [ ] RingCentral

#### 📱 Push

- [x] [FCM](https://github.com/khulnasoft/teleflow/tree/main/providers/fcm)
- [x] [Expo](https://github.com/khulnasoft/teleflow/tree/main/providers/expo)
- [ ] [SNS](https://github.com/khulnasoft/teleflow/tree/main/providers/sns)
- [ ] Pushwoosh

#### 👇 Chat

- [x] [Slack](https://github.com/khulnasoft/teleflow/tree/main/providers/slack)
- [x] [Discord](https://github.com/khulnasoft/teleflow/tree/main/providers/discord)
- [ ] MS Teams
- [ ] Mattermost

#### 📱 In-App

- [x] [Teleflow](https://docs.teleflow.khulnasoft.com/notification-center/introduction)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty

## 🔗 Links

- [Home page](https://teleflow.khulnasoft.com/)
