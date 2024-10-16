import Banner from "../../components/Banner/Banner";

import OurServices from "../../components/Home/OurServices/OurServices";
import AboutUsSection from "../../components/Home/AboutUsSection/AboutUsSection";
import OurTeam from "../../components/Home/OurTeam/OurTeam";
import Faq from "../../components/Home/Faq/Faq";
import Tariffs from "../../components/Home/Tariffs/Tariffs";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <OurServices />
      <AboutUsSection />
      <Tariffs />
      <OurTeam />
      <Faq />
    </div>
  );
};

export default HomePage;
