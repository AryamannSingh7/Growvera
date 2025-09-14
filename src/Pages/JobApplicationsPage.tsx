import { Divider } from "@mantine/core";
import JobApplications from "../JobApplications/JobApplications";

const JobApplicationsPage = () => {
  return (
    <div className="min-h-[90vh] bg-white-950 font-[Montserrat]">
      <Divider size="xs" mx="md" />
      <div className="flex gap-3 p-3">
        <JobApplications />
      </div>
    </div>
  );
};
export default JobApplicationsPage;
