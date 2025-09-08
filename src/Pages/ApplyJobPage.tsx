import { Button, Divider } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import ApplyJobComp from "../ApplyJob/ApplyJobComp";

const ApplyJobJobPage = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-white-950 font-[Montserrat] p-4">
        <Divider size="xs" mx="md" />
        <Link to="/jobs" className="my-4 ml-4 inline-block">
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
        <ApplyJobComp />
      </div>
    </div>
  );
};

export default ApplyJobJobPage;
