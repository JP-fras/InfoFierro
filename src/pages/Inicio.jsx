
import HeroSection from '../components/sections/HeroSection';
import AnalizarBtn from '../components/ui/AnalizarBtn';
import FeaturesSection from '../components/sections/FeaturesSection'
import FaqSection from '../components/sections/FaqSection'

function Inicio() {
  return (
    <div>
      <div id="inicio"><HeroSection /></div>
      <div id="photo" className='mb-10 mx-15'><AnalizarBtn/></div>
      <div id="caracte"><FeaturesSection/></div>
      <div id="faq"><FaqSection/></div>
    </div>
  );
}

export default Inicio;