import "./section-3.css";
import Arrow from "../../assets/down-arrow.svg";

const Section3 = () => {
  return (
    <section
      id="services"
      className="i_section section-2-container i_section2 pr"
    >
      <img
        className="i_ellipse"
        alt="decor"
        src="/ellipse_fiolet.png"
        width={2393}
        height={985}
        style={{
          position: "absolute",
          height: "100%",
        }}
      />

      <div>
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span className="translate-x-[-50%]">Our Services</span>
          </div>
          <h2 className="h4s animate start h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="l_services  flex-wrap">
          <div className="i_service  md:basis-1/3 md:grow-0 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Business Consulting
              </h4>
              <span className="h-[50px] inline-flex items-center ">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Business & Marketing plan</li>
                <li>Financial search and procurement</li>
                <li>IT consulting services</li>
                <li>Management development</li>
                <li>Human resources advising</li>
              </ul>
              <img width={120} height={120} src="/consultation.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                ICO and Token
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>ICO registration</li>
                <li>White Paper services</li>
                <li>Tokenomics services</li>
                <li>Roadshow / Meetup services</li>
              </ul>
              <img width={120} height={120} src="/ICO Token.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2  lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Exchange and Listing
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Exchange Listing services</li>
                <li>Coin services</li>
                <li>Payments / Facilitators services</li>
              </ul>
              <img width={120} height={120} src="/exchange-service.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                DIGITAL MARKETING
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Social Media Marketing</li>
                <li>Influencer Marketing</li>
                <li>PR Marketing</li>
                <li>Event Marketing</li>
                <li>Search Engine Marketing</li>
              </ul>
              <img width={120} height={120} src="/digitalmarketing.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">branding</h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Brand Strategy</li>
                <li>Brand Identity (Logo Development)</li>
                <li>Content Management</li>
                <li>Social Media Kit</li>
              </ul>
              <img width={120} height={120} src="/branding.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Web Development
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Website Development</li>
                <li>Domain & Hosting services</li>
                <li>Website Maintenance</li>
                <li>Website Redesign</li>
                <li>App UI/UX</li>
              </ul>
              <img width={120} height={120} src="/webdevelopment.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Recruitment & Staffing
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Advisors</li>
                <li>Management Team services</li>
                <li>Employee Relation</li>
                <li>Employee Training</li>
              </ul>
              <img width={120} height={120} src="/recruiting.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">Partnership</h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Partnership / J.V. services</li>
                <li>Incubator services</li>
              </ul>
              <img
                className="rotate-180"
                width={120}
                height={120}
                src="/partnership.gif"
              />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Security& Compliance
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Security & Privacy services</li>
                <li>KYC / AML services</li>
              </ul>
              <img width={120} height={120} src="/Security.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">
                Investors and Sales
              </h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Investor relations and fundraising</li>
                <li>Digital community management</li>
              </ul>
              <img width={120} height={120} src="/partner.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">Events</h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Partnerships</li>
                <li>Event sales</li>
                <li>Sponsorships</li>
                <li>Roadshows</li>
                <li>Meetups</li>
                <li>Event organizing</li>
              </ul>
              <img width={120} height={120} src="/Eventd.gif" />
            </div>
          </div>
          <div className="i_service  md:basis-1/3 md:grow-0	 sm:basis-1/2 lg:basis-1/4 border border-[#492774]">
            <div className="i_service_header">
              <h4 className="text-sm md:text-md font-semibold">TECH SUPPORT</h4>
              <span className="h-[50px] inline-flex items-center">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Inbound Tech support</li>
                <li>Chat support</li>
                <li>Social Media Chatters</li>
                <li>Telegram moderators</li>
              </ul>
              <img width={120} height={120} src="/ITsupport.gif" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
