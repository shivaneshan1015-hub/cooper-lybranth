export interface Office {
  city: string;
  type: string;
  address: string[];
  phone: string;
  email?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: "Executive Search" | "Workforce Solutions" | "Technical Training" | "Quality & Systems";
  description: string;
  highlights: string[];
  deliverables: string[];
  ctaLabel: string;
  iconName: string;
}

export interface IndustrySector {
  id: string;
  number: string;
  name: string;
  description: string;
  keyRoles: string[];
  icon: string;
}

export interface MethodologyPillar {
  acronym: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export interface TrainingProgram {
  id: string;
  category: "Leadership & Management" | "Operational Excellence & TPM" | "Quality Systems & Kaizen" | "Shop-Floor & Operator Effectiveness" | "Communication & Interpersonal";
  language: "English" | "Hindi" | "Bilingual";
  title: string;
  targetAudience: string;
  duration: string;
  outcomes: string[];
}

export const COMPANY_INFO = {
  name: "Cooper Lybranth Services Ltd.",
  brandName: "Cooper Lybranth",
  tagline: "HR Solutions To Engineering Sector",
  headline: "Engineering Talent. Workforce Solutions. Future-Ready Skills.",
  subheadline:
    "Connecting businesses with skilled engineering professionals and helping develop the technical capabilities needed for a changing industrial landscape.",
  establishedYear: 2001,
  yearsOfOperation: "24+",
  alliance: "In Strategic Alliance with HASOW, Germany (Tool Design & Engineering Pioneer)",
  certification: "ISO 9001:2008 Certified Governance",
  corporateType: "Public Limited Consultancy",
  headquarters: "Gurgaon, National Capital Region, India",
  primaryPhone: "+91 97176 19777",
  primaryEmail: "crm@cooperlybranth.com",
  portalUrl: "https://cooperlybranth.com",
  trainingUrl: "https://cooperlybranth.in/training",
  trustNotice:
    "Important Notice: Cooper Lybranth never charges candidates any fee at any stage of recruitment. Beware of fraudulent communications using our brand name. Please verify all official mandates directly at crm@cooperlybranth.com.",
  stats: [
    { value: "24+", label: "Years of Engineering Focus", detail: "Serving industrial leaders since 2001" },
    { value: "350+", label: "Enterprise Clients", detail: "Tier-1 OEMs & manufacturing majors" },
    { value: "100+", label: "Engineering Consultants", detail: "Engineers hiring engineers" },
    { value: "50+", label: "Modular Training Courses", detail: "Bilingual delivery in English & Hindi" },
  ],
  verifiedClients: [
    "Maruti Suzuki",
    "Lucas TVS",
    "Endurance Group",
    "Dana India",
    "Rane Group",
    "Varroc Engineering",
    "JBM Group",
    "Hero Group",
    "TATA Ficosa",
    "Tata Projects",
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "executive-search",
    title: "Board & Executive Search",
    tagline: "Discreet leadership appointments for apex manufacturing & engineering roles.",
    category: "Executive Search",
    description:
      "Discreet, research-driven appointments for Managing Directors, Plant Heads, Chief Technical Officers, and VP Operations. Evaluated using strategic fit, leadership temperament, and manufacturing maturity.",
    highlights: [
      "Discreet market benchmarking across global Tier-1 competitors",
      "Shop-floor leadership impact & cultural alignment assessment",
      "92% retention rate past year-3 across executive placements",
    ],
    deliverables: ["Confidential Talent Dossier", "Technical Competency Matrix", "Executive Onboarding Support"],
    ctaLabel: "Discuss Leadership Mandate",
    iconName: "Award",
  },
  {
    id: "mid-senior-recruitment",
    title: "Mid-to-Senior Engineering Hiring",
    tagline: "Precision talent acquisition for specialized CAD/CAM, R&D, and plant engineering.",
    category: "Executive Search",
    description:
      "Precision recruitment for CAD/CAE simulation engineers, PLC/SCADA automation architects, metallurgical quality managers, and R&D patent specialists across automotive, aerospace, and heavy engineering.",
    highlights: [
      "Consultants trained with formal engineering backgrounds",
      "Comprehensive 6Ps candidate technical validation",
      "Average shortlist delivery turnaround under 14 days",
    ],
    deliverables: ["Pre-screened Candidate Profiles", "Domain Suitability Scorecard", "Reference Verification"],
    ctaLabel: "Submit Requirement",
    iconName: "Cog",
  },
  {
    id: "technical-rpo",
    title: "Technical RPO & Plant Ramp-Ups",
    tagline: "Scalable recruitment process outsourcing for greenfield projects & capacity expansions.",
    category: "Workforce Solutions",
    description:
      "Embedded talent acquisition teams deployed on-site or hybrid to staff greenfield plant expansions, R&D innovation centres, and high-volume project spikes with 100% digitised SLA governance.",
    highlights: [
      "Dedicated recruitment teams deployed at your plant or hub",
      "Full digitized workflow tracking via CLWP portal",
      "Reduced time-to-hire by 40% with guaranteed cost-per-hire caps",
    ],
    deliverables: ["Dedicated Project Recruiter", "Weekly SLA Performance Dashboards", "Candidate Pipeline Portal"],
    ctaLabel: "Explore RPO Solutions",
    iconName: "Layers",
  },
  {
    id: "training-development",
    title: "Technical & Behavioural Training",
    tagline: "50+ modular training programmes delivered in English and Hindi for engineering workforces.",
    category: "Technical Training",
    description:
      "Contextualised training for manufacturing workforces: Leadership and Operational Excellence for corporate managers in English; Shop-floor productivity, TPM, and safety in Hindi for operators.",
    highlights: [
      "Over 50 modular programmes covering technical and behavioural themes",
      "Bilingual delivery tailored for both boardroom and shop-floor associates",
      "Direct integration with client productivity & Kaizen benchmarks",
    ],
    deliverables: ["Curriculum Customisation", "Pre-and-Post Assessment", "Participant Competency Certification"],
    ctaLabel: "Explore Training Programmes",
    iconName: "GraduationCap",
  },
  {
    id: "qms-plant-audits",
    title: "QMS, Plant EHS & Safety Audits",
    tagline: "Process compliance and quality management aligned to ISO and automotive IATF norms.",
    category: "Quality & Systems",
    description:
      "Quality management system design and Environment, Health & Safety (EHS) implementation mapped to ISO 9001 and strict automotive IATF 16949 standards.",
    highlights: [
      "ISO 9001:2008 certified internal process governance",
      "5S, Kaizen, and Total Productive Maintenance (TPM) advisory",
      "Comprehensive workplace safety and EHS risk reviews",
    ],
    deliverables: ["Audit Gap Report", "Process Standardization Manual", "Compliance Roadmap"],
    ctaLabel: "Inquire on QMS Solutions",
    iconName: "ShieldCheck",
  },
];

export const INDUSTRY_SECTORS: IndustrySector[] = [
  {
    id: "automotive",
    number: "01",
    name: "Automotive & Electric Mobility",
    description: "OEMs, Tier-1/Tier-2 suppliers, EV battery powertrains, chassis engineering, and automotive APQP.",
    keyRoles: ["Head of NPD / Chassis", "Battery Management Specialist", "Quality & IATF Lead"],
    icon: "Car",
  },
  {
    id: "aerospace",
    number: "02",
    name: "Aerospace & Defence",
    description: "Avionics, precision machining, structural airframes, MRO facilities, and propulsion systems.",
    keyRoles: ["Avionics Systems Architect", "Precision CNC Tooling Manager", "Aerospace Quality Auditor"],
    icon: "Plane",
  },
  {
    id: "power-energy",
    number: "03",
    name: "Power, Renewables & Energy",
    description: "Thermal, solar PV, wind turbines, grid transmission, substations, and energy storage.",
    keyRoles: ["Project Execution Director", "High-Voltage Switchgear Engineer", "Renewable Plant Head"],
    icon: "Zap",
  },
  {
    id: "machine-tool",
    number: "04",
    name: "Tool Design & Precision Machinery",
    description: "Press tools, injection moulds, die-casting, precision fixtures, and German alliance tooling heritage.",
    keyRoles: ["Chief Tooling Designer", "Die Cast Process Specialist", "Machining Center Lead"],
    icon: "Wrench",
  },
  {
    id: "automation",
    number: "05",
    name: "Industrial Automation & Robotics",
    description: "Robotics workcells, PLC/SCADA programming, sensors, vision inspection, and Industry 4.0 architectures.",
    keyRoles: ["Mechatronics Lead", "PLC/SCADA Automation Architect", "Robotic Welding Engineer"],
    icon: "Cpu",
  },
  {
    id: "chemical-process",
    number: "06",
    name: "Chemical, Pharma & Process Engineering",
    description: "Specialty chemicals, petrochemical plants, API formulations, GMP compliance, and process safety.",
    keyRoles: ["Plant Process Engineer", "EHS & Safety Director", "API Production Manager"],
    icon: "FlaskConical",
  },
  {
    id: "heavy-engineering",
    number: "07",
    name: "Heavy Engineering & Infrastructure",
    description: "Mining equipment, earthmoving machinery, structural fabrication, EPC projects, and materials handling.",
    keyRoles: ["Fabrication Plant Manager", "Structural Design Head", "Heavy Fleet Project Lead"],
    icon: "Truck",
  },
  {
    id: "rd-centres",
    number: "08",
    name: "R&D & Engineering Design Centres",
    description: "Global capability centres (GCCs), computational fluid dynamics (CFD), FEA simulation, and patents.",
    keyRoles: ["Principal Simulation Analyst", "Materials Research Scientist", "CAE Crash Test Lead"],
    icon: "Microscope",
  },
];

export const METHODOLOGY_FRAMEWORK: MethodologyPillar[] = [
  {
    acronym: "CLWP",
    title: "Cooper Lybranth Workflow Process",
    tagline: "100% Digitised Mandate Engine",
    description:
      "A rigorous, milestone-driven digital recruitment engine. Every mandate from briefing to onboard milestone is logged with SLA time stamps, ensuring complete transparency for hiring managers.",
    points: [
      "Real-time mandate milestone tracking",
      "Strict SLA adherence & time-to-fill targets",
      "Centralized candidate communication archive",
    ],
  },
  {
    acronym: "KSS",
    title: "Knowledge-Sector-Skill Mapping",
    tagline: "Manufacturing Context Pre-Filter",
    description:
      "Before shortlisting begins, KSS analyzes your plant's equipment, tolerances, and operational pace to identify candidates with real-world functional readiness, eliminating superficial keyword matching.",
    points: [
      "Machinery, tooling & cycle time alignment",
      "P&ID, CAD, and tolerance depth validation",
      "Zero keyword-stuffing false positives",
    ],
  },
  {
    acronym: "The 6 Ps",
    title: "Sector-Specific Consultant Training",
    tagline: "Engineers Sourcing Engineers",
    description:
      "Every Cooper Lybranth consultant undergoes continuous training across six core industrial dimensions: Product, Process, Plant, People, Projects, and Performance.",
    points: [
      "Evaluators speak your technical terminology",
      "Shop-floor reality comprehension",
      "Bespoke technical phone screening",
    ],
  },
  {
    acronym: "The 4 Rs",
    title: "Quality Governance Compass",
    tagline: "Strict Internal QA Mandate",
    description:
      "Our internal quality assurance audits every candidate placement against four core benchmarks: Right Candidate, Right Role, Right Time, and Right Cost.",
    points: [
      "Right Candidate (domain & cultural fit)",
      "Right Role (growth & retention alignment)",
      "Right Time & Cost (strict SLA governance)",
    ],
  },
];

export interface PipelineStage {
  step: string;
  phaseNumber: string;
  title: string;
  duration: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  metrics: { label: string; value: string }[];
  technicalAudit: string;
}

export const CLWP_PIPELINE_STAGES: PipelineStage[] = [
  {
    step: "01",
    phaseNumber: "Phase 01",
    title: "Plant & Tolerance Calibration",
    duration: "Days 1 – 3",
    tagline: "Tooling, Machinery & Cycle-Time Scoping",
    summary:
      "Rather than relying on generic job descriptions, our engineering practice leads review plant layouts, machinery specs (CNC, PLC, hydraulic, automated cells), cycle-time constraints, and operational tolerances with your technical panel.",
    deliverables: [
      "Plant Machinery & Tolerance Calibration Matrix",
      "KSS Competency Blueprint (Knowledge-Sector-Skill)",
      "Structured Hiring SLA & Milestone Agreement",
    ],
    metrics: [
      { label: "Brief Calibration SLA", value: "Within 48h" },
      { label: "Engineering Lead Assigned", value: "Domain Degreed" },
      { label: "False Match Filter", value: "Zero Keyword-Only" },
    ],
    technicalAudit: "Validated against P&ID, machine specs & IATF / ISO quality norms",
  },
  {
    step: "02",
    phaseNumber: "Phase 02",
    title: "6Ps Technical Pre-Screening",
    duration: "Days 4 – 9",
    tagline: "Engineers Sourcing Engineers",
    summary:
      "Candidates are evaluated by consultants with engineering degrees across the 6Ps: Product, Process, Plant, People, Projects, and Performance. CAD/CAM/CAE portfolios, GD&T proficiency, and shift leadership are vetted before client submission.",
    deliverables: [
      "Technical 6Ps Evaluation Scorecard",
      "Hands-on GD&T / PLC Problem Solving Verification",
      "Compensation & Relocation Feasibility Report",
    ],
    metrics: [
      { label: "Screening Depth", value: "6 Core Dimensions" },
      { label: "Rejection at Pre-Screen", value: "68% Filtered Out" },
      { label: "Direct Sourcing Pool", value: "100k+ Engineers" },
    ],
    technicalAudit: "Deep verification of actual shop-floor achievements vs resume claims",
  },
  {
    step: "03",
    phaseNumber: "Phase 03",
    title: "Calibrated Shortlist Delivery",
    duration: "Days 10 – 14",
    tagline: "3–5 Pre-Vetted Ready-to-Interview Profiles",
    summary:
      "Hiring managers receive a structured talent dossier of 3 to 5 rigorously screened candidates with comparative competency indices, technical assessment summaries, and verified notice periods, eliminating panel interview fatigue.",
    deliverables: [
      "Curated 3–5 Candidate Dossier",
      "Comparative Engineering Competency Matrix",
      "Panel Interview Scheduling & Feedback Portal",
    ],
    metrics: [
      { label: "Interview-to-Offer Ratio", value: "3:1 Average" },
      { label: "Shortlist Turnaround", value: "10-14 Business Days" },
      { label: "Panel Time Saved", value: "Over 70% Saved" },
    ],
    technicalAudit: "Every candidate pre-briefed on plant location, shift structure & role scope",
  },
  {
    step: "04",
    phaseNumber: "Phase 04",
    title: "Onboarding & 4Rs Guarantee",
    duration: "Days 15 – 90",
    tagline: "Right Candidate, Role, Time & Cost",
    summary:
      "Our mandate does not end with an offer letter. We manage notice period tracking, resignation facilitation, background checks, and post-joining assimilation, backed by our 90-day replacement guarantee under the 4Rs governance framework.",
    deliverables: [
      "Resignation & Joining Risk Tracker",
      "90-Day Performance & Assimilation Reviews",
      "Formal 4Rs Quality Compliance Certificate",
    ],
    metrics: [
      { label: "Joining Predictability", value: "94.6% Turnout" },
      { label: "Replacement Assurance", value: "90-Day Free Cover" },
      { label: "3-Year Executive Retention", value: "92% Rate" },
    ],
    technicalAudit: "Post-joining check-ins at 30, 60, and 90 days with hiring manager & candidate",
  },
];

export const FEATURED_TRAINING_MODULES: TrainingProgram[] = [
  {
    id: "leadership-mgmt",
    category: "Leadership & Management",
    language: "English",
    title: "Executive Leadership & Plant Visionary Governance",
    targetAudience: "Plant Heads, Operations Directors, Senior Managers",
    duration: "2 Days / 16 Hours",
    outcomes: [
      "Strategic plant goal alignment and OKR execution",
      "Crisis leadership and high-stakes operational decision-making",
      "Cross-functional collaboration across production, maintenance & quality",
    ],
  },
  {
    id: "shopfloor-leadership",
    category: "Leadership & Management",
    language: "Bilingual",
    title: "Shop-Floor Supervisory Leadership & Shift Handover Discipline",
    targetAudience: "Shift In-Charges, Production Supervisors, Line Foremen",
    duration: "2 Days / 12 Hours",
    outcomes: [
      "Flawless shift transition and line balancing communication",
      "Conflict management and grievance resolution on the assembly floor",
      "Production target tracking and visual daily management (VDM)",
    ],
  },
  {
    id: "tpm-kaizen",
    category: "Operational Excellence & TPM",
    language: "English",
    title: "Total Productive Maintenance (TPM) & 5S Mastery",
    targetAudience: "Maintenance Managers, Production Supervisors, Quality Leads",
    duration: "2 Days / 14 Hours",
    outcomes: [
      "Autonomous maintenance (Jishu Hozen) implementation steps",
      "OEE (Overall Equipment Effectiveness) loss calculation & remediation",
      "Systematic 5S audits and visual factory management",
    ],
  },
  {
    id: "lean-vsm",
    category: "Operational Excellence & TPM",
    language: "English",
    title: "Value Stream Mapping (VSM) & Muda Elimination",
    targetAudience: "Industrial Engineers, Continuous Improvement Leads, Process Heads",
    duration: "2 Days / 14 Hours",
    outcomes: [
      "Current state vs future state value stream mapping",
      "Identification of the 7 manufacturing wastes (Muda/Muri/Mura)",
      "Cycle-time takt-time synchronization across machining cells",
    ],
  },
  {
    id: "problem-solving",
    category: "Quality Systems & Kaizen",
    language: "Bilingual",
    title: "Root Cause Analysis (RCA) & 8D Problem Solving",
    targetAudience: "Quality Engineers, Process Engineers, Line Leaders",
    duration: "1 Day / 8 Hours",
    outcomes: [
      "Fishbone diagrams, 5-Why analysis, and Ishikawa mapping",
      "8D methodology for automotive OEM customer complaints",
      "Mistake proofing (Poka-Yoke) design and permanent corrective actions",
    ],
  },
  {
    id: "spc-qc-tools",
    category: "Quality Systems & Kaizen",
    language: "English",
    title: "Statistical Process Control (SPC) & 7 QC Tools in Practice",
    targetAudience: "Quality Assurance Leads, Metrology Specialists, Process Engineers",
    duration: "2 Days / 14 Hours",
    outcomes: [
      "Control charts (X-bar R, P, C) application on active machining lines",
      "Process capability analysis (Cp, Cpk) interpretation for automotive audits",
      "Pareto analysis and histogram analysis for defect reduction",
    ],
  },
  {
    id: "shop-floor-hindi",
    category: "Shop-Floor & Operator Effectiveness",
    language: "Hindi",
    title: "दैनिक कार्यस्थल प्रबंधन एवं शॉप-फ्लोर अनुशासन (Daily Workplace Discipline)",
    targetAudience: "Machine Operators, Technicians, Line Supervisors",
    duration: "1 Day / 8 Hours",
    outcomes: [
      "शॉप-फ्लोर पर सुरक्षा, 5S और दुर्घटना-मुक्त कार्य संस्कृति (Safety & zero-accident culture)",
      "मशीन की दैनिक जांच एवं टूट-फूट से बचाव (Daily inspection & preventive upkeep)",
      "टीम वर्क, समयबद्धता और गुणवत्ता के प्रति निष्ठा (Teamwork, punctuality & quality adherence)",
    ],
  },
  {
    id: "maintenance-safety-hindi",
    category: "Shop-Floor & Operator Effectiveness",
    language: "Hindi",
    title: "मशीन प्रिवेंटिव मेंटेनेंस और ऑपरेटर सुरक्षा (Operator Maintenance & Safety)",
    targetAudience: "CNC Operators, Press Operators, Tool Room Technicians",
    duration: "1 Day / 8 Hours",
    outcomes: [
      "ऑटोनामस मेंटेनेंस (CLIT: Cleaning, Lubrication, Inspection, Tightening)",
      "खतरनाक मशीनों पर LOTO (Lock-out Tag-out) एवं PPE नियमों का पालन",
      "टूल वियर की पहचान और ब्रेकडाउन से पूर्व चेतावनी संकेत",
    ],
  },
  {
    id: "kaizen-waste-hindi",
    category: "Shop-Floor & Operator Effectiveness",
    language: "Hindi",
    title: "औद्योगिक 5S एवं वेस्ट रिडक्शन कार्यशाला (5S & Waste Elimination)",
    targetAudience: "Floor Associates, Line Helpers, Assembly Technicians",
    duration: "1 Day / 6 Hours",
    outcomes: [
      "5S के 5 स्तंभ: छांटना (Seiri), क्रमबद्ध करना (Seiton), स्वच्छता (Seiso), मानकीकरण (Seiketsu), अनुशासन (Shitsuke)",
      "व्यर्थ समय (Wasted Motion) एवं सामग्री स्क्रैप की रोकथाम",
      "शॉप-फ्लोर सुझाव योजना (Kaizen Suggestions) में सक्रिय भागीदारी",
    ],
  },
  {
    id: "cross-functional-comm",
    category: "Communication & Interpersonal",
    language: "Bilingual",
    title: "Cross-Functional Engineering Collaboration & Conflict Resolution",
    targetAudience: "Design Engineers, Production Engineers, Procurement Leads",
    duration: "1 Day / 8 Hours",
    outcomes: [
      "Bridging the communication gap between Design, Production & Purchase",
      "Constructive conflict management during engineering change orders (ECO)",
      "Executive technical briefing skills for plant review committees",
    ],
  },
];

export const OFFICE_LOCATIONS: Office[] = [
  {
    city: "Gurgaon (Corporate HQ)",
    type: "Flagship Corporate Office",
    address: [
      "732-33, Block A, 7th Floor",
      "JMD Megapolis, Sector-48",
      "Sohna Road, Gurgaon — 122001, Haryana",
    ],
    phone: "+91 97176 19777",
    email: "crm@cooperlybranth.com",
  },
  {
    city: "Chennai",
    type: "Southern Manufacturing Hub",
    address: [
      "Daaru Complex, 17/2.B, 2nd Floor",
      "Gandhi Road, Alwarthirunagar",
      "Chennai — 600087, Tamil Nadu",
    ],
    phone: "+91 87662 65254",
  },
  {
    city: "Pune",
    type: "Western Automotive Corridor",
    address: [
      "Unit 15, 2nd Floor, Building A",
      "City Vista, Fountain Road",
      "Kharadi, Pune — 411014, Maharashtra",
    ],
    phone: "+91 97172 69991",
  },
  {
    city: "Pantnagar",
    type: "Northern Industrial Zone",
    address: [
      "Beta 70, Omaxe Riveira",
      "Pant Nagar",
      "Udham Singh Nagar — 263153, Uttarakhand",
    ],
    phone: "+91 89795 01318",
  },
];

export const UPCOMING_BRANCHES = ["Ahmedabad", "Hyderabad", "Bengaluru"];

export const CLIENT_TESTIMONIALS = [
  {
    quote:
      "Wonderful team work, support, task understanding, feedback and follow-up, depth of requirement understanding and TAT while working for our senior-level assignments. Keep up the passion towards all your clients — and be with them as a reliable resource partner, as in our case.",
    clientName: "Ganesh Aher",
    role: "Head of HRD",
    company: "Varroc Engineering",
  },
  {
    quote:
      "Cooper Lybranth's consultants stand out because they actually understand the manufacturing line. When we briefed our plant expansion, their engineering pre-screening saved our technical panel dozens of interview hours.",
    clientName: "Senior Talent Lead",
    role: "General Manager — HR",
    company: "Automotive Tier-1 Manufacturer",
  },
  {
    quote:
      "From leadership mandates to shop-floor supervisory training in Hindi, Cooper Lybranth has delivered consistent engineering workforce solutions across our multi-plant footprint.",
    clientName: "Vice President — Operations",
    role: "Operations & Manufacturing",
    company: "Precision Tooling & Components Major",
  },
];
