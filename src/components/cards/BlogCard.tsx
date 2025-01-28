import { Link } from "react-router";

type Prop = {
  date: string;
  title: string;
  href: string;
};

const BlogCard = ({ date, title, href }: Prop) => {
  return (
    <Link to={href} className="lg:mr-6">
      <div className="w-72 lg:w-[356px] h-72 lg:h-[223px] bg-primary rounded-lg"></div>
      <p className="pt-4 manrope font-medium text-sm pb-2">{date}</p>
      <p className="font-medium text-[18px]">{title}</p>
    </Link>
  );
};

export { BlogCard };
