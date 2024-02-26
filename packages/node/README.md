<div align="center">
  <a href="https://teleflow.co" target="_blank">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/2233092/213641039-220ac15f-f367-4d13-9eaf-56e79433b8c1.png">
    <img src="https://user-images.githubusercontent.com/2233092/213641043-3bbb3f21-3c53-4e67-afe5-755aeb222159.png" width="280" alt="Logo"/>
  </picture>
  </a>
</div>

<h1 align="center">The open-source notification infrastructure for developers</h1>

<div align="center">
The ultimate service for managing multi-channel notifications with a single API.
</div>

  <p align="center">
    <br />
    <a href="https://docs.teleflow.co" rel="dofollow"><strong>Explore the docs »</strong></a>
    <br />

  <br/>
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=type%3A+bug&template=bug_report.yml&title=%F0%9F%90%9B+Bug+Report%3A+">Report Bug</a>
    ·
    <a href="https://github.com/khulnasoft/teleflow/issues/new?assignees=&labels=feature&template=feature_request.yml&title=%F0%9F%9A%80+Feature%3A+">Request Feature</a>
    ·
  <a href="https://discord.teleflow.co">Join Our Discord</a>
    ·
    <a href="https://github.com/orgs/khulnasoft/projects/10">Roadmap</a>
    ·
    <a href="https://twitter.com/khulnasoft">X</a>
    ·
    <a href="https://notifications.directory">Notifications Directory</a>.
    <a href="https://teleflow.co/blog">Read our blog</a>
  </p>

## ⭐️ Why

Building a notification system is hard, at first it seems like just sending an email but in reality, it's just the beginning. In today's world users expect multi-channel communication experience over email, sms, push, chat, and more... An ever-growing list of providers is popping up each day, and notifications are spread around the code. Teleflow's goal is to simplify notifications and provide developers the tools to create meaningful communication between the system and its users.

## ✨ Features

- 🌈 Single API for all messaging providers (Email, SMS, Push, Chat)
- 💅 Easily manage notifications over multiple channels
- 🚀 Equipped with a templating engine for advanced layouts and designs
- 🛡 Built-in protection for missing variables
- 📦 Easy to set up and integrate
- 🛡 Written in TypeScript with predictable static types.
- 👨‍💻 Community driven

## 📦 Install

```bash
npm install @teleflow/node
```

```bash
yarn add @teleflow/node
```

## 🔨 Usage

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow(process.env.TELEFLOW_API_KEY);

