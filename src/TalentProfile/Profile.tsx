import { IconMapPin } from "@tabler/icons-react";

const Profile = () => {
  return (
    <div className="w-full md:w-2/3">
      <div className="relative">
        <img src="Profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="img1.jpg"
          alt="profilepic"
          className="rounded-full w-36 h-36 md:h-42 md:w-42 -bottom-[50%] md:-bottom-1/3 absolute left-3 border border-white-950 border-4 min-[2500px]:h-52 min-[2500px]:w-52 min-[2500px]:-bottom-[22%]"
        />
      </div>
      <div className="px-3 mt-20">
        <div>Aryamann Singh</div>
        <div>Software Engineer &bull; Google</div>
        <div className="flex items-center gap-1 text-white-500 text-xs">
          <IconMapPin stroke={1.5} className="h-5 w-5" /> New Delhi, India
        </div>
      </div>
    </div>
  );
};
export default Profile;
