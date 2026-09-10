import Link from "next/link";
import { Hexagon } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Structural Analysis", href: "/services/structural-analysis" },
  {
    label: "Infrastructure Planning",
    href: "/services/infrastructure-planning",
  },
  { label: "Civil Engineering", href: "/services/civil-engineering" },
  {
    label: "Technical Supervision",
    href: "/services/technical-supervision",
  },
  {
    label: "Structural Coordination",
    href: "/services/structural-coordination",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#071B30] font-[Lato,sans-serif] text-[#71839A]">
      <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16">

        {/* ================= MAIN FOOTER ================= */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">

          {/* ================= COMPANY ================= */}
          <div>
            <Link
              href="/"
              className="group mb-5 flex w-fit items-center gap-2"
            >
              <Hexagon
                size={25}
                strokeWidth={1.8}
                className="text-white transition-transform duration-300 group-hover:rotate-12"
              />

              <span className="text-[18px] font-semibold tracking-[-0.3px] text-white sm:text-[19px]">
                DARAKIN ENGINEERING SERVICES &
                SOLUTIONS LTD.
              </span>
            </Link>

            <p className="max-w-[380px] text-[14px] leading-[1.7]">
              Delivering precise structural, infrastructural, and
              administrative engineering services across the globe. Built on
              a foundation of safety and absolute performance.
            </p>
          </div>

          {/* ================= LINKS + SERVICES ================= */}
          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2 lg:gap-16">

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold text-white sm:mb-5">
                Quick Links
              </h3>

              <ul className="space-y-1">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="
                        flex min-h-[38px] items-center
                        text-[13px] sm:text-[14px]
                        transition-all duration-200
                        hover:translate-x-1 hover:text-white
                      "
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 text-[14px] font-semibold text-white sm:mb-5">
                Services
              </h3>

              <ul className="space-y-1">
                {services.map((service) => (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="
                        flex min-h-[38px] items-center
                        text-[13px] sm:text-[14px]
                        transition-all duration-200
                        hover:translate-x-1 hover:text-white
                      "
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-white sm:mb-5">
              Contact Info
            </h3>

            <address className="not-italic text-[14px] leading-[1.8]">
              <p>100 Innovation Parkway, Suite 500</p>
              <p>Wuse 2, Abuja.</p>

              <a
                href="mailto:info@darakinengineering.com"
                className="mt-1 block w-fit transition-colors duration-200 hover:text-white"
              >
                info@darakinengineering.com
              </a>

              <a
                href="tel:+2345513214567"
                className="block w-fit transition-colors duration-200 hover:text-white"
              >
                +234 551 321 4567
              </a>
            </address>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="mt-12 border-t border-[#1D3043] sm:mt-14 lg:mt-16" />

        {/* ================= BOTTOM FOOTER ================= */}
        <div
          className="
            flex flex-col gap-5
            pt-6
            text-[12px] sm:text-[13px]
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-center md:text-left">
            © 2026 Darakin Engineering. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end md:gap-x-7">
            <Link
              href="/privacy"
              className="transition-colors duration-200 hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-white"
            >
              Terms of Use
            </Link>

            <Link
              href="/sitemap"
              className="transition-colors duration-200 hover:text-white"
            >
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