await teleflow.trigger('<REPLACE_WITH_EVENT_NAME_FROM_ADMIN_PANEL>', {
  to: {
    subscriberId: '<USER_IDENTIFIER>',
    email: 'test@email.com',
    firstName: 'John',
    lastName: 'Doe',
  },
  payload: {
    organization: {
      logo: 'https://evilcorp.com/logo.png',
    },
  },
});
```

## Providers

Teleflow provides a single API to manage providers across multiple channels with a simple-to-use interface.

#### 💌 Email

- [x] [Sendgrid](https://github.com/khulnasoft/teleflow/tree/main/providers/sendgrid)
- [x] [Netcore](https://github.com/khulnasoft/teleflow/tree/main/providers/netcore)
- [x] [Mailgun](https://github.com/khulnasoft/teleflow/tree/main/providers/mailgun)
- [x] [SES](https://github.com/khulnasoft/teleflow/tree/main/providers/ses)
- [x] [Postmark](https://github.com/khulnasoft/teleflow/tree/main/providers/postmark)
- [x] [Custom SMTP](https://github.com/khulnasoft/teleflow/tree/main/providers/nodemailer)
- [x] [Mailjet](https://github.com/khulnasoft/teleflow/tree/main/providers/mailjet)
- [x] [Mandrill](https://github.com/khulnasoft/teleflow/tree/main/providers/mandrill)
- [x] [SendinBlue](https://github.com/khulnasoft/teleflow/tree/main/providers/sendinblue)
- [x] [EmailJS](https://github.com/khulnasoft/teleflow/tree/main/providers/emailjs)
- [ ] SparkPost

#### 📞 SMS

- [x] [Twilio](https://github.com/khulnasoft/teleflow/tree/main/providers/twilio)
- [x] [Plivo](https://github.com/khulnasoft/teleflow/tree/main/providers/plivo)
- [x] [SNS](https://github.com/khulnasoft/teleflow/tree/main/providers/sns)
- [x] [Nexmo - Vonage](https://github.com/khulnasoft/teleflow/tree/main/providers/nexmo)
- [x] [Sms77](https://github.com/khulnasoft/teleflow/tree/main/providers/sms77)
- [x] [Telnyx](https://github.com/khulnasoft/teleflow/tree/main/providers/telnyx)
- [x] [Termii](https://github.com/khulnasoft/teleflow/tree/main/providers/termii)
- [x] [Gupshup](https://github.com/khulnasoft/teleflow/tree/main/providers/gupshup)
- [ ] Bandwidth
- [ ] RingCentral

#### 📱 Push

- [x] [FCM](https://github.com/khulnasoft/teleflow/tree/main/providers/fcm)
- [x] [Expo](https://github.com/khulnasoft/teleflow/tree/main/providers/expo)
- [ ] [SNS](https://github.com/khulnasoft/teleflow/tree/main/providers/sns)
- [ ] Pushwoosh

#### 👇 Chat

- [x] [Slack](https://github.com/khulnasoft/teleflow/tree/main/providers/slack)
- [x] [Discord](https://github.com/khulnasoft/teleflow/tree/main/providers/discord)
- [ ] MS Teams
- [ ] Mattermost

#### 📱 In-App

- [x] [Teleflow](https://docs.teleflow.co/notification-center/introduction)
- [ ] MagicBell

#### Other (Coming Soon...)

- [ ] PagerDuty

## 🔗 Links

- [Home page](https://teleflow.co/)

## SDK Methods

- [Subscribers](#subscribers)
- [Events](#events)
- [Workflows](#workflows)
- [Notification Groups](#notification-groups)
- [Topics](#topics)
- [Feeds](#feeds)
- [Tenants](#tenants)
- [Messages](#messages)
- [Changes](#changes)
- [Environments](#environments)
- [Layouts](#layouts)
- [Integrations](#integrations)
- [Organizations](#organizations)
- [Inbound Parse](#inbound-parse)
- [Execution Details](#execution-details)
- [Workflow Overrides](#workflow-overrides)

### Subscribers

- #### List all subscribers

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const page = 0;
const limit = 20;

await teleflow.subscribers.list(page, limit);
```

- #### Identify (create) a new subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.identify('subscriberId', {
  firstName: 'Pawan',
  lastName: 'Jain',
  email: 'pawan.jain@domain.com',
  phone: '+1234567890',
  avatar:
    'https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x',
  locale: 'en-US',
  data: {
    isDeveloper: true,
    customKey: 'customValue',
  },
});
```

- #### Bulk create subscribers

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.identify([
  {
    subscriberId: "1",
    firstName: "Pawan",
    lastName: "Jain",
    email: "pawan.jain@domain.com",
    phone: "+1234567890",
    avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
    locale: "en-US",
    data: {
      isDeveloper : true,
      customKey: "customValue"
    };
  },
  {
    subscriberId: "2",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@domain.com",
    phone: "+1234567891",
    avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
    locale: "en-UK",
    data: {
      isDeveloper : false,
      customKey1: "customValue1"
    };
  }
  // more subscribers ...
])
```

- #### Get a single subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.get('subscriberId');
```

- #### Update a subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.update("subscriberId",{
  firstName: "Pawan",
  lastName: "Jain",
  email: "pawan.jain@domain.com",
  phone: "+1234567890",
  avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
  locale: "en-US",
  data: {
    isDeveloper : true,
    customKey: "customValue",
    customKey2: "customValue2"
  };
})
```

