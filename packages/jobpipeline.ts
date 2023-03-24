export interface Job<TInput = any, TResult = any> {
  name: string;
  run(input: TInput): Promise<TResult>;
}

export class Pipeline {
  private jobs: Job[];

  constructor() {
    this.jobs = [];
  }

  addJob(job: Job): void {
    this.jobs.push(job);
  }

  async run(input: any = null, continueOnError: boolean = false): Promise<any> {
    let currentInput = input;
    for (const job of this.jobs) {
      try {
        currentInput = await job.run(currentInput);
      } catch (error) {
        if (!continueOnError) {
          break;
        }
      }
    }
    return currentInput;
  }
}
