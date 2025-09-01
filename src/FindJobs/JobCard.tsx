import {
  IconBookmark,
  IconClock,
  IconLocationCheck,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";

const JobCard = (props: any) => {
  return (
    <div className="bg-white-900 p-4 w-96 flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-primary-400 transition duration-300 ease-in-out hover:cursor-pointer">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white-800 rounded-md">
            <img src={`/Icons/${props.company}.png`} alt="" className="h-7" />
          </div>
          <div>
            <div className="font-semibold">{props.jobTitle}</div>
            <div className="text-xs text-white-300">
              {props.company} &#9679; {props.applicants} Applicants
            </div>
          </div>
        </div>
        <IconBookmark className="text-white-400 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-white-800 [&>div]:text-primary-400 [&>div]:rounded-lg text-xs">
        <div>{props.experience}</div>
        <div>{props.jobType}</div>
        <div>{props.location}</div>
      </div>
      <Text lineClamp={4} size="xs" className="!text-white-300 ">
        {props.description}
      </Text>
      <Divider size="xs" color="white.7" />
      <div className="flex justify-between">
        <div className=" font-semibold text-primary-400">
          &#8377; {props.package}
        </div>
        <div className="flex items-center gap-1 text-white-500 text-xs">
          <IconClock stroke={1.5} className="h-5 w-5" /> {props.postedDaysAgo}{" "}
          days ago
        </div>
      </div>

      <Button
        rightSection={
          <IconLocationCheck size={14} className="text-white-900" />
        }
        className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
        color="primary.4"
      >
        Apply Now!
      </Button>
    </div>
  );
};

export default JobCard;
