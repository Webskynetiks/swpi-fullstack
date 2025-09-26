import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneTwoFiveOneThreeThree = () => {

  const brochurePage = 20; // change to the correct page for this product
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
        title="Proportional Weights (Ratio 100:1 and 50:1)"
        paragraphs={[
          'Proportional Weights of Model No. SWPI: 136 are specially designed to be used as counterpoise weights in Platform Weighing Machines. These weights are available in ratios of 100:1 and 50:1, ensuring precise balancing and accurate measurement. The denoted mass value on the weights reflects the proportional ratio, making them highly reliable for calibration and testing purposes.',
          'Manufactured from premium quality Pig Iron, Proportional Weights are crafted with slots of suitable size for secure placement on the coulter balance. Hexagonal weights are designed with one rectangular loading hole, while round weights include one round hole, both undercut or tapering outward to hold lead securely for adjustments. To ensure durability and protection, they are coated with corrosion-resistant black paint, offering long-lasting performance in industrial environments.'         
        ]}
        imageSrc="/Images/shanker-wire/products/proportional-weights.png"
        brochureLink={brochureLink}
      />
      
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneTwoFiveOneThreeThree
