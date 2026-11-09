import Header from "@/blocks/Header";
import HeroBento from "@/blocks/HeroBento";
import AppSuite from "@/blocks/AppSuite";
import AppSpotlights from "@/blocks/AppSpotlights";
import AssetRegistry from "@/blocks/AssetRegistry";
import Plans from "@/blocks/Plans";
import VideoPlayer from "@/components/VideoPlayer";
import PaperBuffMock from "@/components/mocks/PaperBuffMock";
import ScreenBuffMock from "@/components/mocks/ScreenBuffMock";
import Features from "@/blocks/Features";
import Epilogue from "@/blocks/Epilogue";
import Footer from "@/blocks/Footer";
import SubscribeInput from "@/components/SubscribeInput";
import epiloguePosterImage from "public/badge.png";
import type { T_AppId } from "@/data/apps";
import type { ReactNode } from "react";
// Parked sections — not rendered, so not imported (keeps them out of the
// bundle). Uncomment together with their JSX and data below to bring one back.
// import UseCases from "@/blocks/UseCases";
// import VideoShowcase from "@/blocks/VideoShowcase";
// import DarkCTA from "@/blocks/DarkCTA";
// import Highlights from "@/blocks/Highlights";
// import highlightPosterImageA from "public/use-cases.svg";
// import highlightPosterImageB from "public/workflows.svg";

/** Shared props for the looping demo videos in the spotlights. */
function SpotlightVideo(p: { src: string }) {
  return (
    <VideoPlayer
      src={p.src}
      // Same shadow as the animated mocks in the other spotlights.
      className="shadow-[var(--media-shadow,var(--shadow-dark-card))]"
      autoPlay
      loop
      muted
      aspectRatio="4/3"
      lazy
    />
  );
}

/** Visual for each app's spotlight. Typed by app id, so every app needs one. */
const SPOTLIGHT_MEDIA: Record<T_AppId, ReactNode> = {
  motionbuff: <SpotlightVideo src="/motionbuff-demo.mp4" />,
  filebuff: <SpotlightVideo src="/auto-workflow.mp4" />,
  paperbuff: <PaperBuffMock />,
  screenbuff: <ScreenBuffMock />,
};

