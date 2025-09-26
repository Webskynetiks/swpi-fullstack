import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const CalibrationWeightsHandle = () => {

    const description = `
    SWPI’s Cast Iron Test Weights are designed for use in the verification or calibration of weights and for weighing instruments of medium or ordinary accuracy class. They are manufactured from high-quality cast iron to provide a smooth surface finish and are free from cracks and pits.
    
   Weights with nominal values from 5kg to 50kg are shaped as rectangular parallelepipeds with rounded edges and a rigid mild steel handle. Each weight has an adjusting cavity as per design, with lead used for fine adjustment of mass. To prevent rusting, the weights are coated with durable black paint for long-lasting protection.
    `;

    const brochurePage = 5; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "OIML R-111 (Part-1)" },
        { label: "Denomination", value: "50kg, 20kg, 10kg, 5kg," },
        { label: "Max Error (M1)", value: "2500mg, 1000mg, 500mg,250mg" },
        { label: "Max Error (M2)", value: "8000mg, 3000mg, 1600mg, 800mg" },
        { label: "Max Error (M3)", value: "25000mg,  10000mg, 5000mg,  2500mg" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with black PU Paint" },
        { label: "Shape", value: "Parallelopipedic" },
        { label: "Adjusting Cavity", value: "Inside the tubular handle duly closed by iron disc & Sealed by lead plug" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="SWPI Model No. 1-4(c) Calibration Weights (5 kg to 50 kg) – Adjusting Cavity in Handle"
        paragraphs={[
          'SWPI’s Calibration Weights, Model No. 1-4(c), are designed for use in the verification and calibration of weighing instruments and comply with the OIML R-111-1-2004 Recommendation [Figure A.2, Type 1]. These weights are also suitable for the verification and calibration of weights of a lower accuracy class. Manufactured from high-quality pig iron, they feature a smooth surface finish that prevents the accumulation of foreign materials, ensuring long-lasting accuracy.',
          'Each test weight, ranging from 5 kg to 50 kg, is built with smooth, plane walls that allow multiple pieces to be stacked securely. The adjusting cavity is located in the handle and sealed with a lead plate, providing sufficient room for future mass adjustments caused by wear and tear. These robust calibration weights are a reliable standard for maintaining measurement accuracy across industries'
         
        ]}
        imageSrc="/Images/shanker-wire/products/calibration-weights-adjusting-cavity-in-the-handle.png"

        brochureLink={brochureLink}


      />
      <ProductSpecification
      title="SWPI Cast Iron Test Weights (5kg–50kg) – Precision Calibration & Verification"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default CalibrationWeightsHandle
