import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { sidebarMenuItems } from "../data";
import close from "../assets/icons/x.svg";
import background from "../assets/images/background.svg";
import { useNavigate } from "react-router";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="">
      <Header toggleSidebar={toggleSidebar} />
      {children}
      <Footer />

      <div
        className={`fixed inset-0 bg-white text-white z-50 transform transition-transform duration-500 ease-in-out  ${
          isExpanded ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 p-2 rounded-md transition"
        >
          <img src={close} alt="close" />
        </button>

        <div className="flex items-center">
          <div className="w-[25%]">
            <img src={background} alt="background" />
          </div>

          <div className="w-[75%] ml-28">
            {sidebarMenuItems.map(({ id, name, path }) => {
              return (
                <div
                  onClick={() => {
                    navigate(path);
                    toggleSidebar();
                  }}
                  key={id}
                  className="flex items-center mb-[72px] text-black cursor-pointer"
                >
                  <p className="font-normal text-base leading-5 pr-2">{id}</p>
                  <p className="font-medium text-[25.89px] leading-6">{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { Layout };
