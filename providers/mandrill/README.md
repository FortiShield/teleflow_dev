# Nodejs Mandrill Provider

A mandrill email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { MandrillProvider } from '@teleflow/mandrill';

const provider = new MandrillProvider({
  apiKey: process.env.API_KEY,
  from: process.env.EMAIL,
  senderName: process.env.SENDER_NAME
});
```
