import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelTwentySixTwentySevenTwo = () => {

    const description = `
SWPI’s Test Weights of High Denomination are designed for verification and calibration of weights and weighing instruments of medium or ordinary accuracy class. They are manufactured from high-quality cast iron to provide a smooth surface finish and are free from cracks and pits. Weights with nominal values from 100kg to 1000kg are made in an “I” shape with rounded edges and a rigid mild steel handle.

The weights are coated with durable black paint to protect against rust and corrosion. These heavy-duty weights are suitable for stacking and can be lifted easily by crane or forklift, making them reliable for industrial applications.`;    
    
    const brochurePage = 12; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
       const specifications = [
        { label: "Specification", value: "OIML R 47" },
        { label: "Denomination", value: "1000kg, 500kg, 200kg, 100kg" },
        { label: "Max Error M1 ", value: "50,   25,   10g " },
        { label: "Max Error M1-2", value: "100,   50,   20,   10g" },
        { label: "Max Error M2", value: "160,   80,   30,   15g" },
        { label: "Max Error M2-3 ", value: "300,   160,   60,   30g" },
        { label: "Max Error M3 ", value: "500,   250,   100,   50g" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Shape", value: "Rectangular" },
        { label: "Adjusting cavity", value: "Specially Designed cavity seale by alien scew.the adjustments is made a few iron balls, which can be pulled out by a magnetic pancil, if need." },
        { label: "Markings", value: "As Desired By Buyer" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Cylindrical Shape  Suitable For Rolling"
        paragraphs={[
          'SWPI’s Model No. 26-27(d) Cylindrical Weights are manufactured in the range of 100 kg to 1000 kg as per the OIML R-47 Recommendation. These heavy-duty weights are widely used for the calibration of high-capacity weighing machines, ensuring precise and reliable performance.',
          'With a cylindrical shape and rounded edges, they are specially designed to be suitable for rolling, making handling and movement more convenient. Constructed from high-quality pig iron, the weights feature a smooth surface finish that prevents the accumulation of dust or foreign particles, guaranteeing long-term durability and accuracy.'         
        ]}
        imageSrc="/Images/shanker-wire/products/cylindrical-weights-rolling-100kg-to-1000kg.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="SWPI High-Denomination Test Weights (100kg–1000kg) – Heavy-Duty Cast Iron"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelTwentySixTwentySevenTwo
