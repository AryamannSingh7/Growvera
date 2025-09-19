import { Button, Checkbox, Textarea } from "@mantine/core";
import fields from "../Data/Profile";
import SelectInput from "./SelectInput";
import { useState } from "react";
import { MonthPickerInput } from "@mantine/dates";

const ExpInput = (props: any) => {
  const select = fields;
  const [desc, setDesc] = useState(props.description);
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      {!props.add ? (
        <div className="text-xl font-semibold">Edit Experience</div>
      ) : (
        <div className="text-xl font-semibold">Add Experience</div>
      )}
      <div className="flex gap-10 [&>*]:w-1/2">
        <SelectInput {...select[0]} />
        <SelectInput {...select[1]} />
      </div>
      <SelectInput {...select[2]} />
      <Textarea
        label="Job Summary"
        value={desc}
        onChange={(event) => setDesc(event.currentTarget.value)}
        autosize
        minRows={3}
        placeholder="Enter your job experience"
        withAsterisk
      />
      <div className="flex gap-10 [&>*]:w-1/2">
        <MonthPickerInput
          label="Start Date"
          placeholder="Pick Start date"
          value={startDate ? startDate.toISOString().slice(0, 7) : null}
          onChange={(value) => setStartDate(value ? new Date(value) : null)}
          withAsterisk
          maxDate={endDate || undefined}
        />
        <MonthPickerInput
          label="End Date"
          placeholder="Pick End date"
          value={endDate ? endDate.toISOString().slice(0, 7) : null}
          onChange={(value) => setEndDate(value ? new Date(value) : null)}
          withAsterisk
          maxDate={new Date()}
          minDate={startDate || undefined}
          disabled={checked}
        />
      </div>
      <Checkbox
        label="I currently work here"
        autoContrast
        onChange={(event) => setChecked(event.currentTarget.checked)}
      />
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
export default ExpInput;
