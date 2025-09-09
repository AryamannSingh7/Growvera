import { Button, TagsInput } from "@mantine/core";
import { fields } from "../Data/PostJob";
import SelectInput from "./SelectInput";
import TextEditor from "./RichTextEditor";

const ListJob = () => {
  const select = fields;
  return (
    <div className="w-4/5 mx-auto my-4">
      <div className="text-3xl font-semibold my-4">List a Job</div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[0]} />
          <SelectInput {...select[1]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[2]} />
          <SelectInput {...select[3]} />
        </div>
        <div className="flex gap-10 [&>*]:w-1/2">
          <SelectInput {...select[4]} />
          <SelectInput {...select[5]} />
        </div>
        <TagsInput
          label="Enter skills"
          placeholder="Enter skills"
          clearable
          acceptValueOnBlur
          splitChars={[",", " ", "|"]}
          withAsterisk
        />
        <div className="">
          <div className="text-sm font-medium">Job Description</div>
          <TextEditor />
        </div>
        <div className="flex gap-5">
          <Button color="primary.4" variant="light">
            List Job
          </Button>
          <Button color="primary.4" variant="outline">
            Save as Draft
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListJob;
