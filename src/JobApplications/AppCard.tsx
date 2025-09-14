import {
  IconBookmark,
  IconBookmarkFilled,
  IconCalendarFilled,
  IconClock,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const AppCard = (props: any) => {
  return (
    <Link
      to="/jobs"
      className="bg-white-900 p-4 w-96 flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-primary-400 transition duration-300 ease-in-out hover:cursor-pointer"
    >
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
        {props.saved ? (
          <IconBookmarkFilled className="text-primary-400 cursor-pointer" />
        ) : (
          <IconBookmark className="text-white-400 cursor-pointer" />
        )}
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
          <IconClock stroke={1.5} className="h-5 w-5" />
          {props.applied
            ? "Applied"
            : props.offered
            ? "Offered"
            : "Posted"}{" "}
          {props.postedDaysAgo} days ago
        </div>
      </div>
      {!props.offered && (
        <Button
          className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
          color="primary.4"
        >
          {props.interviewing ? "Acknowledge" : "View Job"}
        </Button>
      )}
      {props.interviewing && <Divider size="xs" color="white.7" />}

      {props.offered && (
        <div className="flex gap-2">
          <Button
            //   className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
            color="primary.4"
            variant="outline"
            fullWidth
          >
            Accept
          </Button>
          <Button
            //   className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
            color="red.4"
            variant="light"
            fullWidth
          >
            Reject
          </Button>
        </div>
      )}
      {props.interviewing && (
        <div className="flex gap-1 text-white-200 text-sm items-center">
          <IconCalendarFilled stroke={1.5} className="text-primary-400" />
          Sunday, 28 September &bull;
          <span className="text-white-400">09:00 AM</span>
        </div>
      )}
    </Link>
  );
};

export default AppCard;
