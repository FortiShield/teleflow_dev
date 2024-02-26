# Teleflow Sns Provider

A SNS SMS provider library for [@teleflow/stateless](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { SNSSmsProvider } from "@teleflow/sns"

const provider = new SNSSmsProvider({
    region: "eu-west-1",
    accessKeyId: "AWS_ACCESS_KEY_ID",
    secretAccessKey: "AWS_SECRET_ACCESS_KEY",
});
```
