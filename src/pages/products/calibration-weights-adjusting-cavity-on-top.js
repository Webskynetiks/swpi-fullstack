import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const calibrationWeights = () => {

    const description = `
    SWPI's Cast Iron Test Weights are intended for use in the verification and calibration of weights and are suitable for weighing instruments of medium or ordinary accuracy class. They are manufactured from high-quality cast iron to ensure a smooth surface finish and are completely free of cracks and pits.
    
    Weights with nominal values from 5 kg to 50 kg are designed in the shape of a rectangular parallelepiped with rounded edges and a strong mild steel handle. An adjusting cavity is included as per the standard design, where lead is used for accuracy adjustments. To protect the casting from rust, the weights are coated with a durable black paint finish, ensuring long-lasting reliability.
    `;

    const brochurePage = 3; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "OIML R-111 (Part-1)" },
        { label: "Denomination", value: "50kg, 20kg, 10kg, 5kg," },
        { label: "Max Error (M1)", value: "2500mg , 1000mg , 500mg , 250mg" },
        { label: "Max Error (M2)", value: "8000mg , 3000mg  ,  1600mg ,   800mg" },
        { label: "Max Error (M3)", value: "25000mg , 10000mg ,  5000mg  , 2500mg" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with black PU Paint" },
        { label: "Shape", value: "Parallelopipedic" },
        { label: "Adjusting Cavity", value: "At the upper surface does of one the arms of teh weigts duly Closed by Steel late & sealed using lead plug" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Calibration Weights – Model No. SWPI: 1-4(a) (5 kg to 50 kg)"
        paragraphs={[
          'At Shanker Wire Products Industries (SWPI), we manufacture precision calibration weights and test weights that strictly conform to OIML R-111-1:2004 standards . Our Model No. SWPI: 1-4(a) weights are designed as reference standards for the verification and calibration of weighing instruments, ensuring accuracy and reliability in every measurement.',
          'These weights are also suitable for the verification or calibration of weights of lower accuracy classes. Manufactured from high-quality pig iron with a smooth surface finish, they prevent the accumulation of foreign materials and allow proper stacking due to their flat, plane walls. Each weight is equipped with an adjusting cavity on the top, sealed with a lead plate, with sufficient space provided for future adjustments caused by wear and tear. Ideal for laboratories, industries, and calibration facilities, SWPI calibration weights deliver dependable performance and long service life.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/test-weight-rectangular-shape.png"
        brochureLink={brochureLink}

      />
      <ProductSpecification
      title="SWPI Cast Iron Test Weights (5 kg to 50 kg) – Durable, Accurate & Rust-Resistant"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default calibrationWeights
