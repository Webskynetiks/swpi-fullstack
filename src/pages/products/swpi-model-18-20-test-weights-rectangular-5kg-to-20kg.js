import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelEighteenTweenty = () => {

    const description = `
   SWPI Model No. 18-20 Test Weights, available in 5 kg to 20 kg denominations, are crafted in a rectangular design with a bottom adjusting cavity. Developed in line with B.O.T. recommendations, these weights are engineered for precise calibration of weighing machines. Made from superior-grade pig iron, they feature a fine surface finish that resists dust and foreign material buildup, ensuring consistency and accuracy in every use.
    
   Each unit is designed with smooth, flat walls that allow safe and stable stacking during calibration processes. The bottom adjusting cavity, sealed with pure lead, offers adequate provision for fine adjustments to compensate for natural wear over time. Built for strength and precision, these test weights provide dependable performance and long-lasting durability for a wide range of industrial calibration applications.
    `;


    const brochurePage = 7; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "Bristish Board of Trade" },
        { label: "Denomination", value: "20kg, 10kg, 5kg, " },
        { label: "Max Error ", value: "+3200, 1600, 800 mg" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U black paint" },
        { label: "Shape", value: "Reactangular" },
        { label: "Adjusting Cavity", value: "Rectangular shape on the under surface" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Rectangular Shape Adjusting cavity at the bottom 5 kg to 20 kg  As per  B.O.T"
        paragraphs={[
          'SWPI’s Model No. 18-20 Test Weights are manufactured in denominations from 5 kg to 20 kg as per B.O.T. Recommendation, specifically designed for the calibration of weighing machines. These weights are made from high-quality pig iron with a smooth surface finish that prevents accumulation of foreign materials and ensures accurate performance.',
          'Each weight has smooth, plane walls allowing multiple pieces to be stacked securely. The adjusting cavity is located at the bottom, sealed with pure lead, and provides sufficient room for future adjustment of mass due to wear and tear. With their durable construction and precise adjustment capability, these test weights are reliable for long-term calibration needs.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-18-20-test-weights-rectangular-5kg-to-20kg.png"
      
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="High-Quality Rectangular Test Weights (5kg to 20kg) – SWPI Model 18-20"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelEighteenTweenty
