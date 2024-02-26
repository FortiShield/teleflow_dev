import { LayoutRepository } from '@teleflow/dal';
import { Injectable } from '@nestjs/common';
import { GetTeleflowLayout } from '@teleflow/application-generic';

import { CreateDefaultLayoutCommand } from './create-default-layout.command';
import { SetDefaultLayoutUseCase } from '../set-default-layout';
import { LayoutDto } from '../../dtos';
import { CreateLayoutCommand, CreateLayoutUseCase } from '../create-layout';

@Injectable()
export class CreateDefaultLayout {
  constructor(
    private setDefaultLayout: SetDefaultLayoutUseCase,
    private layoutRepository: LayoutRepository,
    private createLayout: CreateLayoutUseCase,
    private getTeleflowLayout: GetTeleflowLayout
  ) {}

  async execute(command: CreateDefaultLayoutCommand): Promise<LayoutDto> {
    return await this.createLayout.execute(
      CreateLayoutCommand.create({
        userId: command.userId,
        name: 'Default Layout',
        isDefault: true,
        identifier: 'teleflow-default-layout',
        content: await this.getTeleflowLayout.execute({}),
        environmentId: command.environmentId,
        organizationId: command.organizationId,
        description: 'The default layout created by Teleflow',
      })
    );
  }
}
