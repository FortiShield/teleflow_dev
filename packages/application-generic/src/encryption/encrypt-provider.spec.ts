import {
  decryptCredentials,
  decryptSecret,
  encryptCredentials,
  encryptSecret,
} from './encrypt-provider';
import { ICredentialsDto } from '@teleflow/shared';

describe('Encrypt provider secrets', function () {
  const teleflowSubMask = 'nvsk.';

  it('should encrypt provider secret', async function () {
    const password = '1234';
    const encrypted = encryptSecret(password);

    expect(encrypted).toContain(teleflowSubMask);
    expect(encrypted).not.toEqual(password);
    expect(encrypted.length).toEqual(70);
  });

  it('should decrypt provider secret', async function () {
    const password = '123';
    const encrypted = encryptSecret(password);
    const decrypted = decryptSecret(encrypted);

    expect(decrypted).toEqual(password);
  });
});

describe('Encrypt provider credentials', function () {
  const teleflowSubMask = 'nvsk.';

  it('should encrypt provider credentials', async function () {
    const credentials: ICredentialsDto = {
      apiKey: 'api_123',
      user: 'Jock Wick',
      secretKey: 'secret_coins',
      domain: 'hollywood',
    };

    const encrypted = encryptCredentials(credentials);

    expect(encrypted.apiKey).toContain(teleflowSubMask);
    expect(encrypted.apiKey).not.toEqual(credentials.apiKey);
    expect(encrypted.user).toEqual(credentials.user);
    expect(encrypted.secretKey).toContain(teleflowSubMask);
    expect(encrypted.secretKey).not.toEqual(credentials.secretKey);
    expect(encrypted.domain).toEqual(credentials.domain);
  });

  it('should decrypt provider credentials', async function () {
    const credentials: ICredentialsDto = {
      apiKey: 'api_123',
      user: 'Jock Wick',
      secretKey: 'secret_coins',
      domain: 'hollywood',
    };

    const encrypted = encryptCredentials(credentials);
    const decrypted = decryptCredentials(encrypted);

    expect(decrypted.apiKey).toEqual(credentials.apiKey);
    expect(decrypted.user).toEqual(credentials.user);
    expect(decrypted.secretKey).toEqual(credentials.secretKey);
    expect(decrypted.domain).toEqual(credentials.domain);
  });
});
