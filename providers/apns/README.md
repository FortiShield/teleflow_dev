# Teleflow Apns Provider

A Apns push provider library for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

```javascript
import { APNSPushProvider } from '@teleflow/apns';

const provider = new APNSPushProvider({
    key: "path/to/APNsAuthKey_XXXXXXXXXX.p8",
    keyId: "key-id",
    teamId: "developer-team-id"
});
```
