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
        src="https://blockman.pro/wp-content/themes/romanuke/inc/images/ellipse_fiolet.png"
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
          <h2 className="h4s animate start">Our Services</h2>
        </div>
        <div className="l_services  flex-wrap">
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Business Consulting</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>ICO and Token</h4>
              <span className="h-[48px]">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                ICO registration
                <li>ICO registration</li>
                <li>White Paper services</li>
                <li>Tokenomics services</li>
                <li>Roadshow / Meetup services</li>
              </ul>
              <img width={120} height={120} src="/ICO Token.gif" />
            </div>
          </div>
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Exchange and Listing</h4>
              <span className="h-[48px]">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Exchange Listing services</li>
                <li>Financial search and procurement</li>
                <li>Payments / Facilitators services</li>
              </ul>
              <img width={120} height={120} src="/exchange-service.gif" />
            </div>
          </div>
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>DIGITAL MARKETING</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>branding</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Web Development</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Recruitment & Staffing</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Partnership</h4>
              <span className="h-[48px]">
                <Arrow />
              </span>
            </div>
            <div className="i_service_body">
              <ul className="p-5">
                <li>Partnership / J.V. services</li>
                <li>Incubator services</li>
              </ul>
              <img width={120} height={120} src="/partnership.gif" />
            </div>
          </div>
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Security& Compliance</h4>
              <span className="h-[48px]">
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
          <div className="i_service border border-[#492774]">
            <div className="i_service_header">
              <h4>Investors and Sales</h4>
              <span className="h-[48px]">
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
        </div>
      </div>
    </section>
  );
};

export default Section3;