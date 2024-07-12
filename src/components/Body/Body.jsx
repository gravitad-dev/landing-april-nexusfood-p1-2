import OneSection from "../Sections/OneSection";
import TwoSection from "../Sections/TwoSection";
import ThreeSection from "../Sections/ThreeSection";
import FourSection from "../Sections/FourSection";
import FiveSection from "../Sections/FiveSection";
import Project from "../Sections/Project";

function Body() {
  return (
    <div>
      <section id='aboutus'>
        <OneSection />
      </section>
      <section id='overview'>
        <TwoSection />
      </section>
      <section id='professionals'>
        <ThreeSection />
      </section>
      <section id='lifestyle'>
        <FourSection />
      </section>
      <section id='project' className='mb-[72px]'>
        <Project />
      </section>
    </div>
  );
}

export default Body;
