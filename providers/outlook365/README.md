# Teleflow Outlook365 Provider

A Outlook365 email provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { Outlook365Provider } from '@teleflow/outlook365';

const provider = new Outlook365Provider({
  from: process.env.OUTLOOK365_FROM_EMAIL,
  senderName: process.env.OUTLOOK365_SENDER_NAME,
  password: process.env.OUTLOOK365_PASSWORD,
});
```
