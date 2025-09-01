import { Divider, Input, RangeSlider } from "@mantine/core";
import MultiInput from "../FindJobs/MultiInput";
import { useState } from "react";
import { searchFields } from "../Data/TalentData";
import { IconUser } from "@tabler/icons-react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex flex-col md:flex-row px-5 py-8 hover:cursor-pointer gap-2">
      <div className="p-2 md:p-0 md:w-1/5">
        <div className="bg-white-900 hover:shadow-[0_0_5px_1px_yellow] !shadow-primary-400 transition duration-300 ease-in-out hover:cursor-pointer rounded-2xl [&_input]:text-lg [&_input]:placeholder:text-lg flex items-center py-1">
          <IconUser
            size={16}
            className="text-primary-400 bg-white-900 p-1 mr-1 h-8 w-8 rounded-full"
          />
          <Input placeholder="Talent Name" variant="unstyled" />
        </div>
      </div>
      <Divider size="xs" orientation="vertical" />
      {searchFields.map((data, index) => (
        <>
          <div key={index} className="md:w-1/5 p-2 md:p-0">
            <MultiInput {...data} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </>
      ))}
      <div className="md:w-1/5 p-2 md:p-0">
        <div className="flex justify-between text-white-500 pb-1">
          <div>Salary</div>
          <div>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </div>
        </div>
        <RangeSlider
          value={value}
          onChange={setValue}
          size="xs"
          color="primary.4"
          label={null}
        />
      </div>
    </div>
  );
};

export default SearchBar;
