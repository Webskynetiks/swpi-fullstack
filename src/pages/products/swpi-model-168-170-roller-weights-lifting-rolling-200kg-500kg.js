import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneSixtyEightOneSeventy = () => {

  const brochurePage = 22; // change to the correct page for this product
  const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;

    const description = `
SWPI’s Roller Weights are manufactured from high quality cast iron. The surface is smooth free from cracks, pits, blow-holes and other defects with rounded edges. They are fitted with mild steel handle suitable for rolling and lifting. Adjusting cavity is sealed by a lead plug. Weights are protected by a corrosion resistant coat of black colour paint
`;    
       const specifications = [
        { label: "Denomination", value: "500kg  250kg  200kg " },
        { label: "Max Error  ", value: "160,   80,  60 g" },      
        { label: "Material", value: "cast iron" },
        { label: "Finish", value: "Smooth surface laquered with  corrosion resistant paint" },
        { label: "Markings", value: "Denomination, Manufacturer's logo Identification serial Number" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="SWPI Model No. 168-170 Roller Weights (200 kg to 500 kg) – Suitable for Lifting & Rolling"
        paragraphs={[
          'SWPI’s Model No. 168-170 Roller Weights are manufactured in the range of 200 kg, 250 kg, and 500 kg, specifically designed for the calibration and verification of high-capacity weighing machines. These weights feature a roller shape with a sturdy mild steel handle, making them highly suitable for both lifting by crane and easy rolling for transportation. Their user-friendly design ensures convenient handling and stacking during calibration tasks.',

          'Constructed from high-quality pig iron, these test weights feature a smooth surface finish to prevent accumulation of foreign materials, ensuring durability and consistent accuracy. The adjusting cavity is securely sealed with a lead plug and designed in such a way that water does not enter or get trapped inside, enhancing long-term reliability and compliance with calibration standards.'         
        ]}
        imageSrc="/Images/shanker-wire/products/roller-weights.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="High-Quality Cast Iron Roller Weights with Handle – Durable Calibration Weights"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneSixtyEightOneSeventy
