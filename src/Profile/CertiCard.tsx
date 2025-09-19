import { ActionIcon } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

const CertiCard = (props: any) => {
  return (
    <div className="flex gap-2 items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white-800 rounded-md">
          <img
            src={`/Icons/${props.issuer}.png`}
            alt="companylogo"
            className="h-7"
          />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold">{props.name}</div>
          <div className="text-xs text-white-300">{props.issuer}</div>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="flex flex-col gap-1 items-end">
          <div className="text-sm text-white-300">{props.issueDate}</div>
          <div className="text-sm text-white-300">{props.certificateId}</div>
        </div>
        {props.edit && (
          <ActionIcon color="red.8" variant="subtle">
            <IconTrash className="h-20 w-20" />
          </ActionIcon>
        )}
      </div>
    </div>
  );
};
export default CertiCard;
