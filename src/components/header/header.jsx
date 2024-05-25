import "./header.css";
import { Sling as Hamburger } from "hamburger-react";
import React from "react";
import { stack as Menu } from "react-burger-menu";

const Header = () => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <header id="header" className="outer-container">
      <div className="hidden md:flex h_container pr">
        <div className="header_flex w-full">
          <div className="b_logo">
            <img
              src="/logo.svg"
              className="attachment-full size-full"
              alt=""
              title=""
            />
          </div>
          <div className="b_socials">
            <div className="b_el2">
              <div className="i_element">
                <a href="" className="i_social i_social1" target="_blank">
                  <svg
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17.5565 0C18.9051 0 20 1.09492 20 2.44352V17.5565C20 18.9051 18.9051 20 17.5565 20H2.44352C1.09492 20 0 18.9051 0 17.5565V2.44352C0 1.09492 1.09488 0 2.44352 0L17.5565 0ZM6.26801 16.5343V7.71723H3.33676V16.5343H6.26801ZM16.8359 16.5343V11.4781C16.8359 8.76976 15.3899 7.50988 13.4617 7.50988C11.9068 7.50988 11.2104 8.365 10.8204 8.96559V7.71723H7.88988C7.92875 8.54461 7.88988 16.5343 7.88988 16.5343H10.8204V11.6102C10.8204 11.3466 10.8393 11.0832 10.917 10.8948C11.1285 10.3684 11.611 9.82316 12.4207 9.82316C13.4806 9.82316 13.9053 10.632 13.9053 11.8168V16.5343H16.8359ZM4.82219 3.4657C3.8193 3.4657 3.16406 4.12504 3.16406 4.98922C3.16406 5.83523 3.79938 6.51273 4.7834 6.51273H4.8023C5.82438 6.51273 6.46059 5.83523 6.46059 4.98922C6.44164 4.12625 5.82617 3.46758 4.82219 3.4657Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="i_element">
                <a
                  href="https://twitter.com"
                  className="i_social i_social2"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M0.0520984 0L8.30221 11.0312L0 20H1.86849L9.13707 12.1477L15.0099 20H21.3684L12.6541 8.34833L20.3818 0H18.5133L11.8193 7.23185L6.41066 0H0.0520984ZM2.79986 1.37634H5.721L18.6202 18.6235H15.6991L2.79986 1.37634Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="b_el2">
              <div className="i_element">
                <a
                  href="https://t.me/anovello"
                  className="i_social i_social3"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={18}
                    viewBox="0 0 20 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.32 16.9825C15.5884 17.1725 15.9342 17.22 16.2425 17.1033C16.5509 16.9858 16.7775 16.7225 16.8459 16.4033C17.57 13 19.3267 4.38583 19.9859 1.29C20.0359 1.05667 19.9525 0.814168 19.7692 0.658335C19.5859 0.502502 19.3317 0.457501 19.105 0.541668C15.6109 1.835 4.85003 5.8725 0.451693 7.5C0.172526 7.60333 -0.0091403 7.87167 2.6369e-05 8.16583C0.0100264 8.46083 0.20836 8.71667 0.494193 8.8025C2.46669 9.3925 5.05586 10.2133 5.05586 10.2133C5.05586 10.2133 6.26586 13.8675 6.89669 15.7258C6.97586 15.9592 7.15836 16.1425 7.39919 16.2058C7.63919 16.2683 7.89586 16.2025 8.07503 16.0333C9.08836 15.0767 10.655 13.5975 10.655 13.5975C10.655 13.5975 13.6317 15.78 15.32 16.9825ZM6.14503 9.75167L7.54419 14.3667L7.85503 11.4442C7.85503 11.4442 13.2609 6.56834 16.3425 3.78917C16.4325 3.7075 16.445 3.57084 16.37 3.475C16.2959 3.37917 16.1592 3.35667 16.0567 3.42167C12.485 5.7025 6.14503 9.75167 6.14503 9.75167Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="i_element">
                <a href="" className="i_social i_social4" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={15}
                    viewBox="0 0 20 15"
                    fill="none"
                  >
                    <path
                      d="M10 8.09417L0.0125 0H19.9875L10 8.09417ZM10 10.2392L0 2.135V15H20V2.135L10 10.2392Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
              <div className="i_element">
                <a
                  style={{
                    height: 50,
                    display: "flex",
                    alignItems: "center",
                  }}
                  href=""
                  className="i_social h-[30px] i_social4 flex items-center justify-center"
                  target="_blank"
                >
                  <svg
                    width="35"
                    height="34"
                    viewBox="0 0 35 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_528_2)">
                      <path
                        d="M11.5039 8.5C13.7582 8.5 15.9203 9.39553 17.5143 10.9896C19.1084 12.5837 20.0039 14.7457 20.0039 17C20.0039 19.2543 19.1084 21.4163 17.5143 23.0104C15.9203 24.6045 13.7582 25.5 11.5039 25.5C9.24957 25.5 7.08756 24.6045 5.4935 23.0104C3.89944 21.4163 3.00391 19.2543 3.00391 17C3.00391 14.7457 3.89944 12.5837 5.4935 10.9896C7.08756 9.39553 9.24957 8.5 11.5039 8.5ZM24.2539 9.91667C26.3789 9.91667 27.7956 13.0886 27.7956 17C27.7956 20.9114 26.3789 24.0833 24.2539 24.0833C22.1289 24.0833 20.7122 20.9114 20.7122 17C20.7122 13.0886 22.1289 9.91667 24.2539 9.91667ZM29.9206 10.625C30.4589 10.625 30.9292 11.7966 31.1672 13.8068L31.2338 14.4344L31.2607 14.7673L31.3032 15.4672L31.3174 15.8341L31.3344 16.6005L31.3372 17L31.3344 17.3995L31.3174 18.1659L31.3032 18.5343L31.2607 19.2327L31.2324 19.5656L31.1687 20.1932C30.9292 22.2048 30.4603 23.375 29.9206 23.375C29.3822 23.375 28.9119 22.2034 28.6739 20.1932L28.6073 19.5656C28.5976 19.4547 28.5886 19.3437 28.5804 19.2327L28.5379 18.5328C28.5324 18.4106 28.5277 18.2882 28.5237 18.1659L28.5067 17.3995V16.6005L28.5237 15.8341L28.5379 15.4657L28.5804 14.7673L28.6087 14.4344L28.6725 13.8068C28.9119 11.7952 29.3808 10.625 29.9206 10.625Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_528_2">
                        <rect
                          width="34"
                          height="34"
                          fill="white"
                          transform="translate(0.169922)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
            <div className="i_element motion_js" data-body="vis_menu"></div>
          </div>
          <div className="b_link">
            <a href="" className="button style1">
              <span>
                <font>Let&apos;s Talk</font>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="md:hidden backdrop-blur-md	 bg-[rgba(255,255,255,.1)] px-2 flex justify-between items-center">
        <div className="b_logo w-[150px]">
          <img
            src="/logo.svg"
            className="attachment-full size-full"
            alt=""
            title=""
          />
        </div>
        <div>
          <div className="inner-container">
            <Hamburger
              onToggle={(toggle) => {
                if (toggle) {
                  document.body.style.overflow = "hidden";
                } else {
                  document.body.style.overflow = "auto";
                }
                setOpen(toggle);
              }}
              size={20}
            />
          </div>

          <Menu
            right
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            menuClassName="bg-[rgba(255,255,255,.1)] w-full px-5 py-5 flex justify-between items-center"
            overlayClassName="blur-md"
            className="menu-width"
            isOpen={isOpen}
          >
            <a
              href="/"
              className="active mt-10 text-3xl semibold"
              target="_self"
            >
              Home
            </a>
            <a
              href="#services"
              className="active text-3xl mt-5 semibold"
              target="_self"
            >
              Services
            </a>
            <a
              href="#clients"
              className="active text-3xl mt-5  semibold"
              target="_self"
            >
              Clients
            </a>
            <a
              href="#faq"
              className="active mt-5  text-3xl semibold"
              target="_self"
            >
              FAQ
            </a>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
