
import HeroSection from '../components/sections/HeroSection';
import PhotoUploader from '../components/sections/PhotoUploader';
//import FeaturesSection from '../components/sections/FeaturesSection';
import FaqSection from '../components/sections/FaqSection';

function Inicio() {
  return (
    <div>
      <div id="inicio"><HeroSection /></div>
      <div id="photo"><PhotoUploader/></div>
      <div id="faq"><FaqSection/></div>
    </div>
  );
}

export default Inicio;