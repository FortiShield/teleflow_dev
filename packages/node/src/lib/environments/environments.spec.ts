import { Teleflow } from '../teleflow';
import axios from 'axios';
import { ChannelTypeEnum } from '@teleflow/shared';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('test use of teleflows node package - Environments class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  const methods = ['get', 'post', 'put', 'delete', 'patch'];

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  afterEach(() => {
    methods.forEach((method) => {
      mockedAxios[method].mockClear();
    });
  });

  test('should get correct current environment', async () => {
    mockedAxios.get.mockResolvedValue({});
    await teleflow.environments.getCurrent();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(`/environments/me`);
  });

  test('should get all environments correctly', async () => {
    mockedAxios.get.mockResolvedValue({});
    await teleflow.environments.getAll();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith(`/environments`);
  });

  test('should create environment correctly', async () => {
    mockedAxios.post.mockResolvedValue({});
    await teleflow.environments.create({
      name: 'test env',
    });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/environments', {
      name: 'test env',
    });
  });

  test('should update one environment correctly', async () => {
    mockedAxios.put.mockResolvedValue({});
    await teleflow.environments.updateOne('randomId', {
      name: 'test env',
      identifier: 'teleflow',
    });

    expect(mockedAxios.put).toHaveBeenCalled();
    expect(mockedAxios.put).toHaveBeenCalledWith(`/environments/randomId`, {
      name: 'test env',
      identifier: 'teleflow',
    });
  });

  test('should get api keys', async () => {
    mockedAxios.get.mockResolvedValue({});
    await teleflow.environments.getApiKeys();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/environments/api-keys');
  });

  test('should regenerate api keys', async () => {
    mockedAxios.post.mockResolvedValue({});
    await teleflow.environments.regenerateApiKeys();

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith(
      '/environments/api-keys/regenerate'
    );
  });
});
