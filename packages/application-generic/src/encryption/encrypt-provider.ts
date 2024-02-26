import {
  EncryptedSecret,
  ICredentialsDto,
  TELEFLOW_ENCRYPTION_SUB_MASK,
  secureCredentials,
} from '@teleflow/shared';

import { decrypt, encrypt } from './cipher';

export function encryptSecret(text: string): EncryptedSecret {
  const encrypted = encrypt(text);

  return `${TELEFLOW_ENCRYPTION_SUB_MASK}${encrypted}`;
}

export function decryptSecret(text: string | EncryptedSecret): string {
  let encryptedSecret = text;

  if (isTeleflowEncrypted(text)) {
    encryptedSecret = text.slice(TELEFLOW_ENCRYPTION_SUB_MASK.length);
  }

  return decrypt(encryptedSecret);
}

export function encryptCredentials(
  credentials: ICredentialsDto
): ICredentialsDto {
  const encryptedCredentials: ICredentialsDto = {};

  for (const key in credentials) {
    encryptedCredentials[key] = isCredentialEncryptionRequired(key)
      ? encryptSecret(credentials[key])
      : credentials[key];
  }

  return encryptedCredentials;
}

export function decryptCredentials(
  credentials: ICredentialsDto
): ICredentialsDto {
  const decryptedCredentials: ICredentialsDto = {};

  for (const key in credentials) {
    decryptedCredentials[key] =
      typeof credentials[key] === 'string' && isTeleflowEncrypted(credentials[key])
        ? decryptSecret(credentials[key])
        : credentials[key];
  }

  return decryptedCredentials;
}

export function encryptApiKey(apiKey: string): EncryptedSecret {
  if (isTeleflowEncrypted(apiKey)) {
    return apiKey;
  }

  return encryptSecret(apiKey);
}

export function decryptApiKey(apiKey: string): string {
  if (isTeleflowEncrypted(apiKey)) {
    return decryptSecret(apiKey);
  }

  return apiKey;
}

function isTeleflowEncrypted(text: string): text is EncryptedSecret {
  return text.startsWith(TELEFLOW_ENCRYPTION_SUB_MASK);
}

function isCredentialEncryptionRequired(key: string): boolean {
  return secureCredentials.some((secureCred) => secureCred === key);
}
