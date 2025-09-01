import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";

const TalentProfilePage = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-white-950 font-[Montserrat]">
        <Divider size="xs" mx="md" />
        <Link to="/find-talent" className="my-4 ml-4 inline-block">
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
        <div className="flex gap-5">
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default TalentProfilePage;
