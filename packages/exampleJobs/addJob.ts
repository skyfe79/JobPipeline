import { Job } from "../jobpipeline";

export class AddJob implements Job<number, number> {
  name = "AddJob";
  async run(input: number): Promise<number> {
    return input + 1;
  }
}
