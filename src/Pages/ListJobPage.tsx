import { Divider } from "@mantine/core";
import ListJob from "../ListJob/ListJob";

const ListJobPage = () => {
  return (
    <div>
      <div className="min-h-[100vh] bg-white-950 font-[Montserrat]">
        <Divider size="xs" mx="md" />
        <ListJob />
      </div>
    </div>
  );
};

export default ListJobPage;
