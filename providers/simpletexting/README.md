# Teleflow Simpletexting Provider

A Simpletexting sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { SimpletextingSmsProvider } from '@teleflow/simpletexting';

const provider = new SimpletextingSmsProvider({
  apiKey: process.env.SIMPLETEXTING_API_KEY,
  from: process.env.SENDER_PHONE
  });
```
