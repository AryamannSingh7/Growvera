import internal from "stream";
import { companyData } from "../Data/Company";

const AboutComponent = () => {
  const company: { [key: string]: any } = companyData;
  return (
    <div className="flex flex-col gap-5">
      {Object.keys(company).map(
        (key, index) =>
          key !== "Name" && (
            <div key={index} className="flex flex-col gap-3">
              <div className="text-xl font-semibold">{key}</div>

              {key !== "Website" && (
                <div className="text-justify text-md text-white-300">
                  {key !== "Specialties"
                    ? company[key]
                    : company[key].map((item: string, index: number) => (
                        <span key={index}> &bull; {item}</span>
                      ))}
                </div>
              )}
              {key === "Website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  className="text-justify text-md text-primary-300"
                  rel="noreferrer"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};
export default AboutComponent;
