import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneEightyNine = () => {

    const description = `
SWPI’s Test Weights are intended for use in the verification or calibration of weights and for use with weighing instruments of medium accuracy class or ordinary class. They are manufactured from mild steel fabricated bodies filled with molten cast iron, which ensures a smooth surface and a good finish.

Weights with nominal values from 100 kg to 1000 kg have a rectangular shape, fitted by welding with a channel and lifting pin suitable for use with forklifts and cranes. A specially designed adjusting cavity sealed by an Allen screw allows accommodation of an additional 500 g to compensate for wear and loss of mass during use. The weights are protected by a durable coat of paint, generally black, which makes them rust-resistant and long-lasting.    `;
    

const brochurePage = 26; // change to the correct page for this product
const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;


      const specifications = [
        { label: "Denomination", value: "1000 kg , 500 kg , 200 kg , 100 kg" },
        { label: "Max Error (M1)", value: "50 , 25 , 20 , 10g" },
        { label: "Max error (M1-2)", value: " 100  , 50 , 20 , 10g " },
        { label: "Max error (2)", value: " 160 , 80 , 30 , 15g " },
        { label: "Max error (M2-3)", value: "300,  160 , 60 , 30g" },
        { label: "Max Error (M3)", value: "500 , 250 , 100 , 50g" },
        { label: "Material", value: "Cast Iron sheathed with mild Steel Sheet " },
        { label: "Finish", value: "Lacquered with black PU paint" },
        { label: "Shape", value: "Rectangular " },
        { label: "Adjusting cavity", value: "Specially Designed cavity sealed by alien screw. the adjustments is made  by lead(in molten & shett form ) and a few iron balls ,  which  can be pulled out by a magnetic pencil, if need  " },
        { label: "Marking", value: "As Desired by Buyers" },
      ];
  return (
    <div>
        <Layout>
      <InfoSection
  title="Fabricated Standard Weights Suitable for Stacking & Lifting by Forklift"
  paragraphs={[
    "SWPI’s Model No. 189 Fabricated Standard Weights are precision-engineered test weights available in denominations from 100 kg to 1000 kg. Designed for verification and calibration of weighing instruments, these weights also serve as standards for verifying or calibrating weights of lower accuracy classes. Their reliable construction ensures long-term performance in industrial calibration applications.",
    "Manufactured with a mild steel fabricated body filled with molten cast iron, these weights feature a smooth surface finish and superior durability. The design includes a cubical cavity at the center, positioned horizontally, making them perfectly suitable for lifting by forklift. Additionally, a specially engineered adjusting cavity sealed with an Allen screw provides watertight protection while allowing future mass adjustments due to wear and tear. With their robust construction and forklift-compatible design, SWPI’s Fabricated Standard Weights guarantee precision, convenience, and longevity in heavy-duty calibration tasks."
  ]}
  imageSrc="/Images/shanker-wire/products/swpi-model-189-fabricated-standard-weights-forklift-100kg-to-1000kg.webp"
  brochureLink={brochureLink}
/>
      <ProductSpecification
      title="SWPI Rectangular Calibration Weights (100kg–1000kg) – Durable Mild Steel Construction"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneEightyNine
