import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelTwentyOneTwentyFive = () => {

    const description = `
   Commercial Weights of 2kg down to and including 100g are made of high-quality cast iron to ensure a smooth surface finish. These weights are free from cracks, pits, blowholes, and other defects. Their shape is hexagonal, tapered upward, with one rectangular loading hole on the underside, tapering outwards along the width.
    
The weights are fitted with a cast-in mild steel handle, and only lead is used in the loading hole to ensure it does not come out easily. For protection, they are coated with corrosion-resistant black paint. The permissible error in excess for adjusted new weights shall not exceed the specified limits, ensuring accuracy and durability.
    `;
    
    const brochurePage = 8; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
       const specifications = [
        { label: "Specification", value: "National Standards Commission British Board of Trade" },
        { label: "Denomination", value: "2kg, 1kg, 500g, 100g" },
        { label: "Max Error NSC ", value: "+1300,  760,  540,  340, 240mg" },
        { label: "Max Error BOT ", value: "+400,  200,  100,  50, 30mg" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Shape", value: "Truncated Hexagonal Pyramid" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Hexagonal Shape 100 g to 2 kg As per  B.O.T"
        paragraphs={[
          'SWPI’s Model No. 21-25 Test Weights are available in denominations from 100 g to 2 kg and are manufactured from high-quality cast iron. These weights are produced as per the specifications of the National Standard Commission and/or the British Board of Trade, ensuring compliance with international standards. They are designed in a truncated hexagonal pyramid shape for stability and easy handling.',
          'From 2 kg down to 100 g, the weights include a round loading hole tapering outward on the underside, allowing proper nesting. Each weight is carefully finished to be smooth and free from pits, blow holes, and defects. Protected with a durable black corrosion-resistant paint, these test weights maintain accuracy and durability, with permissible errors strictly within the specified limits.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-21-25-test-weights-hexagonal-100g-to-2kg.webp"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Durable Cast Iron Commercial Weights – Black Coated, 2kg to 100g"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelTwentyOneTwentyFive
