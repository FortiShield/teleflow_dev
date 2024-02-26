import { Teleflow } from '../teleflow';
import axios from 'axios';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('Use of Teleflow node package - Feeds class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  test('should get Feeds correctly', async () => {
    mockedAxios.get.mockResolvedValue({});

    await teleflow.feeds.get();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/feeds');
  });

  test('should create feed correctly', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.feeds.create('test-feeds');

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/feeds', {
      name: 'test-feeds',
    });
  });

  test('should delete feed correctly', async () => {
    mockedAxios.delete.mockResolvedValue({});

    await teleflow.feeds.delete('test-feeds');

    expect(mockedAxios.delete).toHaveBeenCalled();
    expect(mockedAxios.delete).toHaveBeenCalledWith(`/feeds/test-feeds`);
  });
});