- #### Update provider credentials

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// update fcm token
await teleflow.subscribers.setCredentials('subscriberId', 'fcm', {
  deviceTokens: ['token1', 'token2'],
});

// update slack webhookurl
await teleflow.subscribers.setCredentials('subscriberId', 'slack', {
  webhookUrl: ['webhookUrl'],
});

// update slack weebhook for a subscriberId with selected integration
await teleflow.subscribers.setCredentials(
  'subscriberId',
  'slack',
  {
    webhookUrl: ['webhookUrl'],
  },
  'slack_identifier'
);
```

- #### Delete provider credentials

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// delete fcm token
await teleflow.subscribers.deleteCredentials('subscriberId', 'fcm');

// delete slack webhookurl
await teleflow.subscribers.deleteCredentials('subscriberId', 'slack');
```

- #### Delete a subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.delete('subscriberId');
```

- #### Update online status

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// mark subscriber as offline
await teleflow.subscribers.updateOnlineStatus('subscriberId', false);
```

- #### Get subscriber preference for all workflows

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.getPreference('subscriberId');
```

- #### Get subscriber global preference

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.subscribers.getGlobalPreference('subscriberId');
```

- #### Get subscriber preference by level

```ts
import { Teleflow, PreferenceLevelEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');
// Get global level preference
await teleflow.subscribers.getPreferenceByLevel(
  'subscriberId',
  PreferenceLevelEnum.GLOBAL
);

// Get template level preference
await teleflow.subscribers.getPreferenceByLevel(
  'subscriberId',
  PreferenceLevelEnum.TEMPLATE
);
```

- #### Update subscriber preference for a workflow

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// enable in-app channel
await teleflow.subscribers.updatePreference('subscriberId', 'workflowId', {
  channel: {
    type: 'in_app',
    enabled: true,
  },
});

// disable email channel
await teleflow.subscribers.updatePreference('subscriberId', 'workflowId', {
  channel: {
    type: 'email',
    enabled: false,
  },
});
```

- #### Update subscriber preference globally

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// enable in-app channel and disable email channel
await teleflow.subscribers.updateGlobalPreference('subscriberId', {
  enabled: true,
  preferences: [
    {
      type: 'in_app',
      enabled: true,
    },
    {
      type: 'email',
      enabled: false,
    },
  ],
});
```

- #### Get in-app messages (notifications) feed for a subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const params = {
  page: 0,
  limit: 20,
  // copy this value from in-app editor
  feedIdentifier: "feedId",
  seen: true,
  read: false,
  payload: {
    "customkey": "customValue"
  };
}

await teleflow.subscribers.getNotificationsFeed("subscriberId", params);
```

- #### Get seen/unseen in-app messages (notifications) count

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// get seen count
await teleflow.subscribers.getUnseenCount('subscriberId', true);

// get unseen count
await teleflow.subscribers.getUnseenCount('subscriberId', false);
```

- #### Mark an in-app message (notification) as seen/unseen/read/unread

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// mark unseen
await teleflow.subscribers.markMessageAs('subscriberId', 'messageId', {
  seen: false,
});

