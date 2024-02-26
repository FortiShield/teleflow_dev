# Nodejs SendGrid Provider

A sendgrid email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { SendgridEmailProvider } from '@teleflow/sendgrid';

const provider = new SendgridEmailProvider({
  apiKey: process.env.SENDGRID_API_KEY
});
```
