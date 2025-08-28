import { dropdownData } from "../Data/JobsData";
import MultiInput from "./MultiInput";

const SearchBar = () => {
  return (
    <div className="flex justify-center gap-5">
      {dropdownData.map((data, index) => (
        <div key={index} className="w-1/4">
          <MultiInput {...data} />
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
