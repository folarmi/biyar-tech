type Prop = {
  img: string;
  text: string;
  author: string;
  role: string;
  ifGray?: boolean;
};
const Testimonial = ({ img, text, author, role, ifGray }: Prop) => {
  return (
    <div
      className={`flex rounded-r-3xl mr-4 min-w-[884px] ${
        ifGray ? "bg-gray_900" : "bg-testimonial"
      }`}
    >
      <img src={img} className="w-[314px] h-[399px]" />
      <div className="px-8 flex flex-col py-6">
        <p className="manrope font-bold text-[32px] w-[493px] flex-grow">
          {text}
        </p>

        <section>
          <p className="text-base font-bold">
            {author} <br /> <span className="font-medium">{role}</span>{" "}
          </p>
        </section>
      </div>
    </div>
  );
};

export { Testimonial };
