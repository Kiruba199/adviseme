const Footer = () => {
  return (
    <footer className="py-5">
      <div className="hidden md:block ">
        <img
          src="/logo.svg"
          className="attachment-full w-[200px] ml-3 size-full"
          alt=""
          title=""
        />
        <div className="text-right">Copyright © 2024 adviceme</div>
        <div className="footer-links">
          <a>Home</a>
          <a>Services</a>
          <a>Clients</a>
          <a>faq</a>
        </div>
      </div>

      <div className="md:hidden flex justify-center text-center p-5 flex-col align-center">
        <img
          src="/logo.svg"
          className="attachment-full w-1/3 mx-auto size-full"
          alt=""
          title=""
        />

        <div className="flex mt-4 mb-5 uppercase gap-5 justify-center">
          <a>Home</a>
          <a>Services</a>
          <a>Clients</a>
          <a>faq</a>
        </div>
        <div>Copyright © 2024 adviceme</div>
      </div>
    </footer>
  );
};

export default Footer;
