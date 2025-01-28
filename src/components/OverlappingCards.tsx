import customOne from "../assets/images/customOne.svg";
import customTwo from "../assets/images/customTwo.svg";
import customThree from "../assets/images/customThree.svg";

const OverlappingCards = () => {
  return (
    <div className="relative hidden lg:flex justify-center items-center">
      {/* Left Card */}
      <img
        src={customOne}
        alt="Left Card"
        className="absolute transform -translate-x-96 -rotate-6 z-10"
        style={{ width: "509px", height: "auto" }}
      />
      {/* Middle Card */}
      <img
        src={customTwo}
        alt="Middle Card"
        className="relative z-20"
        style={{ width: "509px", height: "auto" }}
      />
      {/* Right Card */}
      <img
        src={customThree}
        alt="Right Card"
        className="absolute transform translate-x-96 rotate-6 z-10"
        style={{ width: "509px", height: "auto" }}
      />
      {/* Curve */}
      <div className="absolute bottom-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,208C672,213,768,203,864,176C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export { OverlappingCards };
