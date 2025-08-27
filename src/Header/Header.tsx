import { useState } from "react";
import { Avatar, Indicator } from "@mantine/core";
import {
  IconAffiliateFilled,
  IconBellRinging2,
  IconSettings,
  IconMenu2,
  IconUser,
} from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-dark-950 text-white-100 flex items-center justify-between px-2 sm:px-6 font-semibold flex-wrap relative">
      <div className="flex items-center gap-1 text-2xl">
        <IconAffiliateFilled className="h-10 w-10 text-primary-300 hover:cursor-pointer" />
        <div className="font-bold text-primary-400 hover:cursor-pointer">
          Growvera
        </div>
      </div>
      {/* Desktop Nav Links */}
      <div className="hidden sm:flex">{NavLinks()}</div>
      {/* Mobile Hamburger */}
      <div className="sm:hidden flex items-center">
        <button
          className="p-2"
          onClick={() => setNavOpen((o) => !o)}
          aria-label="Open navigation"
        >
          <IconMenu2 className="h-7 w-7 text-primary-400" />
        </button>
        {/* Nav Dropdown */}
        {navOpen && (
          <div className="absolute top-20 left-0 w-full bg-dark-950 z-50 shadow-lg rounded-b-lg">
            {NavLinks()}
          </div>
        )}
      </div>
      {/* Desktop Profile Section */}
      <div className="hidden sm:flex items-center gap-2 text-lg">
        <div className="flex items-center gap-2">
          <div>Aryamann</div>
          <Avatar
            src="img1.jpg"
            alt="it's me"
            key={"Aryamann Singh"}
            name="Aryamann Singh"
            color="light-100"
          />
        </div>
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
      {/* Mobile Profile Dropdown */}
      <div className="sm:hidden flex items-center relative">
        <button
          className="p-2"
          onClick={() => setProfileOpen((o) => !o)}
          aria-label="Open profile"
        >
          <IconUser className="h-7 w-7 text-primary-400" />
        </button>
        {profileOpen && (
          <div className="absolute top-20 right-2 w-48 bg-dark-950 z-50 shadow-lg rounded-b-lg flex flex-col gap-2 p-4">
            <div className="flex items-center gap-2">
              <Avatar
                src="img1.jpg"
                alt="it's me"
                key={"Aryamann Singh"}
                name="Aryamann Singh"
                color="light-100"
              />
              <span>Aryamann</span>
            </div>
            <button className="flex items-center gap-2 text-white-400 hover:text-primary-400">
              <IconSettings stroke={1.5} />
              Settings
            </button>
            <button className="flex items-center gap-2 text-white-400 hover:text-primary-400">
              <Indicator
                color="primary.5"
                size={7}
                offset={4}
                position="middle-end"
                processing
              >
                <IconBellRinging2 stroke={1.5} />
              </Indicator>
              Notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
