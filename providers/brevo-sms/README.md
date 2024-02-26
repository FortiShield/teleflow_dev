# Teleflow BrevoSms Provider

A BrevoSms sms provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { BrevoSmsProvider } from '@teleflow/brevo-sms';

const provider = new BrevoSmsProvider({
  apiKey: process.env.BREVO_API_KEY,
  from: process.env.BREVO_FROM, // Sender displayed to the recipient
});

await provider.sendMessage({
  to: 'My Company',
  content: 'Message to send',
});
```
