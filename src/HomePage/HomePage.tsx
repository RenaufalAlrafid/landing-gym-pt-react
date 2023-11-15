import AboutSection from "./component/AboutSection";
import BMICalculatorSection from "./component/BMICalculatorSection";
import HomeSection from "./component/HomeSection";
import { PortofolioSection } from "./component/PortofolioSection";
import ProgramSection from "./component/ProgramSection";



export default function HomePage() {
  return (
    <div className="bg-primary-base">
      <HomeSection></HomeSection>
      <ProgramSection></ProgramSection>
      <AboutSection></AboutSection>
      <PortofolioSection></PortofolioSection>
      <BMICalculatorSection></BMICalculatorSection>
    </div>
    
  )
}
