import * as sinon from 'sinon';
import { testServer } from '@teleflow/testing';

import mailin from '../src/main';

before(async () => {
  await testServer.create(mailin);
});

after(async () => {
  await testServer.teardown();
});

afterEach(() => {
  sinon.restore();
});
