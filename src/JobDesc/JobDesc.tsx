import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { card, desc, skills } from "../Data/JobDescData";
//@ts-ignore
import DOMPurify from "dompurify";

const JobDesc = (props: any) => {
  const data = DOMPurify.sanitize(desc);
  return (
    <div className="w-full md:w-2/3">
      <div className="flex gap-2 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white-800 rounded-xl">
            <img src={`/Icons/Google.png`} alt="" className="h-20" />
          </div>
          <div>
            <div className="font-semibold text-3xl">Software Engineer</div>
            <div className="text-md text-white-300">
              Google &#9679; 3 Days Ago &#9679; 90 Applicants
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Link to="/apply-job">
            <Button
              className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
              color="primary.4"
            >
              {props.edit ? "Edit" : "Apply Now!"}
            </Button>
          </Link>
          {props.edit ? (
            <Button
              className="!text-red-400 !mt-2 hover:!bg-red-400 transition duration-300 ease-in-out"
              color="red.5"
              variant="outline"
            >
              Delete
            </Button>
          ) : (
            <IconBookmark className="text-primary-400 cursor-pointer" />
          )}
        </div>
      </div>
      <Divider my="xl" />
      <div className="flex gap-3 justify-evenly">
        {card.map((action, index) => (
          <div key={index} className="flex flex-col items-center">
            <ActionIcon
              className="!h-12 !w-12"
              variant="light"
              radius="xl"
              aria-label="Settings"
              color="primary.4"
            >
              <action.icon className="w-4/5 h-4/5" stroke={1.5} />
            </ActionIcon>
            <div className="text-md text-white-300">{action.name}</div>
            <div className="text-lg font-semibold text-white-200">
              {action.value}
            </div>
          </div>
        ))}
      </div>
      <Divider my="xl" />
      <div>
        <div className="text-2xl font-semibold mb-5">Required Skills</div>
        <div className="flex gap-2 flex-wrap">
          {skills.map((skills, index) => (
            <ActionIcon
              className="!h-fit !w-fit font-medium !text-lg"
              variant="light"
              p="xs"
              radius="xl"
              aria-label="Settings"
              color="primary.4"
              key={index}
            >
              {skills}
            </ActionIcon>
          ))}
        </div>
      </div>
      <Divider my="xl" />
      <div
        className="[&_h4]:text-xl [&_h4]:my-5 [&_h4]:text-white-200 [&_h4]:font-semibold [&_p]:text-justify [&_*]:text-white-300 [&_li]:marker:text-primary-400 [&_li]:mb-1"
        dangerouslySetInnerHTML={{ __html: data }}
      ></div>
      <Divider my="xl" />
      <div className="flex flex-col gap-2">
        <div className="text-2xl font-semibold mb-5">About The Company</div>
        <div className="flex gap-2 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white-800 rounded-xl">
              <img src={`/Icons/Google.png`} alt="" className="h-12" />
            </div>
            <div>
              <div className="font-semibold text-xl">Google</div>
              <div className="text-sm text-white-300">20k+ Employees</div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Link to="/company-page">
              <Button
                className="!text-white-900 !mt-2 hover:!bg-primary-300 transition duration-300 ease-in-out"
                color="primary.4"
              >
                Company Page
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-white-300 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa omnis
          praesentium dolorem quisquam quia sequi neque numquam mollitia fugiat
          laboriosam, harum consectetur odit! Molestiae, rem iure atque sed
          nihil dolore officia aut quibusdam quasi voluptate corrupti voluptatem
          debitis, tempore ducimus!
        </div>
      </div>
    </div>
  );
};
export default JobDesc;
