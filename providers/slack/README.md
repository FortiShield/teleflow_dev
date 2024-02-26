# Teleflow Slack Provider

A Slack chat provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

````javascript
import { SlackProvider } from '@teleflow/slack';

const provider = new SlackProvider({
  applicationId: process.env.APPLICATION_ID,
  clientID: process.env.CLIENT_ID,
  secretKey: process.env.SECRET_KEY,
});
````
