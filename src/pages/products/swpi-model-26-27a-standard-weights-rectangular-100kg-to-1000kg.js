import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelTwentySixTwentySeven = () => {

    const description = `
Standard Weights (OIML R47) are used for testing and adjusting high-capacity weighing machines in medium and ordinary accuracy classes. SWPI’s Standard Weights are manufactured from high-quality cast iron and are free from sharp edges and corners. Each weight is fitted with a rigid mild steel handle for safe handling.

An adjusting cavity is included, designed with watertight and airtight closures to maintain long-term accuracy. The weights are coated with durable paint for corrosion resistance and are suitable for stacking, making them practical and reliable for industrial use.    `;


    const brochurePage = 9; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;

       const specifications = [
        { label: "Specification", value: "OIML R 47" },
        { label: "Denomination", value: "100kg, 200kg, 500kg, 1000kg" },
        { label: "Max Error 0.5/10000 ", value: "5,  10,  25,  50g" },
        { label: "Max Error 1/10000 ", value: "10,  20,  50,  100g" },
        { label: "Max Error 1.7/10000 ", value: "17,  33,  85,  170g" },
        { label: "Max Error 3.3/10000 ", value: "33,  66,  170,  330g" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Shape", value: "Rectangular" },
        { label: "Adjusting cavity", value: "sealed with lead plate over mild steel plate in such a way to make it water-tight  and air-tight" },
        { label: "Markings", value: "Denomation,logo and Identification number" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="SWPI Model No. 26-27(a) Standard Weights (100 kg to 1000 kg) – Rectangular Shape"
        paragraphs={[
          'SWPI’s Model No. 26-27(a) Standard Weights are manufactured in denominations from 100 kg to 1000 kg as per the OIML R-47 Recommendation. These standard weights are specifically designed for the calibration of high-capacity weighing machines, ensuring reliable and accurate performance. Made from high-quality pig iron, they feature a smooth surface finish that prevents the accumulation of foreign materials.',
          'The adjusting cavity is carefully designed to prevent water from entering or getting trapped, ensuring durability in all working conditions. Each weight is stackable and crane-lift compatible, making them highly practical for industrial applications. With robust construction and precise calibration design, SWPI’s standard weights provide dependable accuracy and long service life.'         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-26-27a-standard-weights-rectangular-100kg-to-1000kg.webp"
      
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="SWPI Standard Weights (OIML R47) – Cast Iron Calibration Weights with Handle"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelTwentySixTwentySeven
