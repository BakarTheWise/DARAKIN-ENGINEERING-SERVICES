import type { Metadata } from "next";
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Engineering Projects",
  description:
    "Explore Darakin Engineering's civil infrastructure, roadworks, and development project experience.",
};

const ProjectsPage = () => {

  const projects = [
  {
    category: "ROAD CONSTRUCTION | SITE DELIVERY",
    title: "Asphalt Paving in Progress",
    description:
      "A paving crew lays a fresh asphalt strip along an existing route. Darakin's company profile identifies turnkey project management and client-side representation among its engagement models for coordinated site delivery.",
    image: "/darakin-civil-works.jpg",
    imageAlt: "Fresh asphalt being laid along a road by a paving crew",
  },
  {
    category: "CIVIL INFRASTRUCTURE | ROADWORKS",
    title: "Road Surfacing and Site Coordination",
    description:
      "Road crews and paving equipment work along a developing route. Darakin's profile lists project management and client-side representation as ways it supports civil infrastructure delivery.",
    image: "/darakin-road-construction.jpeg",
    imageAlt: "Road crew and paving equipment working on a developing route",
  },
  {
    category: "REAL ESTATE DEVELOPMENT | CIVIL & STRUCTURAL",
    title: "Building Development and Project Coordination",
    description:
      "An active building site brings structural, civil, and construction activities together. Darakin's profile describes civil and structural engineering, real estate advisory, project management, and structural design and peer review among its services.",
    image: "/darakin-site-construction.jpg",
    imageAlt: "Multi-storey building under construction at a development site",
  },
];
  return (
    <>
      <section className="relative overflow-hidden text-[#F5F7FA]">
              {/* Background image */}
              <div className="absolute inset-0">
            <Image
              fill
              src="/project_page_bg.png"
              alt=""
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0A2540]/75" />
              </div>
            
              <div className="relative z-10 mx-auto flex min-h-137.5 max-w-4xl flex-col items-center justify-center px-6 py-20 text-center sm:px-8 lg:min-h-150">
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#F5F7FA] sm:text-lg sm:leading-8 lg:text-xl">
              The projects below illustrate the kind of work we do and the problems we help clients solve, Clients names are shown where permission is allows: otherwise they are described by type.
            </p>
              </div>
      </section>
      <section className="bg-[#F5F7FA] px-6 py-16 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">
    <div className="mb-12 text-left">
      <h3 className="mb-2 text-xl font-semibold text-[#1A4A7A]">
        Proven Performance
      </h3>
      <h2 className="text-3xl font-bold text-[#333333] md:text-4xl">
        Key Infrastructural Deliveries
      </h2>
    </div>

    <div className="group mb-8 grid min-h-105 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
      <div
        className="relative min-h-80 bg-cover bg-center md:min-h-105"
        role="img"
        aria-label="Road paving crew laying asphalt"
        style={{ backgroundImage: "url('/darakin-road-paving-crew.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 md:hidden" />

        <div className="relative z-10 flex h-full items-center justify-center p-8 text-center md:hidden">
          <div className="max-w-md text-white">
            <h3 className="mb-2 text-lg font-semibold text-white">
              ROAD INFRASTRUCTURE | PROJECT DELIVERY
            </h3>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Asphalt Road Construction
            </h2>
            <p className="mb-6 text-sm leading-6 text-white/90">
              Site teams lay and compact asphalt to create a durable road
              surface. Darakin&apos;s profile identifies turnkey project
              management and client-side representation among its engagement
              models, supporting coordinated delivery from site activity to
              completed works.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden items-center p-8 md:flex lg:p-12">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-[#1A4A7A]">
            ROAD INFRASTRUCTURE | PROJECT DELIVERY
          </h3>
          <h2 className="mb-5 text-2xl font-bold text-[#333333] lg:text-3xl">
            Asphalt Road Construction
          </h2>
          <p className="mb-6 leading-7 text-[#5A6A7A]">
            Site teams lay and compact asphalt to create a durable road
            surface. Darakin&apos;s profile identifies turnkey project
            management and client-side representation among its engagement
            models, supporting coordinated delivery from site activity to
            completed works.
          </p>
        </div>
      </div>
    </div>

    <div className="group grid min-h-105 overflow-hidden rounded-2xl bg-white shadow-sm md:grid-cols-2">
      <div className="hidden items-center p-8 md:flex lg:p-12">
        <div>
          <h3 className="mb-2 text-lg font-semibold text-[#1A4A7A]">
            CIVIL INFRASTRUCTURE | COMPLETED WORKS
          </h3>
          <h2 className="mb-5 text-2xl font-bold text-[#333333] lg:text-3xl">
            Roadway Delivery for Growing Communities
          </h2>
          <p className="mb-6 leading-7 text-[#5A6A7A]">
            A completed paved route demonstrates the practical impact of
            planned civil works. Darakin works across public infrastructure and
            commercial development, providing project management, development
            advisory, and client-side representation to help keep delivery
            aligned with project requirements.
          </p>
        </div>
      </div>

      <div
        className="relative min-h-80 bg-cover bg-center md:min-h-105"
        role="img"
        aria-label="Completed paved road running through a green landscape"
        style={{ backgroundImage: "url('/darakin-completed-roadway.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/30 md:hidden" />

        <div className="relative z-10 flex h-full items-center justify-center p-8 text-center md:hidden">
          <div className="max-w-md text-white">
            <h3 className="mb-2 text-lg font-semibold text-white">
              CIVIL INFRASTRUCTURE | COMPLETED WORKS
            </h3>
            <h2 className="mb-4 text-2xl font-bold text-white">
              Roadway Delivery for Growing Communities
            </h2>
            <p className="mb-6 text-sm leading-6 text-white/90">
              A completed paved route demonstrates the practical impact of
              planned civil works. Darakin works across public infrastructure
              and commercial development, providing project management,
              development advisory, and client-side representation to help keep
              delivery aligned with project requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
      </section>
      <section className="bg-slate-50 px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[1.55/1] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                {/* Category */}
                <p className="mb-4 text-[11px] font-semibold tracking-wide text-blue-900">
                  {project.category}
                </p>

                {/* Title */}
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-[21px]">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {project.description}
                </p>

                {/* CTA */}
                <div className="mt-auto pt-7">
                  <Link
                    href="/contacts"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-blue-800"
                    target='_blank'
                  >
                    Discuss a Similar Project

                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12H19M13 6L19 12L13 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-20">
          <p className="text-xl leading-8 text-slate-900 sm:text-2xl">
            Project experience and references are available on request.
          </p>

          <Link
            href="/contacts"
            className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-[#092447] px-8 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#061a34] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"
          >
            Request a Capability Overview
          </Link>
        </div>
      </div>
    </section>  
    </>
  )
}

export default ProjectsPage