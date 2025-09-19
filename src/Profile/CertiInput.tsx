import { Button, TextInput } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { MonthPickerInput } from "@mantine/dates";
import { useState } from "react";

const CertiInput = (props: any) => {
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  const select = fields;
  return (
    <div className="flex flex-col gap-3">
      <div className="text-xl font-semibold">Add Certificate</div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <TextInput
          label="Certification Name"
          withAsterisk
          placeholder="Enter Certificate Name"
        />
        <SelectInput {...select[1]} />
      </div>
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Issue Date"
          placeholder="Enter Issue date"
          value={issueDate ? issueDate.toISOString().slice(0, 7) : null}
          onChange={(value) => setIssueDate(value ? new Date(value) : null)}
          withAsterisk
          maxDate={new Date()}
        />
        <TextInput
          label="Certification ID"
          withAsterisk
          placeholder="Enter Certificate ID"
        />
      </div>
      <div className="flex gap-3">
        <Button
          color="primary.4"
          variant="outline"
          onClick={() => props.setEdit(false)}
        >
          Save
        </Button>
        <Button
          color="red.4"
          variant="light"
          onClick={() => props.setEdit(false)}
        >
          Discard
        </Button>
      </div>
    </div>
  );
};
export default CertiInput;
