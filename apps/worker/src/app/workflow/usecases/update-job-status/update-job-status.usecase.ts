import { Injectable } from '@nestjs/common';
import { JobRepository } from '@teleflow/dal';
import { InstrumentUsecase } from '@teleflow/application-generic';

import { UpdateJobStatusCommand } from './update-job-status.command';

@Injectable()
export class UpdateJobStatus {
  constructor(private jobRepository: JobRepository) {}

  @InstrumentUsecase()
  public async execute(command: UpdateJobStatusCommand): Promise<void> {
    await this.jobRepository.updateStatus(command.environmentId, command.jobId, command.status);
  }
}
