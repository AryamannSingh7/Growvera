import {
  IconHeart,
  IconLocationCheck,
  IconMapPin,
  IconUser,
} from "@tabler/icons-react";
import { Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const TalentCard = (props: any) => {
  return (
    <div className="bg-white-900 p-4 w-96 flex flex-col gap-2 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-primary-400 transition duration-300 ease-in-out hover:cursor-pointer">
      <div className="flex gap-2 items-start justify-between">
        <div className="flex items-center gap-4">
          <div className=" bg-white-800">
            <img src={`/img1.jpg`} alt="" className="h-24 rounded-xl" />
          </div>
          <div>
            <div className="font-semibold text-xl">{props.name}</div>
            <div className="text-sm text-secondary-300 flex flex-col gap-2">
              <div>{props.role}</div>
              <div>
                <img
                  src={`Icons/${props.company}.png`}
                  alt=""
                  className="h-7 w-7"
                />
              </div>
            </div>
          </div>
        </div>
        <IconHeart className="text-white-400 cursor-pointer" />
      </div>
      <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-white-800 [&>div]:text-primary-400 [&>div]:rounded-lg text-xs">
        <div>{props.topSkills[0]}</div>
        <div>{props.topSkills[1]}</div>
        <div>{props.topSkills[2]}</div>
      </div>
      <Text lineClamp={4} size="xs" className="!text-white-300 !text-justify">
        {props.about}
      </Text>
      <Divider size="xs" color="white.7" />
      <div className="flex justify-between">
        <div className=" font-semibold text-primary-400">
          {props.expectedCtc}
        </div>
        <div className="flex items-center gap-1 text-white-500 text-xs">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
        </div>
      </div>
      <div className="flex [&>*]:w-1/2 [&>*]:p-2] pt-2 gap-4 justify-center">
        <Link to="/talent-profile">
          <Button
            rightSection={<IconUser size={14} className="text-primary-400" />}
            color="primary.4"
            variant="outline"
            fullWidth
          >
            View Profile
          </Button>
        </Link>
        <Button
          //   className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
          color="primary.4"
          rightSection={
            <IconLocationCheck size={14} className="text-primary-400" />
          }
          variant="light"
          fullWidth
        >
          Message
        </Button>
      </div>
    </div>
  );
};

export default TalentCard;
