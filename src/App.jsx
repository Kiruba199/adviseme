import Header from "./components/header/header";
import Section1 from "./components/section-1/section-1";
import Section2 from "./components/section-2/section-2";
import Section3 from "./components/section-3/section-3";
import OurPartner from "./components/ourpartner/partner";
import OurClient from "./components/ourclient/ourclient";
import OurMediaPartner from "./components/ourMediaPartner/ourMediaPartner";
import LetsTalk from "./components/letsTalk/letsTalk";
import Footer from "./components/footer/footer";
import FAQ from "./components/faq/faq";
import Statistics from "./components/statistics/statistics";

function App() {
  return (
    <>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <OurPartner />
      <Statistics />
      <OurClient />
      <OurMediaPartner />
      <FAQ />
      <LetsTalk />
      <Footer />
    </>
  );
}

export default App;
