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
    <div id="client">
      <h4 className="h4s">Our Clients</h4>
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
