import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelSixtySixtyThree = () => {

  const brochurePage = 16; // change to the correct page for this product
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
  title="SWPI Model No. 60-63 Avoirdupois weights (7 lb to 56 lb)"
  paragraphs={[
    "SWPI’s Model No. 60-63 Avoirdupois Weights are crafted to meet the requirements of industries and laboratories using the imperial system of measurement. Available in denominations ranging from 7 lb to 56 lb, these weights are widely used for calibration, verification, and testing purposes where precision and compliance with international standards are essential. Designed to provide consistent accuracy, they serve as a reliable standard for applications across trade, research, and industrial settings.",
    "Manufactured from high-quality cast iron and brass, the larger denominations such as 56 lb, 50 lb, 25 lb, 20 lb, 14 lb, and 7 lb are made from robust cast iron, while the smaller denominations from 4 lb down to ¼ oz are available in both cast iron and brass. Each weight is carefully finished with a protective coating to resist corrosion and wear, ensuring long-lasting performance. With worldwide export to markets across the USA, UK, Canada, Australia, and beyond, SWPI’s Avoirdupois Weights offer precision, durability, and trust for customers relying on the imperial system."
  ]}
  imageSrc="/Images/shanker-wire/products/avoirdupois-weights-7-lb-to-56-lb-model-no-swpi-60-63.png"
  brochureLink={brochureLink}
/>
      
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelSixtySixtyThree
