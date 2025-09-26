import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const CylindricalWeights = () => {

    const description = `
    SWPI’s Cast Iron Test Weights are intended for use in the verification or calibration of weights and for weighing instruments of medium accuracy class or ordinary class. They are manufactured from high-quality cast iron to provide a smooth surface finish and are free of cracks and pits.
    
    Weights with nominal values from 100g to 10kg have a cylindrical shape with knob rounded edges. Each weight includes an adjusting cavity as per design and is protected with durable black PU paint to prevent rusting.
    `;
    
    const brochurePage = 6; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Specification", value: "OIML R-111 (Part-1)" },
        { label: "Denomination", value: "10kg, 5kg, 2kg, 1kg, 500g, 200g, 100g" },
        { label: "Max Error (M1)", value: "500 mg (10kg) to 5 mg (100g)" },
        { label: "Max Error (M2)", value: "1600 mg (10kg) to 16 mg (100g)" },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with black PU Paint" },
        { label: "Shape", value: "Cylindrical with knob" },
        { label: "Adjusting Cavity", value: "Upper centre (sealed with lead plug) or bottom centre of weight" },
        { label: "Marking", value: "Denomination (English/Hindi/Arabic), Logo (English)" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Cylindrical Weights – Model No. SWPI: 5-17 (100 g to 10 kg)"
        paragraphs={[
          'At Shanker Wire Products Industries (SWPI), we manufacture premium-quality cylindrical test weights that fully comply with OIML R-111-1:2004 standards . Our Model No. SWPI: 5-17 cylindrical weights are precisely engineered to serve as reference standards for the verification and calibration of weighing instruments.',
          'These cylindrical weights are also ideal for verifying or calibrating weights of lower accuracy classes, ensuring consistent precision across laboratories, industries, and research facilities. With their robust design and compliance with international standards, they provide dependable performance for calibration and measurement accuracy.'
         
        ]}
        imageSrc="/Images/shanker-wire/products/cylindrical-weights-100g-to-10kg.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Cast Iron Cylindrical weights (100g to 10kg)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default CylindricalWeights
