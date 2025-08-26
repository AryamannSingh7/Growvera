import { work } from "../Data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5">
      <div className="text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center pb-5">
        How it <span>Works</span>
      </div>
      <div className="text-lg text-white-300 mb-10 text-center w-1/2 mx-auto">
        Explore a wide range of job categories and find the perfect role that
        matches your skills and interests.
      </div>
      <div className="flex justify-around items-center gap-10 flex-wrap">
        <div className="flex flex-col gap-10">
          {work.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="p-3 bg-primary-400 rounded-full">
                <img
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                  className="h-12 w-12"
                />
              </div>
              <div>
                <div className="text-white-200 text-3xl font-semibold mb-2">
                  {item.name}
                </div>
                <div className="text-white-300 text-lg w-80">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <img src="boy.png" alt="working" className="w-[30rem] mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Working;
