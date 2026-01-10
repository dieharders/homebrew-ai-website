import Header from "@/blocks/Header";
import HeroBento from "@/blocks/HeroBento";
import UseCases from "@/blocks/UseCases";
import Features from "@/blocks/Features";
import VideoShowcase from "@/blocks/VideoShowcase";
import DarkCTA from "@/blocks/DarkCTA";
import Highlights from "@/blocks/Highlights";
import Epilogue from "@/blocks/Epilogue";
import Footer from "@/blocks/Footer";
import SubscribeInput from "@/components/SubscribeInput";
import highlightPosterImageA from "public/use-cases.svg";
import highlightPosterImageB from "public/workflows.svg";
import epiloguePosterImage from "public/badge.png";

export default function Home() {
  const downloadLink = "/download";

  const imgStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const highlightPosterA = {
    backgroundImage: `url(${highlightPosterImageA.src})`,
    ...imgStyle,
    minHeight: "24rem",
    backgroundColor: "transparent",
    backgroundSize: "contain",
  };

  const highlightPosterB = {
    backgroundImage: `url(${highlightPosterImageB.src})`,
    ...imgStyle,
    minHeight: "20rem",
    backgroundColor: "transparent",
    backgroundSize: "contain",
  };

  const epiloguePoster = {
    backgroundImage: `url(${epiloguePosterImage.src})`,
    ...imgStyle,
    backgroundColor: "transparent",
    backgroundSize: "contain",
  };

  // Use Cases Data
  const useCasesData = {
    filterGroups: [
      {
        id: "function",
        label: "By Function",
        categories: [
          { id: "search", label: "Search & Discovery" },
          { id: "automation", label: "Workflow Automation" },
          { id: "security", label: "Audit & Compliance" },
          { id: "integration", label: "Integrations" },
        ],
      },
      {
        id: "industry",
        label: "By Industry",
        categories: [
          { id: "enterprise", label: "Enterprise" },
          { id: "legal", label: "Legal" },
          { id: "healthcare", label: "Healthcare" },
          { id: "research", label: "Research" },
        ],
      },
    ],
    useCases: [
      {
        id: "doc-search",
        categoryId: "search",
        groupId: "function",
        title: "Document Search & Synthesis",
        description:
          "Find relevant information across thousands of documents instantly using natural language.",
        expandedContent:
          "FileBuff uses advanced AI to understand context and relationships between documents. Ask questions in plain English and get synthesized answers with source citations.",
        videoSrc: "/filebuff-documents.mp4",
      },
      {
        id: "semantic-search",
        categoryId: "search",
        groupId: "function",
        title: "Semantic File Search",
        description:
          "Search by meaning, not just keywords. Find files based on what they contain.",
        expandedContent:
          'Unlike traditional search, FileBuff understands the semantic meaning of your queries. Search for "contracts mentioning liability clauses" and find relevant documents even if they use different terminology.',
      },
      {
        id: "workflow-auto",
        categoryId: "automation",
        groupId: "function",
        title: "Automated Workflows",
        description:
          "Define tasks in natural language and let AI execute them automatically.",
        expandedContent:
          "Create powerful automations without coding. Simply describe what you want to accomplish, and FileBuff will break it down into actionable steps.",
        videoSrc: "/filebuff-workflow.mp4",
      },
      {
        id: "daily-briefings",
        categoryId: "automation",
        groupId: "function",
        title: "Automated Daily Briefings",
        description:
          "Generate summaries and reports from your documents automatically.",
        expandedContent:
          "Schedule automated briefings that synthesize information from multiple sources. Perfect for staying up-to-date on project status, market research, or competitive intelligence.",
      },
      {
        id: "audit-trail",
        categoryId: "security",
        groupId: "function",
        title: "Comprehensive Audit Trail",
        description:
          "Track every AI action with immutable logs for compliance and accountability.",
        expandedContent:
          "Every query, response, and action is logged with timestamps and attribution. Export audit logs for compliance reviews or investigations.",
        videoSrc: "/filebuff-audit.mp4",
      },
      {
        id: "compliance-check",
        categoryId: "security",
        groupId: "function",
        title: "Compliance Checking",
        description:
          "Automatically verify documents against compliance frameworks and standards.",
        expandedContent:
          "Check documents against internal standards, regulatory requirements, or custom rules. Get instant feedback on compliance issues.",
      },
      {
        id: "email-integration",
        categoryId: "integration",
        groupId: "function",
        title: "Email & Calendar Integration",
        description:
          "Connect with Outlook, Gmail, and calendar systems for unified search.",
        expandedContent:
          "Search across emails, attachments, and calendar events alongside your files. FileBuff creates a unified knowledge base from all your information sources.",
      },
      {
        id: "enterprise-doc",
        categoryId: "enterprise",
        groupId: "industry",
        title: "Enterprise Document Management",
        description:
          "Manage large document libraries with AI-powered organization and search.",
        expandedContent:
          "Handle millions of documents with intelligent categorization, tagging, and retrieval. Perfect for knowledge management, policy libraries, and corporate archives.",
        videoSrc: "/filebuff-dashboard.mp4",
      },
      {
        id: "legal-discovery",
        categoryId: "legal",
        groupId: "industry",
        title: "Legal Document Discovery",
        description:
          "Accelerate e-discovery and contract review with AI-powered analysis.",
        expandedContent:
          "Rapidly review contracts, find relevant clauses, and identify risks. FileBuff helps legal teams process documents faster while maintaining accuracy.",
      },
      {
        id: "research-lit",
        categoryId: "research",
        groupId: "industry",
        title: "Research Literature Review",
        description:
          "Synthesize findings across papers, reports, and research documents.",
        expandedContent:
          "Quickly survey literature, extract key findings, and identify gaps. Perfect for academics, R&D teams, and market researchers.",
      },
    ],
  };

  // Video Showcase Data
  const videos = [
    {
      id: "dashboard",
      title: "Dashboard Overview",
      description:
        "Navigate your documents and workflows with an intuitive interface.",
      src: "/filebuff-dashboard.mp4",
    },
    {
      id: "documents",
      title: "Document Search",
      description:
        "Find information across all your files using natural language.",
      src: "/filebuff-documents.mp4",
    },
    {
      id: "workflow",
      title: "Workflow Automation",
      description: "Create and run automated workflows with simple commands.",
      src: "/filebuff-workflow.mp4",
    },
    {
      id: "audit",
      title: "Audit Trail",
      description: "Track every action with comprehensive logging.",
      src: "/filebuff-audit.mp4",
    },
  ];

  return (
    <div>
      <Header id="top" title="" />

      <main>
        {/* Hero Bento Section */}
        <HeroBento
          headline="INTELLIGENCE THAT STAYS WITH YOU"
          tagline="Smart File Manager with on-device AI. Find anything instantly, automate workflows, and keep your data private."
          primaryCTA={{ text: "Download Free", href: downloadLink }}
          secondaryCTA={{ text: "Watch Demo", href: "#demo" }}
          videoSrc="/openbrew.mp4"
          stats={[
            { value: "24/7", label: "Up Time" },
            { value: "100%", label: "On-Device" },
            { value: "ZERO", label: "Data Leakage" },
          ]}
        />

        {/* Use Cases Section */}
        <UseCases
          id="use-cases"
          title="DISCOVER WHAT FILEBUFF CAN DO"
          subtitle="Explore use cases tailored to your workflow and industry."
          filterGroups={useCasesData.filterGroups}
          useCases={useCasesData.useCases}
          sidebarCTA={{
            title: "Ready to try?",
            description:
              "Download FileBuff and start exploring your documents with AI.",
            buttonText: "Download Now",
            buttonHref: downloadLink,
          }}
        />

        {/* Features Grid */}
        <Features
          id="features"
          background="normal"
          pattern="dots"
          title="FEATURES"
          subtitle="Smart tools for every job. Everything you need to manage files intelligently."
          features={[
            {
              icon: "/icons/truck.png",
              title: "Easy Install",
              text: "All-in-one app. No additional software required.",
            },
            {
              icon: "/icons/robot-arm.png",
              title: "Run Any Model",
              text: "Download any quantized model. Supports CPU/GPU.",
            },
            {
              icon: "/icons/off-limits.png",
              title: "No Limits",
              text: "Work without boundaries. No daily limits or throttling.",
            },
            {
              icon: "/icons/toolbox.png",
              title: "Extensible",
              text: "Write or add your own custom tools and integrations.",
            },
            {
              icon: "/icons/lock.png",
              title: "Data Privacy",
              text: "Everything stays on device. Prevent exposure and leaks.",
            },
            {
              icon: "/icons/face-censored.png",
              title: "Unrestricted",
              text: "Get objective answers to your requests, uncensored.",
            },
            {
              icon: "/icons/robot-face.png",
              title: "Agents",
              text: "Build AI to perform tasks on your behalf automatically.",
            },
            {
              icon: "/icons/clipboard.png",
              title: "Workflows",
              text: "Write tasks in natural language and automate them.",
            },
            {
              icon: "/icons/key.png",
              title: "API Access",
              text: "Extensive API for building custom applications.",
            },
          ]}
        />

        {/* Video Showcase */}
        <VideoShowcase
          id="demo"
          title="SEE FILEBUFF IN ACTION"
          subtitle="Watch how FileBuff transforms the way you work with documents."
          videos={videos}
        />

        {/* Dark CTA Section */}
        <DarkCTA
          label="Next steps"
          title="READY TO TRANSFORM YOUR WORK?"
          subtitle="Join thousands of users who trust FileBuff for secure, on-device AI. Free to download, no subscription required."
          primaryButton={{ text: "Download Free", href: downloadLink }}
          secondaryButton={{
            text: "View Documentation",
            href: "https://github.com/dieharders/obrew-studio-server",
          }}
        />

        {/* Highlights with Video */}
        <Highlights
          title="POWERED BY OPENBREW"
          subtitle="FileBuff runs on the OpenBrew engine - a meta-framework providing tools for common AI challenges like long-term memory and hallucination prevention."
          background="alternate"
          highlights={[
            {
              title: "FLEXIBLE USE-CASES",
              text: "From domain knowledge co-pilots to customer service chatbots, compliance assistants to document extraction. Build what you need.",
              illustration: highlightPosterA,
              link: { text: "Explore use cases", href: "#use-cases" },
            },
            {
              title: "BUILD WORKFLOWS IN NATURAL LANGUAGE",
              text: "Create automation systems to handle repetitive tasks. It's as easy as writing a todo list.",
              videoSrc: "/filebuff-workflow.mp4",
              link: { text: "See how it works", href: "#demo" },
            },
            {
              title: "FULL AUDIT TRAIL",
              text: "Every AI action is logged with full attribution. Export logs for compliance reviews, investigations, or quality assurance.",
              videoSrc: "/filebuff-audit.mp4",
              link: { text: "Learn about security", href: "#features" },
            },
            {
              title: "SELF-HOST",
              text: "Deploy on-premise, in air-gapped environments, or on your self-managed network. Own your AI infrastructure end-to-end.",
              illustration: highlightPosterB,
              link: { text: "View requirements", href: downloadLink },
            },
          ]}
        />

        {/* Newsletter Epilogue */}
        <Epilogue
          title=""
          subtitle1=""
          subtitle2="Get notified of product updates"
          illustration={epiloguePoster}
          background="normal"
        >
          <SubscribeInput placeholder="your@email.com" actionText="Subscribe" />
        </Epilogue>
      </main>

      <Footer title="FileBuff by OpenBrew.AI" />
    </div>
  );
}
