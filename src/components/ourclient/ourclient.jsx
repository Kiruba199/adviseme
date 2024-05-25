import "./ourclient.css";

const ourclientLogo = [
  {
    id: 1,
    logo: "/ourClient-logo1.png",
    name: "World of Professionals",
  },
  {
    id: 2,
    logo: "/ourClient-logo2.png",
    name: "Block Audit",
  },
  {
    id: 3,
    logo: "/ourClient-logo3.png",
    name: "Coin marketcap",
  },
  {
    id: 4,
    logo: "/ourclient-logo-4.png",
    name: "Listing wise",
  },
  {
    id: 5,
    logo: "/ourClient-logo5.png",
    name: "Jaguar",
  },
];

const OurClient = () => {
  return (
    <div
      className="lg:py-[98px] border-t border-b py-20 bg-[#111014] border-[#FFFFFF26]"
      id="client"
    >
      <h4 className=" text-center h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
        Our Clients
      </h4>
      <div className="b_partners">
        {ourclientLogo.map((logo) => (
          <span
            className="b_partner px-5 w-[150px] h-[100px] border border-[#FFFFFF26] flex justify-center align-center"
            key={logo.id}
          >
            <img src={logo.logo} alt={logo.name} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
