import AboutSection from "./component/AboutSection";
import HomeSection from "./component/HomeSection";
import ProgramSection from "./component/ProgramSection";


export default function HomePage() {
  return (
    <div className="bg-primary-base">
      <HomeSection></HomeSection>
      <ProgramSection></ProgramSection>
      <AboutSection></AboutSection>
    </div>
  )
}
