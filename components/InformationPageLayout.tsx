import type { ReactNode } from "react";

type InformationPageLayoutProps = {
  eyebrow: string;
  title: string;
  intro: string;
  updatedAt?: string;
  children: ReactNode;
};

export default function InformationPageLayout({
  eyebrow,
  title,
  intro,
  updatedAt,
  children,
}: InformationPageLayoutProps) {
  return (
    <>
      <section className="bg-[#0A2540] px-5 py-12 text-[#F5F7FA] sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#A8C2DB] sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-6 text-[#F5F7FA]/85 sm:text-base sm:leading-7">
            {intro}
          </p>
          {updatedAt && (
            <p className="mt-5 text-xs text-[#F5F7FA]/70 sm:text-sm">
              Last updated: {updatedAt}
            </p>
          )}
        </div>
      </section>
      <section className="bg-[#F5F7FA] px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl space-y-10 py-10 text-sm leading-7 text-[#28415D] sm:space-y-12 sm:py-14 sm:text-base sm:leading-8 lg:py-16">
          {children}
        </div>
      </section>
    </>
  );
}