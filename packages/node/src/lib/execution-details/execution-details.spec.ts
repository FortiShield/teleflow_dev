import { Teleflow } from '../teleflow';
import axios from 'axios';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('test use of teleflows node package - ExecutionDetails class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  test('should get execution details correctly', async () => {
    const notificationId = '12345678';
    const subscriberId = '987654321';
    mockedAxios.get.mockResolvedValue({});

    await teleflow.executionDetails.get({ notificationId, subscriberId });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/execution-details', {
      params: { notificationId: '12345678', subscriberId: '987654321' },
    });
  });
});
