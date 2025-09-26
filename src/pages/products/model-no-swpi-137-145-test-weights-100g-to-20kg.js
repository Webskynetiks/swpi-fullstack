import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneThreeSevenOneFourFive = () => {


  const brochurePage = 21; // change to the correct page for this product
  const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;

    const description = `
SWPI Hexagonal Test Weights (100 g to 20 kg) are made of high-quality grey cast iron as per OIML R-52 standards. Designed in a truncated hexagonal pyramid shape, they are durable, corrosion-resistant, and suitable for precise calibration needs.`;    
       const specifications = [
        { label: "Denomination", value: "50kg , 20kg ,  10kg , 5kg ,2kg , 1kg , 500g , 200g  , 100g" },
        { label: "Max Error  ", value: "+ 25  , 10 , 5.0 , 2.5 , 1.0 , 0.5 , 0.25 , 0.10 , 0.05 g  " },      
        { label: "Material", value: "cast iron" },
        { label: "Shape", value: "Hexagonal" },
        { label: "Finish", value: "Laquered With P U Black Paint" },
        { label: "Adjusting cavity", value: "on the under Surface" },];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Test Weight as per  OIML R-52 Hexagonal Shape"
        paragraphs={[
          'Test Weights of Model No. SWPI: 137-145 are precision Hexagonal Test Weights designed for calibration and verification purposes. Available in a range from 100 g to 20 kg, these weights are manufactured from high-quality grey cast iron and conform to OIML R-52 standards, ensuring accuracy and durability. The unique truncated hexagonal pyramid shape provides both stability and ease of handling..',

          'Weights from 20 kg to 5 kg are equipped with one rectangular loading hole on the underside, while weights from 2 kg down to 100 g feature a round loading hole tapering outward at the centre of the base. All weights are finely finished to eliminate pits, blow holes, and other surface defects. A protective corrosion-resistant black paint coating is applied to extend service life. The adjusting cavity is sealed and designed for long-term stability, ensuring that the permissible error for newly adjusted weights does not exceed international tolerance limits.'         
        ]}
        imageSrc="/Images/shanker-wire/products/test-weight-hexagonal-shape.png"
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="Hexagonal Test Weights (100 g to 20 kg)"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneThreeSevenOneFourFive
