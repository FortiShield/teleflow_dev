# Teleflow Africa's Talking Provider

An Africa's Talking SMS provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { AfricasTalkingSmsProvider } from '@teleflow/africas-talking';

 const provider = new AfricasTalkingSmsProvider({
    apiKey: process.env.AFRICAS_TALKING_API_KEY,
    username: process.env.AFRICAS_TALKING_USERNAME,
    from: process.env.AFRICAS_TALKING_FROM
  });
```
