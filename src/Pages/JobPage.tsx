import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";

const JobPage = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-white-950 font-[Montserrat] pb-10 p-4">
        <Divider size="xs" mx="md" />
        <Link to="/find-jobs" className="my-4 ml-4 inline-block">
          <Button
            leftSection={
              <IconArrowLeft size={14} className="text-primary-400" />
            }
            color="primary.4"
            variant="light"
          >
            Back
          </Button>
        </Link>
        <Divider size="xs" mx="md" />
        <div className="flex flex-col md:flex-row gap-5 m-4 justify-evenly">
          <JobDesc />
          <RecommendedJobs />
        </div>
      </div>
    </div>
  );
};

export default JobPage;
