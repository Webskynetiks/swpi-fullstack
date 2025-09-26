import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelTwentySixTwentySevenTwo = () => {

    const description = `
SWPI’s Test Weights of High Denomination are intended for the verification or calibration of weights and weighing instruments in medium or ordinary accuracy classes. They are manufactured from high-quality cast iron to provide a smooth surface finish and are free from cracks and pits. Weights with nominal values from 100kg to 1000kg are made in a “T” shape with rounded edges and a rigid mild steel handle.

High Denomination Cast Iron Test Weights (100kg to 1000kg, T-Shape)`;  


    const brochurePage = 11; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
       const specifications = [
        { label: "Denomination", value: "1000kg, 500kg, 200kg, 100kg" },
        { label: "Max Error M1 ", value: "50,   25,   10g " },
        { label: "Max Error M1-2", value: "100,   50,   20,   10g" },
        { label: "Max Error M2", value: "160,   80,   30,   15g" },
        { label: "Max Error M2-3 ", value: "300,   160,   60,   30g" },
        { label: "Max Error M3 ", value: "500,   250,   100,   50g" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Shape", value: "I -shaped suitable for stacking and lifting by crane or forklift" },
        { label: "Adjusting cavity", value: "Specially Designed cavity sealed by alien scew.the adjustments is made by  lead( in molten & shett form) and a few iron balls, which can be pulled out by a magnetic pencil, if need .S" },
        { label: "Markings", value: "As Desired By Buyer" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Test weights I Shaped Suitable For forklift & Crane Lifting"
        paragraphs={[
          'SWPI’s Model No. 26-27(c) Test Weights are designed in denominations from 100 kg to 1000 kg for the calibration of high-capacity weighing machines. These weights feature an I-shaped body with rounded edges and a durable mild steel handle, ensuring strength and ease of handling.',

          'Manufactured from high-quality pig iron with a smooth surface finish, the weights resist the accumulation of foreign materials, maintaining long-term accuracy. The adjusting cavity is sealed with an alien screw, preventing water entry or trapping. Designed for heavy-duty industrial use, these test weights are suitable for lifting by forklift and crane and are also stackable for convenience.'         
        ]}
        imageSrc="/Images/shanker-wire/products/standard-weights.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="High Denomination Cast Iron Test Weights (100kg to 1000kg, T-Shape)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelTwentySixTwentySevenTwo
