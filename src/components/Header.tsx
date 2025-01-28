/* eslint-disable @typescript-eslint/no-explicit-any */
import logo from "../assets/images/logo.svg";
import menu from "../assets/icons/menu.svg";
import { Link } from "react-router";

const Header = ({ toggleSidebar }: any) => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-4 lg:px-12 py-4 bg-gray_200">
      <Link to="/">
        <img src={logo} alt="biyar tech" />
      </Link>

      <section className="flex items-center">
        <button className="hidden lg:block bg-primary rounded-lg px-6 py-3 font-medium text-base text-white mr-4">
          Lets Talk 👋
        </button>
        <div
          className="flex rounded-lg px-6 py-3 bg-gray_100 cursor-pointer"
          onClick={toggleSidebar}
        >
          <p className="text-secondary text-base font-medium pr-2">Menu</p>
          <img src={menu} alt="menu" />
        </div>
      </section>
    </nav>
  );
};

export { Header };
