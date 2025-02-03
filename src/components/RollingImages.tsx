import biyarTechTwo from "../assets/images/biyarTechTwo.svg";
import biyarTech from "../assets/images/biyarTech.svg";

const RollingImages = () => {
  return (
    <div className="flex justify-center px-8">
      <div className="relative w-[250px] lg:w-[484px] h-[250px] lg:h-[484px] flex items-center justify-center overflow-hidden">
        {/* Rotating Container */}
        <div className="absolute w-full h-full animate-rotate">
          <img
            src={biyarTech}
            alt="BiyarTech Logo"
            className="absolute w-full h-auto object-cover -top-7 left-0 rotate-180"
          />

          <img
            src={biyarTechTwo}
            alt="BiyarTech Rotating Text"
            className="absolute w-full h-auto object-cover bottom-8 left-0 rotate-180"
          />
        </div>
      </div>
    </div>
  );
};

export { RollingImages };
