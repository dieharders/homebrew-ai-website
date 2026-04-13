export type JobIcon =
  | "harness"
  | "interface"
  | "backend"
  | "architect"
  | "operations";

export interface Job {
  slug: string;
  icon: JobIcon;
  team: string;
  title: string;
  department: string;
  type: string;
  schedule: "Full-Time" | "Part-Time";
  location: string;
  salary: string;
  experience: string;
  postedDate: string;
  shortDescription: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
  niceToHave: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    slug: "ai-engineer-harness",
    icon: "harness",
    team: "FileBuff",
    title: "AI Engineer, Product (Harness)",
    department: "Engineering",
    type: "Internship",
    schedule: "Full-Time",
    location: "On-Site",
    salary: "$90K - $120K",
    experience: "3+ years",
    postedDate: "2026-04-10",
    shortDescription:
      "Build end-to-end AI-powered features across the stack — from React frontends to Python/Node backends and inference pipelines.",
    about:
      "The Product Harness Engineer builds the orchestration layer that connects AI models to user-facing features in applications like FileBuff. You will work closely on a multi-disciplinary team to research, develop, and productize AI-powered applications. \n\nThis role owns the harness — the glue between inference pipelines, vector stores, workflow engines, and the UI. You'll design how AI capabilities are composed, triggered, and surfaced to end users across the full stack.",
    responsibilities: [
      "Build and maintain the AI harness layer that orchestrates models, tools, and data pipelines",
      "Design and implement APIs that connect frontend interfaces to inference and retrieval systems",
      "Develop agent workflows and tool-use patterns that chain multiple AI capabilities together",
      "Optimize end-to-end latency from user input through model inference to rendered response",
      "Collaborate with frontend and backend engineers to ship integrated AI features",
      "Write tests and documentation for critical orchestration and pipeline paths",
    ],
    qualifications: [
      "Applicant MUST be a U.S. citizen and must reside in U.S while performing work",
      "3+ years of professional software engineering experience",
      "Strong proficiency in TypeScript, React",
      "Experience building and deploying LLM-powered applications",
      "Familiarity with vector databases (e.g., Pinecone, Weaviate, ChromaDB)",
      "Experience with Python for ML/AI workloads",
      "Understanding of prompt engineering and retrieval-augmented generation (RAG)",
      "Must work collaboratively with others who possess diverse skillsets and beliefs",
      "Experience with Natural Language Processing techniques and implementations",
    ],
    niceToHave: [
      "Have built apps with Tauri, Node.js or Electron",
      "Familiarity with on-device / edge inference (ONNX, llama.cpp)",
      "Contributions to open-source AI projects",
      "Experience with WebSocket or streaming APIs",
      "Prior experience with AI development or GenAI engines (llama.cpp, Pytorch)",
      "Familiarity with high security and compliance industries (Healthcare, Government, Defense)",
    ],
    benefits: [
      "Competitive salary",
      "Flexible hours",
      "Training and professional development",
    ],
  },
  {
    slug: "ai-engineer-frontend",
    icon: "interface",
    team: "FileBuff",
    title: "AI Engineer, Product (Interface)",
    department: "Engineering",
    type: "Internship",
    schedule: "Full-Time",
    location: "On-Site",
    salary: "$90K - $120K",
    experience: "3+ years",
    postedDate: "2026-04-08",
    shortDescription:
      "Craft beautiful, performant interfaces for AI-powered products. Turn complex AI capabilities into intuitive user experiences.",
    about:
      "The Product Interface Engineer owns the user-facing layer of applications — the screens, interactions, and visual systems that make AI capabilities feel intuitive. You will work closely on a multi-disciplinary team to research, develop, and productize AI-powered applications. \n\nYou'll build the interfaces for real-time streaming responses, agent workflows, document viewers, and data visualizations. This role is for someone who obsesses over UI craft and wants to turn complex AI into simple, delightful experiences.",
    responsibilities: [
      "Build and maintain the company's app suite interface layer — layouts, pages, and interactive components",
      "Implement real-time streaming UI for LLM responses, agent status, and workflow progress",
      "Create interactive document viewers, data visualizations, and search result interfaces",
      "Develop and maintain application design system and reusable component library",
      "Optimize frontend performance for large document sets and data-heavy views",
      "Ensure accessibility, cross-browser compatibility, and responsive design across all application surfaces",
    ],
    qualifications: [
      "Applicant MUST be a U.S. citizen and must reside in U.S while performing work",
      "3+ years of professional frontend development experience",
      "Expert-level TypeScript and React knowledge",
      "Experience with Next.js (App Router, SSR, streaming)",
      "Strong CSS skills — ability to build complex layouts without a framework",
      "Experience integrating with WebSocket or Server-Sent Events for streaming",
      "Eye for design and attention to UI/UX detail",
      "Must work collaboratively with others who possess diverse skillsets and beliefs",
      "Experience with Natural Language Processing techniques and implementations",
    ],
    niceToHave: [
      "Have built apps with Tauri, Node.js or Electron",
      "Experience building chat or conversational interfaces",
      "Familiarity with AI/ML concepts (embeddings, RAG, agents)",
      "Experience with Framer Motion or animation libraries",
      "Background in data visualization (D3, Recharts)",
      "Prior experience with AI development or GenAI engines (llama.cpp, Pytorch)",
      "Familiarity with high security and compliance industries (Healthcare, Government, Defense)",
    ],
    benefits: [
      "Competitive salary",
      "Flexible hours",
      "Training and professional development",
    ],
  },
  {
    slug: "ai-engineer-backend",
    icon: "backend",
    team: "Obrew Engine",
    title: "AI Engineer, Core (Backend)",
    department: "Engineering",
    type: "Internship",
    schedule: "Full-Time",
    location: "On-Site",
    salary: "$90K - $120K",
    experience: "3+ years",
    postedDate: "2026-04-12",
    shortDescription:
      "Design and scale the backend systems that power our AI products — inference pipelines, data processing, and API infrastructure.",
    about:
      "The Core Backend Engineer works on the Obrew engine — the foundational platform that powers FileBuff and all other OpenBrew applications. You'll build the infrastructure layer: model serving, document processing, embedding pipelines, and the APIs that product teams build on top of. \n\nThis role is ideal for someone who loves systems design and wants to solve hard problems at the intersection of distributed systems and local AI inference.",
    responsibilities: [
      "Design and build core Obrew engine services for model inference, embedding, and data processing",
      "Architect and maintain the document ingestion and vector storage pipelines that all Obrew apps depend on",
      "Build and evolve the Obrew API layer (REST, GraphQL, gRPC) consumed by the app suite and third-party developers",
      "Optimize the local inference runtime for throughput, latency, and memory efficiency across hardware configurations",
      "Implement monitoring, alerting, and observability for the core engine",
      "Design data models and manage database schemas (SQLite, PostgreSQL, vector DBs) at the platform level",
    ],
    qualifications: [
      "Applicant MUST be a U.S. citizen and must reside in U.S while performing work",
      "3+ years of backend engineering experience",
      "Strong proficiency in Python and/or TypeScript",
      "Experience deploying and serving ML models in production",
      "Familiarity with message queues, task orchestration, and async processing",
      "Experience with containerization (Docker) and cloud platforms (AWS, GCP)",
      "Understanding of vector databases and embedding pipelines",
      "Experience with Natural Language Processing techniques and implementations",
      "Must work collaboratively with others who possess diverse skillsets and beliefs",
    ],
    niceToHave: [
      "Experience with Rust, Go, or C++ for performance-critical services",
      "Familiarity with llama.cpp, vLLM, or other inference runtimes",
      "Experience building multi-tenant SaaS platforms",
      "Knowledge of on-premise / air-gapped deployment patterns",
      "Familiarity with high security and compliance industries (Healthcare, Government, Defense)",
    ],
    benefits: [
      "Competitive salary",
      "Flexible hours",
      "Training and professional development",
    ],
  },
  {
    slug: "lead-architect",
    icon: "architect",
    team: "Obrew Engine",
    title: "Lead Architect, Core",
    department: "Engineering",
    type: "Founding Role",
    schedule: "Full-Time",
    location: "Remote",
    salary: "$150K - $180K",
    experience: "7+ years",
    postedDate: "2026-04-05",
    shortDescription:
      "Set the technical direction for our platform. Design systems that scale from desktop to enterprise while keeping things simple.",
    about:
      "The Lead Architect owns the technical direction of the Obrew core platform — the engine that powers every OpenBrew application. You'll define how the desktop runtime, local inference layer, API surface, and plugin system fit together. \n\nThis is a leadership role where you'll mentor engineers, make critical technology decisions, and ensure the core platform is robust enough for air-gapped deployments and flexible enough for third-party developers to build on.",
    responsibilities: [
      "Define and evolve the Obrew core platform architecture — runtime, inference, storage, and API layers",
      "Make high-impact technology decisions for the core engine (languages, frameworks, deployment targets)",
      "Design the API contracts, data models, and integration patterns that product teams and third-party developers build against",
      "Lead architecture reviews and provide technical guidance to the core and product engineering teams",
      "Architect the desktop application runtime and its integration with local AI inference",
      "Establish engineering standards, best practices, and development workflows across the organization",
      "Evaluate build-vs-buy decisions for core infrastructure components",
    ],
    qualifications: [
      "Applicant MUST be a U.S. citizen and must reside in U.S while performing work",
      "7+ years of software engineering experience, with 3+ years in a senior/lead role",
      "Deep expertise in distributed systems design and microservices architecture",
      "Strong proficiency in Python and/ors C++",
      "Experience architecting desktop applications (Electron, Tauri, Node.js) and/or web platforms",
      "Strong understanding of AI/ML infrastructure (model serving, RAG, vector stores)",
      "Track record of mentoring engineers and driving technical culture",
      "Excellent written and verbal communication skills",
      "Must work collaboratively with others who possess diverse skillsets and beliefs",
      "Experience with Natural Language Processing techniques and implementations",
    ],
    niceToHave: [
      "Proficiency in Python, Go, C, C++ or Rust",
      "Experience with on-premise and air-gapped deployments",
      "Background in developer tools or platform engineering",
      "Familiarity with compliance frameworks (FedRAMP, HIPAA, SOC 2)",
      "Open-source project leadership or significant contributions",
      "Prior experience with AI development Pytorch and/or llama.cpp, vLLM, or other inference runtimes",
      "Familiarity with high security and compliance industries (Healthcare, Government, Defense)",
    ],
    benefits: [
      "Salary + competitive equity",
      "Flexible hours",
      "Health, dental, and vision insurance",
      "Home office stipend",
    ],
  },
  {
    slug: "operations-finance",
    icon: "operations",
    team: "OpenBrew.ai",
    title: "Operations & Finance Manager",
    department: "Operations",
    type: "Founding Role",
    schedule: "Full-Time",
    location: "Remote",
    salary: "$110K - $150K",
    experience: "4+ years",
    postedDate: "2026-04-01",
    shortDescription:
      "Own the business operations that keep us running — budgets, contracts, procurement, and financial planning for a growing AI startup.",
    about:
      "The Operations & Finance Manager builds and runs the business systems that keep OpenBrew.ai functioning as we grow. You'll own budgets, vendor contracts, government procurement processes, and financial reporting — serving as the operational backbone of the company. \n\nThis role is perfect for someone who thrives in a fast-paced startup environment, is comfortable wearing multiple hats, and wants to directly shape how a small AI company scales its operations.",
    responsibilities: [
      "Manage OpenBrew.ai's budgets, forecasting, and financial reporting",
      "Handle vendor contracts, procurement, and accounts payable/receivable across all teams",
      "Support government contracting processes (proposals, compliance documentation, invoicing)",
      "Build and maintain operational workflows, internal tooling, and company processes",
      "Coordinate with legal counsel on contracts, IP, and compliance matters",
      "Provide financial analysis and strategic recommendations to leadership",
      "Manage payroll, benefits administration, and HR operations",
    ],
    qualifications: [
      "Applicant MUST be a U.S. citizen and must reside in U.S while performing work",
      "4+ years of experience in operations, finance, or business management",
      "Strong financial modeling and Excel/spreadsheet skills",
      "Experience with startup or small-company operations",
      "Understanding of SaaS business models and unit economics",
      "Excellent organizational skills and attention to detail",
      "Self-starter comfortable with ambiguity and wearing multiple hats",
      "Must work collaboratively with others who possess diverse skillsets and beliefs",
    ],
    niceToHave: [
      "Experience with government contracting (FAR, SBIR/STTR, GSA)",
      "Familiarity with accounting software (QuickBooks, Xero)",
      "Background in tech startups or AI companies",
      "MBA or CPA certification",
      "Familiarity with high security and compliance industries (Healthcare, Government, Defense)",
    ],
    benefits: [
      "Salary + competitive equity",
      "Fully remote with flexible hours",
      "Health, dental, and vision insurance",
      "Home office stipend",
    ],
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobDepartments(): string[] {
  return [...new Set(jobs.map((job) => job.department))];
}