export default function Home() {
  const imgStyle = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  /* Data for the parked sections (Highlights, UseCases, VideoShowcase).
  const whitePaperLink = "/capability-statement.pdf";

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
  */

  const epiloguePoster = {
    backgroundImage: `url(${epiloguePosterImage.src})`,
    ...imgStyle,
    backgroundColor: "transparent",
    backgroundSize: "contain",
  };

  /* Data for the parked sections, continued.
  // Use cases span the whole suite. Each one names its app; MotionBuff and
  // PaperBuff ones show a placeholder until their demo video is recorded.
  const useCasesData = {
    filterGroups: [
      {
        id: "team",
        label: "By team",
        categories: [
          { id: "sales", label: "Sales & Marketing" },
          { id: "training", label: "Training" },
          { id: "fundraising", label: "Fundraising" },
          { id: "operations", label: "Operations" },
        ],
      },
      {
        id: "industry",
        label: "By industry",
        categories: [
          { id: "defense", label: "Defense" },
          { id: "media", label: "Media" },
          { id: "healthcare", label: "Healthcare" },
          { id: "legal", label: "Legal" },
          { id: "financial", label: "Financial" },
          { id: "research", label: "Research" },
        ],
      },
    ],
    useCases: [
      // ---- By team ----
      {
        id: "sales-personalized",
        categoryId: "sales",
        groupId: "team",
        app: "MotionBuff",
        title: "Personalized Sales Videos",
        description:
          "One template, a video for every account. Names, companies and numbers filled in from your CRM.",
        expandedContent:
          "Connect Salesforce or HubSpot and MotionBuff renders a version of your pitch for each prospect, in their language. When the numbers change, re-render instead of re-editing.",
        videoPlaceholder: {
          label: "Personalized sales videos from CRM data",
          file: "motionbuff-sales.mp4",
        },
      },
      {
        id: "sales-launch",
        categoryId: "sales",
        groupId: "team",
        app: "MotionBuff",
        title: "Deck to Launch Video",
        description:
          "Drop in a slide deck and get a narrated, on-brand launch video.",
        expandedContent:
          "The agent reads your deck, writes the story beat by beat and renders it in your brand's colours, type and logo. Edit the outline to change the video.",
        videoPlaceholder: {
          label: "A slide deck becomes a launch video",
          file: "motionbuff-deck-to-video.mp4",
        },
      },
      {
        id: "sales-email",
        categoryId: "sales",
        groupId: "team",
        app: "FileBuff",
        title: "Draft Follow-ups",
        description:
          "Draft replies and follow-ups from the emails, notes and files you already have.",
        expandedContent:
          "FileBuff finds the context across your inbox, meetings and documents, then drafts the message for you to review and send.",
        videoSrc: "/draft-email.mp4",
      },
      {
        id: "training-modules",
        categoryId: "training",
        groupId: "team",
        app: "MotionBuff",
        title: "Training Videos from SOPs",
        description:
          "Turn procedures and manuals into short, narrated training modules.",
        expandedContent:
          "Hand MotionBuff a PDF or doc and get a video per procedure, with captions and narration in each learner's language. Update the source and re-render.",
        videoPlaceholder: {
          label: "A procedure manual becomes training videos",
          file: "motionbuff-training.mp4",
        },
      },
      {
        id: "training-walkthroughs",
        categoryId: "training",
        groupId: "team",
        app: "ScreenBuff",
        title: "Software Walkthroughs",
        description:
          "Record a task once and get a polished how-to with zooms and step labels.",
        expandedContent:
          "ScreenBuff (coming soon) follows your cursor, zooms in on each click and labels every step, so internal how-tos look as good as product marketing.",
      },
      {
        id: "fundraising-submission",
        categoryId: "fundraising",
        groupId: "team",
        app: "MotionBuff",
        title: "Video Funding Submissions",
        description:
          "When a slide deck isn't an option, submit a video that tells the story.",
        expandedContent:
          "Write the story first (hook, problem, proof, ask) and MotionBuff builds it on-brand with no studio or editor. One link, playable anywhere.",
        videoPlaceholder: {
          label: "A funding pitch rendered as video",
          file: "motionbuff-pitch.mp4",
        },
      },
      {
        id: "fundraising-memo",
        categoryId: "fundraising",
        groupId: "team",
        app: "PaperBuff",
        title: "Memos Investors Will Read",
        description:
          "Dictate the memo; get a page that's typeset and easy to read.",
        expandedContent:
          "PaperBuff (in progress) lays out your memo with clear hierarchy, pull quotes and live charts, then exports to PDF or a shareable page.",
        videoPlaceholder: {
          label: "Dictating and typesetting a memo",
          file: "paperbuff-memo.mp4",
        },
      },
      {
        id: "ops-automate",
        categoryId: "operations",
        groupId: "team",
        app: "FileBuff",
        title: "Automate Tasks",
        description:
          "Describe a task in plain language and let an agent carry it out.",
        expandedContent:
          "Create automations without code. Describe what you want done and FileBuff breaks it into steps and runs it.",
        videoSrc: "/filebuff-workflow.mp4",
      },
      {
        id: "ops-search",
        categoryId: "operations",
        groupId: "team",
        app: "FileBuff",
        title: "Private Document Search",
        description:
          "Find answers across thousands of documents in plain language.",
        expandedContent:
          "Ask a question and get a synthesized answer with source citations. Search by meaning, not just keywords.",
        videoSrc: "/filebuff-documents.mp4",
      },
      {
        id: "ops-briefings",
        categoryId: "operations",
        groupId: "team",
        app: "FileBuff",
        title: "Daily Briefings",
        description:
          "Scheduled summaries of what changed across your files, inbox and calendar.",
        expandedContent:
          "Stay current on project status, research or competitive intelligence with briefings FileBuff writes for you on a schedule.",
      },
      // ---- By industry ----
      {
        id: "defense-logistics",
        categoryId: "defense",
        groupId: "industry",
        app: "FileBuff",
        title: "Automate Supply Chain",
        description:
          "Scale DoD logistics with on-device AI that keeps sensitive data secure.",
        expandedContent:
          "Automate inventory reconciliation, vendor analysis, and supply chain coordination across disconnected systems. 83–96% time savings on core tasks and $542K+ annual savings per project — all with 100% on-device processing for CUI compliance.",
        videoSrc: "/auto-workflow.mp4",
        readMoreHref: "/case-study/defense.pdf",
        readMoreLabel: "Read case study",
      },
      {
        id: "defense-sims",
        categoryId: "defense",
        groupId: "industry",
        app: "MotionBuff",
        title: "Simulation & Training Scenarios",
        description:
          "Build training scenarios and briefings at scale, without an in-house studio.",
        expandedContent:
          "Turn doctrine, procedures and after-action reports into narrated scenario videos, then regenerate them as the source material changes.",
        videoPlaceholder: {
          label: "Training scenario built from a procedure",
          file: "motionbuff-defense.mp4",
        },
      },
      {
        id: "media-branded",
        categoryId: "media",
        groupId: "industry",
        app: "MotionBuff",
        title: "Branded Content at Scale",
        description:
          "Produce on-brand explainers and social cuts from scripts, decks or data.",
        expandedContent:
          "Brand rules are enforced by the agent, so every video keeps your colours, type and logo, across every language.",
        videoPlaceholder: {
          label: "Branded explainers in many languages",
          file: "motionbuff-branded.mp4",
        },
      },
      {
        id: "media-ads",
        categoryId: "media",
        groupId: "industry",
        app: "ScreenBuff",
        title: "Product Ads from a Screen Recording",
        description: "Cut a 15-second ad and a full demo from the same take.",
        expandedContent:
          "ScreenBuff (coming soon) adds the zooms, callouts and pacing, then exports landscape and vertical versions.",
      },
      {
        id: "healthcare-admin",
        categoryId: "healthcare",
        groupId: "industry",
        app: "FileBuff",
        title: "Automate Admin Tasks",
        description:
          "Eliminate administrative bottlenecks with on-device AI that keeps patient data secure.",
        expandedContent:
          "Automate documentation, staffing reconciliation, compliance audits, and credential tracking — saving $340K+ per department annually. 100% on-device processing means full HIPAA compliance by architecture, not policy.",
        videoSrc: "/auto-email.mp4",
        readMoreHref: "/case-study/healthcare.pdf",
        readMoreLabel: "Read use case",
      },
      {
        id: "legal-discovery",
        categoryId: "legal",
        groupId: "industry",
        app: "FileBuff",
        title: "Document Discovery",
        description:
          "Accelerate e-discovery and contract review with AI-powered analysis.",
        expandedContent:
          "Rapidly review contracts, find relevant clauses, and identify risks. FileBuff helps legal teams process documents faster while maintaining accuracy.",
        videoSrc: "/project-files.mp4",
      },
      {
        id: "legal-audit",
        categoryId: "legal",
        groupId: "industry",
        app: "FileBuff",
        title: "Comprehensive Audit Trail",
        description:
          "Track every AI action with immutable logs for compliance and accountability.",
        expandedContent:
          "Every query, response, and action is logged with timestamps and attribution. Export audit logs for compliance reviews or investigations.",
        videoSrc: "/filebuff-audit.mp4",
      },
      {
        id: "financial-doc",
        categoryId: "financial",
        groupId: "industry",
        app: "FileBuff",
        title: "Document Management",
        description:
          "Manage large document libraries with AI-powered organization and search.",
        expandedContent:
          "Handle millions of documents with intelligent categorization, tagging, and retrieval. Perfect for knowledge management, policy libraries, and corporate archives.",
        videoSrc: "/filebuff-dashboard.mp4",
      },
      {
        id: "financial-reports",
        categoryId: "financial",
        groupId: "industry",
        app: "MotionBuff",
        title: "Reports That Update Themselves",
        description:
          "Point charts at your data and the video refreshes when the numbers do.",
        expandedContent:
          "Connect Power BI or SharePoint and render quarterly updates, client reports or portfolio reviews as video, re-rendered when the data changes.",
        videoPlaceholder: {
          label: "A data-driven quarterly report video",
          file: "motionbuff-reports.mp4",
        },
      },
      {
        id: "research-review",
        categoryId: "research",
        groupId: "industry",
        app: "FileBuff",
        title: "Document Review",
        description:
          "Synthesize findings across papers, reports, and research documents.",
        expandedContent:
          "Quickly survey literature, extract key findings, and identify gaps. Perfect for academics, R&D teams, and market researchers.",
        videoSrc: "/slash-commands.mp4",
        readMoreHref: "/case-study/research.pdf",
        readMoreLabel: "Read use case",
      },
      {
        id: "research-publish",
        categoryId: "research",
        groupId: "industry",
        app: "PaperBuff",
        title: "Publish with Interactive Figures",
        description:
          "Reports with 3D models and live charts readers can explore.",
        expandedContent:
          "PaperBuff (in progress) typesets your findings and embeds rotatable 3D scans and interactive charts right in the page.",
        videoPlaceholder: {
          label: "A research report with embedded 3D",
          file: "paperbuff-research.mp4",
        },
      },
    ],
  };

  // Video Showcase Data — entries without `src` show a placeholder.
  const videos = [
    {
      id: "motionbuff",
      title: "MotionBuff: File to Video",
      description:
        "Drop in a deck and watch the agent write, brand and render the video.",
      placeholderFile: "motionbuff-demo.mp4",
    },
    {
      id: "documents",
      title: "FileBuff: Document Search",
      description:
        "Find information across all your files using natural language.",
      src: "/filebuff-documents.mp4",
    },
    {
      id: "workflow",
      title: "FileBuff: Workflows",
      description: "Create and run automated workflows with simple commands.",
      src: "/filebuff-workflow.mp4",
    },
    {
      id: "paperbuff",
      title: "PaperBuff: First Look",
      description: "Edit and typeset a document by voice.",
      placeholderFile: "paperbuff-preview.mp4",
    },
  ];
  */

  return (
    <div>
      <Header id="top" title="" />

      <main>
        <HeroBento
          headline="THE CREATIVE TOOL-CHAIN FOR AGENTS"
          tagline="OpenBrew.ai builds agent driven creative tools for entertainment & simulations. Have your personal agents create and manage your videos, documents, screen recordings and virtual workspaces."
          primaryCTA={{ text: "Explore Apps", href: "#apps" }}
          secondaryCTA={{ text: "Pricing", href: "#pricing" }}
          videoSrc="/openbrew-promo.mp4"
        />

        {/* Suite overview — links out to each app's subdomain */}
        <AppSuite
          id="apps"
          title="ONE SUITE, MANY APPS"
          subtitle="Each specialized app is driven by the agent you bring."
          background="alternate"
        />

        {/* One detailed section per app */}
        <AppSpotlights media={SPOTLIGHT_MEDIA} />

        {/* Spotlights alternate normal/alternate and end on alternate, so
            continue the pattern. */}
        <AssetRegistry id="registry" background="normal" />

        {/* <VideoShowcase id="demo" videos={videos} /> */}

        {/* <UseCases
          id="use-cases"
          title="WHAT TEAMS DO WITH OPENBREW"
          subtitle="Use cases across the suite, by team and by industry."
          filterGroups={useCasesData.filterGroups}
          useCases={useCasesData.useCases}
          sidebarCTA={{
            title: "Find out more",
            description:
              "See what makes OpenBrew different. Available for immediate procurement.",
            buttonText: "Read White Paper",
            buttonHref: whitePaperLink,
          }}
        /> */}

        <Features
          id="features"
          background="alternate"
          pattern="dots"
          title="BUILT INTO EVERY APP"
          subtitle="What you get with every OpenBrew app."
          features={[
            {
              icon: "/icons/robot-face.png",
              title: "Agent-Native",
              text: "Built for agents to drive, not for people to click.",
            },
            {
              icon: "/icons/robot-arm.png",
              title: "Bring Your Model",
              text: "Subscription plans or open-weight models.",
            },
            {
              icon: "/icons/truck.png",
              title: "Desktop & Web",
              text: "Windows, macOS, Linux or the browser.",
            },
            {
              icon: "/icons/off-limits.png",
              title: "No Credits",
              text: "Flat pricing. Nothing to ration.",
            },
            {
              icon: "/icons/clipboard.png",
              title: "Human in the Loop",
              text: "Watch each step and approve before shipping.",
            },
            {
              icon: "/icons/lock.png",
              title: "Private by Default",
              text: "Run locally, files stay on device.",
            },
            {
              icon: "/icons/face-censored.png",
              title: "Unrestricted",
              text: "Requests are never blocked or down-graded.",
            },
            {
              icon: "/icons/key.png",
              title: "API & MCP Access",
              text: "Plug any agent into our apps or asset registry.",
            },
            {
              icon: "/icons/toolbox.png",
              title: "Extensible",
              text: "Add your own templates and integrations.",
            },
          ]}
        />

        <Plans
          id="pricing"
          title="FREE TOOLS, PAID ASSETS"
          subtitle="All apps are free to use. Upgrade for premium access to assets and features. No credits, ever."
          plans={[
            {
              name: "Free",
              price: "$0",
              text: "For trying things out and building on your own.",
              includes: [
                "Access all apps free",
                "Access free AI models",
                "Free registry assets",
              ],
              cta: { text: "Explore apps", href: "#apps" },
            },
            {
              name: "Pro",
              price: "$100",
              cadence: "/ month",
              text: "For creators, small businesses and studios.",
              includes: [
                "Everything in Free",
                "Premium registry assets, file types and services",
                "Premium features and support in every app",
              ],
              cta: { text: "Buy now", href: "/buy" },
              featured: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              cadence: "annual",
              text: "For teams producing at high volume.",
              includes: [
                "Everything in Pro",
                "Private asset registries",
                "MCP and API access",
              ],
              cta: { text: "Talk to us", href: "#contact" },
            },
          ]}
        />

        {/* <DarkCTA
          label="Next steps"
          title="EVERY IDEA DESERVES TO MOVE"
          subtitle="Start with MotionBuff or FileBuff today, or talk to us about bringing OpenBrew to your team."
          primaryButton={{ text: "Buy now", href: "/buy" }}
          secondaryButton={{
            text: "Try MotionBuff",
            href: "https://motionbuff.openbrew.ai",
            target: "_blank",
          }}
        /> */}

        {/* <Highlights
          title="POWERED BY OPENBREW"
          subtitle="Every app runs on the OpenBrew engine: composable building blocks for memory, tool use and local inference, open-sourced as the Obrew CLI."
          background="alternate"
          highlights={[
            {
              title: "PROVEN IN DEFENSE",
              text: "A U.S. Air Force contract funds our work, and our solutions are awardable for immediate acquisition by the Department of War.",
              illustration: highlightPosterA,
              link: { text: "Read the white paper", href: whitePaperLink },
            },
            {
              title: "BUILD WORKFLOWS WITH LANGUAGE",
              text: "Create automation systems to handle repetitive tasks. It's as easy as writing a todo list.",
              videoSrc: "/filebuff-workflow.mp4",
              link: { text: "See how it works", href: "#demo" },
            },
            {
              title: "FULL AUDIT TRAIL",
              text: "Every AI action is logged with full attribution. Export logs for compliance reviews, investigations, or quality assurance.",
              videoSrc: "/filebuff-audit.mp4",
              link: { text: "Explore use cases", href: "#use-cases" },
            },
            {
              title: "KEEP DATA PRIVATE",
              text: "Deploy on-premise, in air-gapped environments, or on your self-managed network. Own your AI infrastructure end-to-end.",
              illustration: highlightPosterB,
              link: { text: "Contact us", href: "#contact" },
            },
          ]}
        /> */}

        {/* Newsletter Epilogue */}
        <Epilogue
          id="contact"
          title="Notify me when new apps launch"
          subtitle1=""
          subtitle2="No spam. Just a heads-up when something new ships."
          illustration={epiloguePoster}
          background="alternate"
        >
          <SubscribeInput placeholder="your@email.com" actionText="Notify me" />
        </Epilogue>
      </main>

      <Footer title="OpenBrew.ai" />
    </div>
  );
}
