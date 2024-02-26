import { IS_DOCKER_HOSTED } from '../config';

export const TranslationRoutes = () => {
  if (IS_DOCKER_HOSTED) {
    return null;
  }

  try {
    const module = require('@teleflow/ee-translation-web');
    const Routes = module.Routes;

    return <Routes />;
  } catch (e) {}

  return null;
};
