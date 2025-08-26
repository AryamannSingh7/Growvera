import { Carousel } from "@mantine/carousel";
import { jobCategory } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const JobCategory = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center pb-5">
        Browse <span>Job</span> Categories
      </div>
      <div className="text-lg text-white-300 mb-10 text-center w-1/2 mx-auto">
        Explore a wide range of job categories and find the perfect role that
        matches your skills and interests.
      </div>
      <Carousel
        className="focus-visible:[&_button]:!outline-none [&_button]:!bg-primary-400 [&_button]:hover:bg-primary-400 [&_button]:!text-white-100 [&_button]:!border-0 [&_button]:hover:!opacity-75 [&_button]:!opacity-0 hover:[&_button]:!opacity-100"
        emblaOptions={{ loop: true }}
        slideSize="22%"
        slideGap="sm"
        controlSize={24}
        nextControlIcon={<IconArrowRight className="h-8 w-8" />}
        previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
      >
        {jobCategory.map((category, index) => (
          <Carousel.Slide key={index}>
            <div className="flex flex-col items-center justify-center w-72 mx-auto gap-4  bg-white-900/20 backdrop-blur-md text-white-300 text-center p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 hover:shadow-secondary-500 cursor-pointer border-2 border-primary-400">
              <div className="p-2 bg-secondary-300 rounded-full">
                <img
                  src={`/Category/${category.name}.png`}
                  alt={category.name}
                  className="h-8 w-8"
                />
              </div>
              <div className="text-xl text-white-200 font-semibold">
                {category.name}
              </div>
              <div>{category.desc}</div>
              <div className="text-lg text-primary-400">
                {category.jobs}+ jobs posted.
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default JobCategory;
