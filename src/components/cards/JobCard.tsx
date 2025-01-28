import { Link } from "react-router";
import { Rounded } from "../../atoms/Rounded";

type Prop = {
  title: string;
  dept: string;
  location: string;
  href: string;
};
const JobCard = ({ title, dept, location, href }: Prop) => {
  return (
    <Link
      to={href}
      className="flex flex-col lg:flex-row lg:items-center justify-between bg-white p-5 mb-5 cursor-pointer"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <p className="manrope font-semibold text-base">{title}</p>
        <div className="hidden lg:block">
          <Rounded />
        </div>
        <p className="manrope font-medium text-base text-gray_700">{dept}</p>
      </div>

      <div className="flex items-center justify-between">
        <p className="manrope text-base font-semibold text-gray_700 pr-2">
          {location}
        </p>
        <p className="manrope text-base font-semibold text-biyar_purple">
          Apply &rarr;
        </p>
      </div>
    </Link>
  );
};

export { JobCard };
