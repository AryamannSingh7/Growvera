import { similar } from "../Data/Company";
import CompanyCard from "./CompanyCard";

const SimilarCompanies = () => {
  return (
    <div className="w-full md:w-1/4">
      <div className="text-xl font-semibold mx-3 my-5">Similar Companies</div>
      <div className="flex flex-col flex-wrap gap-10 justify-center md:ml-10">
        {similar.map((item, index) => (
          <CompanyCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
export default SimilarCompanies;
