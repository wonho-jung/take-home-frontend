import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { useBreakPoint } from "./userBreakPoint";

export const headingStyles = {
  h1: "text-3xl font-bold ",
  h2: "text-2xl font-semibold ",
  h3: "text-1xl font-semibold ",
  h4: "text-xl font-medium ",
  h5: "text-lg font-medium ",
  h6: "text-base font-semibold ",
};

export const PageLayout = ({ children }) => {
  const { isMobile } = useBreakPoint();
  return (
    <div className="flex flex-row ">
      <aside className=" sm:w-1/4 md:w-1/5  min-h-screen bg-blue-500">
        <div className="py-8 px-3 md:p-8 ">
          <div className="text-white font-bold text-2xl hover:text-gray-200">
            <Link to="/dashboard">{isMobile ? "T" : "T-shirt"}</Link>
          </div>

          <ul className="flex flex-col mt-20">
            <li className="py-1">
              <Link
                to="/dashboard"
                className="text-white hover:text-gray-200 flex items-center "
              >
                <MdDashboard className="text-white mr-1" />
                {!isMobile && "dashboard"}
              </Link>
            </li>
            <li className="py-1">
              <Link
                to="/dashboard/check"
                className="text-white hover:text-gray-200 py-6 flex items-center"
              >
                <FaTshirt className="mr-1" />
                {!isMobile && "T-shirt"}
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <main role="main" className="w-full sm:w-2/3 md:w-3/4  p-8">
        {children}
      </main>
    </div>
  );
};
