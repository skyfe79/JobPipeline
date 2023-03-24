# JobPipeline

A simple job pipeline package for processing tasks in sequence.

## Installation

```bash
npm install jobpipeline
```

## Usage

First, import the necessary classes:

```ts
import { Pipeline } from "jobpipeline";
import { AddJob } from "jobpipeline/exampleJobs/AddJob";
import { MulJob } from "jobpipeline/exampleJobs/MulJob";
```

Next, create a new Pipeline instance and add jobs to it:

```ts
const pipeline = new Pipeline();
const addJob = new AddJob();
const mulJob = new MulJob();

pipeline.addJob(addJob);
pipeline.addJob(mulJob);
```

Finally, run the pipeline:

```ts
const input = 5;
pipeline
  .run(input)
  .then((result) => console.log(`Result: ${result}`))
  .catch((error) => console.error(`Error: ${error.message}`));
```

This will run the AddJob and MulJob in sequence, adding 1 to the input and then multiplying the result by 2.

## Creating Custom Jobs

To create a custom job, implement the Job interface:

```ts
import { Job } from "your-package-name";

class CustomJob implements Job<InputType, OutputType> {
  name = "CustomJob";

  async run(input: InputType): Promise<OutputType> {
    // Your custom processing logic here
  }
}
```

Replace InputType and OutputType with the appropriate types for your job.

## License

This package is licensed under the MIT License.
