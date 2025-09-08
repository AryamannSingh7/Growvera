import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";

const FindTalents = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-white-950 font-[Montserrat]">
        <Divider size="xs" mx="md" />
        <SearchBar />
        <Divider size="xs" mx="md" />
        <Talents />
      </div>
    </div>
  );
};

export default FindTalents;
