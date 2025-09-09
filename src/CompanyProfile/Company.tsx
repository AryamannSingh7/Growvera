import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComponent from "./AboutComponent";
import CompanyJobs from "./CompanyJobs";
import CompanyPeople from "./CompanyPeople";
// import { useState } from "react";

const Company = () => {
  //   const [activeTab, setActiveTab] = useState<string | null>("first");
  return (
    <div className="md:w-3/4">
      <div className="relative">
        <img src="Profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="Icons/Google.png"
          alt="profilepic"
          className="rounded-3xl w-24 h-24 md:h-42 md:w-42 -bottom-[75%] md:-bottom-1/4 absolute left-5 border border-white-950 border-4 min-[2500px]:h-52 min-[2500px]:w-52 min-[2500px]:-bottom-[22%] bg-white-950 p-3"
        />
      </div>
      <div className="px-3 mt-16 md:mt-24 flex flex-col gap-1 md:gap-2">
        <div className="text-3xl md:text-5xl font-semibold flex justify-between">
          Google
          <Avatar.Group>
            <Avatar src="img1.jpg" className="md:!h-14 md:!w-14" />
            <Avatar src="img1.jpg" className="md:!h-14 md:!w-14" />
            <Avatar src="img1.jpg" className="md:!h-14 md:!w-14" />
            <Avatar className="md:!h-14 md:!w-14">+15k</Avatar>
          </Avatar.Group>
        </div>
        <div className="flex items-center gap-1 text-white-500 text-lg md:text-xl">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> Location
        </div>
      </div>
      <Divider my="xl" mx="xs" />
      <div className="p-3">
        <Tabs radius="lg" variant="outline" defaultValue="about">
          <Tabs.List className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:text-primary-400 mb-5">
            <Tabs.Tab value="about">About</Tabs.Tab>
            <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
            <Tabs.Tab value="people">People</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="about">
            <AboutComponent />
          </Tabs.Panel>
          <Tabs.Panel value="jobs">
            <CompanyJobs />
          </Tabs.Panel>
          <Tabs.Panel value="people">
            <CompanyPeople />
          </Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default Company;
