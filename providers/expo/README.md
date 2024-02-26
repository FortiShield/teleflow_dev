# Teleflow Expo Provider

A Expo push provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

The payload field supports all [Message Request](https://docs.expo.dev/push-notifications/sending-notifications/#message-request-format) values, example below.

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow(process.env.TELEFLOW_API_KEY);

teleflow.trigger('event-name', {
  to: {
    subscriberId: '...',
  },
  payload: {
    badge: 1, 
    sound: 'default',
    priority: 'high',
  },
});
```
