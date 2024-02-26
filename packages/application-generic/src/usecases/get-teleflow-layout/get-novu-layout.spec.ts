import { Test } from '@nestjs/testing';
import { UserSession } from '@teleflow/testing';

import { GetTeleflowLayout } from './get-teleflow-layout.usecase';

describe('Get Teleflow Layout Usecase', function () {
  let useCase: GetTeleflowLayout;
  let session: UserSession;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      providers: [],
    }).compile();

    session = new UserSession();
    await session.initialize();

    useCase = moduleRef.get<GetTeleflowLayout>(GetTeleflowLayout);
  });

  it('should retrieve the teleflow layout', async function () {
    const layout = await useCase.execute({});

    expect(layout).toContain(
      '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">'
    );
  });
});
