# Nodejs Mailgun Provider

A mailgun email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow).

## Usage

```javascript
import { MailgunEmailProvider } from '@teleflow/mailgun';

const provider = new MailgunEmailProvider({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
  username: process.env.MAILGUN_USERNAME,
});
```
