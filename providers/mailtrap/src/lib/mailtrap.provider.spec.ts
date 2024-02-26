import { MailtrapEmailProvider } from './mailtrap.provider';
import { MailtrapClient, SendResponse } from 'mailtrap';
import { CheckIntegrationResponseEnum } from '@teleflow/stateless';

const mockConfig = {
  apiKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  from: 'test@test.com',
};

const mockTeleflowMessage = {
  from: 'test@test.com',
  to: ['test@test.com'],
  html: '<div> Mail Content </div>',
  subject: 'Test subject',
  attachments: [
    {
      mime: 'text/plain',
      file: Buffer.from('test'),
      name: 'test.txt',
    },
  ],
};

const mockMailtrapResponse: SendResponse = {
  success: true,
  message_ids: ['0c7fd939-02cf-11ed-88c2-0a58a9feac02'],
};

test('should trigger mailtrap library correctly', async () => {
  const provider = new MailtrapEmailProvider(mockConfig);
  const spy = jest
    .spyOn(provider, 'sendMessage')
    .mockImplementation(async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {} as any;
    });

  await provider.sendMessage(mockTeleflowMessage);

  expect(spy).toBeCalled();
  expect(spy).toBeCalledWith({
    from: mockTeleflowMessage.from,
    to: mockTeleflowMessage.to,
    html: mockTeleflowMessage.html,
    subject: mockTeleflowMessage.subject,
    attachments: mockTeleflowMessage.attachments,
  });
});

test('should check integration successfully', async () => {
  const provider = new MailtrapEmailProvider(mockConfig);
  const spy = jest
    .spyOn(MailtrapClient.prototype, 'send')
    .mockImplementation(async () => mockMailtrapResponse);

  const messageResponse = await provider.checkIntegration(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(messageResponse).toStrictEqual({
    success: true,
    message: 'Integrated successfully!',
    code: CheckIntegrationResponseEnum.SUCCESS,
  });
});
