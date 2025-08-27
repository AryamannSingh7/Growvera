import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col md:flex-row items-center bg-white-800 w-[80%] gap-5 mx-auto p-10 rounded-3xl justify-evenly">
        <div className="text-4xl text-white-100 [&_span]:text-primary-400 font-semibold text-center pb-5 md:w-[30%]">
          Never Miss Any <span>Opportunity</span>
        </div>
        <div className="flex gap-5 bg-white-900 p-2 rounded-lg items-center w-full md:w-[50%]">
          <TextInput
            variant="unstyled"
            label="Enter your email"
            placeholder="YourEmail@xyz.com"
            className="flex-grow px-3 py-2 bg-white-950 rounded-lg text-white-100 [&_input]:text-white-100"
          />
          <Button variant="filled" color="primary.4">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
