import { Indicator } from "@mantine/core";
import {
  IconAffiliateFilled,
  IconBellRinging2,
  IconSettings,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();

  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="w-full h-20 bg-dark-950 text-white-100 flex items-center justify-between px-2 sm:px-6 font-semibold relative">
      {/* Logo */}
      <div className="flex items-center gap-1 text-2xl">
        <IconAffiliateFilled className="h-10 w-10 text-primary-300 hover:cursor-pointer" />
        <div className="font-bold text-primary-400 hover:cursor-pointer">
          Growvera
        </div>
      </div>

      {/* Nav Links (always visible) */}
      <div className="flex">{<NavLinks />}</div>

      {/* Profile Section (always visible) */}
      <div className="flex items-center gap-2 text-lg ">
        <ProfileMenu />
        <div className="bg-dark-900 text-white-400 rounded-full p-1.5 hover:bg-dark-800 hover:text-dark-950 transition-colors hover:cursor-pointer">
          <IconSettings stroke={1.5} />
        </div>
        <div className="bg-dark-900 text-white-400 rounded-full p-1.5 hover:bg-dark-800 hover:text-dark-950 transition-colors hover:cursor-pointer">
          <Indicator
            color="primary.5"
            size={7}
            offset={4}
            position="middle-end"
            processing
          >
            <IconBellRinging2 stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
