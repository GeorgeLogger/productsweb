import Hero from "./homepage/Hero";
import Section from "./homepage/Section";
import Divider from "./homepage/Divider";

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Section section="section1" />
      <Divider />
      <Section section="section2" />
      {/* Go to Top button */}
    </>
  );
};

export default Home;
