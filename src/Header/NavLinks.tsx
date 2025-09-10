import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const Links = [
    { name: "Find Jobs", url: "/find-jobs" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "List Job", url: "/list-job" },
    { name: "Listed Jobs", url: "/listed-jobs" },
  ];
  const location = useLocation();
  return (
    <div className="flex items-center gap-6 text-lg">
      {Links.map((link, index) => (
        <div
          className="px-3 py-1 rounded-lg transition-all 
    hover:border-primary-600 hover:bg-primary-600 hover:text-white"
        >
          <Link
            key={index}
            to={link.url}
            className={`${
              location.pathname === link.url
                ? "px-5 py-1 rounded-lg transition-all border-primary-600 bg-primary-600 text-white"
                : ""
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
