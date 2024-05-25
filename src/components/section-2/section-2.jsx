import "./section-2.css";

const Section2 = () => {
  return (
    <section
      id="services"
      className="i_section section-2-container i_section2 i_section-2 pr"
    >
      <div>
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span className="translate-x-[-50%]">Our key</span>
          </div>
          <h2 className="h4s animate start h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
            Our Keys to Success
          </h2>
        </div>
        <div className="l_services flex gap-2 md:gap-5 lg:gap-[30px] justify-evenly xl:gap-[64px] flex-wrap	">
          <div className="i_item basis-[40%] md:basis-[20%] ">
            <a>
              <div className="b_item">
                <img
                  style={{
                    objectPosition: "3px -2px",
                  }}
                  src="/container1.jpg"
                />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    Minimize Risk & Maximize ROI:
                  </h2>
                  <p className="mt-1 text-sm ">
                    Our technical expertise empowers you to navigate the crypto
                    landscape quickly and efficiently, saving you time and
                    money.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item basis-[40%] md:basis-[20%]">
            <a>
              <div className="b_item">
                <img
                  style={{
                    objectPosition: "-2px -2px",
                  }}
                  src="/container2.jpg"
                />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    Become an Industry Leader:
                  </h2>
                  <p className="mt-1 text-sm text-sm">
                    We integrate seamlessly into your team, providing the
                    guidance and support you need to excel in the competitive
                    blockchain market.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item basis-[40%] md:basis-[20%]">
            <a>
              <div className="b_item">
                <img
                  style={{
                    objectPosition: "0px -2px",
                  }}
                  src="/container3.jpg"
                />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    Timely Market Entry
                  </h2>
                  <p className="mt-1 text-sm text-sm">
                    We prioritize your marketing initiatives to successful and
                    on-time launch, ensuring you capitalize on market
                    opportunities.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item basis-[40%] md:basis-[20%]">
            <a>
              <div className="b_item">
                <img src="/Container.png" />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    PROMISING quality solutions
                  </h2>
                  <p className="mt-1 text-sm text-sm">
                    Discover our cutting-edge strategies designed to deliver
                    high-quality, cost-effective products for our clients.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
