import "./ourMediaPartner.css";

const ourMediaPartnerLogo = [
  {
    id: 1,
    logo: "/our-media-partner-1.png",
    name: "World of Professionals",
  },
  {
    id: 2,
    logo: "/our-media-partner-2.png",
    name: "Block Audit",
  },
  {
    id: 3,
    logo: "/our-media-partner-3.png",
    name: "Coin marketcap",
  },
  {
    id: 4,
    logo: "/our-media-partner-4.png",
    name: "Listing wise",
  },
  {
    id: 5,
    logo: "/our-media-partner-5.png",
    name: "Jaguar",
  },
];

const OurMediaPartner = () => {
  return (
    <div className="ourpartner py-20">
      <h4 className=" h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
        Media Partners
      </h4>
      <div className="b_partners">
        {ourMediaPartnerLogo.map((logo) => (
          <div
            className="b_partner px-5 w-[150px] h-[100px] border border-[#FFFFFF26] flex justify-center align-center"
            key={logo.id}
          >
            <img src={logo.logo} alt={logo.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMediaPartner;
