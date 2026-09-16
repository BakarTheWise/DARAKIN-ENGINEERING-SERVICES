export const services = {
  "structural-analysis": {
    label: "Structural Analysis",

    title: "Structural Analysis Consultation",

    description:
      "Whether you are assessing an existing building, developing a new structural scheme, or reviewing a design prepared by another consultant, our team can help you establish the right technical approach. Share the structure type, current design stage, and any known concerns so we can understand the scope of analysis required.",

    enquiryType: "STRUCTURAL ANALYSIS",

    shortDescription:
      "Assessment, analysis, design review, and independent structural verification.",

    href: "/contacts?service=structural-analysis",
  },

  "infrastructure-planning": {
    label: "Infrastructure Planning",

    title: "Infrastructure Planning Consultation",

    description:
      "Tell us about the development you are planning, including the site, proposed land use, infrastructure requirements, and current stage of development. We can discuss how roads, drainage, utilities, water infrastructure, and other site-wide systems can be coordinated into a practical infrastructure strategy.",

    enquiryType: "INFRASTRUCTURE PLANNING",

    shortDescription:
      "Planning and coordination of infrastructure systems for developing sites and communities.",

    href: "/contacts?service=infrastructure-planning",
  },

  "civil-engineering": {
    label: "Civil Engineering",

    title: "Civil Engineering Consultation",

    description:
      "Share the civil engineering requirements for your project, whether they involve site development, access roads, drainage, earthworks, stormwater management, or utility infrastructure. Our team can review the project context and help identify the civil engineering inputs needed to move the work forward.",

    enquiryType: "CIVIL ENGINEERING",

    shortDescription:
      "Civil infrastructure design covering roads, drainage, earthworks, utilities, and site development.",

    href: "/contacts?service=civil-engineering",
  },

  "technical-supervision": {
    label: "Technical Supervision",

    title: "Technical Supervision Consultation",

    description:
      "If construction is already underway, tell us about the current stage of work, site conditions, contractor activities, and any technical issues requiring attention. We can discuss how engineering supervision, inspections, technical reviews, and construction-stage support can help maintain alignment with the design intent.",

    enquiryType: "TECHNICAL SUPERVISION",

    shortDescription:
      "Construction-stage engineering support, inspections, technical reviews, and compliance oversight.",

    href: "/contacts?service=technical-supervision",
  },

  "structural-coordination": {
    label: "Structural Coordination",

    title: "Structural Coordination Consultation",

    description:
      "Tell us about the coordination requirements between your structural design and the architectural, civil, MEP, or construction teams. We can help identify interface issues, review conflicting requirements, and establish a clearer coordination process before problems reach site.",

    enquiryType: "STRUCTURAL COORDINATION",

    shortDescription:
      "Coordination between structural, architectural, civil, MEP, and construction disciplines.",

    href: "/contacts?service=structural-coordination",
  },
} as const;

export type ServiceKey = keyof typeof services;