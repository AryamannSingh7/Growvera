import { ActionIcon } from "@mantine/core";
import { IconBookmark, IconExternalLink } from "@tabler/icons-react";

const CompanyCard = (props: any) => {
  return (
    <div className="flex gap-2 items-center justify-between bg-white-900 rounded-2xl p-3 border border-primary-400">
      <div className="flex items-center gap-4">
        <div className="p-2 bg-white-800 rounded-lg">
          <img src={`/Icons/${props.name}.png`} alt="" className="h-14" />
        </div>
        <div>
          <div className="font-semibold text-xl">{props.name}</div>
          <div className="text-xs text-white-300">
            {props.employees} Employees
          </div>
        </div>
      </div>
      <ActionIcon variant="subtle">
        <IconExternalLink className="!text-primary-400" />
      </ActionIcon>
    </div>
  );
};
export default CompanyCard;
