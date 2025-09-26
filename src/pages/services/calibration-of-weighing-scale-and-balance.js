import React from 'react'

import CertificatesAndStandards from "@/components/CalibrationOfWeights/CertificatesAndStandards";
import HeroSection from "@/components/CalibrationOfWeights/Herosection";
import Introduction from "@/components/CalibrationOfWeights/Introduction";
import ScopeAccreditation from "@/components/CalibrationOfWeights/ScopeAccreditation";
import Layout from "@/layout/Layout";

const calibrationScale = () => {
  return (
    <Layout>
    <HeroSection 
image="/Images/shanker-wire/Calibration-of-weights.webp"
heading="Calibration of Weighing Scale and Balance"
description="NABL Accredited Calibration Laboratory | On-site & In-house Calibration Services"
/>        
<Introduction paragraph="Calibration of weighing scales and balances is critical to maintain precision, consistency, and trust in every measurement. Inaccurate weighing can cause costly errors, regulatory issues, and compromise product quality across industries like pharmaceuticals, food & beverages, and manufacturing."
  paragraphTwo="At Shanker Wire Products Industries (SWPI), we ensure accuracy through our NABL accredited calibration laboratory, delivering NABL certified calibration services in India. Our team provides complete calibration and certification for weighing balances and scales of various capacities, ensuring compliance with national and international standards. With a commitment to reliability and traceability, we help industries achieve error-free operations and meet legal metrology requirements."
/>
< CertificatesAndStandards/>
< ScopeAccreditation/>
 
    

</Layout>
  )
}

export default calibrationScale
