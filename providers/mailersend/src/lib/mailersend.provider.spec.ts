import { MailersendEmailProvider } from './mailersend.provider';
import MailerSend, { Attachment, Recipient } from 'mailersend';
import { CheckIntegrationResponseEnum } from '@teleflow/stateless';

const mockConfig = {
  apiKey: 'SG.1234',
  senderName: 'Teleflow Team',
};

const mockTeleflowMessage = {
  to: ['test@test1.com', 'test@test2.com'],
  subject: 'test subject',
  html: '<div> Mail Content </div>',
  text: 'Mail Content',
  from: 'test@tet.com',
  attachments: [
    { mime: 'text/plain', file: Buffer.from('dGVzdA=='), name: 'test.txt' },
  ],
  customData: {
    templateId: 'template-id',
    personalization: [{ email: 'test@test1.com', data: { name: 'test1' } }],
  },
};

test('should trigger mailerSend with expected parameters', async () => {
  const provider = new MailersendEmailProvider(mockConfig);
  const spy = jest
    .spyOn(provider, 'sendMessage')
    .mockImplementation(async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {} as any;
    });

  await provider.sendMessage(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith({
    to: mockTeleflowMessage.to,
    subject: mockTeleflowMessage.subject,
    html: mockTeleflowMessage.html,
    text: mockTeleflowMessage.text,
    from: mockTeleflowMessage.from,
    attachments: [
      {
        mime: 'text/plain',
        file: Buffer.from('dGVzdA=='),
        name: 'test.txt',
      },
    ],
    customData: mockTeleflowMessage.customData,
  });
});

test('should trigger mailerSend correctly', async () => {
  const provider = new MailersendEmailProvider(mockConfig);
  const spy = jest
    .spyOn(MailerSend.prototype, 'request')
    .mockImplementation(async () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return {} as any;
    });

  const attachment = new Attachment(
    Buffer.from('ZEdWemRBPT0=').toString(),
    'test.txt'
  );
  const recipient1 = new Recipient('test@test1.com', undefined);
  const recipient2 = new Recipient('test@test2.com', undefined);

  await provider.sendMessage(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(spy).toBeCalledWith('/email', {
    method: 'POST',
    body: {
      from: { email: mockTeleflowMessage.from, name: mockConfig.senderName },
      to: [recipient1, recipient2],
      cc: undefined,
      bcc: undefined,
      reply_to: {
        email: undefined,
        name: undefined,
      },
      sendAt: undefined,
      attachments: [attachment],
      subject: mockTeleflowMessage.subject,
      text: mockTeleflowMessage.text,
      html: mockTeleflowMessage.html,
      template_id: mockTeleflowMessage.customData.templateId,
      variables: undefined,
      personalization: mockTeleflowMessage.customData.personalization,
      tags: undefined,
    },
  });
});

test('should check provider integration when success', async () => {
  const provider = new MailersendEmailProvider(mockConfig);
  const spy = jest
    .spyOn(MailerSend.prototype, 'request')
    .mockImplementation(async () => ({
      ok: true,
      status: 200,
    }));

  const messageResponse = await provider.checkIntegration(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(messageResponse).toStrictEqual({
    success: true,
    message: 'Integrated successfully!',
    code: CheckIntegrationResponseEnum.SUCCESS,
  });
});

test('should check provider integration when bad credentials', async () => {
  const provider = new MailersendEmailProvider(mockConfig);
  const serverMessage = 'Bad credentials';

  const spy = jest
    .spyOn(MailerSend.prototype, 'request')
    .mockImplementation(async () => ({
      ok: false,
      json: async () => ({
        message: serverMessage,
      }),
      status: 401,
    }));

  const messageResponse = await provider.checkIntegration(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(messageResponse).toStrictEqual({
    success: false,
    message: serverMessage,
    code: CheckIntegrationResponseEnum.BAD_CREDENTIALS,
  });
});

test('should check provider integration when failed', async () => {
  const provider = new MailersendEmailProvider(mockConfig);
  const serverMessage = 'Server is under maintenance';

  const spy = jest
    .spyOn(MailerSend.prototype, 'request')
    .mockImplementation(async () => ({
      ok: false,
      json: async () => ({
        message: serverMessage,
      }),
      status: 500,
    }));

  const messageResponse = await provider.checkIntegration(mockTeleflowMessage);

  expect(spy).toHaveBeenCalled();
  expect(messageResponse).toStrictEqual({
    success: false,
    message: serverMessage,
    code: CheckIntegrationResponseEnum.FAILED,
  });
});
