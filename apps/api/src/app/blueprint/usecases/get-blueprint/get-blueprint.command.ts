import { IsDefined, IsMongoId } from 'class-validator';
import { BaseCommand } from '@teleflow/application-generic';

export class GetBlueprintCommand extends BaseCommand {
  @IsDefined()
  @IsMongoId()
  templateId: string;
}
