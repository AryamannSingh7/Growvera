import JobCard from "../FindJobs/JobCard";
import { jobList } from "../Data/JobsData";

const RecommendedJobs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mx-3 my-5">Recommended Jobs</div>
      <div className="flex flex-col flex-wrap gap-10 justify-center md:ml-10">
        {jobList.map(
          (Job: any, index: any) =>
            index < 4 && <JobCard key={index} {...Job} />
        )}
      </div>
    </div>
  );
};

export default RecommendedJobs;
