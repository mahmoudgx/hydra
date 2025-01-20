import Build from "./components/Build";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import How from "./components/How";
import Intro from "./components/Intro";
import Use from "./components/Use";

const App = () => {
  return (
    <>
      <div
        style={{
          backgroundPosition: "50% 15%",
          backgroundAttachment: "scroll",
        }}
        className="  md:bg-[url('D:\Projects\hydra\src\assets\download.svg')] bg-no-repeat bg-cover"
      >
        <Header />
        <Hero />
      </div>
      <Intro />
      <Build />
      <Use />
      <How />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
