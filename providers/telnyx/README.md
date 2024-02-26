# Teleflow Telnyx Provider

A Telnyx sms provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { TelnyxSmsProvider } from '@teleflow/telnyx';

const provider = new TelnyxSmsProvider({
  apiKey: process.env.TELNYX_API_KEY,
  messageProfileId: process.env.TELNYX_MESSAGE_PROFILE_ID,
  from: process.env.FROM, // an alphanumeric sender Id 
});
```

