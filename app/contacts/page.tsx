'use client'
import { Clock } from 'lucide-react';
import Image from 'next/image'

const contactInfo = [
  {
    icon: "email",
    label: "EMAIL ADDRESS",
    title: "info@darakinengineering.com",
    description:
      "Our primary mailbox for general inquiries, partner collaborations, and structural consultations.",
  },
  {
    icon: "phone",
    label: "PHONE SUPPORT",
    title: "+234 801 234 5678",
    description:
      "Call our headquarters directly Monday to Friday, 8:00 AM to 5:00 PM WAT.",
  },
  {
    icon: "globe",
    label: "ONLINE PORTAL",
    title: "www.darakinengineering.com",
    description:
      "Explore our full service breakdown, active infrastructure pipelines, and recent West African deliveries.",
  },
  {
    icon: "location",
    label: "LAGOS HEADQUARTERS",
    title: "14 Engineering Close",
    description:
      "Victoria Island, Lagos, Nigeria. Book ahead for formal boardroom presentations or design audits.",
  },
];

function ContactIcon({ type }: { type: string }) {
  if (type === "email") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path d="M7 3h3l1.5 4-2 1.5a14 14 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2 2C11.8 19.5 4.5 12.2 4.5 5A2 2 0 0 1 7 3Z" />
      </svg>
    );
  }

  if (type === "globe") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className="h-4 w-4"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-4 w-4"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}



