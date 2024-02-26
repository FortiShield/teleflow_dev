# Teleflow Braze Provider

A Braze email provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { BrazeEmailProvider } from '@teleflow/braze';
const provider = new BrazeEmailProvider({
    apiKey: process.env.BRAZE_API_KEY,
    apiURL: process.env.BRAZE_API_URL,
    appID: process.env.BRAZE_API_ID,
})
```
