import "./partner.css";

const partnerLogo = [
  {
    id: 1,
    logo: "/ourpartner-logo1.png",
    name: "World of Professionals",
  },
  {
    id: 2,
    logo: "/ourpartner-logo2.png",
    name: "Block Audit",
  },
  {
    id: 3,
    logo: "/ourpartner-logo3.png",
    name: "Coin marketcap",
  },
  {
    id: 4,
    logo: "/ourpartner-logo4.png",
    name: "Listing wise",
  },
  {
    id: 5,
    logo: "/ourpartner-logo5.png",
    name: "Jaguar",
  },
];

const OurPartner = () => {
  return (
    <section className="i_section pr bg-[#111014] py-20 md:py-0">
      <div className="ourpartner">
        <h4 className="h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
          Our Partners
        </h4>
        <div className="b_partners">
          {partnerLogo.map((logo) => (
            <div
              className="b_partner w-[150px] h-[100px] md:w-[200px] md:h-[120px] xl:w-[300px] xl:h-[150px] border border-[#FFFFFF26] flex justify-center align-center"
              key={logo.id}
            >
              <img
                src={logo.logo}
                className="object-contain md:px-5 md:py-5"
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartner;
