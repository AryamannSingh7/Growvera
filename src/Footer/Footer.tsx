import {
  IconAffiliateFilled,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <footer className="bg-dark-950 text-white-300 py-12 pt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Description */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4 gap-2">
              <IconAffiliateFilled className="h-10 w-10 text-primary-300 hover:cursor-pointer" />
              <div className="text-2xl font-bold text-primary-400">
                Growvera
              </div>
            </div>
            <p className="text-sm">
              Connecting talent with opportunity. Find your dream job or the
              perfect candidate with us.
            </p>
          </div>

          {/* Column 2: For Candidates */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              For Candidates
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 hover:translate-x-2 transition duration-300"
                >
                  Browse Jobs
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Candidate Dashboard
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Resume Builder
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: For Employers */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              For Employers
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Post a Job
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Employer Dashboard
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Browse Candidates
                </a>
              </li>
              <li>
                <a
                  href="abc"
                  className="hover:text-primary-400 transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Company & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-primary-400 mb-4">
              Follow Us
            </h3>
            <p className="text-sm mb-4">
              Stay updated with the latest news and opportunities.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a
                href="abc"
                className="text-white-300 hover:text-primary-400 transition-colors"
              >
                <IconBrandFacebook size={24} className="text-primary-400" />
              </a>
              <a
                href="abc"
                className="text-white-300 hover:text-primary-400 transition-colors"
              >
                <IconBrandTwitter size={24} className="text-primary-400" />
              </a>
              <a
                href="abc"
                className="text-white-300 hover:text-primary-400 transition-colors"
              >
                <IconBrandInstagram size={24} className="text-primary-400" />
              </a>
              <a
                href="abc"
                className="text-white-300 hover:text-primary-400 transition-colors"
              >
                <IconBrandLinkedin size={24} className="text-primary-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Growvera. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="abc" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="abc" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  ) : (
    <></>
  );
};

export default Footer;
