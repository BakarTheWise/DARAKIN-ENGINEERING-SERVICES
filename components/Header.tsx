'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contacts', href: '/contacts' },
  ]

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full bg-[#0A2540] text-[#F5F7FA]">
      <div className="mx-auto flex h-[82px] max-w-[1600px] items-center justify-between px-6 md:px-10 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="border-gray-600 border-2 h-[58px] w-[58px] flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white">
            <Image
              src="/darakinLogo.png"
              alt="Darakin Engineering logo"
              width={200}
              height={200}
              priority
              quality={100}
              className="h-[65px] w-[65px] object-contain"
            />
          </div>

          <h1 className="hidden font-lato text-[16px] font-bold leading-tight tracking-wide lg:block">
            DARAKIN ENGINEERING SERVICES & <br />
            SOLUTIONS LTD.
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      relative font-lato text-sm font-medium
                      after:absolute after:-bottom-2 after:left-0
                      after:h-0.5 after:bg-[#4FD1C5]
                      after:transition-all after:duration-300
                      ${
                        isActive
                          ? 'font-bold text-[#4FD1C5] after:w-full'
                          : 'text-[#F5F7FA] after:w-0 hover:text-[#4FD1C5] hover:after:w-full'
                      }
                    `}
                  >
                    {link.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          className="
            relative z-[9999]
            flex h-11 w-11
            items-center justify-center
            rounded-full
            border border-white/10
            bg-white/5
            transition-all duration-300
            hover:bg-white/10
            active:scale-90
            md:hidden
          "
        >
          <span className="relative h-5 w-5">
            <span
              className={`
                absolute left-0 top-0
                h-[2px] w-5
                rounded-full
                bg-[#F5F7FA]
                transition-all duration-300
                ${isOpen ? 'top-2.5 rotate-45' : ''}
              `}
            />

            <span
              className={`
                absolute left-0 top-2.5
                h-0.5 w-5
                rounded-full
                bg-[#F5F7FA]
                transition-all duration-200
                ${isOpen ? 'scale-x-0 opacity-0' : ''}
              `}
            />

            <span
              className={`
                absolute bottom-0 left-0
                h-0.5 w-5
                rounded-full
                bg-[#F5F7FA]
                transition-all duration-300
                ${isOpen ? 'bottom-2.5 -rotate-45' : ''}
              `}
            />
          </span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 top-[82px]
          z-40
          bg-black/30
          backdrop-blur-[2px]
          transition-opacity duration-300
          md:hidden
          ${
            isOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      {/* Mobile Navigation */}
      <nav
        className={`
          absolute left-0 right-0 top-full
          z-[9998]
          overflow-hidden
          border-t border-white/10
          bg-[#0A2540]/95
          shadow-2xl shadow-black/30
          backdrop-blur-xl
          md:hidden
          transition-all duration-300
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isOpen
              ? 'visible max-h-[500px] translate-y-0 opacity-100'
              : 'invisible max-h-0 -translate-y-3 opacity-0'
          }
        `}
      >
        <div className="mx-auto max-w-[600px] px-6 py-5">

          <div
            className={`
              mb-3 text-center
              transition-all duration-300
              ${
                isOpen
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-2 opacity-0'
              }
            `}
          >
            <span className="font-lato text-[10px] font-semibold uppercase tracking-[0.3em] text-[#4FD1C5]">
              Menu
            </span>
          </div>

          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href

              return (
                <li
                  key={link.href}
                  className={`
                    transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-3 opacity-0'
                    }
                  `}
                  style={{
                    transitionDelay: isOpen
                      ? `${80 + index * 50}ms`
                      : '0ms',
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`
                      flex min-h-[54px] w-full
                      rounded-xl px-5
                      font-lato text-base
                      transition-all duration-200
                      active:scale-[0.98]
                      ${
                        isActive
                          ? 'bg-[#4FD1C5]/10 font-bold text-[#4FD1C5]'
                          : 'text-[#F5F7FA] hover:bg-white/5'
                      }
                    `}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`
                          h-1.5 w-1.5 rounded-full
                          ${
                            isActive
                              ? 'scale-100 bg-[#4FD1C5]'
                              : 'scale-0'
                          }
                        `}
                      />

                      {link.name}
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>

        </div>
      </nav>
    </header>
  )
}

export default Header
