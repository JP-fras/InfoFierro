
import HeroSection from '../components/sections/HeroSection';
import PhotoUploader from '../components/sections/PhotoUploader';
<<<<<<< HEAD
//import FeaturesSection from '../components/sections/FeaturesSection';
import FaqSection from '../components/sections/FaqSection';
=======
import FeaturesSection from '../components/sections/FeaturesSection'
import FaqSection from '../components/sections/FaqSection'
>>>>>>> origin/raigo

function Inicio() {
  return (
    <div>
<<<<<<< HEAD
      <div id="inicio"><HeroSection /></div>
      <div id="photo"><PhotoUploader/></div>
      <div id="faq"><FaqSection/></div>
=======
      <HeroSection />
      <PhotoUploader />
      <FaqSection/>
      <FeaturesSection/>
>>>>>>> origin/raigo
    </div>
  );
}

export default Inicio;