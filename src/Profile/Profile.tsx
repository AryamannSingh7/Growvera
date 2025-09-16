import { ActionIcon, Divider } from "@mantine/core";
import {
  IconBriefcase,
  IconDeviceFloppy,
  IconEdit,
  IconMapPin,
} from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useState } from "react";
import SelectInput from "./SelectInput";
import fields from "../Data/Profile";

const Profile = (props: any) => {
  const select = fields;
  const [edit, setEdit] = useState([false, false, false, false, false]);
  const handleEdit = (index: any) => {
    const newEdit = [...edit];
    newEdit[index] = !newEdit[index];
    setEdit(newEdit);
  };
  return (
    <div className="w-full md:w-4/5 mx-auto">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="banner" className="rounded-t-2xl" />
        <img
          src="/img1.jpg"
          alt="profilepic"
          className="rounded-full w-36 h-36 md:h-42 md:w-42 -bottom-[75%] md:-bottom-1/3 absolute left-3 border border-white-950 border-4 min-[2500px]:h-52 min-[2500px]:w-52 min-[2500px]:-bottom-[22%]"
        />
      </div>
      <div className="px-3 mt-24 flex flex-col gap-1">
        <div className="text-3xl font-semibold flex justify-between">
          {props.name}{" "}
          <ActionIcon
            variant="subtle"
            color="yellow.4"
            size="lg"
            onClick={() => handleEdit(0)}
          >
            {edit[0] ? (
              <IconDeviceFloppy className="h-20 w-20" stroke={1.5} />
            ) : (
              <IconEdit className="h-20 w-20" stroke={1.5} />
            )}
          </ActionIcon>
        </div>
        {edit[0] ? (
          <>
            <div className="flex gap-10 [&>*]:w-1/2">
              <SelectInput {...select[0]} />
              <SelectInput {...select[1]} />
            </div>
            <SelectInput {...select[2]} />
          </>
        ) : (
          <>
            <div className="text-xl flex gap-1 items-center">
              <IconBriefcase /> {props.role} &bull; {props.company}
            </div>
            <div className="flex items-center gap-1 text-white-500 text-lg">
              <IconMapPin stroke={1.5} className="h-5 w-5" /> {props.location}
            </div>
          </>
        )}
      </div>
      <Divider my="xl" mx="xs" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-white-300 text-justify">{props.about}</div>
      </div>
      <Divider my="xl" mx="xs" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3">Skills</div>
        <div className="flex flex-wrap gap-2">
          {props.skills.map((skill: any, index: any) => (
            <div
              key={index}
              className="bg-primary-300 bg-opacity-15 rounded-3xl text-primary-400 px-3 py-1 text-sm font-medium"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <Divider my="xl" mx="xs" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3">Experience</div>
        <div className="flex flex-col gap-8">
          {props.experience.map((exp: any, index: any) => (
            <ExpCard {...exp} />
          ))}
        </div>
      </div>
      <Divider my="xl" mx="xs" />
      <div className="p-3">
        <div className="text-2xl font-semibold mb-3">Certifications</div>
        <div className="flex flex-col gap-8">
          {props.certifications.map((cert: any, index: any) => (
            <CertiCard {...cert} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Profile;
