'use client'

import Button from './Button';
import { cn } from '../utils/common';

export default function SubscribeInput(p: {
  location?: 'body' | 'accent',
  className?: string,
  actionText?: string,
  placeholder?: string,
  onAction?: () => void,
  link?: string,
}) {
  const actionText = p.actionText ?? 'Join early access';
  const placeholder = p.placeholder ?? 'your@email.com';

  return (
    <form method="GET" action="/api/subscribe">
      <div className={cn(
        "relative flex items-stretch shadow-[0_4px_18px_#0002] rounded-xl",
        "border-dashed border-[#343a40] border-[0.25rem] p-2 bg-white/[0.9867]",
        "overflow-hidden gap-1 outline outline-white",
        "mx-auto max-w-[550px]",
        p.className
      )}>
        <input
          className={cn(
            "block flex-1 text-xl w-px p-0 mr-1 text-center",
            "text-text bg-transparent rounded border-none",
            "focus:outline-none focus:bg-gray-200"
          )}
          name="email"
          type="email"
          required
          placeholder={placeholder}
        />
        <Button
          className="h-10 font-bold self-center"
          onClick={p.onAction}
          href={p.link}
          size="large"
          location="highlight"
        >
          {actionText}
        </Button>
      </div>
    </form>
  )
}
