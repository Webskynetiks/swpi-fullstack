import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelFortyEightFiftyOne = () => {

    const description = `
   Commercial Weights of 50kg down to and including 5kg are made of high-quality cast iron to ensure a smooth surface finish. These weights are free from cracks, pits, blowholes, and other defects. Their shape is hexagonal, tapered upward, with one rectangular loading hole on the underside, tapering outwards along the width.
    
The weights are fitted with a cast-in mild steel handle, and only lead is used in the loading hole to ensure it does not come out easily. For protection, they are coated with corrosion-resistant black paint. The permissible error in excess for adjusted new weights shall not exceed the specified limits, ensuring accuracy and durability.
    `;

    const brochurePage = 14; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
       const specifications = [
        { label: "Specification", value: "Bureau of Indian Standards GCC Countries" },
        { label: "Denomination", value: "50kg, 20kg, 10kg, 5kg" },
        { label: "Max Error ", value: "+7500, 3000,  1500,  750mg" },
        { label: "Max Error (M2)", value: "1600 mg (10kg) to 16 mg (100g)" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with corrosion resistant paint" },
        { label: "Shape", value: "Hexagonal" },
        { label: "Marking", value: "Denomination (English/Hindu-Arabic/Arabic), Logo (English)" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Hexagonal shape 5kg to 50kg As per  BIS"
        paragraphs={[
          'SWPI’s Model No. 48-51 Test Weights are manufactured in denominations from 5 kg to 50 kg, using high-quality pig iron conforming to Grade 15 of IS:210:1962 as per IS 1056–1965 standards. These weights are designed in a hexagonal tapered upward shape, ensuring durability and stability during use.',
          'Each weight features a rectangular loading hole on the underside, tapering outward along the width, and includes a cast-in mild steel handle (IS:1977–1962) for easy handling. The loading cavity is sealed with lead to prevent displacement, ensuring long-term accuracy. Finished with a smooth, defect-free surface, the weights are coated with black corrosion-resistant paint to protect against rust. These features make SWPI’s hexagonal test weights reliable for consistent verification and calibration.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-48-51-test-weights-hexagonal-5kg-to-50kg.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Hexagonal Cast Iron Commercial Weights – 50kg to 5kg with Mild Steel Handle"
      description={description}
      specifications={specifications}
     
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelFortyEightFiftyOne
