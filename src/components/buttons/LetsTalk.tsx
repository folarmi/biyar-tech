import whiteArrow from "../../assets/icons/white_arrow_circle_right.svg";

const LetsTalk = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex justify-center whitespace-nowrap mb-24 w-fit rounded-[50px] px-6 py-4 border border-biyar_purple bg-biyar_purple mr-[30px]">
        <p className="font-normal text-lg mr-[10px] text-white">Lets Talk</p>
        <img src={whiteArrow} alt="whiteArrow" />
      </div>
    </div>
  );
};

export { LetsTalk };
