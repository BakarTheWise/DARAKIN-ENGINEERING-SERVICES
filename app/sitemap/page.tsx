import type { Metadata } from "next";
import Link from "next/link";
import InformationPageLayout from "@/components/InformationPageLayout";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Site Map",
  description:
    "Browse the main pages and service enquiry links on the Darakin Engineering website.",
};

const sitePages = [
  { label: "Home", href: "/", description: "Darakin Engineering overview." },
  { label: "About Us", href: "/about", description: "Company background and approach." },
  { label: "Services", href: "/services", description: "Engineering and project support services." },
  { label: "Our Projects", href: "/projects", description: "Project and delivery examples." },
  { label: "Contact", href: "/contacts", description: "Enquiry information and contact details." },
];

const informationPages = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Site Map", href: "/sitemap" },
];

const SiteMapPage = () => (
  <InformationPageLayout
    eyebrow="Browse the site"
    title="Site Map"
    intro="Find Darakin Engineering’s company information, services, project overview, and contact details."
  >
    <section className="space-y-5">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Main pages
      </h2>
      <ul className="divide-y divide-[#D9E1E9] border-y border-[#D9E1E9]">
        {sitePages.map((page) => (
          <li key={page.href} className="py-4 sm:py-5">
            <Link
              className="font-semibold text-[#1A4A7A] underline underline-offset-4 hover:text-[#0A2540]"
              href={page.href}
            >
              {page.label}
            </Link>
            <p className="mt-1 text-sm leading-6 text-[#52677C]">
              {page.description}
            </p>
          </li>
        ))}
      </ul>
    </section>

    <section className="space-y-5">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Service enquiries
      </h2>
      <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {Object.entries(services).map(([key, service]) => (
          <li key={key}>
            <Link
              className="font-semibold text-[#1A4A7A] underline underline-offset-4 hover:text-[#0A2540]"
              href={service.href}
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>

    <section className="space-y-5">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Policies
      </h2>
      <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8">
        {informationPages.map((page) => (
          <li key={page.href}>
            <Link
              className="font-semibold text-[#1A4A7A] underline underline-offset-4 hover:text-[#0A2540]"
              href={page.href}
            >
              {page.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </InformationPageLayout>
);

export default SiteMapPage;