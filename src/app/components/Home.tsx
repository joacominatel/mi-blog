import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection";
import AboutThisBlog from "./AboutThisBlog/AboutThisBlog";
import ParticlesBackground from "./details/ParticlesBG";


export default function HomeBG() {

  return (
    <div className="relative h-screen">
      <ParticlesBackground />
      <HomeSection />
      <AboutSection />
      <AboutThisBlog />
    </div>
  );
}
