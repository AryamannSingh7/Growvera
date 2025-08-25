import Header from "../Header/Header";
import Companies from "../Landing/Companies";
import DreamJob from "../Landing/DreamJob";

const Homepage = () => {
  return (
    <div className="min-h-[100vh] bg-white-950 font-[Montserrat] scroll-smooth scrollbar-hide sm:scrollbar-default">
      <Header />
      <DreamJob />
      <Companies />
    </div>
  );
};

export default Homepage;
