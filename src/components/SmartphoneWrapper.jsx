const SmartphoneWrapper = ({ children, footer, currentTime = '09:41', className = '', contentClassName = '', ...props }) => {
  return (
    <div
      className={`relative h-[820px] w-[400px] rounded-[3.5rem] border-[14px] border-zinc-900 bg-zinc-950 ring-1 ring-zinc-800 shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] ${className}`}
      {...props}
    >
      <div className="absolute -left-[16px] top-32 h-8 w-1.5 rounded-l-md border-l border-y border-zinc-700 bg-zinc-800" />
      <div className="absolute -left-[16px] top-48 h-16 w-1.5 rounded-l-md bg-zinc-800" />
      <div className="absolute -left-[16px] top-68 top-[17rem] h-16 w-1.5 rounded-l-md bg-zinc-800" />
      <div className="absolute -right-[16px] top-56 h-20 w-1.5 rounded-r-md border-r border-y border-zinc-700 bg-zinc-800" />

      <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] bg-black">
        <div className="absolute left-0 top-0 z-50 h-12 w-full px-6 text-xs font-semibold text-white">
          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="h-7 w-32 rounded-full bg-black" />
          </div>

          <div className="flex h-full w-full items-center justify-between">
            <span>{currentTime}</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <svg viewBox="0 0 16 12" className="h-3.5 w-4" aria-hidden="true" fill="currentColor">
                <path d="M1 10h2V8H1v2Zm3 0h2V6H4v4Zm3 0h2V4H7v6Zm3 0h2V2h-2v8Z" />
              </svg>
              <svg viewBox="0 0 20 12" className="h-3.5 w-4.5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 4.5C6 1.3 14 1.3 18 4.5" />
                <path d="M5 7c2.8-2 7.2-2 10 0" />
                <path d="M8.2 9.4c1.2-.8 2.4-.8 3.6 0" />
              </svg>
              <svg viewBox="0 0 26 12" className="h-3 w-6" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="1" y="1" width="20" height="10" rx="2" />
                <rect x="3.5" y="3.5" width="14" height="5" rx="1" fill="currentColor" stroke="none" />
                <rect x="22.2" y="4" width="2.8" height="4" rx="1" fill="currentColor" stroke="none" />
              </svg>
            </div>
          </div>
        </div>

        <main className={`relative scrollbar-hide h-full space-y-4 overflow-y-auto px-4 pb-24 pt-16 ${contentClassName}`}>{children}</main>

        {footer}

        <div className="absolute bottom-2 left-1/2 z-50 h-1.5 w-1/3 -translate-x-1/2 rounded-full bg-zinc-600" />
      </div>
    </div>
  )
}

export default SmartphoneWrapper