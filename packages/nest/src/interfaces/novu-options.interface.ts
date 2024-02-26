import { ModuleMetadata, Type } from '@nestjs/common';
import {
  IChatProvider,
  IEmailProvider,
  IPushProvider,
  ISmsProvider,
  ITemplate,
} from '@teleflow/stateless';

export interface ITeleflowOptions {
  /*
   *
   * This interface describes the options you want to pass to
   * TeleflowModule.
   *
   */
  providers: (IEmailProvider | ISmsProvider | IChatProvider | IPushProvider)[];

  templates: ITemplate[];
}

export interface ITeleflowOptionsFactory {
  createTeleflowOptions(): Promise<ITeleflowOptions> | ITeleflowOptions;
}

export interface ITeleflowModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<ITeleflowOptionsFactory>;
  useClass?: Type<ITeleflowOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<ITeleflowOptions> | ITeleflowOptions;
  inject?: any[];
}
