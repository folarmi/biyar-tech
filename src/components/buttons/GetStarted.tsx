import purpleArrow from "../../assets/icons/purple_arrow_circle_right.svg";

const GetStarted = () => {
  return (
    <div className="flex items-center rounded-[50px] px-6 py-4 border border-biyar_purple bg-white mr-[30px]">
      <p className="font-normal text-lg mr-[10px] text-biyar_purple">
        Get Started
      </p>
      <img src={purpleArrow} alt="purpleArrow" />
    </div>
  );
};

export { GetStarted };
