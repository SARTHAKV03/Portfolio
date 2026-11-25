import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Chatbot from './components/Chatbot';
import Hero from './sections/Hero';
import QuickScan from './sections/QuickScan';
import ValueProps from './sections/ValueProps';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Mindset from './sections/Mindset';
import Architecture from './sections/Architecture';
import Credentials from './sections/Credentials';
import WhyHireMe from './sections/WhyHireMe';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <div className="copper-mesh fixed inset-0 -z-10" aria-hidden="true" />
      <Header />
      <main>
        <Hero />
        <QuickScan />
        <ValueProps />
        <Projects />
        <TechStack />
        <Mindset />
        <Architecture />
        <Credentials />
        <WhyHireMe />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  );
}

export default App;
