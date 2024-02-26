# Teleflow Sendchamp Provider

A Sendchamp SMS provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { SendchampSmsProvider } from '@teleflow/sendchamp';

const provider = new SendchampSmsProvider({
  apiKey: process.env.SENDCHAMP_API_KEY,
  from: process.env.SENDCHAMP_FROM
  });
```
