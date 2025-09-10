import { Divider } from "@mantine/core";
import PostedJobs from "../PostedJobs/PostedJobs";
import PostedJobsDesc from "../PostedJobs/PostedJobsDesc";

const PostedJobsPage = () => {
  return (
    <div>
      <div className="min-h-[90vh] bg-white-950 font-[Montserrat]">
        <Divider size="xs" mx="md" />
        <div className="flex gap-3 p-3">
          <PostedJobs />
          <PostedJobsDesc />
        </div>
      </div>
    </div>
  );
};

export default PostedJobsPage;
