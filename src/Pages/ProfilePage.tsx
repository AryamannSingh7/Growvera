import { Divider } from "@mantine/core";
import Profile from "../Profile/Profile";
import { profile } from "../Data/TalentData";

const ProfilePage = () => {
  return (
    <div className="min-h-[90vh] bg-white-950 font-[Montserrat]">
      <Divider mx="md" mb="lg" />
      <Profile {...profile} />
    </div>
  );
};

export default ProfilePage;
