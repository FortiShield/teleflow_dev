import { getContextPath, TeleflowComponentEnum, FeatureFlagsKeysEnum } from '@teleflow/shared';

function isBrowser() {
  return typeof window !== 'undefined';
}

declare global {
  interface Window {
    _env_: any;
    _cypress: any;
  }
}

const isCypress = (isBrowser() && (window as any).Cypress) || (isBrowser() && (window as any).parent.Cypress);

export const API_ROOT =
  window._env_.REACT_APP_API_URL || isCypress
    ? window._env_.REACT_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:1336'
    : window._env_.REACT_APP_API_URL || process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const WS_URL = isCypress
  ? window._env_.REACT_APP_WS_URL || process.env.REACT_APP_WS_URL || 'http://localhost:1340'
  : window._env_.REACT_APP_WS_URL || process.env.REACT_APP_WS_URL || 'http://localhost:3002';

export const SENTRY_DSN = window._env_.REACT_APP_SENTRY_DSN || process.env.REACT_APP_SENTRY_DSN;

export const ENV = window._env_.REACT_APP_ENVIRONMENT || process.env.REACT_APP_ENVIRONMENT;

const blueprintApiUrlByEnv = ENV === 'production' || ENV === 'prod' ? 'https://api.teleflow.khulnasoft.com' : 'https://dev.api.teleflow.khulnasoft.com';

export const BLUEPRINTS_API_URL =
  window._env_.REACT_APP_BLUEPRINTS_API_URL || isCypress
    ? window._env_.REACT_APP_BLUEPRINTS_API_URL || process.env.REACT_APP_BLUEPRINTS_API_URL || 'http://localhost:1336'
    : blueprintApiUrlByEnv;

export const APP_ID = window._env_.REACT_APP_TELEFLOW_APP_ID || process.env.REACT_APP_TELEFLOW_APP_ID;

export const WIDGET_EMBED_PATH =
  window._env_.REACT_APP_WIDGET_EMBED_PATH ||
  process.env.REACT_APP_WIDGET_EMBED_PATH ||
  'http://localhost:4701/embed.umd.min.js';

export const IS_DOCKER_HOSTED =
  window._env_.REACT_APP_DOCKER_HOSTED_ENV === 'true' || process.env.REACT_APP_DOCKER_HOSTED_ENV === 'true';

export const REACT_APP_VERSION = process.env.TELEFLOW_VERSION;

export const INTERCOM_APP_ID = window._env_.REACT_APP_INTERCOM_APP_ID || process.env.REACT_APP_INTERCOM_APP_ID;

export const CONTEXT_PATH = getContextPath(TeleflowComponentEnum.WEB);

export const WEBHOOK_URL = isCypress
  ? window._env_.REACT_APP_WEBHOOK_URL || process.env.REACT_APP_WEBHOOK_URL || 'http://localhost:1341'
  : window._env_.REACT_APP_WEBHOOK_URL || process.env.REACT_APP_WEBHOOK_URL || 'http://localhost:3003';

export const MAIL_SERVER_DOMAIN =
  window._env_.REACT_APP_MAIL_SERVER_DOMAIN || process.env.REACT_APP_MAIL_SERVER_DOMAIN || 'dev.inbound-mail.teleflow.khulnasoft.com';

export const LAUNCH_DARKLY_CLIENT_SIDE_ID =
  window._env_.REACT_APP_LAUNCH_DARKLY_CLIENT_SIDE_ID || process.env.REACT_APP_LAUNCH_DARKLY_CLIENT_SIDE_ID;

export const FEATURE_FLAGS = Object.values(FeatureFlagsKeysEnum).reduce((acc, key) => {
  const defaultValue = isCypress ? true : false;
  acc[key] = window._env_[key] || process.env[key] || defaultValue;

  return acc;
}, {} as Record<FeatureFlagsKeysEnum, string | undefined>);
