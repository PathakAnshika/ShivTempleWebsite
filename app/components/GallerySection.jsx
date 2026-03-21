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
            src="/images/trishul.jpg"
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
      src="/images/Shivparivar.jpg"
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
{/* 🌸 Landscape Mantra Section – Premium Aesthetic */}
<motion.div
  custom={5}
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="
    relative md:col-span-3
    rounded-3xl overflow-hidden

    bg-gradient-to-br from-purple-200 via-white to-purple-300
    shadow-xl hover:shadow-2xl transition duration-500

    px-6 sm:px-10 md:px-16
    py-14 sm:py-16

    flex items-center justify-center
  "
>

  {/* ✨ Glow Layer */}
  <div className="absolute inset-0 bg-white/40 backdrop-blur-xl"></div>

  {/* 🌙 Decorative gradient ring */}
  <div className="absolute inset-0 rounded-3xl border border-purple-200"></div>

  {/* 🌸 Content */}
  <p
    className="
      relative z-10
      text-base sm:text-lg md:text-xl lg:text-2xl

      font-semibold
      text-gray-800

      leading-relaxed sm:leading-loose
      tracking-wide text-center

      max-w-4xl
    "
  >
    जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् ।
    डमड्डमड्डमड्डमन्निनादवड्डमर्‍वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥

    <br /><br />

    जटाकटाहसम्भ्रमभ्रमन्निलिम्पनिर्झरी विलोलवीचिवल्लरीविराजमानमूर्धनि ।
    धगद्धगद्धगज्ज्वलल्ललाटपट्टपावके किशोरचन्द्रशेखरे रतिः प्रतिक्षणं मम ॥
  </p>

  {/* 🌟 subtle radial glow */}
  <div className="absolute w-[400px] h-[400px] bg-purple-300/20 blur-3xl rounded-full -top-20 -left-20"></div>
  <div className="absolute w-[300px] h-[300px] bg-purple-400/20 blur-3xl rounded-full bottom-0 right-0"></div>

</motion.div>

      </div>
    </section>
  );
}
