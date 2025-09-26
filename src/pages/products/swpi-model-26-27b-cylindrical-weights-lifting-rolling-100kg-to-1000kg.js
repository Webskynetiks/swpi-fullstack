import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelTwentySixTwentySevenTwo_B = () => {

    const description = `
SWPI’s Test Weights of High Denomination are designed for verification and calibration of weights and weighing instruments of medium or ordinary accuracy classes. Manufactured from high-quality cast iron, they feature a smooth surface finish and are free from cracks and pits. Weights with nominal values from 100kg to 1000kg are made in a cylindrical shape with rounded edges and a rigid mild steel handle.

Each weight is protected with a durable coat of black paint to resist corrosion and ensure long service life. These heavy-duty weights are suitable for rolling, stacking, and lifting, making them ideal for industrial applications.`;    


    const brochurePage = 10; // change to the correct page for this product
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
        { label: "Adjusting cavity", value: " At the bottom surface for rolling, Stacking & Lifting" },
        { label: "Liftings", value: "Lifting handle at the top of the weight" },
        { label: "Markings", value: "Manufacturer's logo(buyer's choice)  Identiication Number(buyer's choice)" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Cylindrical Weights with handle Suitable for  rolling and lifting"
        paragraphs={[
          'SWPI’s Model No. 26-27(b) Cylindrical Weights are manufactured in the range of 100 kg to 1000 kg, designed for the calibration of high-capacity weighing machines. These weights feature a cylindrical shape with rounded edges and a mild steel handle at the top, making them suitable for lifting by crane while their cylindrical body ensures easy rolling and stacking.',

          'Constructed from high-quality pig iron, the weights have a smooth surface finish that prevents accumulation of foreign particles, ensuring durability and accuracy. The first adjusting cavity is located at the bottom of the weight, while a smaller adjusting cavity on the top is included for legal metrology stamping, ensuring compliance and long-term reliability.'         
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-26-27b-cylindrical-weights-lifting-rolling-100kg-to-1000kg.png"
        brochureLink={brochureLink}
     />
      <ProductSpecification
      title="High Denomination Cylindrical Cast Iron Test Weights (100kg to 1000kg)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelTwentySixTwentySevenTwo_B
