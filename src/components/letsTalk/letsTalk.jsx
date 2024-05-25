import CheckboxInput from "../checkbox";
import "./letsTalk.css";

const LetsTalk = () => {
  return (
    <section
      style={{
        paddingTop: "7rem",
      }}
      id="letsTalk"
      className="i_section section-2-container i_section-2 pr"
    >
      <div className=" pr">
        <div className="i_pdd pr">
          <div className="h3s animate start">
            <span>CONTACT US</span>
          </div>
          <h2 className="h4s animate start text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
            Let&apos;s Talk
          </h2>
        </div>
        <div className="form-container  max-w-full md:max-w-[100%] lg:max-w-[75%]">
          <div className="form-control">
            <div className="form-label">
              Name <span className="required">*</span>
            </div>
            <div className="form-input">
              <input placeholder="Your name" />
            </div>
          </div>
          <div className="form-control">
            <div className="form-label">
              Email <span className="required">*</span>
            </div>

            <div className="form-input">
              <input placeholder="Your mail" />
            </div>
          </div>
          <div className="form-control">
            <div className="form-label">Your Website</div>
            <div className="form-input">
              <input placeholder="Your Website" />
            </div>
          </div>
          <div className="form-control">
            <div className="form-label">please provide one</div>
            <div className="socialMediaContainer">
              <input placeholder="Telegram" />
              <input placeholder="WhatsApp" />
              <input placeholder="Wechat" />
              <input placeholder="Skype" />
            </div>
          </div>
          <div className="form-control">
            <div className="form-label"> What you are interested in</div>
            <div className="form-checkbox">
              <CheckboxInput label="Media coverage" />
              <CheckboxInput label="Display advertising" />
              <CheckboxInput label="Social media / KOLs" />
              <CheckboxInput label="Partnership" />
              <CheckboxInput label="Blockchain development" />
              <CheckboxInput label="Tokenomics" />
            </div>
          </div>
          <div className="form-control">
            <div className="form-label">
              message <span className="required">*</span>
            </div>

            <div className="form-input">
              <textarea rows={7} />
            </div>
          </div>
          <div className="text-right mt-5">
            <div className="b_link">
              <a
                style={{
                  background: "none",
                }}
                href=""
                className="button style1"
              >
                <span
                  style={{
                    background: "#FFFFFF1A",
                    paddingBlock: "1rem",
                    paddingInline: "3rem",
                    fontSize: "1rem",
                    textShadow: "0px 0px 10px #ffffff",
                  }}
                >
                  SEND
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
