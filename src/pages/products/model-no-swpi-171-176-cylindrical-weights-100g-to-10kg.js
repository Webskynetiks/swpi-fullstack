import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneSeventyOneOneSeventySix = () => {

  const brochurePage = 23; // change to the correct page for this product
  const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;


    const description = `
SWPI’s Roller Weights are manufactured from high quality cast iron. The surface is smooth free from cracks, pits, blow-holes and other defects with rounded edges. They are fitted with mild steel handle suitable for rolling and lifting. Adjusting cavity is sealed by a lead plug. Weights are protected by a corrosion resistant coat of black colour paint
`;    
       const specifications = [
        { label: "Denomination", value: "5kg , 2kg , 1kg,  500g , 200g, 100g" },
        { label: "Max Error  M1", value: "250 ,   100 ,  50, 25 ,  10 , 5  mg" },      
        { label: "Max Error  M2", value: "800 ,   300 ,  160,  80 ,  30 , 16 mg" },      
        { label: "Material", value: "cast iron" },
        { label: "Finish", value: "laquered with P U paint" },
        { label: "Shape", value: "500g & above : Cylindrical with knob" },
        { label: "Shape", value: "200g & above : Cylindrical with Flat surfcae" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Cylindrical Weights as per Schengener States"
        paragraphs={[
          'Cylindrical Weights of Model No. SWPI: 171-176 are precision Test Weights commonly used as standards for the verification and calibration of weighing instruments. They are also suitable for calibration of weights with lower accuracy classes, ensuring reliable and consistent results. Designed in a cylindrical shape with knob-rounded edges, these weights are both durable and practical for daily use.',

          'Manufactured by SWPI using high-quality pig iron, the weights feature a smooth, mirror-like finish that prevents accumulation of foreign materials on the surface. The knob handle ensures they can be lifted easily by hand. The adjusting cavity is carefully designed as per specifications and sealed with a lead plug to make it water-tight, with sufficient room provided for future adjustments of mass due to wear and tear.'         
        ]}
        imageSrc="/Images/shanker-wire/products/cylindrical-weights.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="High Quality Cylindrical Weights – SWPI Model 171–176 with Knob Handle"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneSeventyOneOneSeventySix
