import BenefitSection from './components/BenefitSection';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero'
import NavBar from './components/NavBar';
import Footer from './components/Footer'
import AboutUs from './components/AboutUs';
export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <ContactForm/>
      <BenefitSection/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
