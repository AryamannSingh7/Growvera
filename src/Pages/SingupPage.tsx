import { IconAffiliateFilled } from "@tabler/icons-react";
import Signup from "../SignUp/Signup";
import Login from "../SignUp/Login";
import { useLocation } from "react-router-dom";

const SignupPage = () => {
  const location = useLocation();
  return (
    <div className="min-h-[90vh] bg-white-950 font-[Montserrat] overflow-hidden">
      <div
        className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-500 ${
          location.pathname === "/signup" ? "-translate-x-1/2" : "translate-x-0"
        }`}
      >
        <Login />
        <div
          className={`w-1/2 h-full transition-all ease-in-out duration-500 ${
            location.pathname === "/signup"
              ? "rounded-r-[200px]"
              : "rounded-l-[200px]"
          } bg-white-900 flex items-center justify-center flex-col gap-2`}
        >
          <div className="flex items-center gap-1 text-2xl">
            <IconAffiliateFilled className="h-28 w-28 text-primary-300 hover:cursor-pointer" />
            <div className="font-bold text-7xl text-primary-400 hover:cursor-pointer">
              Growvera
            </div>
          </div>
          <div className="text-2xl font-semibold">
            Find the best fit for you!
          </div>
        </div>
        <Signup />
      </div>
    </div>
  );
};
export default SignupPage;
