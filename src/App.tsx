import { About } from "./components/About";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Skills } from "./Skills";
import { Work } from "./Work";
import { Blog } from "./pages/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
