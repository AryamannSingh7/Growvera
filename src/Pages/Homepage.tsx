import Header from "../Header/Header";
import Companies from "../Landing/Companies";
import DreamJob from "../Landing/DreamJob";
import JobCategory from "../Landing/JobCategory";
import Subscribe from "../Landing/Subscribe";
import Testimonials from "../Landing/Testimonials";
import Working from "../Landing/Working";

const Homepage = () => {
  return (
    <div className="min-h-[100vh] bg-white-950 font-[Montserrat]">
      <Header />
      <DreamJob />
      <Companies />
      <JobCategory />
      <Working />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Homepage;
