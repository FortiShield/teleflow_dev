<div align="center">
  👨‍💻 <a href="https://jobs.ashbyhq.com/teleflow.khulnasoft.com?utm_source=github" target="_blank">
     We are hiring in Europe/UK/Israel!</a> 👩‍💻
</div>
<br/>
<br/>

<div align="center">
  <a href="https://teleflow.khulnasoft.com?utm_source=github" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img alt="Teleflow Logo" src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280"/>
  </picture>
  </a>
</div>

<br/>

<p align="center">
  <a href="https://www.npmjs.com/package/@teleflow/node">
    <img src="https://img.shields.io/npm/v/@teleflow/node" alt="NPM">
  </a>
  <a href="https://www.npmjs.com/package/@teleflow/node">
    <img src="https://img.shields.io/npm/dm/@teleflow/node" alt="npm downloads">
  </a>
  <img src="https://img.shields.io/github/license/khulnasoft/teleflow" alt="MIT">
</p>

<h1 align="center">The open-source notification infrastructure for developers</h1>

<div align="center">
The ultimate service for managing multi-channel notifications with a single API.
</div>

  <p align="center">
    <br />
    <a href="https://docs.teleflow.khulnasoft.com" rel="dofollow"><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml&title=%F0%9F%90%9B+Bug+Report%3A+">Report Bug</a>
    ·
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=feature&template=feature_request.yml&title=%F0%9F%9A%80+Feature%3A+">Request Feature</a>
    ·
  <a href="https://discord.teleflow.khulnasoft.com">Join Our Discord</a>
    ·
    <a href="https://roadmap.teleflow.khulnasoft.com">Roadmap</a>
    ·
    <a href="https://twitter.com/khulnasoft">X</a>
    ·
    <a href="https://notifications.directory">Notifications Directory</a>
  </p>
  
  <p align="center">
  Available in: <a href="https://github.com/khulnasoft/teleflow/tree/next/packages/node">Node.js</a>
  · <a href="https://github.com/khulnasoft/teleflow-php">PHP</a>
  · <a href="https://github.com/khulnasoft/go-teleflow">Go</a>
  · <a href="https://github.com/khulnasoft/teleflow-ruby">Ruby</a>
  · <a href="https://github.com/khulnasoft/teleflow-kotlin">Kotlin</a>
  · <a href="https://github.com/khulnasoft/elixir">Elixir</a>
  · <a href="https://github.com/khulnasoft/rust">Rust</a>
  · <a href="https://github.com/khulnasoft/teleflow-python">Python</a>
  · <a href="https://github.com/khulnasoft/teleflow-java">Java</a>
  </p>

## ⭐️ Why Teleflow?

Teleflow provides a unified API that makes it simple to send notifications through multiple channels, including In-App, Push, Email, SMS, and Chat.
With Teleflow, you can create custom workflows and define conditions for each channel, ensuring that your notifications are delivered in the most effective way possible.

## ✨ Features

