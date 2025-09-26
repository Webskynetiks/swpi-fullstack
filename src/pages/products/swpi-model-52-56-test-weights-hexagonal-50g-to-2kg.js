import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelFivtyTwoFivtySix = () => {

    const description = `
    Commercial Weights of 2kg down to and including 50g are made of high-quality cast iron to provide a smooth surface finish. These weights are free from cracks, blowholes, and other defects. The shape is hexagonal, tapered downward. While nesting, weights of denomination from 2kg down to and including 50g have one rounded loading hole tapering outside in the underside.
    
    The weights are protected with a corrosion-resistant black paint finish. The permissible error in excess for adjusted new weights must not exceed specified limits, ensuring accuracy and durability in regular use.
    `;

    const brochurePage = 15; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "Bureau of Indian Standards GCC Countries" },
        { label: "Denomination", value: "2kg, 1kg, 500kg, 200kg, 100g, 50g" },
        { label: "Max Error ", value: "+300, 150, 75, 30, 15, 10mg" },
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
        title="Hexagonal shape 50g to 2kg  As per  BIS"
        paragraphs={[
          'SWPI’s Model No. 52-56 Test Weights are manufactured in denominations from 50 g to 2 kg, using high-quality cast iron conforming to Grade 15 of IS:210:1962 and designed as per IS 1056–1965. These weights feature a hexagonal tapered shape that ensures stability and easy handling during use.',
          'For denominations from 2 kg down to 50 g, each weight includes a round loading hole tapering outward at the underside, enabling proper nesting. Finished with a smooth, defect-free surface, the weights are free from pits, blow holes, and other irregularities. A durable black corrosion-resistant paint coating protects the weights from rust, ensuring long-lasting accuracy and reliability.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-52-56-test-weights-hexagonal-50g-to-2kg.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="SWPI Cast Iron Commercial Weights (2kg to 50g) – Durable & Corrosion-Resistant"
      description={description}
      specifications={specifications}
     
      />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelFivtyTwoFivtySix
