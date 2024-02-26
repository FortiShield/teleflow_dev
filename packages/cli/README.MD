<div align="center">
  
  ![Logo Dark](https://user-images.githubusercontent.com/8872447/165779319-34962ccc-3149-466c-b1da-97fd93254520.png#gh-dark-mode-only)

</div>

<div align="center">
  
  ![Logo Light](https://user-images.githubusercontent.com/8872447/165779274-22a190da-3284-487e-bd1e-14983df12cbb.png#gh-light-mode-only)
  
</div>

<h1 align="center">Notification management simplified.</h1>

<div align="center">
The ultimate service for managing multi-channel notifications with a single API. 
</div>

  <p align="center">
    <br />
    <a href="https://docs.teleflow.co" rel="dofollow"><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml&title=%F0%9F%90%9B+Bug+Report%3A+">Report Bug</a>
    ·
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=feature&template=feature_request.yml&title=%F0%9F%9A%80+Feature%3A+">Request Feature</a>
    ·
  <a href="https://discord.teleflow.co">Join Our Discord</a>
    ·
    <a href="https://roadmap.teleflow.co/">Roadmap</a>
    ·
    <a href="https://twitter.com/khulnasoft">X</a>
  </p>
  
## ⭐️ Why
Building a notification system is hard, at first it seems like just sending an email but in reality it's just the beginning. In today's world users expect multichannel communication experience over email, sms, push, chat and more... An ever-growing list of providers are popping up each day, and notifications are spread around the code. Teleflow's goal is to simplify notifications and provide developers the tools to create meaningful communication between the system and its users.

## ✨ Features

- 🌈 Single API for all messaging providers (Email, SMS, Push, Chat)
- 💅 Easily manage notification over multiple channels
- 🚀 Equipped with a CMS for advanced layouts and design management
- 🛡 Built-in protection for missing variables (Coming Soon)
- 📦 Easy to set up and integrate
- 🛡 Debug and analyze multichannel messages in a single dashboard
- 📦 Embeddable notification center with real-time updates
- 👨‍💻 Community driven

## 🚀 Getting Started

We are excited to launch the complete Teleflow API and admin panel. Want to give it a test before the official release? here is how:

```
npx teleflow init
```

After setting up your account using the cloud or docker version you can trigger the API using the `@teleflow/node` package.

```bash
npm install @teleflow/node
```

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow(process.env.TELEFLOW_API_KEY);

await teleflow.trigger('<TRIGGER_NAME>', {
  to: {
    subscriberId: '<UNIQUE_IDENTIFIER>',
    email: 'john@doemail.com',
    firstName: 'John',
    lastName: 'Doe',
  },
  payload: {
    name: 'Hello World',
    organization: {
      logo: 'https://happycorp.com/logo.png',
    }
  },
});
```

## Embeddable notification center

Using the Teleflow API and admin panel you can easily add real-time notification center to your web-app without the hassle of building it yourself. You can use our React component or an iframe embed if you are not using React.

<div align="center">
<img width="762" alt="notification-center-912bb96e009fb3a69bafec23bcde00b0" src="https://github.com/iampearceman/Design-assets/blob/main/Untitled%20design%20(8).gif?raw=true">
  
  Read more about how to add a notification center to your app with the Teleflow API [here](https://docs.teleflow.co/notification-center/introduction)

</div>

## Providers

Teleflow provides a single API to manage providers across multiple channels with a simple-to-use interface.

#### 💌 Email

- [x] [Sendgrid](https://github.com/khulnasoft/teleflow/tree/main/providers/sendgrid)
- [x] [Netcore](https://github.com/khulnasoft/teleflow/tree/main/providers/netcore)
- [x] [Mailgun](https://github.com/khulnasoft/teleflow/tree/main/providers/mailgun)
- [x] [SES](https://github.com/khulnasoft/teleflow/tree/main/providers/ses)
- [x] [Postmark](https://github.com/khulnasoft/teleflow/tree/main/providers/postmark)
- [x] [NodeMailer](https://github.com/khulnasoft/teleflow/tree/main/providers/nodemailer)
- [x] [Mailjet](https://github.com/khulnasoft/teleflow/tree/main/providers/mailjet)
- [x] [Mandrill](https://github.com/khulnasoft/teleflow/tree/main/providers/mandrill)
- [x] [SendinBlue](https://github.com/khulnasoft/teleflow/tree/main/providers/sendinblue)
- [x] [EmailJS](https://github.com/khulnasoft/teleflow/tree/main/providers/emailjs)
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

- [x] [Teleflow](https://docs.teleflow.co/notification-center/introduction)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty

## 💻 Need Help?

We are more than happy to help you. Don't worry if you are getting some errors or problems while working with the project. Or just want to discuss something related to the project.

Just <a href="https://discord.teleflow.co">Join Our Discord</a> server and ask for help.

## 🔗 Links

- [Home page](https://teleflow.co/)
