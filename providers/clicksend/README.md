# Teleflow Clicksend Provider

A Clicksend sms provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
    import { ClicksendSmsProvider } from '@teleflow/clicksend'

    const provider = new ClicksendSmsProvider({
        username: process.env.CLICKSEND_USERNAME,
        apiKey: process.env.CLICKSEND_API_KEY,
        })
    ```
