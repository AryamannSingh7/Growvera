import { IconMoodSearch } from "@tabler/icons-react";
import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-10 pb-5 px-2 sm:px-6">
      <div className="text-3xl sm:text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center pb-5">
        How it <span>Works</span>
      </div>
      <div className="text-base sm:text-lg text-white-300 mb-8 sm:mb-10 text-center w-full sm:w-1/2 mx-auto">
        Learn how our platform connects you with top employers and guides you
        through every step of your job search
      </div>
      <div className="flex flex-col lg:flex-row justify-around items-center gap-8 sm:gap-10 flex-wrap">
        <div className="flex flex-col gap-8 sm:gap-10 w-full lg:w-auto items-center">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-5">
              <div className="p-2 sm:p-3 bg-primary-400 rounded-full">
                <img
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                  className="h-10 w-10 sm:h-12 sm:w-12"
                />
              </div>
              <div>
                <div className="text-white-200 text-xl sm:text-3xl font-semibold mb-1 sm:mb-2">
                  {item.name}
                </div>
                <div className="text-white-300 text-sm sm:text-lg w-52 sm:w-80">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="static lg:relative flex flex-col items-center lg:w-auto mt-8 lg:mt-0">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 mb-6 sm:mb-10 p-3 sm:p-5 bg-white-900/10 backdrop-blur-md rounded-3xl border-2 border-primary-400 shadow-lg shadow-primary-900 max-w-xs sm:max-w-sm static lg:absolute lg:top-10 lg:-left-32">
            <div>
              <img
                src="img1.jpg"
                alt="working"
                className="w-16 sm:w-20 rounded-full"
              />
            </div>
            <div className="text-base sm:text-lg text-white-200 font-semibold [&_span]:text-primary-400 text-center">
              Your profile is <span>70%</span> complete
            </div>
            <div className="text-sm sm:text-md text-white-300 text-center">
              Complete your profile now!
            </div>
          </div>
          <img
            src="boy.png"
            alt="working"
            className="w-48 sm:w-80 lg:w-[30rem] mx-auto"
          />
          {/* Card 2 */}
          <div className="flex flex-col items-center gap-4 sm:gap-5 mb-6 sm:mb-10 p-3 sm:p-5 bg-white-900/10 backdrop-blur-md rounded-3xl border-2 border-primary-400 shadow-lg shadow-primary-900 max-w-xs sm:max-w-sm static lg:absolute lg:bottom-10 lg:-right-32">
            <div>
              <IconMoodSearch className="h-10 w-10 sm:h-12 sm:w-12 text-primary-400" />
            </div>
            <div className="text-base sm:text-lg text-white-200 font-semibold [&_span]:text-primary-400 w-60 text-center">
              <span>4</span> Recruiters viewed your profile in the past week.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
