import { Badge, Tabs } from "@mantine/core";
import JobDesc from "../JobDesc/JobDesc";
import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const PostedApplicantsDesc = () => {
  return (
    <div className="my-4 px-5 w-3/4">
      <div className="text-3xl font-semibold flex items-center gap-2 text-white-200">
        Software Engineer{" "}
        <Badge variant="light" color="primary.4">
          Active
        </Badge>
      </div>
      <div className="text-lg text-white-300 font-medium mb-5">
        New York, United States
      </div>
      <div>
        <Tabs radius="lg" variant="outline" defaultValue="overview">
          <Tabs.List className="[&_button]:!text-xl font-semibold [&_button[data-active='true']]:text-primary-400 mb-5">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="applicants">Applicants</Tabs.Tab>
            <Tabs.Tab value="invited">Invited</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview" className="[&>div]:w-full">
            <JobDesc edit />
          </Tabs.Panel>
          <Tabs.Panel value="applicants">
            <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-evenly gap-10">
              {talents.map(
                (talent, index) =>
                  index < 8 && <TalentCard key={index} {...talent} Listed />
              )}
            </div>
          </Tabs.Panel>
          <Tabs.Panel value="invited">c</Tabs.Panel>
        </Tabs>
      </div>
    </div>
  );
};

export default PostedApplicantsDesc;
