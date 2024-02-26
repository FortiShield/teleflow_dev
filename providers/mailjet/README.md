# Teleflow Mailjet Provider

A Mailjet email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
    import { MailjetEmailProvider } from "@teleflow/mailjet";
    const provider = new MailjetEmailProvider({
      apiKey: process.env.MAILJET_APIKEY,
      apiSecret: process.env.MAILJET_API_SECRET,
      from: process.env.MAILJET_FROM_EMAIL,
    });
```
