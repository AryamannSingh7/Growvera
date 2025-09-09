import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const CompanyPeople = () => {
  return (
    <div className="mt-12 flex flex-col md:flex-row flex-wrap justify-evenly gap-10">
      {talents.map(
        (talent, index) => index < 8 && <TalentCard key={index} {...talent} />
      )}
    </div>
  );
};

export default CompanyPeople;
