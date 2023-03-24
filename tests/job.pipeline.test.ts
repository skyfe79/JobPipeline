import { Pipeline } from "../packages/jobpipeline";
import { AddJob } from "../packages/exampleJobs/addJob";
import { MulJob } from "../packages/exampleJobs/mulJob";

describe("AddJob and MulJob", () => {
  it("should correctly add 1 and multiply by 2", async () => {
    const addJob = new AddJob();
    const mulJob = new MulJob();

    const pipeline = new Pipeline();
    pipeline.addJob(addJob);
    pipeline.addJob(mulJob);

    const input = 2;
    const result = await pipeline.run(input);

    expect(result).toBe((input + 1) * 2);
  });

  it("should correctly add 1 and multiply by 2 for a different input", async () => {
    const addJob = new AddJob();
    const mulJob = new MulJob();

    const pipeline = new Pipeline();
    pipeline.addJob(addJob);
    pipeline.addJob(mulJob);

    const input = 5;
    const result = await pipeline.run(input);

    expect(result).toBe((input + 1) * 2);
  });
});
