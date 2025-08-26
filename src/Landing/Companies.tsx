import Marquee from "react-fast-marquee";
import { companies } from "../Data/Data";

const Companies = () => {
  return (
    <div className="mt-20">
      <div className="text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center mb-10">
        Trusted by <span>1000+</span> companies
      </div>
      <Marquee pauseOnHover={true} speed={100} gradient={false}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="mx-10 py-5 px-10 cursor-pointer transition-transform duration-300 overflow-hidden ease-in-out"
          >
            <img
              src={`/Companies/${company}.png`}
              alt={company}
              className="h-20 hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
