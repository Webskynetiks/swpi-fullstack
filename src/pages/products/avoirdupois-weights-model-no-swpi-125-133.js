import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneTwoFiveOneThreeThree = () => {

  const brochurePage = 19; // change to the correct page for this product
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
        title="Avoirdupois Weights 1/4 to 4lb Model No. SWPI : 125-133"
        paragraphs={[
          'SWPI manufactures avoirdupois weights under Model No. 125–133, covering a range from ¼ ounce to 4 pounds. The lighter weights—specifically ¼ oz, ½ oz, 1 oz, and 2 oz—are crafted from brass, while the heavier denominations, including 4 oz, 8 oz, 1 lb, 2 lb, and 4 lb, are made of cast iron. These weights are produced according to the buyers specified error limits, ensuring calibration accuracy. SWPI is a prominent exporter of these essential calibration tools, ship-ping them to a wide spectrum of countries globally',
          'These weights serve as standard test weights in the avoirdupois (U.S. customary) system and are used for precise calibration of weighing equipment in both laboratory and industrial contexts. SWPI’s production emphasizes high quality, material suitability, and global reach, offering reliable weights tailored to meet diverse international standards'         
        ]}
        imageSrc="/Images/shanker-wire/products/avoirdupois-weights.png"
        brochureLink={brochureLink}
      />
      
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneTwoFiveOneThreeThree
