"use client";
import { motion } from "framer-motion";

export function GallerySection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="bg-[#f2e6ff] py-20 flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl p-6 w-full">
        
        {/* Large Text Box */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:col-span-2 bg-white rounded-3xl p-10 flex flex-col justify-center shadow-md hover:shadow-lg transition"
        >
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Blessings of Mahadev
</h1>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
           Experience peace, devotion, and spiritual awakening in the sacred presence of Mahadev, where faith, rituals, and divine energy unite.

          </p>
          <button className="bg-black text-white rounded-full px-6 py-2 w-fit hover:bg-gray-800 transition">
            Our Services
          </button>
        </motion.div>

        {/* Image Top Right */}
        <motion.div
          custom={1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <img
            src="/images/about3.jpg"
            alt="Design Preview"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gallery Image 1 */}
        <motion.div
          custom={2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <img
            src="/images/gallary.jpg"
            alt="Gallery 1"
            className="w-full h-72 object-cover"
          />
        </motion.div>

        {/* Updates Section */}
{/* Updates Section with Image */}
{/* Updates Section – Image Only */}
<motion.div
  custom={3}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="bg-white rounded-3xl p-4 shadow-md hover:shadow-lg transition"
>
  {/* IMAGE WRAPPER (card size control) */}
  <div className="w-full h-65 overflow-hidden rounded-2xl">
    <img
      src="/images/shivparivar.jpg"
      alt="ShivParivar.jpg"
      className="w-full h-full object-cover scale-110"
    />
  </div>
</motion.div>



        {/* Contact Circle */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[#f7f1e3] rounded-3xl flex items-center justify-center shadow-md hover:shadow-lg transition"
        >
          <div className="w-40 h-40 rounded-full border-4 border-gray-800 flex items-center justify-center text-gray-800 text-sm font-semibold relative">
            <span className="absolute text-center leading-tight">
             Seek Blessings of Mahadev

            </span>
          </div>
        </motion.div>
{/* Landscape Mantra Section – Aesthetic */}
<motion.div
  custom={5}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="
    bg-[#e5e7eb] rounded-3xl shadow-md hover:shadow-lg transition
    md:col-span-3 h-80
    flex items-center justify-center px-20
  "
>
  <p
    className="
      text-sm md:text-base lg:text-lg
      font-medium text-gray-600
      leading-loose tracking-wider text-center
    "
  >
    जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।
    डमड्डमड्डमड्डमन्निनादवड्डमर्‍वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥
    <br /><br />
    जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी विलोलवीचिवल्लरीविराजमानमूर्धनि ।
    धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥
  </p>
</motion.div>


      </div>
    </section>
  );
}
