import Applications from "@/components/CalibrationOfWeights/Applications";
import CalibrationScope from "@/components/CalibrationOfWeights/CalibrationScope";
import CertificatesAndStandards from "@/components/CalibrationOfWeights/CertificatesAndStandards";
import HeroSection from "@/components/CalibrationOfWeights/Herosection";
import Introduction from "@/components/CalibrationOfWeights/Introduction";
import ScopeAccreditation from "@/components/CalibrationOfWeights/ScopeAccreditation";
import Layout from "@/layout/Layout";

export default function CalibrationOfWeights() {
    return(
        <>
        <Layout>
        <HeroSection 
  image="/Images/shanker-wire/Calibration-of-weights.webp"
  heading="Calibration of Weights"
  description="NABL Accredited Laboratory for Precision & High-Capacity Weight Calibration"
/>        
<Introduction paragraph=" Calibration of test weights and weighing balances is essential to ensure 
        consistent accuracy, compliance, and reliability across industries. 
        Without proper calibration, weighing equipment can lead to incorrect 
        results, production errors, and legal non-compliance."
        paragraphTwo=" At Shanker Wire Products industries (SWPI), we are proud to 
        operate a NABL accredited calibration laboratory, offering 
         NABL certified calibration services in India. Our laboratory 
        provides end-to-end weighing balance calibration and certification 
        for a wide range of weights, from 1 mg to 1000 kg, ensuring 
        your equipment meets international standards of accuracy and traceability."
        />
        <CalibrationScope/>
        <Applications/>
        < CertificatesAndStandards/>
        < ScopeAccreditation/>
        {/* <CertificateSlider/> */}
        

</Layout>
        </>
    )
}
