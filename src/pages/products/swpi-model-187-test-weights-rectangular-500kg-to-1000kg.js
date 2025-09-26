import InfoSection from '@/components/antistripping-adhesion-promoters/InfoSection'
import ProductSpecification from '@/components/common/ProductSpecification'
import QuoteRequestForm from '@/components/common/QuoteRequestForm'
import Layout from '@/layout/Layout'
import React from 'react'

const ModelOneEightSeven = () => {

    const description = `
   SWPI’s Model No. 187 Test Weights are designed in denominations from 500 kg to 1000 kg, strictly following SABS recommendations for reliable calibration of heavy-duty weighing machines. Manufactured from superior-quality pig iron, these weights feature a smooth surface finish that resists the buildup of dust and other foreign materials, ensuring accurate and consistent performance even in demanding industrial environments.
    
   Built with robust construction and flat, even walls, these heavy rectangular test weights can be stacked securely for efficient handling. Each unit includes a bottom adjusting cavity with ample space, sealed with pure lead, to allow precise future adjustments caused by natural wear. Engineered for long-term durability and stability, SWPI’s Model No. 187 weights provide dependable accuracy for critical calibration applications.
    `;

    const brochurePage = 25; // change to the correct page for this product
    const brochureLink = `/Images/shanker-wire/products/products-brochure.pdf#page=${brochurePage}`;
    
      const specifications = [
        { label: "Denomination", value: "1000 kg, 500 kg" },
        { label: "Max Error (M1)", value: "50, 25g" },
        { label: "Max error (M1-2)", value: "100, 50g " },
        { label: "Max error (2)", value: " 160, 80g " },
        { label: "Max error (M2-3)", value: "300, 160g " },
        { label: "Max Error (M3)", value: "500, 250g " },
        { label: "Material", value: "Cast Iron" },
        { label: "Finish", value: "Lacquered with corrosion resistant paint" },
        { label: "Shape", value: "Rectangular suitable for lifting & Stacking" },
        { label: "Adjusting cavity", value: "Rectangular covered by Mild Steel Plate tied with threaded Rod. the Adjustments is made by lead" },
        { label: "Marking", value: "As Desired by Buyers" },
      ];
  return (
    <div>
        <Layout>
       <InfoSection
        title="Test Weights Rectangular shape 100 kg to 1000 kg as per  S.A.B.S "
        paragraphs={[
          'SWPI’s Model No. 187 Test Weights are manufactured in denominations from 100 kg to 1000 kg as per SABS Recommendation, making them highly reliable for the calibration of heavy-duty weighing machines. Constructed from high-quality pig iron, these weights are built with a smooth surface finish to prevent accumulation of foreign materials and maintain accuracy.',
          'All walls are smooth and plane, enabling multiple pieces to be stacked securely when required. The adjusting cavity is designed with ample space and sealed with pure lead, allowing future mass adjustments due to wear and tear. With their robust design and precision construction, SWPI’s heavy rectangular test weights ensure durability, stability, and long-lasting calibration accuracy.'      
        ]}
        imageSrc="/Images/shanker-wire/products/swpi-model-187-test-weights-rectangular-500kg-to-1000kg.png"
      
        brochureLink={brochureLink}
      />
      <ProductSpecification
      title="SWPI Model No. 187 Test Weights (500kg–1000kg) – Heavy-Duty Rectangular Calibration Weights"
      description={description}
      specifications={specifications}
    />
    <QuoteRequestForm/>
          </Layout>

    </div>
  )
}

export default ModelOneEightSeven
