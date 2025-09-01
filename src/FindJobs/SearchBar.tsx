import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState<[number, number]>([1, 100]);
  return (
    <div className="flex flex-col md:flex-row px-5 py-8 gap-2">
      {dropdownData.map((data, index) => (
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
