import { Teleflow } from '../teleflow';
import axios from 'axios';
import { ChannelTypeEnum, FieldLogicalOperatorEnum } from '@teleflow/shared';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('test use of teleflows node package - Integrations class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  test('should fetch all the integrations correctly', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.getAll();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/integrations');
  });

  test('should create an integration with the given parameters', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.create('emailjs', {
      credentials: {
        apiKey: 'api key',
        secretKey: 'api secret',
      },
      active: true,
      channel: ChannelTypeEnum.EMAIL,
      check: true,
      conditions: [
        {
          isNegated: false,
          type: 'GROUP',
          value: FieldLogicalOperatorEnum.AND,
          children: [],
        },
      ],
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/integrations', {
      providerId: 'emailjs',
      credentials: {
        apiKey: 'api key',
        secretKey: 'api secret',
      },
      active: true,
      channel: ChannelTypeEnum.EMAIL,
      check: true,
      conditions: [
        {
          isNegated: false,
          type: 'GROUP',
          value: FieldLogicalOperatorEnum.AND,
          children: [],
        },
      ],
    });
  });

  test('should fetch all the active integrations correctly', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.getActive();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/integrations/active');
  });

  test('should get the webhook provider status of integration correctly', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.getWebhookProviderStatus('emailjs');

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `integrations/webhook/provider/emailjs/status`
    );
  });

  test('should update the given integration', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.update('INTEGRATION_ID', {
      active: true,
      check: false,
      credentials: {
        apiKey: 'newApiKey',
        secretKey: 'newApiSecret',
      },
      conditions: [
        {
          isNegated: false,
          type: 'GROUP',
          value: FieldLogicalOperatorEnum.AND,
          children: [],
        },
      ],
    });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(mockedAxios.put).toHaveBeenCalledWith(
      '/integrations/INTEGRATION_ID',
      {
        active: true,
        check: false,
        credentials: {
          apiKey: 'newApiKey',
          secretKey: 'newApiSecret',
        },
        conditions: [
          {
            isNegated: false,
            type: 'GROUP',
            value: FieldLogicalOperatorEnum.AND,
            children: [],
          },
        ],
      }
    );
  });

  test('should delete the specified integration', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.delete('INTEGRATION_ID');

    expect(mockedAxios.delete).toHaveBeenCalled();
    expect(mockedAxios.delete).toHaveBeenCalledWith(
      '/integrations/INTEGRATION_ID'
    );
  });

  test('should set the integration as primary', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.setIntegrationAsPrimary('INTEGRATION_ID');

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith(
      '/integrations/INTEGRATION_ID/set-primary',
      {}
    );
  });

  test('should get the in-app status of the integration', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.integrations.getInAppStatus();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/integrations/in-app/status');
  });
});
