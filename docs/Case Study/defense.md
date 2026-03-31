# Case Study: Scaling DoD Logistics with On-Device AI

**OpenBrew.ai** | Website: https://www.openbrew.ai | Contact: sorob@openbrew.ai

---

## The Problem

A Naval Aviation squadron deployed aboard a U.S. Navy vessel faces a recurring crisis that plays out across every branch: a critical parts shortage threatens to ground aircraft within 72 hours. The supply officer must reconcile 47 inventory reports, evaluate 23 vendor proposals, and coordinate across 8 disconnected systems — all under deadline pressure that leaves no margin for error.

This is a daily reality of DoD logistics:

- **30% of DoD data classified as obsolete** — because no one can find it fast enough
- **80% of logistics personnel time** is spent managing data rather than making decisions
- **95% of ISR and operational data is never accessed**, creating a massive intelligence blind spot across the supply chain
- **34% average program delays**, driven in part by manual information retrieval and document reconciliation

The data to solve these problems exist in SharePoint sites, email threads, spreadsheets, and legacy systems. The challenge is data access, synthesis, and action at scale.

Cloud-based AI tools could help — but 80% of DoD data is Controlled Unclassified Information. Sending it to commercial cloud AI services exposes sensitive operational data, violates data handling regulations, and creates new attack surface.

The result is an impossible choice: use cloud AI and risk data exposure, or block AI entirely and drown in manual workflows.

## Our Solution

**FileBuff** is an AI-powered project management platform that eliminates this trade-off. All AI inference, document processing, and search execute locally on standard hardware. No data ever leaves your device. No cloud AI services are required. The platform operates in air-gapped environments, SCIFs, aboard ships, and forward operating bases.

## How It Works

FileBuff unifies multiple capabilities into a single platform that integrates directly with your organization's existing Microsoft 365 data:

**1. Semantic Search Across All Data Sources**
Instead of browsing folders or remembering file names, users ask questions in plain English. FileBuff's agents answer questions across project files, SharePoint, Outlook, Teams, calendar data and more. A query like _"Which vendors delivered landing gear on time in the last 12 months?"_ returns ranked results with source citations — in minutes, versus days of manual research.

**2. Visual Workflow Automation**
FileBuff's workflow builder enables users to automate multi-step processes visually or through natural language conversation. The AI-assisted AutoMaker constructs entire workflows autonomously: a user describes _"Send me a daily shortage report every morning at 0600"_ and the system builds a pipeline automatically. A 2-hour daily manual ritual becomes fully automated.

**3. AI-Powered Document Processing**
FileBuff processes entire documents for instant access. A procurement office reviewing 500 vendor proposals no longer needs weeks of manual reading. An analyst uploads the documents, and the system makes them searchable: _"Compare pricing across all proposals for component X"_ produces a synthesized answer drawn from every document in seconds.

**4. Autonomous Communications**
The AI drafts emails, schedules meetings with availability checking, creates calendar events, and monitors incoming communications — summarizing threads, detecting deadlines, and surfacing action items. Users review and approve rather than create from scratch.

**5. Comprehensive Audit Trail**
Every action — human and AI — is logged with full attribution. Export is available in standard formats for compliance reporting, accountability, and review.

## Demonstrated Results from Air-Force Contract

During our SBIR Phase I, OpenBrew.ai delivered a fully functional prototype with validated performance metrics:

### Time Savings

| Task                                      | Traditional Method | With FileBuff            | Savings  |
| ----------------------------------------- | ------------------ | ------------------------ | -------- |
| Find specific information across files    | 30 min             | 5 min                    | **83%**  |
| Understand file relationships             | 25 min             | 1 min                    | **96%**  |
| Determine who changed what and when       | 16 min             | 1 min (audit trail)      | **94%**  |
| Find files by content (not filename)      | 45 min             | 5 min                    | **89%**  |
| Update 4 related documents after a change | 3 hours            | 15 min                   | **91%**  |
| Sync team on changes                      | 45 min meeting     | Audit trail (no meeting) | **100%** |

### Cost Savings

FileBuff replaces the equivalent labor of five dedicated roles per project — representing **$542,000 per project per year** in staffing cost avoidance.

