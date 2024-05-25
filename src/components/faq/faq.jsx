import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import React from "react";

const faq = [
  {
    question:
      "What services does AdviceMe provide to crypto and blockchain businesses?",
    ans: "AdviceMe offers a wide range of consulting services tailored specifically for crypto and blockchain-based businesses. This includes strategic planning, market analysis, regulatory compliance, technology implementation, business development, and more across the full business lifecycle.",
  },
  {
    question: "How does AdviceMe differentiate itself from competitors?",
    ans: "AdviceMe differentiates itself through its team-based approach, bringing together experienced professionals with diverse expertise to provide a more comprehensive and balanced consulting service compared to competitors who may rely on individual consultants. This allows AdviceMe to offer a higher quality of service and outcomes for clients.",
  },
  {
    question:
      "Can you share examples of AdviceMe's successful projects or clients?",
    ans: "AdviceMe has successfully worked with numerous crypto exchanges, blockchain startups, DeFi platforms, and other businesses in the industry. While we respect client confidentiality, we are happy to discuss relevant case studies and examples of our work upon request.",
  },
  {
    question: "What are the qualifications of AdviceMe's core staff members?",
    ans: "The core staff at AdviceMe consists of seasoned professionals with extensive experience in crypto, blockchain, finance, technology, and business consulting. Our team members have held leadership roles at major crypto exchanges, blockchain companies, and consulting firms, bringing a wealth of real-world expertise to every project.",
  },
  {
    question:
      "How does AdviceMe tailor its services to individual client needs?",
    ans: "AdviceMe tailors its consulting services by first conducting a thorough assessment of the client's business, goals, challenges, and unique circumstances. We then develop a customized plan of action and assemble the optimal team to execute it, drawing upon our broad range of skills and experience. Our approach is highly flexible and iterative to adapt to the client's evolving needs.",
  },
  {
    question:
      "Does AdviceMe offer ongoing support beyond initial consulting projects?",
    ans: "Yes, AdviceMe provides ongoing support and guidance to clients beyond the initial consulting projects. We view our relationships as long-term partnerships, and we are committed to helping our clients succeed at every stage of their growth. Our team is always available to provide advice, troubleshoot issues, and help implement recommendations.",
  },
  {
    question:
      "What is the process for engaging AdviceMe's consulting services?",
    ans: "To get started with AdviceMe's consulting services, businesses can contact us through our website or by email. We will schedule an initial consultation to discuss your needs and goals, and provide a proposal outlining our recommended approach and timeline. Once engaged, we will work closely with you to ensure a smooth and successful project.",
  },
];

const Accordions = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {faq.map((item, index) => (
      <Accordion.Item
        key={index}
        className="AccordionItem"
        value={`item-${index}`}
      >
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>{item.ans}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

// eslint-disable-next-line react/display-name
const AccordionTrigger = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames(
          "AccordionTrigger",
          className,
          "px-[15px] py-[5px] md:px-[30px] md:py-[10px] lg:px-[45px] lg:py-[15px]  text-sm md:text-lg lg:text-xl"
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        {/* <ChevronDownIcon className="AccordionChevron" aria-hidden /> */}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

// eslint-disable-next-line react/display-name
const AccordionContent = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText px-[15px] py-[20px] md:px-[30px] md:py-[30px] lg:px-[45px] lg:py-[15px] text-sm md:text-lg lg:text-xl">
        {children}
      </div>
    </Accordion.Content>
  )
);

const FAQ = () => {
  return (
    <section
      id="faq"
      className="i_section section-2-container py-20 i_section-2 pr"
    >
      <img
        style={{
          position: "absolute",
          height: "100%",
        }}
        className="i_ellipse"
        alt="decor"
        src="/ellipse_teal.png"
        width="2393"
        height="985"
      ></img>
      <div className=" pr">
        <div className="i_pdd pr">
          <div className="h3s animate start ">
            <span className="translate-x-[-50%]">FAQ</span>
          </div>
          <h2 className="h4s animate start h4s text-2xl md:text-3xl lg:text-3xl  xl:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="i_pdd pr faq-container max-w-full md:max-w-[80%] lg:max-w-[75%]">
          <Accordions />
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default FAQ;
