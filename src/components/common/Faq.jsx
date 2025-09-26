// components/FAQ.js
"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What are calibration weights for balances?",
    answer: `Weights are predominantly needed for performance tests and routine testing of balances and scales. In metrological terminology, a distinction is made between reference weights or “mass standards” (to calibrate other weights) and certified weights. National regulations and international recommendations define the error limits of certified weights. Weights are classified into tolerance limits which are defined either by OIML or ASTM. The conventional weight value (and not the mass) is used as the nominal value of the weight. For a high level of accuracy, certified weights are calibrated and traceable back to primary standards, which are usually national standards maintained by a National Metrology Institute (NMI).`,
  },
  {
    question: "What are OIML and ASTM calibration weight classes?",
    answer: `OIML Classes: 
    - E1: For traceability to national standards, always with calibration certificate. 
    - E2: For verifying F1 weights and use with class I balances. 
    - F1 & F2: For class II balances and important commercial transactions. 
    - M1, M2, M3: For class III and general commercial use.  

    ASTM Classes: 
    - Class 0: Primary reference standards. 
    - Class 1: For analytical balances with readability 0.1–0.01 mg. 
    - Class 2–4: For top-loading and semi-analytical balances. 
    - NIST Class F: Used by state/local officials for commercial devices.`,
  },
  {
    question: "Why should I use certified calibration weights?",
    answer: `ASTM class 0 and ultra-class as well as OIML class “E0” and E1 should be used for the highest level of precision i.e. mass standards (calibrating other weights), micro-balance testing and calibration, and critical weighing applications.
ASTM classes 1 & 2 and OIML classes E2 & F1 should be used for precision applications i.e. analytical balance testing and calibration.
ASTM classes 3 & 4 and OIML classes F1 & F2 are best suited to top-loading balance calibrations and testing and moderate precision applications (laboratory non-critical).`,
  },
  {
    question: "Why / how often do I need to recalibrate my test weights?",
    answer: `Accurately calibrated test weights are the basis of accurate weighing results. The accuracy of test weights becomes less reliable over time. This is the result of normal wear and tear caused by regular use, dirt and dust. Periodic recalibration of test weights at an accredited mass-calibration laboratory is essential to ensure ongoing traceability. At our accredited mass-calibration laboratories, we clean, calibrate, and adjust each weight and then document the results in a calibration certificate. Our calibration services cover the basic reporting of conventional mass correction, uncertainty and traceability information in accordance with ISO/IEC 17025 requirements.

The frequency with which to recalibrate your test weights depends on the criticality of the weighing process. Selecting the correct test weight and weight class and also provides recommendations on how often to recalibrate your test weights. All of this information is determined based on your specific processes and risks. `,
  },
  {
    question: "What are buoyancy artifacts?",
    answer: `Air density is usually calculated from relevant air parameters such as air temperature, pressure, humidity and CO2 concentration. An alternative method of determining air density may be applied by utilizing two specially designed buoyancy artifacts. Both artifacts are compared in vacuum and in air. By comparing the two artifacts of identical nominal weight, the large volume difference reflects the air buoyancy and therefore results in a highly accurate determination of air density. The buoyancy artifacts are mainly used for the M_one vacuum mass comparator.`,
  },
  {
    question: "Why is a silicon sphere used for specialized volume measurement?",
    answer: `Spheres are used because the volume can be determined according to the definition of volume by a length measurement. Silicon (Si) spheres have the same homogenous atomic structure as a perfect diamond without voids or dislocations, so the density is more accurate than other materials. This is why a silicon sphere with a homogenous atomic structure serves as a reference for specialized volume measurement.`,
  },
  {
    question: "What are heavy-capacity weights used for?",
    answer: `Mass comparators go up to a capacity of six tons. Industrial scales go up to several hundred tons. Heavy-capacity weights—typically those in the range of 100 kg, 200 kg, 500 kg, 1 t and 2 t are used for sensitivity, eccentricity, linearity and repeatability testing of these higher-capacity devices. Weights are less than 2 t due to the maximum lifting capability of machines, typically forklifts and cranes. However, these weights can be combined to reach the desired weight. Check out our range of heavy-capacity weights, Click here
  Heavy-capacity weights must be transported in heavy-duty trucks and it is important to ensure trucks do not exceed their rated load limit due to safety and government regulations. Heavy-capacity weights are generally constructed of cast iron not stainless steel due to the cost.`,
  },
  {
    question: "What are calibrated test weights used for?",
    answer: `Calibration Weights are used in scale calibration. This is a process that ensures scale accuracy. Test weights for scales or precision weights are used to calibrate weight scale systems of various levels of accuracy depending on the use and requirements. Certified test weights or precision weights should be used in these processes to calibrate weight scale systems. It is important to ensure the test weights are calibrated test weights and that they are accurate to provide accurate calibration results. Check out our range of scale calibration weights, `,
  },
  {
    question: "What is the weighing scale tolerance limit of any scale? Can all scales offer precision weights?.",
    answer: `This is the required accuracy of the scale, and specifically the tolerance of inaccuracy allowed before it is out of tolerance and in need of a weigh scale calibration by certified calibration weights. A calibrated scale will operate at a higher level of accuracy and maintain tolerance better. For this reason, weight scale calibration with certified weights for keeping the weighing scale tolerance limit is key for accurate, calibrated scales and weigh scale calibration. Learn more about keeping your weighing scale tolerance limit in your weighing processes.`,
  },
  {
    question: " What are scale weights? Are they calibration weights for scales? Must they be certified weights?",
    answer: `Scale weights are weights for scale calibration. These weights for scale calibration may be certified weights. Generally, weights for scale calibration are certified. When calibrating scale procedures are performed, it is necessary to have calibration weights for scales. Weighing scale calibration with scale weights or test weights should be performed on a regular basis depending on use. Learn more about scale calibration weights and weigh scale calibration.

SWPI‘s world leading expertise in metrology extends to certified test weights, weight sets as well as calibration weights for scales. The weight portfolio covers scale weights according to OIML or ASTM from fifty micrograms to one ton in all accuracy classes. Our test weights are used all over the world, not only for testing balances but also as primary standards in mass laboratories. We invite you to learn more about our certified test weights and consider using them in your weighing scale calibration and weigh-scale calibration processes.`,
  },
  {
    question: "What are the differences between OIML classes?",
    answer: `The exact difference is explained in the OIML guideline, but at a basic level, E1 has the narrowest and M1 the highest tolerance limit, i.e. E1 is the most accurate.`,
  },
  {
    question: "What is Plus Tolerance?",
    answer: `Weights are calibrated according to OIML maximum permissible errors (+/- in mg). If the result of the calibration is in the plus range, it means that the weight is heavier than the specified nominal value, but still within the tolerance. Since most weights lose weight over time due to wear, it is more likely that this weight will take longer to fall out of tolerance (maximum permissible error). Through our production processes, most of our weights are calibrated in the plus range.`,
  },
  {
    question: "How often do you need to re-calibrate your weights?",
    answer: `Depending on how often the weights are in use, weights should be re-calibrated every 1-2 years.

We are Manufacturer- Exporter of Calibration Weights, Standard Weights, Roller Weights, Cylindrical Weights, Slotted Weights, Test Weights ranging from 1 mg to 1000 kg in all accuracy classes.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#3b4047] mb-10">
          FAQ’s on Test Weights
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              >
                <span className="font-semibold text-gray-800">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                  <pre className="whitespace-pre-wrap">{faq.answer}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
