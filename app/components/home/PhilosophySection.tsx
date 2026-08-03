export function PhilosophySection() {
  return (
    <section className="mx-auto max-w-[1120px] px-6 pt-12">
      <div className="flex flex-col gap-8 border-t border-[rgba(196,199,199,0.2)] pt-[49px] opacity-80 md:flex-row md:justify-between">
        {/* Left: Philosophy quote */}
        <div className="max-w-[448px]">
          <p className="text-sm font-medium uppercase tracking-[1.4px] text-black">
            THE PHILOSOPHY
          </p>
          <blockquote className="mt-4 font-serif text-lg italic leading-[28px] text-[#5e5e5e]">
            &ldquo;In a world of infinite noise, the greatest luxury is focus.
            We build for the architects of the next era&mdash;the writers, the
            thinkers, and the curators.&rdquo;
          </blockquote>
        </div>

        {/* Right: System status */}
        <div className="md:text-right">
          <p className="text-sm font-medium uppercase tracking-[0.7px] text-[#444748]">
            SYSTEM STATUS
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium tracking-[0.7px] text-black md:justify-end">
            <span className="size-2 rounded-full bg-black opacity-75" />{" "}
            All Nodes Operational
          </p>
          <p className="mt-4 text-xs text-[#c7c6c6]">
            EST. 2024 / BUILD v2.1.0
          </p>
        </div>
      </div>
    </section>
  );
}