// mark seen and unread
await teleflow.subscribers.markMessageAs('subscriberId', 'messageId', {
  seen: true,
  read: false,
});
```

- #### Mark all in-app messages (notifications) as seen/unseen/read/unread

```ts
import { Teleflow, MarkMessagesAsEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// mark all messages as seen
await teleflow.subscribers.markAllMessagesAs(
  'subscriberId',
  MarkMessageAsEnum.SEEN,
  'feedId'
);

// mark all messages as read
await teleflow.subscribers.markAllMessagesAs(
  'subscriberId',
  MarkMessageAsEnum.READ,
  'feedId'
);
```

- #### Mark in-app message (notification) action as seen

```ts
import { Teleflow, ButtonTypeEnum, MessageActionStatusEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// mark a message's primary action button as pending
await teleflow.subscribers.markMessageActionSeen(
  'subscriberId',
  'messageId',
  ButtonTypeEnum.PRIMARY,
  {
    status: MessageActionStatusEnum.PENDING,
  }
);

// mark a message's secondary action button as done
await teleflow.subscribers.markMessageActionSeen(
  'subscriberId',
  'messageId',
  ButtonTypeEnum.SECONDARY,
  {
    status: MessageActionStatusEnum.DONE,
  }
);
```

### Events

- #### Trigger workflow to one subscriber

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// trigger to existing subscribers
await teleflow.events.trigger("workflowIdentifier", {
  to: "subscriberId",
  payload: {
    customKey: "customValue",
    customKey1: {
      nestedkey1: "nestedValue1"
    }
  },
  overrides: {
    email: {
      from: "support@teleflow.co",
      // customData will work only for sendgrid
      customData: {
        "customKey": "customValue"
      }
    }
  },
  // actorId is subscriberId of actor
  actor: "actorId",
  tenant: "tenantIdentifier"
});

// create new subscriber inline with trigger
await teleflow.events.trigger("workflowIdentifier", {
  to: {
    subscriberId: "1",
    firstName: "Pawan",
    lastName: "Jain",
    email: "pawan.jain@domain.com",
    phone: "+1234567890",
    avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
    locale: "en-US",
    data: {
      isDeveloper : true,
      customKey: "customValue"
    };
  },
  payload: {},
  overrides:{} ,
  actor: "actorId",
  tenant: "tenantIdentifier"
});
```

- #### Trigger workflow to multiple subscribers

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.events.trigger("workflowIdentifier", {
  to: [ "subscriberId1" , "subscriberId2" ],
  payload: {},
  overrides:{} ,
  actor: "actorId",
  tenant: "tenantIdentifier"
});


// create new subscribers inline with trigger
await teleflow.events.trigger("workflowIdentifier", {
  to: [
    {
      subscriberId: "1",
      firstName: "Pawan",
      lastName: "Jain",
      email: "pawan.jain@domain.com",
      phone: "+1234567890",
      avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
      locale: "en-US",
      data: {
        isDeveloper : true,
        customKey: "customValue"
      };
    },
    {
      subscriberId: "2",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@domain.com",
      phone: "+1234567891",
      avatar: "https://gravatar.com/avatar/553b157d82ac2880237566d5a644e5fe?s=400&d=robohash&r=x",
      locale: "en-UK",
      data: {
        isDeveloper : false,
        customKey1: "customValue1"
      };
    }
  ],
  payload: {},
  overrides:{} ,
  actor: "actorId",
  tenant: "tenantIdentifier"
});
```

- #### Trigger to a topic

```ts
import { Teleflow, TriggerRecipientsTypeEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.events.trigger('workflowIdentifier', {
  to: {
    type: TriggerRecipientsTypeEnum.TOPIC,
    topicKey: TopicKey,
  },
});
```

- #### Bulk trigger multiple workflows to multiple subscribers

There is a limit of 100 items in the array of bulkTrigger.

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.events.bulkTrigger([
  {
    name: 'workflowIdentifier_1',
    to: 'subscriberId_1',
    payload: {
      customKey: 'customValue',
      customKey1: {
        nestedkey1: 'nestedValue1',
      },
    },
    overrides: {
      email: {
        from: 'support@teleflow.co',
      },
    },
    // actorId is subscriberId of actor
    actor: 'actorId',
    tenant: 'tenantIdentifier',
  },
  {
    name: 'workflowIdentifier_2',
    to: 'subscriberId_2',
    payload: {
      customKey: 'customValue',
      customKey1: {
        nestedkey1: 'nestedValue1',
      },
    },
    overrides: {
      email: {
        from: 'support@teleflow.co',
      },
    },
    // actorId is subscriberId of actor
    actor: 'actorId',
    tenant: 'tenantIdentifier',
  },
]);
```

- #### Broadcast to all subscribers

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.events.broadcast('workflowIdentifier', {
  payload: {
    customKey: 'customValue',
    customKey1: {
      nestedkey1: 'nestedValue1',
    },
  },
  overrides: {
    email: {
      from: 'support@teleflow.co',
    },
  },
  tenant: 'tenantIdentifier',
});
```

- #### Cancel the triggered workflow

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.events.cancel('transactionId');
```

### Messages

- #### List all messages

```ts
import { Teleflow, ChannelTypeEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const params = {
  page: 0, // optional
  limit: 20, // optional
  subscriberId: 'subscriberId', //optional
  channel: ChannelTypeEnum.EMAIL, //optional
  transactionIds: ['txnId1', 'txnId2'], //optional
};

await teleflow.messages.list(params);
```

- #### Delete a message by `messageId`

```ts
import { Teleflow, ChannelTypeEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.messages.deleteById('messageId');
```

### Layouts

- #### Create a layout

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const payload = {
  content: "<h1>Layout Start</h1>{{{body}}}<h1>Layout End</h1>",
  description: "Organization's first layout",
  name: "First Layout",
  identifier: "firstlayout",
  variables: [
    {
      type: "String",
      name: "body",
      required: true,
      defValue: ""
    }
  ]
  isDefault: "false"
}
await teleflow.layouts.create(payload);
```

- #### Update a layout

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const payloadToUpdate = {
  content: "<h1>Layout Start</h1>{{{body}}}<h1>Layout End</h1>",
  description: "Organization's first layout",
  name: "First Layout",
  identifier: "firstlayout",
  variables: [
    {
      type: "String",
      name: "body",
      required: true,
      defValue: ""
    }
  ]
  isDefault: false
}
await teleflow.layouts.update("layoutId", payloadToUpdate);
```

- #### Set a layout as the default layout

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.layouts.setDefault('layoutId');
```

- #### Get a layout by `layoutId`

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.layouts.get('layoutId');
```

- #### Delete a layout by `layoutId`

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.layouts.delete('layoutId');
```

- #### List all layouts

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const params = {
  page: 0, // optional
  pageSize: 20, // optional
  sortBy: '_id',
  orderBy: -1, //optional
};

await teleflow.layouts.list(params);
```

### Notification Groups

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// create a new notification group
await teleflow.notificationGroups.create('Product Updates');

// update an existing notification group
await teleflow.notificationGroups.update('notificationGroupId', {
  name: 'Changelog Updates',
});

// list all notification groups
await teleflow.notificationGroups.get();

// get one existing notification group
await teleflow.notificationGroups.getOne('notificationGroupId');

// delete an existing notification group
await teleflow.notificationGroups.delete('notificationGroupId');
```

### Topics

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const payloadToCreate = {
  key: 'first-topic',
  name: 'First Topic',
};

// create new topic
await teleflow.topics.create(payloadToCreate);

// add subscribers
await teleflow.topics.addSubscribers('topicKey', {
  subscribers: ['subscriberId1', 'subscriberId2'],
});

// check if subscriber is present in topic
await teleflow.topics.checkSubscriber('topicKey', 'subscriberId');

// remove subscribers from topic
await teleflow.topics.removeSubscribers('topicKey', {
  subscribers: ['subscriberId1', 'subscriberId2'],
});

const topicsListParams = {
  page: 0, //optional
  pageSize: 20,
  key: 'topicKey',
};

// list all topics
await teleflow.topics.list(topicsListParams);

// get a topic
await teleflow.topics.get('topicKey');

// delete a topic
await teleflow.topics.delete('topicKey');

// get a topic
await teleflow.topics.rename('topicKey', 'New Topic Name');
```

### Integrations

```ts
import { Teleflow, ChannelTypeEnum, ProvidersIdEnum } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const updatePayload = {
  name: "SendGrid",
  identifier: "sendgrid-identifier",
  credentials: {
    apiKey: "SUPER_SECRET_API_KEY",
    from: "sales@teleflow.co",
    senderName: "Teleflow Sales Team"
    // ... other credentials as per provider
  },
  active: true,
  check: false
}

const createPayload: {
  ...updatePayload,
  channel: ChannelTypeEnum.EMAIL,
}

// create a new integration
await teleflow.integrations.create(ProvidersIdEnum.SendGrid, createPayload)

// update integration
await teleflow.integrations.update("integrationId", updatePayload)

// get all integrations
await teleflow.integrations.getAll()

// get only active integrations
await teleflow.integrations.getActive()

// get webhook provider status
await teleflow.integrations.getWebhookProviderStatus(ProvidersIdEnum.SendGrid)

// delete existing integration
await teleflow.integrations.delete("integrationId")

// get teleflow in-app status
await teleflow.integrations.getInAppStatus()

// set an integration as primary
await teleflow.integrations.setIntegrationAsPrimary("integrationId")
```

### Feeds

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// create new in-app feed
await teleflow.feeds.create('Product Updates');

/**
 * get all in-app feeds
 * feeds methods returns only feed information
 * use subscriber.notificationsFeed() for in-app messages
 */
await teleflow.feeds.get();

// delete a feed
await teleflow.feeds.delete('feedId');
```

### Changes

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const changesParams = {
  page: 1, //optional
  limit: 20, // optional
  promoted: false, // required
};

// get all changes
await teleflow.changes.get(changesParams);

// get changes count
await teleflow.changes.getCount();

// apply only one change
await teleflow.changes.applyOne('changeId');

// apply many changes
await teleflow.changes.applyMany(['changeId1', 'changeId2']);
```

### Environments

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// get current environment
await teleflow.environments.getCurrent();

// create new environment
await teleflow.environments.create({
  name: 'Stagging',
  parentId: 'parentEnvironmentId',
});

// get all environmemts
await teleflow.environments.getAll();

// update one environment
await teleflow.environments.updateOne('environmentId', {
  name: 'Stagging', // optional
  parentId: 'parentEnvironmentId', // optional
  identifier: 'environmentIdentifier', // optional
});

// get api keys of environment
await teleflow.environments.getApiKeys();

// regenrate api keys
await teleflow.environments.regenerateApiKeys();
```

### Tenants

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// create new tenat
await teleflow.tenants.create('tenantIdentifier', {
  name: 'First Tenant',
  // optional
  data: {
    country: 'US',
    tokens: ['token1', 'token2'],
    isDeveloperTenant: true,
    numberOfMembers: 2,
    isSales: undefined,
  },
});

// update existing tenant
await teleflow.tenants.update('tenantIdentifier', {
  identifier: 'tenantIdentifier1',
  name: 'Second Tenant',
  // optional
  data: {
    country: 'India',
    tokens: ['token1', 'token2'],
    isDeveloperTenant: true,
    numberOfMembers: 2,
    isSales: undefined,
  },
});

// list all tenants
await teleflow.tenants.list({
  page: 0, // optional
  limit: 20, // optional
});

// delete a tenant
await teleflow.tenants.delete('tenantIdentifier');

// get one tenant
await teleflow.tenants.get('tenantIdentifier');
```

### Workflows

- #### Create a new workflow

```ts
import {
  Teleflow,
  TemplateVariableTypeEnum,
  FilterPartTypeEnum,
  StepTypeEnum,
} from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// List all workflow groups
const { data: workflowGroupsData } = await teleflow.notificationGroups.get();

// Create a new workflow
await teleflow.notificationTemplates.create({
  name: 'Onboarding Workflow',
  // taking first workflow group id
  notificationGroupId: workflowGroupsData.data[0]._id,
  steps: [
    // Adding one chat step
    {
      active: true,
      shouldStopOnFail: false,
      // UUID is optional.
      uuid: '78ab8c72-46de-49e4-8464-257085960f9e',
      name: 'Chat',
      filters: [
        {
          value: 'AND',
          children: [
            {
              field: '{{chatContent}}',
              value: 'flag',
              operator: 'NOT_IN',
              // 'payload'
              on: FilterPartTypeEnum.PAYLOAD,
            },
          ],
        },
      ],
      template: {
        // 'chat'
        type: StepTypeEnum.CHAT,
        active: true,
        subject: '',
        variables: [
          {
            name: 'chatContent',
            // 'String'
            type: TemplateVariableTypeEnum.STRING,
            required: true,
          },
        ],
        content: '{{chatContent}}',
        contentType: 'editor',
      },
    },
  ],
  description: 'Onboarding workflow to trigger after user sign up',
  active: true,
  draft: false,
  critical: false,
});
```

- #### Other Methods

```ts
import {
  Teleflow,
  TemplateVariableTypeEnum,
  FilterPartTypeEnum,
  StepTypeEnum,
} from '@teleflow/node';

// update a workflow

await teleflow.notificationTemplates.update('workflowId', {
  name: 'Send daily digest email update',
  description: 'This workflow will send daily digest email to user at 9:00 AM',
  /**
   * all other fields from create workflow payload
   */
});

// get one workflow
await teleflow.notificationTemplates.getOne('workflowId');

// delete one workflow
await teleflow.notificationTemplates.delete('workflowId');

// update status of one workflow
await teleflow.notificationTemplates.updateStatus('workflowId', false);

// list all workflows
await teleflow.notificationTemplates.getAll({
  page: 0, // optional
  limit: 20, // optional
});
```

### Organizations

- #### List all organizations

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.list();
```

- #### Create new organization

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.create({ name: 'New Organization' });
```

- #### Rename organization

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.rename({ name: 'Renamed Organization' });
```

- #### Get current organization details

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.getCurrent();
```

- #### Remove member from organization

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.removeMember('memberId');
```

- #### Update organization member role

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.updateMemberRole('memberId', {
  role: 'admin';
});
```

- #### Get all members of organization

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.getMembers();
```

- #### Update organization branding details

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.organizations.updateBranding({
  logo: 'https://s3.us-east-1.amazonaws.com/bucket/image.jpeg',
  color: '#000000',
  fontFamily: 'Lato',
});
```

### Inbound Parse

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

// Validate the mx record setup for the inbound parse functionality
await teleflow.inboundParse.getMxStatus();
```

### Execution Details

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

const executionDetailsParams = {
  subscriberId: 'subscriberId_123',
  notificationId: 'notificationid_abcd',
};

// get execution details
await teleflow.executionDetails.get(executionDetailsParams);
```

### Workflow Overrides

- #### Create new workflow override

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.create({
  workflowId: 'workflow_id_123',
  tenantId: 'tenant_id_abc',
  active: false,
  preferenceSettings: {
    email: false,
    sms: false,
    in_app: false,
    chat: true,
    push: false,
  },
});
```

- #### List all workflow overrides

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.list(3, 10);
```

- #### Get workflow override by id

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.getOneById('overrideId_123');
```

- #### Get workflow override by tenant and workflow ids

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.getOneByTenantIdandWorkflowId(
  'workflowId_123',
  'tenantId_123'
);
```

- #### Update workflow override by tenant and workflow ids

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.updateOneByTenantIdandWorkflowId(
  'workflowId_123',
  'tenantId_123',
  {
    active: false,
  }
);
```

- #### Update workflow override by id

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.updateOneById('OVERRIDE_ID', {
  active: false,
});
```

- #### Delete workflow override

```ts
import { Teleflow } from '@teleflow/node';

const teleflow = new Teleflow('<TELEFLOW_API_KEY>');

await teleflow.workflowOverrides.delete('overrideId_123');
```
