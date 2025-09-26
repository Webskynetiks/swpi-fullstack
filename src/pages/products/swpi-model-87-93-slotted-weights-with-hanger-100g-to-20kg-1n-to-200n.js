import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneEightySeven = () => {

    const description = `
SWPI’s Test Weights are manufactured for verification and calibration of weights and weighing instruments of medium or ordinary accuracy classes. These weights are fabricated with a mild steel body filled with molten cast iron, providing a smooth surface and fine finish. Weights with nominal values from 100kg to 1000kg come in a rectangular shape, fitted with welded channels and a lifting pin, making them suitable for handling by forklift or crane.

A specially designed adjusting cavity, sealed with an Allen screw, allows for precise adjustments and can accommodate an additional 500g to compensate for wear or mass loss during use. Each weight is coated with a durable black paint finish, making it rust-resistant and long-lasting in industrial environments.`;    


const brochurePage = 17; // change to the correct page for this product
const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;

const specifications = [
        { label: "Denomination", value: "100kg ,   50kg ,  20kg  , 10kg  , 5kg ,  2kg  ,  1kg   , 500g" },
        { label: "Denomination", value: "200N , 100N , 50N , 20N , 10N  , 5N  " },
        { label: "Max Error  ", value: " 1% to  0.005%  as desired  by buyer" },      
        { label: "Material", value: "Slotted weight - cast iron" },
        { label: "Hanger Material", value: "Mild Steel Rod with Mild  Steel Plate or cast iron Plate" },
        { label: "Finish", value: "Lacquered with P U Black Paint" },
        { label: "Adjusting cavity", value: " Adjusting cavity at the Bottom Surface and Adjusted With  lead" },
        { label: "Markings", value: "As Desired By Buyer by white paint" },
        { label: "shape", value: "Round Slotted Interlocking" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="SWPI Model No. 87-93 Slotted Weights with Hanger (100 g to 20 kg / 1 N to 200 N)"
        paragraphs={[
          'SWPI’s Model No. 87-93 Slotted Weights with Hanger are designed for a wide range of applications, including pressure, torque, and tensile strength testing. Manufactured from high-quality cast iron, these slotted weights have smooth surfaces, free from cracks, pits, or sharp edges. They include adjusting cavities sealed with lead to ensure precision, and each weight is clearly marked with its nominal value. The range covers 100 g to 20 kg and 1 N to 200 N, with a durable black paint coating to protect against rusting.',

          'The hangers are made from mild steel and calibrated so they can be included as part of the overall test load. Available in weights ranging from 500 g to 5 kg and 5 N to 50 N, the hangers are designed to hold multiple slotted weights with a total capacity ranging from 10 kg to 100 kg. Together, the slotted weights and hangers provide flexibility for building up accurate test loads as required in industrial and laboratory settings.'         
        ]}
        imageSrc="/Images/shanker-wire/products/slotted-weights.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Fabricated Rectangular Test Weights with Lifting Pin (100kg to 1000kg)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneEightySeven
