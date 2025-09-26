import FAQ from "@/components/common/Faq";
import Layout from "@/layout/Layout";
import Image from "next/image";

export default function Faq() {
return(
    <>
    <Layout>
    <div className="relative w-full h-[100px] md:h-[370px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Images/shanker-wire/faq-page.webp"
          fill
          className="object-cover"
          alt="Contact Banner"
        />

        {/* Black Overlay Layer */}
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 z-20">
          <div className="max-w-2xl text-white space-y-4">
            {/* Example Text */}
           
          </div>
        </div>
      </div>
      <FAQ/>
      </Layout>
    </>
)}