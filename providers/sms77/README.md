# Teleflow sms77 Provider

A sms77 sms provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { Sms77SmsProvider } from '@teleflow/sms77';

const provider = new Sms77SmsProvider({
    apiKey: process.env.SMS77_API_KEY,
    from: process.env.SMS77_FROM, // optional
});
```
