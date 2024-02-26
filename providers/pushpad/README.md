# Teleflow Pushpad Provider

A Pushpad push provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { PushpadPushProvider } from '@teleflow/pushpad';

const provider = new PushpadPushProvider({
  apiKey: process.env.PUSHPAD_AUTH_TOKEN,
  appId: process.env.PUSHPAD_PROJECT_ID
});
```
