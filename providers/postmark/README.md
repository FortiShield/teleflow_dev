# Nodejs Postmark Provider

A postmark email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { PostmarkEmailProvider } from '@teleflow/postmark';

const provider = new PostmarkEmailProvider({
  apiKey: process.env.POSTMARK_API_KEY
});
```
