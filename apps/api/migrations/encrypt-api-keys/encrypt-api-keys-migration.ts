import { EnvironmentRepository, IApiKey } from '@teleflow/dal';
import { encryptSecret } from '@teleflow/application-generic';
import { EncryptedSecret } from '@teleflow/shared';
import { createHash } from 'crypto';

export async function encryptApiKeysMigration() {
  // eslint-disable-next-line no-console
  console.log('start migration - encrypt api keys');

  const environmentRepository = new EnvironmentRepository();
  const environments = await environmentRepository.find({});

  for (const environment of environments) {
    // eslint-disable-next-line no-console
    console.log(`environment ${environment._id}`);

    if (!environment.apiKeys) {
      // eslint-disable-next-line no-console
      console.log(`environment ${environment._id} - is not contains api keys, skipping..`);
      continue;
    }

    if (
      environment.apiKeys.every((key) => {
        isEncrypted(key.key);
      })
    ) {
      // eslint-disable-next-line no-console
      console.log(`environment ${environment._id} - api keys are already encrypted, skipping..`);
      continue;
    }

    const updatePayload: IEncryptedApiKey[] = encryptApiKeysWithGuard(environment.apiKeys);

    await environmentRepository.update(
      { _id: environment._id },
      {
        $set: { apiKeys: updatePayload },
      }
    );
    // eslint-disable-next-line no-console
    console.log(`environment ${environment._id} - api keys updated`);
  }
  // eslint-disable-next-line no-console
  console.log('end migration');
}

export function encryptApiKeysWithGuard(apiKeys: IApiKey[]): IEncryptedApiKey[] {
  return apiKeys.map((apiKey: IApiKey) => {
    const hashedApiKey = createHash('sha256').update(apiKey.key).digest('hex');

    const encryptedApiKey: IEncryptedApiKey = {
      hash: apiKey?.hash ? apiKey?.hash : hashedApiKey,
      key: isEncrypted(apiKey.key) ? apiKey.key : encryptSecret(apiKey.key),
      _userId: apiKey._userId,
    };

    return encryptedApiKey;
  });
}

function isEncrypted(apiKey: string): apiKey is EncryptedSecret {
  return apiKey.startsWith('nvsk.');
}

export interface IEncryptedApiKey {
  key: EncryptedSecret;
  _userId: string;
  hash: string;
}
