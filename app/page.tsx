import { Building, ClipboardList, Cpu, GitMerge, Lightbulb, Map, MicSignal, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {

  const servicesOverview = [
  {
    icon: <Building className="h-8 w-8" strokeWidth={1.5} />,
    title: 'Civil & Structural Engineering',
    description:
      'Feasibility studies, detailed design, design review, structural assessment, and technical advice for buildings, roads, drainage, water infrastructure and related works',
  },
  {
    icon: <Map className="h-8 w-8" strokeWidth={1.5} />,
    title: 'Infrastructure Planning & Advisory',
    description:
      'Strategic input on infrastructure development, master-planning support, regulatory guidance and project definition to  move from concept to implementation.',
  },
  {
    icon: <ClipboardList className="h-8 w-8" strokeWidth={1.5} />,
    title: 'Project Support & Technical Services',
    description:
      'Site supervision support, technical due diligence, specification preparation, tender assistance and construction-stage advisory services.',
  },
  {
    icon: <GitMerge className="h-8 w-8" strokeWidth={1.5} />,
    title: 'Multi-Disciplinary Coordination',
    description:
      'Integration of civil engineering with complementary disciplines to handle architectural, structural and MEP interfaces.',
  },
]

  return (
    <>
      <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0">
          <Image
            src="/home_page_bg.png"
            alt="background_image"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[#0A2540]/70" />
        <div
          className="
            relative z-10
            mx-auto flex min-h-[calc(100vh-73px)]
            max-w-[1600px]
            items-center
            px-6 py-20
            sm:px-8
            md:px-10
            lg:px-12
          "
        >
          <div
            className="
              w-full max-w-7xl
              text-center
              lg:text-center
              mx-auto
            "
          >
            <h1
              className="
                text-5xl
                font-bold
                leading-[1.05]
                text-[#F5F7FA]
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
              "
            >
              CLEAR ENGINEERING. CONFIDENT <br />
              DELIVERY
            </h1>
            <div
              className="
                mx-auto mt-7 max-w-6xl
                lg:mx-0
                lg:mt-8
              "
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-[#F5F7FA]/90
                  sm:text-xl
                  sm:leading-9
                "
              >
                Darakin Engineering Services and Solutions LTD delivers multi-disciplinary technical advice and project support to public and private sector clients across infrastructure, structural and built-environment projects.
              </p>
            </div>
            <div
              className="
                mt-9
                flex flex-col
                items-center
                justify-center
                gap-4
                sm:mt-10
                sm:flex-row
              "
            >
              <Link href='services'>
                <button
                  className="
                    min-h-[56px]
                    w-full
                    max-w-[280px]
                    rounded-md
                    border-2
                    border-[#F5F7FA]
                    bg-[#F5F7FA]
                    px-8
                    text-base
                    font-semibold
                    text-[#0A2540]
                    transition-all
                    duration-300
                    ease-out
                    hover:bg-[#f5f7faaf]
                    active:scale-[0.97]
                  "
                >
                  Explore Services
                </button>
              </Link>
              <Link href='projects'>
                <button
                  className="
                    min-h-[56px]
                    w-full
                    max-w-[280px]
                    rounded-md
                    border-2
                    border-[#F5F7FA]
                    bg-transparent
                    px-8
                    text-base
                    font-semibold
                    text-[#F5F7FA]
                    transition-all
                    duration-300
                    ease-out
                    hover:bg-[#f5f7fa3a]
                    active:scale-[0.97]
                  "
                >
                  View Projects
                </button>
              </Link>
              <Link href='contacts'>
                <button
                  className="
                    min-h-[56px]
                    w-full
                    max-w-[280px]
                    rounded-md
                    border-2
                    border-[#F5F7FA]
                    bg-[#F5F7FA]
                    px-8
                    text-base
                    font-semibold
                    text-[#0A2540]
                    transition-all
                    duration-300
                    ease-out
                    hover:bg-[#f5f7faaf]
                    active:scale-[0.97]
                  "
                >
                  Start a Conversation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden bg-[#F5F7FA] text-[#333333]">
        <div className="mx-auto flex max-w-[1500px] flex-col lg:flex-row lg:items-center lg:gap-16">
          {/* Mobile background image */}
          <div className="absolute inset-0 lg:hidden">
            <Image
              src="/section_2_img.png"
              alt=""
              fill
              className="object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-white/75" />
          </div>

          {/* Text */}
          <div className="relative z-10 flex flex-1 flex-col justify-center px-6 py-16 text-center sm:px-10 lg:min-h-0 lg:max-w-7xl lg:px-0 lg:py-24 lg:text-left">
            <h2 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl lg:text-3xl">
              ENGINEERING SOLUTIONS FOR COMPLEX GLOBAL INFRASTRUCTURES
            </h2>

            <p className="mx-auto max-w-xl text-base leading-7 text-[#333333]/80 sm:text-lg sm:leading-8 lg:mx-0">
              We combine rigorous civil and structural engineering expertise with practical, solution-oriented thinking. <br />
We help projects succeed, from feasibility and detailed design through to construction-stage support and multi-disciplinary coordination.
            </p>
          </div>

          {/* Desktop image */}
          <div className="relative z-10 hidden flex-1 lg:block">
            <Image
              src="/section_2_img.png"
              alt="construction workers at site"
              width={560}
              height={300}
              className="h-[420px] w-full object-cover rounded-[90px] rounded-tr-none"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#FAFBFC] px-6 py-16 text-[#333333] sm:px-8 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <h2 className="mb-12 text-center text-3xl font-bold leading-tight sm:text-4xl lg:mb-16 lg:text-5xl">
      WHAT YOU GAIN
    </h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">

      <div className="flex flex-col items-center rounded-2xl bg-[#F5F7FA] px-6 py-10 text-center shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2540]">
          <ShieldCheck
            className="h-8 w-8 text-[#F5F7FA]"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Decisions You Can Trust
        </h3>

        <p className="text-base leading-7 text-[#5A6A7A]">
          Rigorous analysis presented so you can act with confidence.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-2xl bg-[#F5F7FA] px-6 py-10 text-center shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2540]">
          <Cpu
            className="h-8 w-8 text-[#F5F7FA]"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Fewer Costly Surprises
        </h3>

        <p className="text-base leading-7 text-[#5A6A7A]">
          Interfaces managed early, assumptions challenged, risks surfaced
          before they became problems.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-2xl bg-[#F5F7FA] px-6 py-10 text-center shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2540]">
          <MicSignal
            className="h-8 w-8 text-[#F5F7FA]"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mb-4 text-xl font-bold">
          One Clear Technical Voice
        </h3>

        <p className="text-base leading-7 text-[#5A6A7A]">
          Civil leadership that coordinates cleanly with architecture,
          structure and MEP.
        </p>
      </div>

      <div className="flex flex-col items-center rounded-2xl bg-[#F5F7FA] px-6 py-10 text-center shadow-sm">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A2540]">
          <Lightbulb
            className="h-8 w-8 text-[#F5F7FA]"
            strokeWidth={1.5}
          />
        </div>

        <h3 className="mb-4 text-xl font-bold">
          Advice that Survives the Site
        </h3>

        <p className="text-base leading-7 text-[#5A6A7A]">
          Practical recommendations shaped by real delivery constraints. Not
          just theory.
        </p>
      </div>

    </div>
  </div>
      </section>
      <section className="bg-[#F5F7FA] px-6 py-16 text-[#F5F7FA] sm:px-8 lg:px-16 lg:py-24">
  <div className="mx-auto max-w-7xl">

    <h2 className="text-[#333333] mb-12 text-center text-3xl font-bold leading-tight sm:text-4xl lg:mb-16 lg:text-5xl">
      Services at a Glance
    </h2>

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {servicesOverview.map((service, index) => (
        <div
          key={index}
          className="
            group relative overflow-hidden rounded-2xl
            bg-[#1A4A7A]
            px-8 py-10
            text-center
            transition-all duration-500 ease-out
            md:min-h-[320px] md:px-8
            lg:bg-[#0A2540] lg:px-8 lg:py-10
            lg:hover:-translate-y-2
            lg:hover:bg-[#1A4A7A]
            lg:hover:shadow-xl
          "
        >
          {/* Main content */}
          <div
            className="
              flex flex-col items-center justify-center
              lg:h-full
              lg:transition-opacity lg:duration-500
              lg:group-hover:opacity-40
            "
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F7FA]/10">
              <span className="text-[#F5F7FA]">
                {service.icon}
              </span>
            </div>

            <h3 className="mb-5 text-xl font-bold leading-snug">
              {service.title}
            </h3>

            {/* Mobile description */}
            <p className="text-base leading-7 text-[#F5F7FA]/85 lg:hidden">
              {service.description}
            </p>
          </div>

          {/* Desktop hover description */}
          <div
            className="
              absolute inset-0 hidden
              items-center justify-center
              bg-[#1A4A7A]
              px-8 py-10
              opacity-0
              transition-all duration-500 ease-out
              lg:flex
              lg:group-hover:opacity-100
            "
          >
            <p className="translate-y-4 text-base leading-7 text-[#F5F7FA] transition-transform duration-500 group-hover:translate-y-0 lg:text-lg">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
      </section>
      <section className="relative overflow-hidden bg-[#0A2540] text-[#F5F7FA]">
  <div className="mx-auto flex max-w-7xl flex-col lg:flex-row lg:items-center">

    {/* Mobile backdrop */}
    <div className="absolute inset-0 lg:hidden">
      <Image
        src="/section_5_img.png"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0A2540]/80" />
    </div>

    {/* Image — Desktop */}
    <div className="relative hidden flex-1 lg:block my-20 ">
      <Image
        src="/section_5_img.png"
        alt="Construction workers finalizing a project"
        width={500}
        height={340}
        className="h-[500px] w-full object-cover rounded-[70px]"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 flex min-h-[600px] flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-10 lg:min-h-[500px] lg:items-start lg:px-16 lg:py-20 lg:text-left">

      <h1 className="text-center mb-6 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
        Let&apos;s Engineer the Future Together
      </h1>

      <p className="text-center mb-8 max-w-xl text-base leading-7 text-[#F5F7FA]/85 sm:text-lg sm:leading-8">
        If you are defining a project, reviewing a design, or need a
        dependable civil partner on a multi-disciplinary team, we should talk.
      </p>

      <button
        type="button"
        className="
          rounded-[4px]
          bg-[#F5F7FA]
          px-8 py-4
          text-base font-bold
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
          mx-auto
        "
      >
        Arrange a Conversation
      </button>

    </div>
  </div>
</section>



    </>
  );
};

export default Page;
