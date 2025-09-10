import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobsCard from "./PostedJobsCard";

const PostedJobs = () => {
  return (
    <div className="w-1/6">
      <div className="text-3xl font-semibold my-4 text-white-200">
        Listed Jobs
      </div>
      <div className="">
        <Tabs variant="pills" radius="md" defaultValue="active" autoContrast>
          <Tabs.List className="[&_button[aria-selected='false']]:bg-white-900 font-medium [&_button]:text-lg !h-12">
            <Tabs.Tab value="active">Active Jobs [4]</Tabs.Tab>
            <Tabs.Tab value="draft">Drafts [2]</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="active">
            <div className="flex flex-col gap-3 mt-5">
              {activeJobs.map((item, index) => (
                <PostedJobsCard key={index} {...item} />
              ))}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="draft">Second panel</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};
export default PostedJobs;
