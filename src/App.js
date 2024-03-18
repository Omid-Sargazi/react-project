import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Program" title="what we offer" />
        <Programs />
        <About />
        <Title subtitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subtitle="Testimonials" title="What Students Says" />
        <Testimonials />
      </div>
    </div>
  );
}

export default App;
