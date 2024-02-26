# Teleflow FCM Provider

A FCM push provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

The payload field supports all [NotificationMessagePayload](https://firebase.google.com/docs/reference/admin/node/firebase-admin.messaging.notificationmessagepayload.md#notificationmessagepayload_interface) values, example below.

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow(process.env.TELEFLOW_API_KEY);

teleflow.trigger('event-name', {
  to: {
    subscriberId: '...',
  },
  payload: {
    deviceTokens: ['abcda...'], // Override subscriberId notification/device identifiers
    badge: 1, // iOS: The value of the badge on the home screen app icon, if 0 then the badge is removed.
    clickAction: 'clickity', // Android: Action associated with a user click on the notification.
    color: '#ff00ff', // Android: Hex color of the notification
    icon: 'myicon', // Android: Drawable resource id of icon, Web: URL to icon
    sound: 'custom_sound', // Android: name of custom notification sound
  },
});
```
