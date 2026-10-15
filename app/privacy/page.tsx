import type { Metadata } from "next";
import Link from "next/link";
import InformationPageLayout from "@/components/InformationPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Darakin Engineering handles information shared through its website and direct enquiries.",
};

const PrivacyPage = () => (
  <InformationPageLayout
    eyebrow="Website information"
    title="Privacy Policy"
    intro="This policy explains what information may be handled when you visit Darakin Engineering’s website or contact the company about engineering and development services."
    updatedAt="15 October 2026"
  >
    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Information you choose to share
      </h2>
      <p>
        If you contact Darakin by email or telephone, you may share your name,
        contact details, organisation, project requirements, documents, and
        other information needed to discuss an enquiry. Please avoid sending
        information that is not needed for that conversation.
      </p>
      <p>
        The enquiry form on this website is currently a front-end demonstration:
        submitting it displays a confirmation in your browser, but does not send
        the entered details or attachments to Darakin. Do not rely on the form
        to deliver an enquiry. Please use the contact details on our{" "}
        <Link className="font-semibold text-[#1A4A7A] underline underline-offset-4" href="/contacts">
          Contact page
        </Link>
        .
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        How information is used
      </h2>
      <p>
        Information sent directly to the company may be used to respond to your
        enquiry, understand the requested scope, prepare a proposal, provide
        services under an agreed engagement, maintain business records, and
        meet applicable legal or professional obligations.
      </p>
      <p>
        Darakin does not sell personal contact information. Information may be
        shared with service providers who support business communications,
        hosting, or professional work where necessary, or where disclosure is
        required by law. Those providers may process information under their
        own privacy terms.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Website operation and cookies
      </h2>
      <p>
        The website application does not currently include analytics or
        advertising trackers. The hosting provider may process basic technical
        information, such as request and error logs, to operate and secure the
        site. Browser or hosting technologies needed to deliver the site may
        also be used.
      </p>
      <p>
        Links to other websites are provided for convenience. Their operators
        control their own data practices, so review their policies before
        sharing information with them.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Retention and your choices
      </h2>
      <p>
        Direct correspondence is kept only for as long as reasonably needed to
        respond, manage a business relationship, and satisfy applicable record
        keeping requirements. You may contact Darakin to request access to or
        correction of information you have provided, or to ask for its deletion
        where appropriate. Some records may need to be retained for legal,
        contractual, or professional reasons.
      </p>
    </section>

    <section className="space-y-4">
      <h2 className="text-xl font-semibold leading-tight text-[#0A2540] sm:text-2xl">
        Contact
      </h2>
      <p>
        For a privacy question or request, email{" "}
        <a
          className="break-words font-semibold text-[#1A4A7A] underline underline-offset-4"
          href="mailto:info@darakinengineering.com"
        >
          info@darakinengineering.com
        </a>
        . Darakin Engineering Services &amp; Solutions Ltd. is based in Abuja,
        Nigeria.
      </p>
    </section>
  </InformationPageLayout>
);

export default PrivacyPage;