- 🌈 Single API for all messaging providers (In-App, Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multi-channel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community-driven

## 📚 Table Of Contents

- [Getting Started](https://github.com/khulnasoft/teleflow#-getting-started)
- [Embeddable notification center](https://github.com/khulnasoft/teleflow#embeddable-notification-center)
- [Providers](https://github.com/khulnasoft/teleflow#providers)
  - [Email](https://github.com/khulnasoft/teleflow#-email)
  - [SMS](https://github.com/khulnasoft/teleflow#-sms)
  - [Push](https://github.com/khulnasoft/teleflow#-push)
  - [Chat](https://github.com/khulnasoft/teleflow#-chat)
  - [In-App](https://github.com/khulnasoft/teleflow#-in-app)
  - [Others](https://github.com/khulnasoft/teleflow#other-coming-soon)
- [Need Help?](https://github.com/khulnasoft/teleflow#-need-help)
- [Links](https://github.com/khulnasoft/teleflow#-links)
- [License](https://github.com/khulnasoft/teleflow#%EF%B8%8F-license)

## 🚀 Getting Started

We are excited to launch the complete Teleflow API and admin panel. Do you want to give it a test before the official release? Here is how:

```
npx teleflow init
```

After setting up your account using the cloud or docker version, you can trigger the API using the `@teleflow/node` package.

For API documentation and reference, please visit [Teleflow API Reference] (https://docs.teleflow.khulnasoft.com/api-reference/events/trigger-event).

To get started with the Node.js package, you can install it using npm:

```bash
npm install @teleflow/node
```

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow(process.env.TELEFLOW_API_KEY);

await teleflow.trigger('<TRIGGER_NAME>', {
  to: [
    {
      subscriberId: '<UNIQUE_IDENTIFIER>',
      email: 'john1@doemail.com',
      firstName: 'John',
      lastName: 'Doe',
    },
  ],
  payload: {
    name: 'Hello World',
    organization: {
      logo: 'https://happycorp.com/logo.png',
    },
  },
});
```

## Embeddable Notification Center

Using the Teleflow API and admin panel, you can easily add a real-time notification center to your web app without building it yourself. You can use our [React](https://docs.teleflow.khulnasoft.com/notification-center/client/react/get-started) / [Vue](https://docs.teleflow.khulnasoft.com/notification-center/client/vue) / [Angular](https://docs.teleflow.khulnasoft.com/notification-center/client/angular) components or an [iframe embed](https://docs.teleflow.khulnasoft.com/notification-center/client/iframe), as well as a [Web component](https://docs.teleflow.khulnasoft.com/notification-center/client/web-component).

<div align="center">
<img width="762" alt="notification-center-912bb96e009fb3a69bafec23bcde00b0" src="https://user-images.githubusercontent.com/80174214/193887395-f1c95042-b4e6-480e-a89c-a78aa247fa90.gif" alt-text="GIF of Teleflow's Embeddable Notification Center">

Read more about how to add a notification center to your app with the Teleflow API [here](https://docs.teleflow.khulnasoft.com/notification-center/getting-started)

<p align="center">
  <a href="https://docs.teleflow.khulnasoft.com/sdks/react">React Component</a>
  · <a href="https://docs.teleflow.khulnasoft.com/sdks/vue">Vue Component</a>
  · <a href="https://docs.teleflow.khulnasoft.com/sdks/angular">Angular Component</a>
  </p>
  
</div>

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
- [x] [MailerSend](https://github.com/khulnasoft/teleflow/tree/main/providers/mailersend)
- [x] [Infobip](https://github.com/khulnasoft/teleflow/tree/main/providers/infobip)
- [x] [Resend](https://github.com/khulnasoft/teleflow/tree/main/providers/resend)
- [x] [SparkPost](https://github.com/khulnasoft/teleflow/tree/main/providers/sparkpost)
- [x] [Outlook 365](https://github.com/khulnasoft/teleflow/tree/main/providers/outlook365)

#### 📞 SMS

- [x] [Twilio](https://github.com/khulnasoft/teleflow/tree/main/providers/twilio)
- [x] [Plivo](https://github.com/khulnasoft/teleflow/tree/main/providers/plivo)
- [x] [SNS](https://github.com/khulnasoft/teleflow/tree/main/providers/sns)
- [x] [Nexmo - Vonage](https://github.com/khulnasoft/teleflow/tree/main/providers/nexmo)
- [x] [Sms77](https://github.com/khulnasoft/teleflow/tree/main/providers/sms77)
- [x] [Telnyx](https://github.com/khulnasoft/teleflow/tree/main/providers/telnyx)
- [x] [Termii](https://github.com/khulnasoft/teleflow/tree/main/providers/termii)
- [x] [Gupshup](https://github.com/khulnasoft/teleflow/tree/main/providers/gupshup)
- [x] [SMS Central](https://github.com/khulnasoft/teleflow/tree/main/providers/sms-central)
- [x] [Maqsam](https://github.com/khulnasoft/teleflow/tree/main/providers/maqsam)
- [x] [46elks](https://github.com/khulnasoft/teleflow/tree/main/providers/forty-six-elks)
- [x] [Clickatell](https://github.com/khulnasoft/teleflow/tree/main/providers/clickatell)
- [x] [Burst SMS](https://github.com/khulnasoft/teleflow/tree/main/providers/burst-sms)
- [x] [Firetext](https://github.com/khulnasoft/teleflow/tree/main/providers/firetext)
- [x] [Infobip](https://github.com/khulnasoft/teleflow/tree/main/providers/infobip)
- [ ] Bandwidth
- [ ] RingCentral


#### 📱 Push

- [x] [FCM](https://github.com/khulnasoft/teleflow/tree/main/providers/fcm)
- [x] [Expo](https://github.com/khulnasoft/teleflow/tree/main/providers/expo)
- [x] [APNS](https://github.com/khulnasoft/teleflow/tree/main/providers/apns)
- [x] [OneSignal](https://github.com/khulnasoft/teleflow/tree/main/providers/one-signal)
- [x] [Pushpad](https://github.com/khulnasoft/teleflow/tree/main/providers/pushpad)
- [ ] Pushwoosh

#### 👇 Chat

- [x] [Slack](https://github.com/khulnasoft/teleflow/tree/main/providers/slack)
- [x] [Discord](https://github.com/khulnasoft/teleflow/tree/main/providers/discord)
- [x] [MS Teams](https://github.com/khulnasoft/teleflow/tree/main/providers/ms-teams)
- [x] [Mattermost](https://github.com/khulnasoft/teleflow/tree/main/providers/mattermost)

#### 📱 In-App

- [x] [Teleflow](https://docs.teleflow.khulnasoft.com/notification-center/getting-started)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty

## 📋 Read Our Code Of Conduct

Before you begin coding and collaborating, please read our [Code of Conduct](https://github.com/khulnasoft/teleflow/blob/main/CODE_OF_CONDUCT.md) thoroughly to understand the standards (that you are required to adhere to) for community engagement. As part of our open-source community, we hold ourselves and other contributors to a high standard of communication. As a participant and contributor to this project, you agree to abide by our [Code of Conduct](https://github.com/khulnasoft/teleflow/blob/main/CODE_OF_CONDUCT.md).

## 💻 Need Help?

We are more than happy to help you. If you are getting any errors or facing problems while working on this project, join our [Discord server](https://discord.teleflow.khulnasoft.com) and ask for help. We are open to discussing anything related to the project.

## ⚡ Immediate working space with Gitpod

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/khulnasoft/teleflow)

## 🔗 Links

- [Home page](https://teleflow.khulnasoft.com?utm_source=github)
- [Contribution Guidelines](https://github.com/khulnasoft/teleflow/blob/main/CONTRIBUTING.md)
- [Run Teleflow Locally](https://docs.teleflow.khulnasoft.com/community/run-in-local-machine)

## 🛡️ License

Teleflow is licensed under the MIT License - see the [LICENSE](https://github.com/khulnasoft/teleflow/blob/main/LICENSE) file for details.

## 💪 Thanks To All Contributors

Thanks a lot for spending your time helping Teleflow grow. Keep rocking 🥂

<a href="https://teleflow.khulnasoft.com/contributors?utm_source=github">
  <img src="https://contributors-img.web.app/image?repo=khulnasoft/teleflow" alt="Contributors"/>
</a>
