import logo from "../assets/images/logo.svg";
import { Footerheader } from "../atoms/Footerheader";
import { company, contact, products, services } from "../data";
import logoWhite from "../assets/images/logoWhite.svg";

const Footer = () => {
  return (
    <div className="pt-28">
      <div className="flex justify-around items-center pb-20">
        <img src={logo} alt="biyar tech" />

        <section className="flex items-center ">
          <div className="mr-6">
            <Footerheader text="Company" />
            {company.map(({ id, name }) => {
              return (
                <div className="mb-[10px]" key={id}>
                  <p className="text-gray_700 manrope text-sm">{name}</p>
                </div>
              );
            })}
          </div>

          <div className="mr-6">
            <Footerheader text="Products" />
            {products.map(({ id, name }) => {
              return (
                <div className="mb-[10px]" key={id}>
                  <p className="text-gray_700 manrope text-sm">{name}</p>
                </div>
              );
            })}
          </div>

          <div className="mr-6">
            <Footerheader text="Services" />
            {services.map(({ id, name }) => {
              return (
                <div className="mb-[10px]" key={id}>
                  <p className="text-gray_700 manrope text-sm">{name}</p>
                </div>
              );
            })}
          </div>

          <div>
            <Footerheader text="Contact" />
            {contact.map(({ id, name }) => {
              return (
                <div className="mb-[10px]" key={id}>
                  <p className="text-gray_700 manrope text-sm">{name}</p>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      <div className="mx-auto w-[1116px]">
        <p className="manrope font-normal text-sm leading-6 text-gray_800 pb-8 text-justify">
          Biyar offers its products and services in partnership with licensed
          transmitters in their respective jurisdictions. All trademarks and
          brand names belong to their respective owners. Use of these trademarks
          and brand names do not represent endorsement by or association with
          Biyar Technologies.
        </p>
        <p className="manrope font-normal text-sm leading-6 text-gray_800 pb-8 text-justify">
          IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT: To
          help the government fight the funding of terrorism and money
          laundering activities, federal law requires all financial institutions
          to obtain, verify, and record information that identifies each person
          who opens an Account. What this means for you: When you open an
          Account, we will ask for your name, address, date of birth, and other
          information that will allow us to identify you. We may also ask to see
          a copy of your driver’s license.
        </p>

        <p className="manrope font-normal text-sm leading-6 text-gray_800 pb-20 text-justify">
          The content on this website does not constitute a complete description
          of Blomgram’s offerings and services. By using this website, you
          accept our Terms of Use and Privacy Policy. Google Play and the Google
          Play logo are trademarks of Google LLC. Apple, the Apple logo, and
          iPhone are trademarks of Apple Inc. registered in the U.S.
        </p>
        <img src={logoWhite} />
      </div>
    </div>
  );
};

export { Footer };
