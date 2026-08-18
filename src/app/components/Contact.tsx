"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-transparent px-8 py-30">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold tracking-tight text-black dark:text-white">
            Let's Connect
          </h2>

          <p className="mt-8 text-xl text-gray-700 dark:text-gray-400">
            Open to roles and collaborations in London around Data, Applied ML and AI.
         </p>
        </div>

        {/* Contact Form */}
        <form
        action="/api/contact"
        method="POST"
        className="mx-auto mt-16 w-full max-w-3xl space-y-8">

          {/* Name */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-black dark:text-white">
              Name
            </label>

            <input
                 name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full rounded-2xl border border-[#D2D6E0] bg-[#FAFBFD] px-5 py-4 text-lg text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-white focus:ring-4 focus:ring-[#FACC15]/20 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-[#121824]"
            />
          </div>

          {/* Contact */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-black dark:text-white">
              Contact
            </label>

           <input
               name="contact"
           type="tel"
           inputMode="numeric"
           pattern="[0-9]{10}"
           maxLength={10}
           minLength={10}
           placeholder="10-digit phone number"
           required
           onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value
            .replace(/\D/g, "")
            .slice(0, 10);
        }}
        className="w-full rounded-2xl border border-[#D2D6E0] bg-[#FAFBFD] px-5 py-4 text-lg text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-white focus:ring-4 focus:ring-[#FACC15]/20 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-[#121824]"
        />
    </div>

          {/* Email */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-black dark:text-white">
              Email
            </label>

            <input
               name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full rounded-2xl border border-[#D2D6E0] bg-[#FAFBFD] px-5 py-4 text-lg text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-white focus:ring-4 focus:ring-[#FACC15]/20 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-[#121824]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-3 block text-lg font-semibold text-black dark:text-white">
              Message
            </label>

            <textarea
                name="message"
              rows={4}
              placeholder="How can I help?"
              required
              className="w-full resize-none rounded-2xl border border-[#D2D6E0] bg-[#FAFBFD] px-5 py-4 text-lg text-black outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#FACC15] focus:bg-white focus:ring-4 focus:ring-[#FACC15]/20 dark:border-[#30394A] dark:bg-[#1A2130] dark:text-white dark:placeholder:text-gray-500 dark:focus:bg-[#121824]"
            />
          </div>

          {/* Send Button */}
                <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#FACC15] px-6 py-4 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAB308] hover:shadow-lg active:scale-[0.98]"
          >
            Send Message
            <span className="text-xl">→</span>
          </button>

        </form>

        {/* Contact Items */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Location */}
          <div className="text-center">
            <div className="group mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-[#FACC15] hover:bg-[#FEF9C3] dark:border-[#30394A] dark:bg-[#1A2130]">
                <FaMapMarkerAlt
                size={20}
                className="text-[#FACC15] transition-all duration-300 group-hover:scale-110"
                />
            </div>

            <h3 className="mt-8 text-lg font-bold text-black dark:text-white">
              LOCATION
            </h3>

            <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
              London, United Kingdom
            </p>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="group mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-[#FACC15] hover:bg-[#FEF9C3] dark:border-[#30394A] dark:bg-[#1A2130]">
                <FaPhoneAlt
                size={20}
                className="text-[#22C55E] transition-all duration-300 group-hover:scale-110"
                />
            </div>

            <h3 className="mt-8 text-lg font-bold text-black dark:text-white">
              CONTACT
            </h3>

            <p className="mt-5 text-lg text-gray-500 dark:text-gray-400">
              +44 7557113827
            </p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="group mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-[#FACC15] hover:bg-[#FEF9C3] dark:border-[#30394A] dark:bg-[#1A2130]">
                <FaEnvelope
                size={20}
                className="text-[#EA4335] transition-all duration-300 group-hover:scale-110"
                />
            </div>

            <h3 className="mt-8 text-lg font-bold text-black dark:text-white">
              EMAIL
            </h3>

            <a
              href="mailto:mayankkulkarni65@gmail.com"
              className="mt-5 block text-lg text-gray-500 dark:text-gray-400"
            >
              mayankkulkarni65@gmail.com
            </a>
          </div>

          {/* GitHub */}
          <div className="text-center">
            <div className="group mx-auto flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 bg-gray-50 transition-all duration-300 hover:scale-105 hover:border-[#FACC15] hover:bg-[#FEF9C3] dark:border-[#30394A] dark:bg-[#1A2130]">
                <FaGithub
                size={20}
                className="text-[#6E40C9] transition-all duration-300 group-hover:scale-110"
                />
                </div>

            <h3 className="mt-8 text-lg font-bold text-black dark:text-white">
              GITHUB
            </h3>

            <a
              href="https://github.com/MayankK10"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 block text-lg text-gray-500 dark:text-gray-400"
            >
              View GitHub
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}