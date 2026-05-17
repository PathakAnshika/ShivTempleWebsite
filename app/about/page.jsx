"use client";

import { useRouter } from "next/navigation";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function AboutPage() {
  const router = useRouter();

  return (
    <main className="text-gray-800">

      {/* ===== HERO ===== */}
<section className="
  relative overflow-hidden
  bg-[#faf6ef]
  border-b border-orange-100
">

  {/* Soft Glow */}
  <div className="
    absolute -top-24 -left-24
    w-72 h-72
    bg-orange-200/30
    rounded-full
    blur-3xl
  "></div>

  <div className="
    absolute -bottom-24 -right-24
    w-80 h-80
    bg-yellow-100/40
    rounded-full
    blur-3xl
  "></div>

  {/* Back Button */}
  <button
    onClick={() => router.back()}
    className="
      absolute left-6 top-6 z-20
      px-5 py-2.5
      rounded-full
      bg-white/80
      backdrop-blur-md
      border border-orange-100
      shadow-lg
      text-gray-700
      hover:bg-white
      hover:scale-105
      transition-all duration-300
    "
  >
    ← Back
  </button>

  {/* Content */}
  <div className="
    relative z-10
    max-w-6xl mx-auto
    px-6
    py-28
    text-center
  ">

    {/* Small Label */}
    <p className="
      uppercase tracking-[6px]
      text-orange-500
      text-sm font-semibold
      mb-6
    ">
      Shri Chandreshwar Dham
    </p>

    {/* Heading */}
    <h1 className="
      text-5xl md:text-7xl
      font-bold
      text-gray-900
      leading-[1.1]
      max-w-5xl
      mx-auto
    ">
      About
      <span className="block text-orange-500 mt-2">
        Shri Chandreshwar Dham
      </span>
    </h1>

    {/* Decorative Line */}
    <div className="
      w-28 h-[3px]
      bg-gradient-to-r
      from-orange-300 to-orange-500
      mx-auto
      rounded-full
      mt-8 mb-10
    "></div>

    {/* Paragraph */}
    <p className="
      text-lg md:text-xl
      text-gray-600
      leading-9
      max-w-3xl
      mx-auto
    ">
      A sacred abode of Lord Shiva, dedicated to devotion,
      spiritual awakening, cultural preservation
      and community upliftment.
    </p>

    {/* Bottom Pills */}
    <div className="
      flex flex-wrap
      justify-center
      gap-4
      mt-12
    ">

      <div className="
        px-5 py-3
        rounded-full
        bg-white
        border border-orange-100
        shadow-md
        text-gray-700
        font-medium
      ">
        🕉️ Spirituality
      </div>

      <div className="
        px-5 py-3
        rounded-full
        bg-white
        border border-orange-100
        shadow-md
        text-gray-700
        font-medium
      ">
        🌸 Devotion
      </div>

      <div className="
        px-5 py-3
        rounded-full
        bg-white
        border border-orange-100
        shadow-md
        text-gray-700
        font-medium
      ">
        🔱 Culture
      </div>

    </div>

  </div>

</section>

      {/* ===== TEMPLE HISTORY ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-purple-900 mb-8">
            Temple History
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <p>
              Shri Chandreshwar Dham was established with a divine vision
              to create a spiritual sanctuary where devotees can experience
              peace, devotion, and inner awakening. Over the years, the temple
              has evolved into a center of faith, drawing devotees from
              surrounding regions and beyond.
            </p>

            <p>
              The temple stands as a symbol of unwavering devotion to Lord
              Shiva and has become a sacred destination for spiritual
              gatherings, rituals, and major Hindu festivals.
            </p>

            <p>
              With continuous efforts from temple management and devotees,
              Shri Chandreshwar Dham has expanded its role beyond worship,
              embracing social and cultural initiatives for the betterment
              of society.
            </p>
          </div>
        </div>
      </section>
{/* ===== VISION / MISSION / BELIEF ===== */}
{/* ===== VISION / MISSION / BELIEF ===== */}
<section className="bg-[#f8f8f6] py-20 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">

      <p className="
        uppercase tracking-[5px]
        text-slate-500
        text-xs font-semibold
        mb-4
      ">
        Spiritual Foundation
      </p>

      <h2 className="
        text-3xl md:text-5xl
        font-bold
        text-gray-900
        leading-tight
      ">
        Vision • Mission • Belief
      </h2>

    </div>

    {/* Layout */}
    <div className="
      grid lg:grid-cols-3
      gap-6
      items-stretch
    ">

      {/* LEFT TALL CARD */}
      <div className="
        relative
        rounded-[32px]
        overflow-hidden
        p-8
        bg-gradient-to-b
        from-slate-700
        to-slate-900
        text-white
        min-h-[420px]
        flex flex-col justify-between
        shadow-xl
      ">

        {/* Blur Glow */}
        <div className="
          absolute -top-20 -right-20
          w-48 h-48
          bg-white/10
          rounded-full
          blur-3xl
        "></div>

        <div className="relative z-10">

          <div className="
            w-14 h-14
            rounded-2xl
            bg-white/10
            backdrop-blur-md
            flex items-center justify-center
            text-2xl
            mb-8
          ">
            🕉️
          </div>

          <h3 className="
            text-3xl
            font-bold
            leading-tight
            mb-5
          ">
            Vision
          </h3>

          <p className="
            text-base
            leading-8
            text-slate-200
          ">
            To build a spiritually vibrant community
            where faith, harmony, and devotion
            flourish across generations.
          </p>

        </div>

        <div className="
          relative z-10
          text-5xl
          opacity-10
          font-bold
          self-end
        ">
          01
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="
        lg:col-span-2
        grid md:grid-cols-2
        gap-6
      ">

        {/* Mission */}
        <div className="
          bg-white
          rounded-[30px]
          p-8
          border border-gray-100
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all duration-500
          min-h-[210px]
          flex flex-col justify-between
        ">

          <div>

            <div className="
              w-14 h-14
              rounded-2xl
              bg-slate-100
              flex items-center justify-center
              text-2xl
              mb-6
            ">
              🌸
            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
            ">
              Mission
            </h3>

            <p className="
              text-gray-600
              leading-7
              text-base
            ">
              To preserve sacred traditions,
              conduct rituals with purity and
              support society through meaningful initiatives.
            </p>

          </div>

        </div>

        {/* Belief */}
        <div className="
          bg-[#f3f4f6]
          rounded-[30px]
          p-8
          border border-gray-100
          shadow-md
          hover:-translate-y-2
          hover:shadow-xl
          transition-all duration-500
          min-h-[210px]
          flex flex-col justify-between
        ">

          <div>

            <div className="
              w-14 h-14
              rounded-2xl
              bg-slate-200
              flex items-center justify-center
              text-2xl
              mb-6
            ">
              🔱
            </div>

            <h3 className="
              text-2xl
              font-bold
              text-gray-900
              mb-4
            ">
              Belief
            </h3>

            <p className="
              text-gray-600
              leading-7
              text-base
            ">
              True devotion lies in compassion,
              humility, service and inner discipline
              guided by sincerity.
            </p>

          </div>

        </div>

        {/* Bottom Wide Quote Card */}
        <div className="
          md:col-span-2
          bg-white
          rounded-[30px]
          p-8 md:p-10
          border border-gray-100
          shadow-lg
          relative overflow-hidden
        ">

          {/* Quote Glow */}
          <div className="
            absolute -right-6 -top-10
            text-[120px]
            text-slate-100
            font-bold
            leading-none
          ">
            ”
          </div>

          <p className="
            relative z-10
            text-xl md:text-2xl
            font-semibold
            text-gray-800
            leading-[42px]
            max-w-3xl
          ">
            “Spirituality is not only devotion,
            but also service, compassion and
            preserving the values of humanity.”
          </p>

        </div>

      </div>

    </div>

  </div>

</section>      {/* ===== EMINENT PERSONALITIES SECTION ===== */}

<section className="py-24 px-6 bg-gradient-to-b from-orange-50 via-white to-orange-50">

  {/* Heading */}
  <div className="text-center mb-16">

    <p className="text-orange-600 font-semibold tracking-[4px] uppercase mb-3">
      Spiritual Leadership
    </p>

    <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
      Eminent <span className="text-orange-600">Personalities</span>
    </h2>

    <div className="w-28 h-1 bg-orange-500 mx-auto rounded-full mt-5"></div>

    <p className="text-gray-600 mt-6 max-w-3xl mx-auto leading-8 text-lg">
      Meet the respected personalities behind Shri Chandreshwar Dham
      who continue to inspire devotees through spirituality,
      service, and cultural values.
    </p>

  </div>

  {/* Cards */}
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

    {/* ===== PERSON 1 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person1.jpg"
          alt="Akhoury Ravindra Prasad"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Founder & Spiritual Visionary
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Akhoury Ravindra Prasad
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Founder of Shri Chandreshwar Dham
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Akhoury Ravindra Prasad Ji is the revered founder of
          Shri Chandreshwar Dham. With deep devotion toward
          Sanatan Dharma and unwavering faith in Mahadev,
          he established the temple as a sacred spiritual space
          for devotees and community welfare.
        </p>

      </div>
    </div>

    {/* ===== PERSON 2 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person2.jpg"
          alt="Dr. A.K Raghvan"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Managing Trustee & Cultural Guide
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Dr. A.K Raghvan
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Managing Trustee
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Dr. A.K Raghvan, son of the founder, continues the
          spiritual legacy of Shri Chandreshwar Dham through
          his leadership, devotion, and dedication toward
          preserving temple traditions, religious programs,
          and community service initiatives.
        </p>

      </div>
    </div>

    {/* ===== PERSON 3 ===== */}
    <div
      className="
        group bg-white rounded-[30px]
        overflow-hidden border border-orange-100
        shadow-md hover:shadow-2xl
        transition-all duration-500
        hover:-translate-y-3
      "
    >

      {/* Image */}
      <div className="relative h-[380px] overflow-hidden">

        <img
          src="/images/person3.jpg"
          alt="Dr. Nidhi Bharti"
          className="
            w-full h-full object-cover
            transition-transform duration-700
            group-hover:scale-110
          "
        />

        <div className="
          absolute inset-0
          bg-gradient-to-t
          from-black/60 via-black/10 to-transparent
        "></div>

        {/* Role Badge */}
        <div className="
          absolute bottom-5 left-5
          bg-white/90 backdrop-blur-md
          px-4 py-2 rounded-full
          text-sm font-semibold text-orange-700
          shadow-md
        ">
          Youth & Community Development Head
        </div>

      </div>

      {/* Content */}
      <div className="p-7">

        <h3 className="text-2xl font-bold text-gray-800">
          Dr. Nidhi Bharti
        </h3>

        <p className="text-orange-600 font-medium mt-2">
          Community Development Head
        </p>

        <p className="text-gray-600 text-sm leading-7 mt-5">
          Dr. Nidhi Bharti actively contributes toward the
          spiritual and social growth initiatives of the temple.
          Her compassionate leadership supports youth engagement,
          educational programs, women empowerment, and stronger
          community connections through seva and cultural values.
        </p>

      </div>
    </div>

  </div>

</section>
      {/* ===== FOUNDER MESSAGE ===== */}
{/* ===== FOUNDER MESSAGE ===== */}
{/* ===== FOUNDER MESSAGE ===== */}
<section className="bg-[#f8f8f6] py-20 overflow-hidden relative">

  {/* Soft Background Glow */}
  <div className="
    absolute -top-24 -left-24
    w-72 h-72
    bg-slate-200/40
    rounded-full
    blur-3xl
  "></div>

  <div className="
    absolute -bottom-24 -right-24
    w-80 h-80
    bg-gray-200/40
    rounded-full
    blur-3xl
  "></div>

  <div className="
    relative z-10
    max-w-6xl mx-auto
    px-6
  ">

    {/* Heading */}
    <div className="text-center mb-14">

      <p className="
        uppercase tracking-[5px]
        text-slate-500
        text-xs font-semibold
        mb-4
      ">
        Founder’s Vision
      </p>

      <h2 className="
        text-3xl md:text-5xl
        font-bold
        text-gray-900
      ">
        Founder’s Message
      </h2>

    </div>

    {/* Main Card */}
    <div className="
      bg-white/80
      backdrop-blur-xl
      border border-white
      shadow-[0_20px_50px_rgba(0,0,0,0.06)]
      rounded-[38px]
      overflow-hidden
      grid lg:grid-cols-2
      items-center
    ">

      {/* ===== LEFT IMAGE ===== */}
      <div className="
        relative
        h-full
        flex items-center
        justify-center
        p-8
      ">

        <div className="
          relative
          w-full
          rounded-[30px]
          overflow-hidden
          shadow-xl
        ">

          <img
            src="/images/Founder'sImage.jpeg"
            alt="Founder"
            className="
              w-full
              h-[520px]
              object-cover
              object-top
            "
          />

          {/* Soft Overlay */}
          <div className="
            absolute inset-0
            bg-gradient-to-t
            from-black/35 via-transparent to-transparent
          "></div>

          {/* Floating Quote */}
          <div className="
            absolute bottom-6 left-6 right-6
            bg-white/10
            backdrop-blur-md
            border border-white/20
            rounded-[24px]
            p-5
          ">

            <p className="
              text-white
              text-base
              leading-7
              italic
            ">
              “A temple is not merely a place of worship,
              but a sanctuary of peace, devotion and hope.”
            </p>

          </div>

        </div>

      </div>

      {/* ===== RIGHT CONTENT ===== */}
      <div className="
        p-10 md:p-12
        flex flex-col justify-center
      ">

        {/* Big Quote */}
        <div className="relative mb-8">

          <div className="
            absolute -top-8 left-0
            text-[90px]
            text-slate-100
            font-bold
            leading-none
          ">
            “
          </div>

          <p className="
            relative z-10
            text-xl md:text-2xl
            leading-[42px]
            font-semibold
            text-gray-800
          ">
            Shri Chandreshwar Dham was established
            with a sacred vision — to create a divine
            space where devotion, discipline and
            spirituality guide every soul toward inner peace.
          </p>

        </div>

        {/* Divider */}
        <div className="
          w-16 h-[2px]
          bg-slate-300
          mb-8
        "></div>

        {/* Message */}
        <div className="space-y-6">

          <p className="
            text-gray-600
            leading-8
            text-base md:text-lg
          ">
            The temple is not merely a place of worship,
            but a spiritual center for cultural preservation,
            social upliftment and community harmony.
          </p>

          <p className="
            text-gray-600
            leading-8
            text-base md:text-lg
          ">
            Every initiative taken under this sacred roof
            is dedicated to service, faith and divine purpose —
            inspiring future generations to remain connected
            with spirituality and humanity.
          </p>

        </div>

        {/* Signature */}
        <div className="
          mt-12
          pt-6
          border-t border-slate-200
        ">

          <h3 className="
            text-xl
            font-semibold
            text-gray-900
          ">
            — Shri Akhoury Ravindra Prasad
          </h3>

          <p className="
            text-slate-500
            mt-2
            text-sm
            tracking-wide
          ">
            Founder, Shri Chandreshwar Dham
          </p>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ===== FOUNDER MESSAGE SECTION ===== */}

<section className="py-14 bg-[#fdf8f2] relative overflow-hidden">

  {/* Background Glow */}
  <div className="
    absolute top-0 left-0
    w-72 h-72 bg-orange-100
    rounded-full blur-3xl opacity-40
  "></div>

  <div className="
    absolute bottom-0 right-0
    w-96 h-96 bg-purple-100
    rounded-full blur-3xl opacity-40
  "></div>

  <div className="max-w-6xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <div className="text-center mb-10">

      <p className="
        uppercase tracking-[5px]
        text-orange-600 text-sm
        font-semibold mb-4
      ">
        सेवा • संस्कार • समर्पण
      </p>

      <h2 className="
        text-4xl md:text-4xl
        font-bold text-gray-800
      ">
        संस्थापक का संदेश
      </h2>

    </div>

    {/* Main Card */}
    <div className="
      bg-white/80 backdrop-blur-md
      border border-orange-100
      shadow-2xl rounded-[40px]
      p-8 md:p-16
      relative overflow-hidden
    ">

      {/* Quote Symbol */}
      <div className="
        absolute top-6 left-8
        text-[120px] leading-none
        text-orange-100 font-serif
      ">
        “
      </div>

      <div className="relative z-10">

        {/* Main Quote */}
     <p className="
  text-1xl md:text-3xl
  leading-[50px]
  font-semibold
  text-gray-800
  text-center
  max-w-4xl mx-auto
  mb-10
">
          “श्री चंद्रेश्वर धाम केवल ईश्वर आराधना का स्थान नहीं,
          बल्कि मानवता, सेवा, संस्कार और राष्ट्र निर्माण की
          एक जीवंत प्रेरणा है।”
        </p>

        {/* Paragraphs */}
        <div className="
          space-y-8
          text-gray-700
          leading-[42px]
          text-lg
          max-w-5xl mx-auto
        ">

          <p>
            हमारा विश्वास है कि जब समाज आध्यात्मिक रूप से जागृत होता है,
            तभी वास्तविक विकास, शांति और सद्भाव संभव होता है।
            यह धाम आने वाली पीढ़ियों को भारतीय संस्कृति,
            सनातन मूल्यों और सेवा की भावना से जोड़ने का
            एक विनम्र प्रयास है।
          </p>

          <p>
            श्री चंद्रेश्वर धाम केवल एक मंदिर नहीं,
            बल्कि आध्यात्मिक जागरण, मानव सेवा,
            सांस्कृतिक संरक्षण और राष्ट्र निर्माण
            की एक पवित्र भावना है।
            संस्था का मूल मंत्र —
            <span className="font-semibold text-orange-700">
              {" "}“सेवा एवं समर्पण”
            </span>
            — प्रत्येक कार्य का आधार है।
          </p>

          <p>
            धाम का उद्देश्य केवल पूजा-अर्चना तक सीमित नहीं,
            बल्कि समाज में नैतिकता, अनुशासन, एकता,
            संस्कार और आध्यात्मिक चेतना का प्रसार करना है।
            श्री चंद्रेश्वर धाम यह मानता है कि
            <span className="italic font-semibold text-gray-900">
              {" "}“मंदिर और विकास एक ही सिक्के के दो पहलू हैं।”{" "}
            </span>
            क्योंकि आध्यात्मिक रूप से जागृत समाज ही
            शांति, संस्कृति, सामाजिक समरसता और
            राष्ट्र की प्रगति का मार्ग प्रशस्त करता है।
          </p>

          <p>
            यह धाम भारतीय संस्कृति, सनातन परंपराओं
            और मानवीय मूल्यों को संरक्षित एवं सशक्त
            बनाने के लिए निरंतर कार्यरत है।
            संस्था का विश्वास है कि सच्ची भक्ति केवल
            आराधना में नहीं, बल्कि मानवता की सेवा,
            त्याग, करुणा और राष्ट्र के प्रति समर्पण में निहित है।
          </p>

          <p>
            श्री चंद्रेश्वर धाम समाज के प्रत्येक वर्ग को
            आध्यात्मिक प्रेरणा, सांस्कृतिक जागरूकता
            और सेवा की भावना से जोड़ने का प्रयास करता है,
            ताकि आने वाली पीढ़ियाँ संस्कार, सदाचार
            और भारतीय आध्यात्मिक विरासत से जुड़ी रहें।
          </p>

          <p>
            मानव सेवा एवं राष्ट्र के प्रति समर्पण की भावना
            के साथ यह धाम शिक्षा, सामाजिक सहयोग,
            सांस्कृतिक उत्थान और आध्यात्मिक विकास
            के माध्यम से एक ऐसे समाज की कल्पना करता है
            जो शांति, सद्भाव, नैतिकता और आत्मिक चेतना
            से परिपूर्ण हो।
          </p>

        </div>

        {/* Signature */}
        <div className="mt-16 text-right">

          <p className="
            text-2xl font-semibold
            text-gray-800
          ">
            — संस्थापक
          </p>

          <p className="text-orange-600 mt-2">
            श्री चंद्रेश्वर धाम
          </p>

        </div>

      </div>

    </div>

  </div>

</section>


    {/* ===== FOOTER (SAME AS YOURS) ===== */} <footer className="bg-[#0A1A2F] py-10 mt-16 text-white"> <div className="max-w-6xl mx-auto px-4"> <div className="flex flex-col md:flex-row items-center justify-between gap-5"> <div> <h3 className="text-xl font-bold text-center md:text-left"> Sri Chandreshwar Dham Mandir </h3> <p className="text-white/70 text-sm mt-1 text-center md:text-left"> Govind Nagar, Vrindavan, Uttar Pradesh 281121, India </p> </div> <div className="flex gap-4 text-white/80"> {[FaFacebook, FaInstagram, FaYoutube, FaTwitter].map((Icon, i) => ( <a key={i} href="#" className="hover:text-white transition"> <Icon className="text-xl" /> </a> ))} </div> </div> <div className="border-t border-white/20 mt-6 mb-4"></div> <div className="flex flex-col md:flex-row justify-between text-sm text-white/70 gap-3"> <p>© {new Date().getFullYear()} All rights reserved.</p> <div className="flex gap-6"> <a href="#" className="hover:text-white transition"> Privacy Policy </a> <a href="#" className="hover:text-white transition"> Terms & Conditions </a> <a href="#" className="hover:text-white transition"> Contact </a> </div> </div> </div> </footer>

    </main>
  );
}
