import { jobList } from "../Data/JobsData";
import JobCard from "../FindJobs/JobCard";

const CompanyJobs = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center flex-wrap justify-evenly gap-10">
      {jobList.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
export default CompanyJobs;
