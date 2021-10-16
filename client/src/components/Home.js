import Hero from "./homepage/Hero";
import Section from "./homepage/Section";
import Divider from "./homepage/Divider";
import ToTopButton from "./homepage/ToTopButton";

const Home = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Section section="section1" />
      <Divider />
      <Section section="section2" title="Another Example Section" />
      <ToTopButton />
    </>
  );
};

export default Home;