const ContactsPage = () => {

  return (
    <>
      <section
      className="
        relative
        min-h-[360px]
        w-full
        overflow-hidden
        bg-[url('/contact_page_bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      <div className="absolute inset-0 bg-[#062644]/80" />

      <div
        className="
          relative
          z-10
          flex
          min-h-[360px]
          w-full
          items-center
          justify-center
          px-5
          py-14
          sm:px-8
          sm:py-16
          md:min-h-[380px]
          lg:min-h-[365px]
        "
      >
        <div className="mx-auto w-full max-w-5xl text-center text-white">
          <h2
            className="
              text-3xl
              font-semibold
              leading-[1.1]
              tracking-tight
              sm:text-4xl
              md:text-5xl
              lg:text-[52px]
            "
          >
            Let&apos;s Discuss Your Project
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-4xl
              text-sm
              leading-6
              text-white
              sm:mt-6
              sm:text-base
              sm:leading-7
              md:text-lg
              md:leading-8
            "
          >
            Whether you are at concept stage, reviewing a design, preparing
            for tender, or need construction-stage support, we are ready for a
            clear conversation about what your project requires.
          </p>

          <p
            className="
              mx-auto
              mt-1
              max-w-4xl
              text-sm
              leading-6
              text-white
              sm:text-base
              sm:leading-7
              md:text-lg
              md:leading-8
            "
          >
            No long questionnaires, no obligation. Just an honest discussion
            about scope, timing and how we can help — or whether someone else
            is a better fit.
          </p>
        </div>
      </div>
      </section>
      <section className="bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="rounded-md bg-slate-50 p-5 sm:p-6"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#092447] text-white">
                <ContactIcon type={item.icon} />
              </div>

              <h3 className="mt-4 text-[18px] font-bold uppercase tracking-wide text-[#092447] sm:text-[20px]">
                {item.label}
              </h3>

              <p className="mt-1 text-[15px] font-medium leading-5 text-slate-900 sm:[18px]">
                {item.title}
              </p>

              <p className="mt-2 text-[13px] leading-[1.65] text-slate-500 sm:text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
          <div>
            <p className="text-[14px] font-semibold uppercase tracking-wide text-[#092447] sm:text-[16px]">
              CONNECT WITH US
            </p>

            <h2 className="mt-3 max-w-md text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Initiate Your Project Consultation Today
            </h2>

            <p className="mt-4 max-w-lg text-[14px] leading-[1.75] text-slate-600 sm:text-[16px]">
              Our multidisciplinary engineers excel in taking robust
              technical designs and translating them into buildable on-site
              assets. Let us know what you are currently defining, and we will
              bring the structured depth your project demands.
            </p>


            <div className="mt-6 rounded-md bg-slate-50 px-4 py-4 sm:px-5">
              <div className="flex items-center gap-2">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-[#092447]"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M9 12.5 11 14l4-5" />
                </svg>

                <p className="text-[14px] font-semibold text-slate-900 sm:text-[16px]">
                  NDA Protected Inquiries
                </p>
              </div>

              <p className="mt-1.5 text-[12px] leading-[1.65] text-slate-500 sm:text-[14px]">
                All shared site layouts, development blueprints, and tender
                plans are handled with strict executive confidentiality.
              </p>
            </div>
          </div>

          <form className="w-full">
            <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="fullName"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g., Babajide Alao"
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-[16px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[18px]"
                />
              </div>

              <div>
                <label
                  htmlFor="organisation"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Organisation
                </label>

                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  required
                  placeholder="e.g., Lagos State Ministry of Works"
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-[16px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[18px]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="b.alao@organization.gov.ng"
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-[16px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[18px]"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Phone{" "}
                  <span className="text-slate-400">(Optional)</span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g., +234 803 111 2233"
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-[16px] text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[18px]]"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="projectType"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Project Type or Enquiry
                </label>

                <div className="relative">
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="h-11 w-full appearance-none rounded-md border border-slate-200 bg-white px-3 pr-10 text-[16px] text-slate-600 outline-none transition focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[18px]"
                  >
                    <option value="" disabled>
                      Select an infrastructure service classification
                    </option>

                    <option value="structural-analysis">
                      Structural Analysis
                    </option>

                    <option value="civil-engineering">
                      Civil Engineering
                    </option>

                    <option value="technical-advisory">
                      Technical Support & Advisory
                    </option>

                    <option value="project-management">
                      Project Management
                    </option>

                    <option value="due-diligence">
                      Technical Due Diligence
                    </option>

                    <option value="other">
                      Other Enquiry
                    </option>
                  </select>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-700"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  Brief Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Outline your scope, key challenges, or preferred delivery timeline..."
                  className="w-full resize-none rounded-md border border-slate-200 bg-white px-3 py-3 text-[14px] leading-5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#092447] focus:ring-1 focus:ring-[#092447] sm:text-[16px]"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="attachment"
                  className="mb-1.5 block text-[18px] font-medium text-slate-900 sm:text-[20px]"
                >
                  File Attachment{" "}
                  <span className="text-slate-400">(Optional)</span>
                </label>

                <label
                  htmlFor="attachment"
                  className="flex min-h-11 cursor-pointer items-center gap-2 rounded-md bg-slate-50 px-3 py-2 text-[16px] text-slate-500 transition hover:bg-slate-100 sm:text-[18px]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4 shrink-0 text-[#092447]"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="m21 11.5-8.7 8.7a5 5 0 0 1-7.1-7.1L14 4.3a3.5 3.5 0 0 1 5 5L10.5 17.8a2 2 0 1 1-2.8-2.8l8.1-8.1" />
                  </svg>

                  <span>
                    Attach tender specs, site drafts, or project brief
                    (PDF, DOCX, ZIP up to 25MB)
                  </span>
                </label>

                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  accept=".pdf,.doc,.docx,.zip"
                  className="sr-only"
                />
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex h-11 items-center justify-center rounded-sm bg-[#092447] px-7 text-[18px] font-medium text-white transition hover:bg-[#061a34] focus:outline-none focus:ring-2 focus:ring-[#092447] focus:ring-offset-2 sm:text-[20px] sm:mx-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
      <section className="bg-[#F5F7FA] px-6 py-16 sm:px-8 md:py-20">
  <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#1A4A7A]">
      <Clock className="h-7 w-7 text-white" />
    </div>

    <h2 className="text-2xl font-bold text-[#333333] sm:text-3xl">
      Your enquiry is important to us
    </h2>

    <p className="mt-4 max-w-xl text-base leading-7 text-[#5A6A7A] sm:text-lg">
      We aim to respond within two working days. If your matter is urgent,
      please mark it as such in the subject or message.
    </p>
  </div>
</section>

    </>
  )
}

export default ContactsPage 