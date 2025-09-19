import { Button } from "@mantine/core";
import { useState } from "react";
import ExpInput from "./ExpInput";

const ExpCard = (props: any) => {
  const [edit, setEdit] = useState(false);
  return !edit ? (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white-800 rounded-md">
            <img src={`/Icons/${props.company}.png`} alt="" className="h-7" />
          </div>
          <div className="flex flex-col">
            <div className="font-semibold">{props.title}</div>
            <div className="text-xs text-white-300">
              {props.company} &#9679; {props.location}
            </div>
          </div>
        </div>
        <div className="text-sm text-white-300">
          {props.startDate} - {props.endDate}
        </div>
      </div>
      <div className="text-sm text-white-300 text-justify">
        {props.description}
      </div>
      {props.edit && (
        <div className="flex gap-3">
          <Button
            color="primary.4"
            variant="outline"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button color="red.4" variant="light">
            Delete
          </Button>
        </div>
      )}
    </div>
  ) : (
    <ExpInput {...props} setEdit={setEdit} />
  );
};

export default ExpCard;
