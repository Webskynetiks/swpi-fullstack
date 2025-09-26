import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelFortySeven = () => {

    const description = `
SWPI Hexagonal Test Weights (100 g to 20 kg) are made of high-quality grey cast iron as per OIML R-52 standards. Designed in a truncated hexagonal pyramid shape, they are durable, corrosion-resistant, and suitable for precise calibration needs.`;    
       
const brochurePage = 13; // change to the correct page for this product
const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;

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
        title="Model No. SWPI : 47 – Bell Weights (5 g to 500 g)"
        paragraphs={[
          'Bell Weights of Model No. SWPI: 47 are uniquely shaped like a bell and beautifully handcrafted to give a refined personal touch. These precision weights are widely used for the calibration and verification of weighing instruments, ensuring accuracy and reliability in measurements',
          'Manufactured from high-quality brass, Bell Weights feature a shiny, smooth surface finish that prevents accumulation of dust or foreign materials. Designed with an adjusting cavity at the bottom, they allow for future adjustments in mass, making them both practical and durable for long-term use.'         
        ]}
        imageSrc="/Images/shanker-wire/products/bell-weights.webp"
        brochureLink={brochureLink}
      />
      
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelFortySeven
