# Teleflow Ses Provider

A SES email provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { SESEmailProvider } from "@teleflow/ses"

const provider = new SESEmailProvider({
    region: "eu-west-1",
    accessKeyId: "AWS_ACCESS_KEY_ID",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY",
    from: "from@email.com",
});
```
