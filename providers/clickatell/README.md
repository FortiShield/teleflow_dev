# Teleflow ClickatellSmsProvider Provider

A ClickatellSmsProvider sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { ClickatellSmsProvider } from '@teleflow/clickatell';

// one way sms integration
const provider = new ClickatellSmsProvider({
  apiKey: process.env.CLICKATELL_API_KEY,
});

// two way sms integration
const provider = new ClickatellSmsProvider({
  apiKey: process.env.CLICKATELL_API_KEY,
  isTwoWayIntegration: true
});
```
