import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

import { GetTeleflowLayoutCommand } from './get-teleflow-layout.command';
import { ApiException } from '../../utils/exceptions';

@Injectable()
export class GetTeleflowLayout {
  async execute(command: GetTeleflowLayoutCommand): Promise<string> {
    const template = await this.loadTemplateContent('layout.handlebars');
    if (!template) throw new ApiException('Teleflow default template not found');

    return template;
  }

  private async loadTemplateContent(name: string) {
    const content = await readFile(`${__dirname}/templates/${name}`);

    return content.toString();
  }
}
