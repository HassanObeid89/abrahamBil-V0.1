import BenefitSection from './components/BenefitSection';
import ContactForm from './components/ContactForm';
import Hero from './components/Hero'
import NavBar from './components/NavBar';
export default function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <ContactForm/>
      <BenefitSection/>
    </div>
  );
}
