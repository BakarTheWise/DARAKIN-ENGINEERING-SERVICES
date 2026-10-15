import type { Metadata } from "next";
import Link from "next/link";
import InformationPageLayout from "@/components/InformationPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms for using Darakin Engineering’s website and its general information.",
};

const TermsPage = () => (
  <InformationPageLayout
    eyebrow="Website information"
    title="Terms of Use"
    intro="These terms apply to your use of the Darakin Engineering website. By using the site, you agree to use it lawfully and understand the limits of the information provided here."
    updatedAt="15 October 2026"
  >
    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Website information is general
      </h2>
      <p>
        Content on this site describes Darakin Engineering’s civil and
        structural engineering, infrastructure planning, project support, and
        coordination capabilities. It is provided for general information and
        is not a project-specific design, inspection, safety assessment, or
        professional recommendation. Conditions and requirements vary by site
        and project.
      </p>
      <p>
        Do not rely on website content as a substitute for advice prepared for
        your project by appropriately qualified professionals. Use of the site
        or sending an enquiry does not itself create a professional services
        engagement. Any work will be subject to a separate written agreement
        setting out its scope, deliverables, responsibilities, fees, and terms.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Acceptable use
      </h2>
      <p>
        You may use the site to learn about the company and make legitimate
        enquiries. You must not misuse the site, attempt to disrupt or gain
        unauthorised access to it, upload harmful material, or use its content
        in a way that infringes another person’s rights or applicable law.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Intellectual property
      </h2>
      <p>
        Unless otherwise stated, the website’s text, branding, design, and
        materials are owned by Darakin Engineering or used with permission.
        You may view and print pages for personal, non-commercial reference.
        Reproduction, republication, or commercial use requires permission from
        the relevant rights holder.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Third-party sites and availability
      </h2>
      <p>
        This website may link to external services. Darakin does not control
        their content, availability, or terms. The site and its content are
        provided on an “as available” basis; information may be updated or
        removed without notice.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Liability and applicable law
      </h2>
      <p>
        To the extent permitted by applicable law, Darakin Engineering is not
        responsible for loss arising from reliance on general website content
        or temporary site unavailability. Nothing in these terms excludes a
        liability that cannot lawfully be excluded. These terms are governed by
        the laws applicable in the Federal Republic of Nigeria, subject to any
        separate written client agreement.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Contact
      </h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a
          className="break-words font-semibold text-[#1A4A7A] underline underline-offset-4"
          href="mailto:info@darakinengineering.com"
        >
          info@darakinengineering.com
        </a>
        . For project enquiries, visit the{" "}
        <Link className="font-semibold text-[#1A4A7A] underline underline-offset-4" href="/contacts">
          Contact page
        </Link>
        .
      </p>
    </section>
  </InformationPageLayout>
);

export default TermsPage;