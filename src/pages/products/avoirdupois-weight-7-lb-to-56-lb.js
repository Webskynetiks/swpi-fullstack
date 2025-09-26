import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneTwoFiveOneThreeThree = () => {

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
          'SWPI produces avoirdupois weights under Model No. 60–63, ranging from 7 pounds up to 56 pounds. These weights are generally manufactured from cast iron, making them strong and durable for frequent industrial and laboratory use. Each weight is designed in a hexagonal shape, providing stability, ease of handling, and long-term reliability. The manufacturing process ensures that these weights comply with international metrological standards, and they can be supplied according to the buyer’s specified error limits.',
          'These larger avoirdupois weights are widely used in calibration and testing applications where heavier capacity weighing balances or scales are employed. SWPI is a well-established exporter of these precision weights, delivering them to clients across various regions worldwide. The company emphasizes quality manufacturing, robust materials, and adherence to OIML and ASTM standards, ensuring that their products meet the needs of industries requiring dependable calibration solutions.'         
        ]}
        imageSrc="/Images/shanker-wire/products/avoirdupois-weight-7-lb-to-56-lb.webp"
      />
      
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneTwoFiveOneThreeThree
