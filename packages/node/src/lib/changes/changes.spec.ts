import { Teleflow } from '../teleflow';
import axios from 'axios';

const mockConfig = {
  apiKey: '1234',
};

jest.mock('axios');

describe('test use of teleflows node package - Changes class', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;
  let teleflow: Teleflow;

  beforeEach(() => {
    mockedAxios.create.mockReturnThis();
    teleflow = new Teleflow(mockConfig.apiKey);
  });

  test('should get changes correctly', async () => {
    const page = 1;
    const limit = 20;
    const promoted = false;

    mockedAxios.post.mockResolvedValue({});

    await teleflow.changes.get({ page, limit, promoted });

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/changes', {
      params: {
        limit: 20,
        page: 1,
        promoted: false,
      },
    });
  });

  test('should get count of changes correctly', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.changes.getCount();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(mockedAxios.get).toHaveBeenCalledWith('/changes/count');
  });

  test('should apply one change', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.changes.applyOne('change1');

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/changes/change1/apply', {});
  });

  test('should apply one change', async () => {
    mockedAxios.post.mockResolvedValue({});

    await teleflow.changes.applyMany(['changeID', 'change2ID']);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(mockedAxios.post).toHaveBeenCalledWith('/changes/bulk/apply', {
      changeIds: ['changeID', 'change2ID'],
    });
  });
});
