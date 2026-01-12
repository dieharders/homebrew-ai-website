import Header from "@/blocks/Header";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { cn } from "@/utils/common";
import { Gpu, Cpu } from "lucide-react";

// Download links
const DOWNLOADS = {
  windowsCpu:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.CPU.Setup.zip",
  windowsGpu:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.WIN.CUDA.Setup.zip",
  macos:
    "https://github.com/dieharders/obrew-studio-server/releases/latest/download/Obrew-Studio.macOS.Setup.zip",
};

// Platform icons with accent color classes
function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8 opacity-90", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("w-8 h-8 opacity-90", className)}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

const cardVariants = {
  windows: {
    card: "bg-gradient-to-br from-blue-500/[0.08] to-white/[0.02]",
    icon: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
  gpu: {
    card: "bg-gradient-to-br from-green-500/[0.08] to-white/[0.02]",
    icon: "text-green-400",
    badge: "bg-green-500/15 text-green-300 border-green-500/30",
  },
  mac: {
    card: "bg-gradient-to-br from-purple-500/[0.08] to-white/[0.02]",
    icon: "text-purple-400",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/30",
  },
};

export default function DownloadPage() {
  return (
    <div>
      <Header id="top" title="" />
      <main>
        <Section
          background="dark"
          className={cn(
            "min-h-screen bg-gradient-to-b from-background-dark to-[#0f1419]",
            "relative overflow-hidden",
            "before:content-[''] before:absolute before:inset-0",
            "before:bg-[radial-gradient(circle_at_1px_1px,rgba(255,212,59,0.03)_1px,transparent_0)]",
            "before:bg-[length:40px_40px] before:pointer-events-none"
          )}
        >
          {/* Hero Header */}
          <div className="text-center mb-16 relative z-[1]">
            <h1 className="font-lilita text-[clamp(2.5rem,5vw,3.5rem)] font-normal tracking-wider text-white m-0 mb-4">
              DOWNLOAD OPENBREW
            </h1>
            <p className="text-xl text-white/70 max-w-[500px] mx-auto leading-relaxed">
              Choose your platform and start using AI locally
            </p>
          </div>

          <div className={cn(
            "grid gap-6 max-w-[1100px] mx-auto relative z-[1]",
            "md:grid-cols-3"
          )}>
            {/* Windows CPU Card */}
            <div className={cn(
              "relative rounded-[20px] overflow-hidden",
              "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              "bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px]",
              "hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]",
              "before:content-[''] before:absolute before:inset-0 before:rounded-[20px] before:p-px",
              "before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,212,59,0.2)] before:to-transparent",
              "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
              "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
              "before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none",
              "hover:before:opacity-100",
              cardVariants.windows.card
            )}>
              <div className="relative z-[1] p-8 flex flex-col h-full min-h-[380px] max-md:min-h-0 max-md:p-6 max-[450px]:p-5">
                <div className="mb-5">
                  <div className="flex gap-3 mb-4">
                    <WindowsIcon className={cardVariants.windows.icon} />
                  </div>
                  <h2 className="font-lilita text-2xl font-normal m-0 mb-2 tracking-wide text-white">
                    Windows
                  </h2>
                  <span className={cn(
                    "inline-flex items-center gap-2 py-2 px-4 rounded-lg",
                    "text-sm font-semibold uppercase tracking-wider border",
                    cardVariants.windows.badge
                  )}>
                    CPU
                    <Cpu className="w-4 h-4 shrink-0" />
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed mb-5 text-white/70">
                  No dedicated GPU required. Runs on any Windows PC or laptop.
                </p>
                <ul className="list-none p-0 m-0 mb-auto text-sm">
                  {["Windows 10 / 11", "No GPU required", "Lower VRAM usage"].map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "py-2 pl-7 relative text-white/80",
                        "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-4 before:h-4 before:bg-accent-btn",
                        "before:[mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]",
                        "before:[-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]"
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "mt-6 w-full text-center py-4 px-6 rounded-[10px] text-base font-semibold",
                    "cursor-pointer transition-all duration-200 border-none flex justify-center items-center",
                    "h-auto min-h-[52px]",
                    "bg-gradient-to-br from-accent-btn to-accent-dark text-[#1a1a2e]",
                    "shadow-[0_4px_16px_rgba(255,212,59,0.25)]",
                    "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,212,59,0.35)]",
                    "hover:bg-gradient-to-br hover:from-[#ffe066] hover:to-accent-btn"
                  )}
                  href={DOWNLOADS.windowsCpu}
                  size="large"
                  type="custom"
                >
                  Download for Windows
                </Button>
              </div>
            </div>

            {/* Windows GPU Card */}
            <div className={cn(
              "relative rounded-[20px] overflow-hidden",
              "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              "bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px]",
              "hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]",
              "before:content-[''] before:absolute before:inset-0 before:rounded-[20px] before:p-px",
              "before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,212,59,0.2)] before:to-transparent",
              "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
              "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
              "before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none",
              "hover:before:opacity-100",
              cardVariants.gpu.card
            )}>
              <div className="relative z-[1] p-8 flex flex-col h-full min-h-[380px] max-md:min-h-0 max-md:p-6 max-[450px]:p-5">
                <div className="mb-5">
                  <div className="flex gap-3 mb-4">
                    <WindowsIcon className={cardVariants.gpu.icon} />
                  </div>
                  <h2 className="font-lilita text-2xl font-normal m-0 mb-2 tracking-wide text-white">
                    Windows
                  </h2>
                  <span className={cn(
                    "inline-flex items-center gap-2 py-2 px-4 rounded-lg",
                    "text-sm font-semibold uppercase tracking-wider border",
                    cardVariants.gpu.badge
                  )}>
                    GPU
                    <Gpu className="w-4 h-4 shrink-0" />
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed mb-5 text-white/70">
                  Accelerate AI with discreet graphics for faster inference.
                </p>
                <ul className="list-none p-0 m-0 mb-auto text-sm">
                  {["NVIDIA RTX recommended", "CUDA acceleration", "10x faster than CPU"].map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "py-2 pl-7 relative text-white/80",
                        "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-4 before:h-4 before:bg-accent-btn",
                        "before:[mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]",
                        "before:[-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]"
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "mt-6 w-full text-center py-4 px-6 rounded-[10px] text-base font-semibold",
                    "cursor-pointer transition-all duration-200 border-none flex justify-center items-center",
                    "h-auto min-h-[52px]",
                    "bg-gradient-to-br from-accent-btn to-accent-dark text-[#1a1a2e]",
                    "shadow-[0_4px_16px_rgba(255,212,59,0.25)]",
                    "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,212,59,0.35)]",
                    "hover:bg-gradient-to-br hover:from-[#ffe066] hover:to-accent-btn"
                  )}
                  href={DOWNLOADS.windowsGpu}
                  size="large"
                  type="custom"
                >
                  Download for Windows
                </Button>
              </div>
            </div>

            {/* MacOS Card */}
            <div className={cn(
              "relative rounded-[20px] overflow-hidden",
              "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
              "bg-white/[0.03] border border-white/[0.08] backdrop-blur-[10px]",
              "hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]",
              "before:content-[''] before:absolute before:inset-0 before:rounded-[20px] before:p-px",
              "before:bg-gradient-to-br before:from-transparent before:via-[rgba(255,212,59,0.2)] before:to-transparent",
              "before:[mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]",
              "before:[mask-composite:exclude] before:[-webkit-mask-composite:xor]",
              "before:opacity-0 before:transition-opacity before:duration-300 before:pointer-events-none",
              "hover:before:opacity-100",
              cardVariants.mac.card
            )}>
              <div className="relative z-[1] p-8 flex flex-col h-full min-h-[380px] max-md:min-h-0 max-md:p-6 max-[450px]:p-5">
                <div className="mb-5">
                  <div className="flex gap-3 mb-4">
                    <AppleIcon className={cardVariants.mac.icon} />
                  </div>
                  <h2 className="font-lilita text-2xl font-normal m-0 mb-2 tracking-wide text-white">
                    macOS
                  </h2>
                  <span className={cn(
                    "inline-flex items-center gap-2 py-2 px-4 rounded-lg",
                    "text-sm font-semibold uppercase tracking-wider border",
                    cardVariants.mac.badge
                  )}>
                    Universal
                  </span>
                </div>
                <p className="text-[0.95rem] leading-relaxed mb-5 text-white/70">
                  Native Apple Silicon support including Metal acceleration.
                </p>
                <ul className="list-none p-0 m-0 mb-auto text-sm">
                  {["Apple M Series optimized", "Metal GPU acceleration", "Intel Mac compatible"].map((item) => (
                    <li
                      key={item}
                      className={cn(
                        "py-2 pl-7 relative text-white/80",
                        "before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2",
                        "before:w-4 before:h-4 before:bg-accent-btn",
                        "before:[mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]",
                        "before:[-webkit-mask:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E\")_no-repeat_center]"
                      )}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  className={cn(
                    "mt-6 w-full text-center py-4 px-6 rounded-[10px] text-base font-semibold",
                    "cursor-pointer transition-all duration-200 border-none flex justify-center items-center",
                    "h-auto min-h-[52px]",
                    "bg-gradient-to-br from-accent-btn to-accent-dark text-[#1a1a2e]",
                    "shadow-[0_4px_16px_rgba(255,212,59,0.25)]",
                    "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(255,212,59,0.35)]",
                    "hover:bg-gradient-to-br hover:from-[#ffe066] hover:to-accent-btn"
                  )}
                  href={DOWNLOADS.macos}
                  size="large"
                  type="custom"
                >
                  Download for Mac
                </Button>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className={cn(
            "text-center mt-16 py-8 px-10 max-[450px]:p-6",
            "bg-white/[0.03] border border-white/[0.08] rounded-2xl",
            "w-full mx-auto relative z-[1]"
          )}>
            <h3 className="font-lilita text-xl font-normal mb-4 text-white tracking-wide">
              SYSTEM REQUIREMENTS
            </h3>
            <p className="text-[0.95rem] text-white/60 m-0 leading-loose">
              4GB RAM minimum &nbsp;•&nbsp; 16GB RAM recommended &nbsp;•&nbsp;
              50GB free disk space &nbsp;•&nbsp; 64-bit OS
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