| Role                     | Annual Salary |
| ------------------------ | ------------- |
| SharePoint Developer     | $135,000      |
| Contract Manager         | $119,000      |
| Contract Tracker         | $85,000       |
| Contract Consultant      | $108,000      |
| Communications Assistant | $95,000       |
| **Total**                | **$542,000**  |

| Scale           | Annual Savings                                             |
| --------------- | ---------------------------------------------------------- |
| 5 projects      | **$2.4M+**                                                 |
| 20 projects     | **$10.5M+**                                                |
| Enterprise-wide | **Savings compound toward zero marginal cost per project** |

## Relevance to DoD and Gov

#### Democratizing AI for All Personnel

The platform puts AI directly in the hands of every user as an integrated virtual coworker with access to the same tools you already use. No AI expertise required. Users describe what they need in plain English and the AI executes it.

#### Enterprise Agents

The visual and AI-assisted workflow builder provides enterprise-ready agent deployment. Any workflow that a human can perform in Microsoft 365 can be automated — from contract monitoring to vendor analysis — without coding or IT support.

#### Modular Open System Architectures

The inference engine, vector database, and application frameworks are open-source with permissive licenses. Obrew's self-documenting REST API enables any team to build custom AI applications on top of the same agentic capabilities, without vendor lock-in or prime contractor dependency.

#### AI Model Parity

The platform uses open-source models that can be deployed within hours of release. No vendor coordination, no procurement cycle, no ATO modification required. Users can select, download, and run the latest models from inside the app.

#### Ease of Deployment

FileBuff eliminates the most common deployment barriers by design:

- **No FedRAMP required** — on-device processing inherits host-system security controls
- **Web app = minimal ATO scope** — no installation required, only security review
- **Zero network integration** — no external connections to configure, authorize, or monitor
- **GCC/GCC-High compatible** — single endpoint URL change, no code modification
- **SCIF-ready** — install once, access unlimited AI-powered capabilities offline

#### 100% Private Data Access

The platform can ingest federated data across SharePoint, Outlook, Teams, Calendar, and the full Microsoft 365 suite — making organizational data immediately accessible for AI-powered search, analysis, and automated action. Data that was previously siloed across multiple systems become queryable from a single interface.

## The Bottom Line

FileBuff transforms a supply chain officer's impossible 72-hour deadline into a 3-minute query. It replaces $542,000 in annual per-project staffing costs with a single platform license. It delivers AI capability to every warfighter and knowledge worker — at every classification level, on every device, in every environment — without exposing sensitive data.

FileBuff delivers ease of deployment, security, and modularity out of the box.

## Sources

- [Artificial Intelligence Strategy for the Department of War (PDF)](https://media.defense.gov/2026/Jan/12/2003855671/-1/-1/0/ARTIFICIAL-INTELLIGENCE-STRATEGY-FOR-THE-DEPARTMENT-OF-WAR.PDF)
- [How the 2026 DoD AI Policy Shifts Defense AI Toward Speed, Scale, and AI-First Operations](https://www.sealevel.com/blog/how-the-2026-dod-ai-policy-shifts-defense-ai-toward-speed-scale-and-aifirst-operations/)
- [Department of War's AI-First Agenda: A New Era for Defense Contractors — Holland & Knight](https://www.hklaw.com/en/insights/publications/2026/02/department-of-wars-ai-first-agenda-a-new-era-for-defense-contractors)
- [DoD's AI Acceleration Strategy — Nextgov/FCW](https://www.nextgov.com/ideas/2026/02/dods-ai-acceleration-strategy/411135/)
- [Pentagon Rolls Out Major Reforms of R&D, AI — Breaking Defense](https://breakingdefense.com/2026/01/pentagon-rolls-out-major-reforms-of-rd-ai/)
- ['Accelerate Like Hell': Hegseth Moves to Reshape DOD's AI and Tech Hubs — DefenseScoop](https://defensescoop.com/2026/01/13/hegseth-ai-tech-hubs-reorganization-dod-dow/)

## Scan for link to this PDF

<img src="qr-code-defense.png" alt="QR Code">
