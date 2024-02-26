# Teleflow Resend Provider

A Resend email provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { ResendEmailProvider } from '@teleflow/resend';

const provider = new ResendEmailProvider({
  apiKey: process.env.RESEND_API_KEY
});
```
