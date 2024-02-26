# NestJS Module Wrapper

A NestJS module wrapper for [@teleflow/node](https://github.com/khulnasoft/teleflow)

## Usage

Initializing module with templates and providers:
```javascript
    import { TeleflowModule } from "@teleflow/nest";

    @Module({
      imports: [
        TeleflowModule.forRoot({
          providers: [
            new SendgridEmailProvider({
              apiKey: process.env.SENDGRID_API_KEY,
              from: 'sender@mail.com',
            }),
          ],
          templates: [
            {
              id: 'password-reset',
              messages: [
                {
                  subject: 'Your password reset request',
                  channel: ChannelTypeEnum.EMAIL,
                  template: `
                          Hi {{firstName}}!

                          To reset your password click <a href="{{resetLink}}">here.</a>
                          `,
                },
              ],
            },
          ],
        }),
      ],
    })
```

Using teleflow's singleton service in other services and modules:

```javascript
import { Injectable, Inject } from '@nestjs/common';
import { TeleflowService } from '@teleflow/nest';

@Injectable()
export class UserService {
  constructor(private readonly teleflow: TeleflowService) {}

  async triggerEvent() {
    await this.teleflow.trigger('password-reset', {
      $email: 'receiver@mail.com',
      $user_id: 'id'
    });
  }
}
```
