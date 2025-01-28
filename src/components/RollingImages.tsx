import biyarTechTwo from "../assets/images/biyarTechTwo.svg";
import biyarTech from "../assets/images/biyarTech.svg";

const RollingImages = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[484px] h-[484px] flex items-center justify-center overflow-hidden">
        {/* Rotating Container */}
        <div className="absolute w-full h-full animate-rotate">
          <img
            src={biyarTech}
            alt="BiyarTech Logo"
            className="absolute w-full h-1/2 object-cover top-0 left-0 rotate-180"
          />

          <img
            src={biyarTechTwo}
            alt="BiyarTech Rotating Text"
            className="absolute w-full h-1/2 object-cover bottom-0 left-0 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export { RollingImages };
