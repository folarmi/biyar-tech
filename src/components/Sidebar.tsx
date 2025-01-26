import background from "../assets/images/background.svg";
import close from "../assets/icons/x.svg";

import { sidebarMenuItems } from "../data";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-[25%]">
          <img src={background} alt="background" />
        </div>
        <div className="w-[75%] ml-28">
          <div className="flex justify-end ">
            <img src={close} alt="close" />
          </div>
          {sidebarMenuItems.map(({ id, name, path }) => {
            return (
              <Link to={path} key={id} className="flex items-center mb-[72px]">
                <p className="font-normal text-base leading-5 pr-2">{id}</p>
                <p className="font-medium text-[25.89px] leading-6">{name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Sidebar };
