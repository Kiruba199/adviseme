import CountUp from "react-countup";

const Statistics = () => {
  return (
    <section
      style={{
        paddingTop: "7rem",
      }}
      id="services"
      className="i_section section-2-container i_section2 pr"
    >
      <div>
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span>IN NUMBERS</span>
          </div>
          <h2 className="h4s animate start">Our Numbers Speak...</h2>
        </div>
        <div className="b_stats-container mb-10">
          <div className="b_stats">
            <CountUp suffix="+" start={0} end={60} duration={5}>
              {({ countUpRef }) => <h5 ref={countUpRef} />}
            </CountUp>
            <div>Projects Completed</div>
          </div>
          <div className="b_stats">
            <CountUp suffix="+" start={0} end={150} duration={5}>
              {({ countUpRef }) => <h5 ref={countUpRef} />}
            </CountUp>
            <div>Coins Managed</div>
          </div>
          <div className="b_stats">
            <CountUp suffix="+" start={0} end={120} duration={5}>
              {({ countUpRef }) => <h5 ref={countUpRef} />}
            </CountUp>
            <div>Agency Partners</div>
          </div>
          <div className="b_stats">
            <CountUp suffix="+" start={0} end={120} duration={5}>
              {({ countUpRef }) => <h5 ref={countUpRef} />}
            </CountUp>
            <div>Influencers</div>
          </div>
          <div className="b_stats">
            <CountUp suffix="+" start={0} end={15} duration={5}>
              {({ countUpRef }) => <h5 ref={countUpRef} />}
            </CountUp>
            <div>Event Partners</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
