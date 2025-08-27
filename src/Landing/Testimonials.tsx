import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div>
      <div className="mt-20 pb-10">
        <div className="text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center pb-5">
          What <span>Our Users</span> Say
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center flex-wrap lg:flex-nowrap gap-5 lg:gap-0 lg:gap-x-10 px-2 overflow-x-hidden">
          {testimonials.map((item, index) => (
            <div className="flex flex-col gap-1 w-[75%] border border-primary-400 rounded-xl mt-10 p-3">
              <div className="flex flex-col md:flex-row gap-3 p-3 items-center">
                <Avatar src="img1.jpg" alt="User 1" className="!h-14 !w-14" />
                <div>
                  <div className="text-xl text-white-200 font-semibold">
                    {item.name}
                  </div>
                  <div>
                    <Rating value={item.rating} fractions={2} readOnly />
                  </div>
                </div>
              </div>
              <div className="text-white-300 px-3 text-xs">
                {item.testimonial}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
