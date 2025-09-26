import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneEightyOneEightyThree = () => {

    const description = `
SWPI’s Test Weights are designed for the verification and calibration of weights and weighing instruments in medium or ordinary accuracy classes. These weights are manufactured with a mild steel fabricated body filled with molten cast iron, providing a smooth surface and fine finish. Weights with nominal values from 100kg to 1000kg are made in a rectangular shape, fitted with welded channels and a lifting pin, making them suitable for lifting by forklift or crane.

A specially designed adjusting cavity, sealed with an Allen screw, allows for fine adjustment and can accommodate an additional 500g to compensate for wear and mass loss during use. Each weight is protected with a durable coat of black paint, which provides rust resistance and ensures long-term durability.`;    


    const brochurePage = 24; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
const specifications = [
        { label: "Denomination", value: "1000kg, 500kg, 200kg, 100kg" },
        { label: "Max Error M1 ", value: "50,   25,   10g " },
        { label: "Max Error M1-2", value: "100,   50,   20,   10g" },
        { label: "Max Error M2", value: "160,   80,   30,   15g" },
        { label: "Max Error M2-3 ", value: "300,   160,   60,   30g" },
        { label: "Max Error M3 ", value: "500,   250,   100,   50g" },
        { label: "Material", value: "Cast Iron sheathed with Mild Steel Sheet" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Shape", value: "I -shaped suitable for stacking and lifting by crane or forklift" },
        { label: "Adjusting cavity", value: " Specially Designed cavity sealed by alien screw. the adjustments is made  by lead (in molten & shett form ) and afew irons balls, which can be pulled out by a magnetic pencil, if need" },
        { label: "Markings", value: "As Desired By Buyer By white Paint" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Fabricated Standard Weights Suitable for lifting by forklift | 100 kg to 1000 kg"
        paragraphs={[
          'Fabricated Standard Weights of Model No. SWPI: 181-183 are also Test Weights used as standards for the verification & calibration of weighing instruments. These Weights are also used as standards for verification or calibration of weights of a lower accuracy class.',

          'These Weights are manufactured from mild steel fabricated body filled with molten cast iron which gives smooth surface and good finish. Fabricated Weights are mild steel plate welded with channel and lifting pin suitable for lifting by crane and forklift. A specially designed adjusting cavity sealed by alien screw to make it water tight, has room to accommodate allow future adjustment of mass due to wear and tear.'         
        ]}
        imageSrc="/Images/shanker-wire/products/fabricated-standard-weights-model-181-183.webp"
      
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Fabricated Rectangular Test Weights (100kg to 1000kg)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneEightyOneEightyThree
