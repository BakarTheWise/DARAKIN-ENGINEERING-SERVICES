import Image from 'next/image'
import {
  Building2,
  Map,
  ClipboardList,
  Network,
  TriangleAlert,
} from "lucide-react";

const ServicesPage = () => {
  const services = [
  {
    title: "Civil and Structural Engineering",
    description:
      "You receive feasibility studies, detailed designs, design review and structural assessment that are clear, defensible and are ready for the next stage - whether that is funding, tender or construction. We focus on solutions that work on paper and on site, so you are not left translating theory into practice alone.",
    icon: Building2,
    span: "md:col-span-2",
  },
  {
    title: "Infrastructure Planning & Advisory",
    description:
      "You gain early clarity on scope, constraints, sequencing and risk. We help you design projects that are realistic to deliver, reducing the chance of redesigns, budget shocks and stalled progress. The goal is a project you can take forward with confidence.",
    icon: Map,
    span: "md:col-span-2",
  },
  {
    title: "Project & Technical Services",
    description:
      "You keep technical continuity, when it matters most. From due diligence and specification writing to tender support and construction-stage advice, we stay involved so quality does not drop the moment the design drawings are issued. Gaps in advice are where problems grow, we close them.",
    icon: ClipboardList,
    span: "md:col-span-2",
  },
  {
    title: "Multi-Disciplinary Coordination",
    description:
      "You benefit from civil leadership that actively manages interfaces with architecture, structure and MEP. Instead of discovering clashes late, you get earlier alignment, clearer responsibilities and a more coherent project. Good coordination is often the difference between a smooth delivery and a difficult one.",
    icon: Network,
    span: "md:col-span-3",
  },
  {
    title: "Solutions for Complex or Constrained Solutions",
    description:
      "When previous advice has left gaps, site conditions are difficult, or the brief is usually constrained, we provide focused problem-solving. The aim is progress - practical options that move the project forward without unnecessary complexity or delay.",
    icon: TriangleAlert,
    span: "md:col-span-3",
  },
];
  return (
    <>
      <section className="relative overflow-hidden text-[#F5F7FA]">
        {/* Background image */}
        <div className="absolute inset-0">
      <Image
        fill
        src="/service_page_bg.png"
        alt=""
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[#0A2540]/75" />
        </div>
      
        <div className="relative z-10 mx-auto flex min-h-137.5 max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:min-h-150">
      <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Our Services
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-7 text-[#F5F7FA] sm:text-lg sm:leading-8 lg:text-xl">
        Every service we offer is designed around one outcome: giving you
        clearer decisions and more reliable delivery. Below is how we support
        your project at each stage.
      </p>
        </div>
      </section>
      <section className="bg-[#F5F7FA] px-6 py-16.75 lg:px-0">
  <div className="mx-auto max-w-7xl">
    <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-6">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <article
            key={service.title}
            className={`
              ${service.span}
              rounded-[7px]
              border
              border-[#D9E1E9]
              bg-white
              p-8
              text-center
              md:text-left
            `}
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#071B30] mx-auto md:mx-0">
              <Icon
                className="h-5.25 w-5.25 text-white"
                strokeWidth={1.8}
              />
            </div>

            {/* Heading */}
            <h3 className="mt-5 text-[19px] font-semibold leading-tight tracking-[-0.25px] text-[#171717]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mt-5 text-[14px] font-normal leading-[1.58] text-[#28415D]">
              {service.description}
            </p>
          </article>
        );
      })}
    </div>
  </div>
      </section>
      <section className="bg-[#0A2540] px-6 py-20 text-[#F5F7FA] sm:px-8 sm:py-24 lg:py-28">
  <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

    <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
      Ready to bring your project to life?
    </h1>

    <p className="mt-6 max-w-2xl text-base leading-7 text-[#F5F7FA]/90 sm:text-lg sm:leading-8">
      Tell us where your project stands. We will tell you honestly how we can
      help — and where we cannot.
    </p>

    <button
      type="button"
      className="
        mt-8
        rounded-sm
        bg-[#F5F7FA]
        px-8 py-4
        text-base font-semibold
        text-[#0A2540]
        transition-all duration-300 ease-out
        hover:bg-[#0A2540]
        hover:text-[#F5F7FA]
        hover:ring-2
        hover:ring-[#F5F7FA]
        focus:outline-none
        focus:ring-2
        focus:ring-[#F5F7FA]
        focus:ring-offset-2
        focus:ring-offset-[#0A2540]
      "
    >
      Discuss Your Project
    </button>

  </div>
</section>

    </>
    

  )
}

export default ServicesPage