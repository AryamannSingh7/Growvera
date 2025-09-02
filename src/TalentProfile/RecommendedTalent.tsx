import { talents } from "../Data/TalentData";
import TalentCard from "../FindTalent/TalentCard";

const RecommendedTalent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xl font-semibold mx-3 my-5">Recommended Talent</div>
      <div className="flex flex-col flex-wrap gap-10 justify-center md:ml-10">
        {talents.map(
          (talent, index) => index < 4 && <TalentCard key={index} {...talent} />
        )}
      </div>
    </div>
  );
};

export default RecommendedTalent;
