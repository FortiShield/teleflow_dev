# Teleflow Gupshup Provider

A Gupshup sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { GupshupSmsProvider } from '@teleflow/gupshup';

const provider = new GupshupSmsProvider({
    userId: process.env.GUPSHUP_USER_ID,
    password: process.env.GUPSHUP_PASSWORD
});
```
