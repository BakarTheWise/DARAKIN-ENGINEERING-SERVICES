import Image from "next/image"
import {
  Shield,
  Award,
  Eye,
  CircleCheck,
  Activity,
} from "lucide-react";

const AboutPage = () => {

  const values = [
  {
    title: "Integrity",
    description:
      "We tell you what the engineering requires, even when the message is inconvenient.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description:
      "Technical quality is non-negotiable; continuous improvement is expected.",
    icon: Award,
  },
  {
    title: "Insight",
    description:
      "We look for the issues that matter, not just the ones that are easy to document.",
    icon: Eye,
  },
  {
    title: "Accountability",
    description:
      "We stand behind our advice and remain available when questions arise.",
    icon: CircleCheck,
  },
  {
    title: "Versatility",
    description:
      "We adapt to the needs of the project while keeping civil engineering at the centre.",
    icon: Activity,
  },
];

  const foundations = [
    { title: 'What Drives Us', description: 'Public safety and professional integrity come first. Beyond that, we measure success by whether our clients feel clearer and more in control after working with us - not by the volume of documentation we produce.' },
    { title: 'Our Vision', description: 'To be the partner clients turn to when they need civil engineering advice they can trust and act on - recognized for clarity, reliability, and the quality of outcomes delivered.' },
    { title: 'Our Mission', description: 'To provide clear, practical and high-quality consulting that enables  successful projects, supports informed decisions, and contribute to resilient, well-engineered environments.' },
  ]

  return (
    <>
      <section className="relative overflow-hidden bg-[#0A2540] px-6 py-16 text-[#F5F7FA] sm:px-8 lg:px-16 lg:py-20">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center gap-10 lg:flex-row lg:gap-14">
      {/* Mobile backdrop */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/section_6_img.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0A2540]/80" />
      </div>
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left">
        <h1 className="mb-6 pt-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          About Darakin Engineering
        </h1>
        <p className="max-w-xl text-base leading-7 text-[#F5F7FA]/85 sm:text-lg sm:leading-8">
          Darakin Engineering Services and Solutions Ltd was established to give
          clients something many projects lack: civil engineering advice that is
          both technically rigorous and genuinely usable. We work with public and
          private clients on infrastructure, buildings and multi-disciplinary
          developments. Our role is not only to produce drawings and reports, but
          to help you make better decisions, manage interfaces, and keep delivery
          coherent from the first conversation through to construction.
        </p>
      </div>
      <div className="relative z-10 hidden h-[520px] w-[660px] shrink-0 lg:block">
        <Image
          src="/section_6_img.png"
          alt="Construction workers planning around a table"
          fill
          className="rounded-[16px] object-cover"
        />
      </div>
      
        </div>
      </section>
      <section className="bg-[#F5F7FA] px-6 py-16 font-[Lato, sarif] sm:px-8 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-6xl">

    <h2 className="mb-12 text-center text-3xl font-bold leading-tight text-[#333333] sm:text-4xl lg:mb-16 lg:text-5xl">
      Our Foundation & Forward Path
    </h2>

    <div className="max-w-full grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {foundations.map((foundation, index) => {
        return (
          <div
            key={index}
            className={`
              rounded-2xl bg-[#0A2540] p-8 sm:p-10
              ${foundations.length % 3 === 1 && index === foundations.length - 1
                ? "lg:col-start-2"
                : ""}
              ${foundations.length % 3 === 2 && index === foundations.length - 1
                ? "lg:col-start-2"
                : ""}
            `}
          >
            <h3 className="mb-4 text-xl font-bold text-[#F5F7FA]/70 sm:text-2xl">
              {foundation.title}
            </h3>

            <p className="text-base leading-7 text-[#F5F7FA]/70 sm:text-lg sm:leading-8">
              {foundation.description}
            </p>
          </div>
        )
      })}
    </div>

  </div>
      </section>
      <section className="bg-white px-6 py-16 sm:px-8 lg:px-16 lg:py-24">
  <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">

    <div className="text-center shrink-0 lg:w-[40%]">
      <h3 className="mb-3 text-lg font-semibold uppercase tracking-[0.15em] text-[#1A4A7A]">
        Our Process
      </h3>

      <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        How We Work With You
      </h1>
    </div>

    <div className="flex-1 lg:w-[70%]">
      <p className="max-w-4xl text-lg leading-8 text-[#333333] sm:text-xl sm:leading-9 lg:text-[22px] lg:leading-9">
        We listen first. We challenge assumptions where necessary. We present
        options and recommendations in plain, actionable language. And we stay
        engaged for as long as the project needs a steady technical hand —
        whether that is early definition, detailed design, or construction-stage
        support.
      </p>
    </div>

  </div>
      </section>
        <section className="bg-[#F5F7FA] px-6 py-24 lg:px-12">
  <div className="mx-auto max-w-[1240px]">
    <div className="text-center">
      <p className="text-[14px] font-semibold uppercase tracking-[-0.1px] text-[#003B7A]">
        Core Pillars
      </p>

      <h2 className="mt-4 text-[34px] font-semibold leading-tight tracking-[-1px] text-[#202020] md:text-[36px]">
        Our Values in Practice
      </h2>
    </div>

    <div className="mt-20 grid grid-cols-1 gap-x-16 gap-y-16 md:grid-cols-2 md:text-left lg:grid-cols-3 lg:gap-x-24 lg:gap-y-20">
      {values.map((value, index) => {
        const Icon = value.icon;

        return (
          <div
            key={value.title}
            className={`
              flex flex-col items-center text-center
              md:items-start md:text-left
              ${index === 4 ? "lg:col-start-2" : ""}
            `}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071B30]">
              <Icon
                size={21}
                strokeWidth={1.8}
                className="text-white"
              />
            </div>


            <h3 className="mt-4 text-[17px] font-semibold text-[#111111]">
              {value.title}
            </h3>

            <p className="mt-4 max-w-[370px] text-[14px] leading-[1.65] text-[#28415D]">
              {value.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>

    </>
  )
}

export default AboutPage