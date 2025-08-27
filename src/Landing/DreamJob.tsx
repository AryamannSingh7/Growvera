import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-4 lg:px-16 py-8 lg:py-0 w-full min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center relative mb-8 lg:mb-0">
        <div className="w-full flex justify-center">
          <img
            src="employee.png"
            alt="Dream Job Illustration"
            className="w-full max-w-[28rem] lg:max-w-[72rem] h-auto"
          />
          <div className="hidden items-center lg:flex w-fit p-3 rounded-3xl flex-col gap-4 border-2 border-primary-400 shadow-lg shadow-primary-900 -mt-16 ml-16 backdrop-blur-sm absolute top-[30%] left-[47%]">
            <div className="text-white-200">40k+ success stories.</div>
            <Avatar.Group>
              <Avatar src="img1.jpg" />
              <Avatar src="img1.jpg" />
              <Avatar src="img1.jpg" />
              <Avatar>+39k</Avatar>
            </Avatar.Group>
          </div>
          <div className="absolute right-30 bottom-8 sm:bottom-16 lg:bottom-40 -translate-x-1/2 w-fit p-3 rounded-3xl flex-col items-center justify-between border-2 border-primary-400 shadow-lg shadow-primary-900 backdrop-blur-sm flex">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src="netflix.png"
                  alt="Company Logos"
                  className="w-12 h-12 p-1 rounded-lg"
                />
              </div>
              <div>
                <div className="text-white-200 text-sm">Software Developer</div>
                <div className="text-xs text-white-300">Banglore</div>
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <span className="text-xs text-white-300">1 day ago</span>
              <span className="text-xs text-white-300">100+ Applicants</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full lg:w-1/2 leading-tight">
        <div className="text-3xl sm:text-5xl lg:text-7xl text-white-200 font-bold mb-6 [&>span]:text-primary-400 text-center">
          Find Your <span>Dream Job</span> Today.
        </div>
        <div className="text-base sm:text-lg lg:text-xl text-white-300 mb-6 [&>span]:text-secondary-400 text-center">
          Discover <span>top opportunities</span>, connect with{" "}
          <span>leading employers</span>, and take the next step in your career
          journey.
        </div>
        <div className="flex flex-col sm:flex-row gap-3 items-center bg-dark-950 p-3 rounded-3xl w-full sm:w-[90%] lg:w-[70%]">
          <TextInput
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
            className="bg-white-900 p-3 rounded-3xl text-white-200 [&_input]:text-white-200 w-full sm:w-auto lg:w-[45%]"
          />
          <TextInput
            variant="unstyled"
            label="Location"
            placeholder="Delhi"
            className="bg-white-900 p-3 rounded-3xl text-white-200 [&_input]:text-white-200 w-full sm:w-auto lg:w-[45%]"
          />
          <div className="flex items-center justify-center h-[3rem] w-[3rem] bg-primary-500 text-white-100 rounded-3xl hover:cursor-pointer hover:bg-primary-600 active:bg-primary-700 transition duration-200">
            <IconSearch className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
