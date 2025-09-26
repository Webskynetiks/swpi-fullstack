import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelEighteenTweenty = () => {

    const description = `
   SWPI’s Model No. 1-4(b) Calibration Weights are expertly manufactured to meet SABS and B.O.T. recommendations, making them ideal for the calibration and verification of weighing machines. Crafted from premium pig iron, these weights are finished with a smooth surface that minimizes the accumulation of dust or foreign particles, thereby enhancing their durability and ensuring consistent accuracy over time.
   
   Available in denominations ranging from 5 kg to 50 kg, these calibration weights are designed with flat, uniform walls that enable safe and secure stacking. Each piece features a bottom adjusting cavity, sealed with pure lead, allowing for precise mass adjustments to offset natural wear and extend usability. Engineered for precision and long-term reliability, these weights serve as a dependable choice for industrial and laboratory calibration requirements.
    `;

    const brochurePage = 4; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "SABS" },
        { label: "Denomination", value: "50kg, 20kg, 10kg, 5kg " },
        { label: "Max Error M1", value: "2500, 1000, 500,  250mg" },
        { label: "Max Error M2", value: "8000, 3000, 1600,  800mg" },
        { label: "Max Error M3", value: "25000, 10000, 5000,  2500mg" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U black paint" },
        { label: "Shape", value: "Parallelopipedic" },
        { label: "Adjusting Cavity", value: "At the bottom surface of the weight" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="SWPI Model No. 1-4(b) Calibration Weights (5 kg to 50 kg) – Adjusting Cavity at Bottom"
        paragraphs={[
          'SWPI’s Model No. 1-4(b) Calibration Weights are designed for the calibration of weighing machines and are manufactured in accordance with SABS and B.O.T. recommendations. Constructed from high-quality pig iron, these weights feature a smooth surface finish that prevents the accumulation of foreign materials, ensuring long-lasting accuracy and reliability.',
          'Available in denominations from 5 kg to 50 kg, these test weights are built with smooth, plane walls, allowing multiple pieces to be stacked neatly. The adjusting cavity is located at the bottom and is designed with sufficient room to accommodate future mass adjustments caused by wear and tear. Pure lead is used for precise adjustment, ensuring that each calibration weight meets the required accuracy standards.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-1-4b-calibration-weights-bottom-cavity-5kg-to-50kg.png"
     
        brochureLink={brochureLink}
     />
      <ProductSpecification
      title="SWPI Model No. 1-4(b) Calibration Weights (5kg–50kg) – Durable & Accurate"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelEighteenTweenty
