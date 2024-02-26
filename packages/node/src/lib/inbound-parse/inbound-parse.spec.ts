import { Teleflow } from '../teleflow';
import axios from 'axios';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('test use of teleflows node package - InboundParse class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  test('should get inbound parse correctly', async () => {
    mockedAxios.get.mockResolvedValue({});

    await teleflow.inboundParse.getMxStatus();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/inbound-parse/mx/status');
  });
});
