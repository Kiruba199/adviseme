import RightArrowIcon from "../../assets/right-arrow.svg";
import "./section-1.css";

const Section = () => {
  return (
    <section className="i_section i_section1 pr pb-20">
      <div className="section-2-container pr md:flex">
        <div className="i_pdd md:w-1/2 pt-40">
          <h1 className="h1s code " role="content">
            Future-Proof Your Crypto Business
          </h1>
          <div className="b_el ">
            <div className="i_element">
              <RightArrowIcon />
            </div>
            <div className="h2s code sub_head" role="content">
              Expert Guidance from Start-up to Scale-up
            </div>
          </div>
          <div className="b_tx animate start">
            <p>
              We empower crypto and blockchain businesses with the expertise
              they need to navigate the dynamic market. Our experienced team
              offers a comprehensive suite of consulting services.
            </p>
          </div>
          <div>
            <button className="let-talk-cta">
              <span>Let&apos;s Talk</span>
            </button>
          </div>
        </div>
        <video className="my-10 md:m-5 md:w-1/2" controls width="100%">
          <source src="/advice.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Section;
