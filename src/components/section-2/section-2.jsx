import "./section-2.css";

const Section2 = () => {
  return (
    <section
      id="services"
      className="i_section section-2-container i_section2 i_section-2 pr"
    >
      {/* <img
        className="i_ellipse"
        alt="decor"
        src="https://blockman.pro/wp-content/themes/romanuke/inc/images/ellipse_fiolet.png"
        width={2393}
        height={985}
      /> */}

      <div>
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span className="translate-x-[-50%]">Our key</span>
          </div>
          <h2 className="h4s animate start">Our Keys to Success</h2>
        </div>
        <div className="l_services flex gap-2 md:gap-[64px] flex-wrap	">
          <div className="i_item  flex-[40%] md:flex-[20%] ">
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
                  <p>
                    Our technical expertise empowers you to navigate the crypto
                    landscape quickly and efficiently, saving you time and
                    money.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item  flex-[40%] md:flex-[20%]">
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
                  <p>
                    We integrate seamlessly into your team, providing the
                    guidance and support you need to excel in the competitive
                    blockchain market.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item  flex-[40%] md:flex-[20%]">
            <a>
              <div className="b_item">
                <img
                  style={{
                    objectPosition: "3px -2px",
                  }}
                  src="/container3.jpg"
                />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    Timely Market Entry
                  </h2>
                  <p>
                    We prioritize your marketing initiatives to successful and
                    on-time launch, ensuring you capitalize on market
                    opportunities.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="i_item  flex-[40%] md:flex-[20%]">
            <a>
              <div className="b_item">
                <img
                  style={{
                    objectPosition: "3px -2px",
                  }}
                  src="/container3.jpg"
                />
                <div className="i_tx">
                  <h2 className="h2s code" role="content">
                    Timely Market Entry
                  </h2>
                  <p>
                    We prioritize your marketing initiatives to successful and
                    on-time launch, ensuring you capitalize on market
                    opportunities.
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
