# Nodejs Plivo Provider

A plivo sms provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow).

## Usage

```javascript
import { PlivoSmsProvider } from '@teleflow/plivo';

const provider = new PlivoSmsProvider({
  accountSid: process.env.PLIVO_ACCOUNT_ID,
  authToken: process.env.PLIVO_AUTH_TOKEN,
  from: process.env.PLIVO_FROM_NUMBER, // a valid plivo phone number
});
```
