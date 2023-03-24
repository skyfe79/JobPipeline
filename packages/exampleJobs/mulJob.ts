import { Job } from "../jobpipeline";

export class MulJob implements Job<number, number> {
  name = "MulJob";
  async run(input: number): Promise<number> {
    return input * 2;
  }
}
