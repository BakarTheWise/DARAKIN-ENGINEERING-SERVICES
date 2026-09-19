import Link from "next/link";
import { Hexagon } from "lucide-react";
import { services } from "@/data/services";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#071B30] font-[Lato,sans-serif] text-[#71839A]">
      <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-8 sm:py-14 md:px-10 lg:px-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-3">
              <div className="border-gray-600 border-2 max-w-fitS flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
                <Image
                  src="/darakinLogo.png"
                  alt="Darakin Engineering logo"
                  width={200}
                  height={200}
                  priority
                  quality={100}
                  className="h-[40px] w-[40px] object-contain"
                />
              </div>

              <h1 className="font-lato text-[16px] font-bold leading-tight tracking-wide">
                DARAKIN ENGINEERING SERVICES & SOLUTIONS LTD.
              </h1>
            </Link>

            <p className="max-w-[380px] text-[14px] leading-[1.7]">
              Delivering precise structural, infrastructural, and administrative
              engineering services across the globe. Built on a foundation of
              safety and absolute performance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6 lg:col-span-2 lg:grid-cols-2 lg:gap-16">
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

            <div>
              <h3 className="mb-4 text-[14px] font-semibold text-white sm:mb-5">
                Services
              </h3>

              <ul className="space-y-1">
                {Object.values(services).map((service) => (
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

          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-white sm:mb-5">
              Contact Info
            </h3>

            <address className="not-italic text-[14px] leading-[1.8]">
              <h2 className="text-gray-300">Registered Office Address:</h2>
              <p>Tpumpy Estate Phase 12</p>
              <p>Plot 01, Abuja.</p>

              <h2 className="text-gray-300">Corporate Credentials:</h2>
              <p>COREN Registered</p>
              <p>CAC Registration No. —Rc 9799739</p>

              <h2 className="text-gray-300">E-mail:</h2>
              <a
                href="mailto:info@darakinengineering.com"
                className="mt-1 block w-fit transition-colors duration-200 hover:text-white"
              >
                info@darakinengineering.com
              </a>

              <h2 className="text-gray-300">Phone Nummbers:</h2>
              <p
                className="block w-fit transition-colors duration-200 hover:text-white"
              >
                +234 806 385 2947
              </p>
              <p
                className="block w-fit transition-colors duration-200 hover:text-white"
              >
                +234 806 385 2947
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-[#1D3043] sm:mt-14 lg:mt-16" />

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
