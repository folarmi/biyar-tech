import ashArrow from "../../assets/icons/ash_arrow_circle_right.svg";

const ExploreProjects = () => {
  return (
    <div className="w-fit flex items-center rounded-[50px] px-6 py-4 border border-gray_300 bg-white">
      <p className="font-normal text-lg mr-[10px] text-gray_300">
        Explore our Projects
      </p>
      <img src={ashArrow} alt="ashArrow" />
    </div>
  );
};

export { ExploreProjects };
