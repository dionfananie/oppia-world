export function Hero() {
  return (
    <section className="pt-20 md:pt-[90px] pb-12 text-center">
      {/* Eyebrow */}
      <p className="mx-auto inline-block border-y border-[rgba(196,199,199,0.3)] px-2 py-[3.5px] text-sm font-medium uppercase tracking-[1.4px] text-[#626262]">
        EDITORIAL PRECISION
      </p>

      {/* Heading */}
      <h1 className="mt-6 font-serif text-5xl font-medium leading-[80px] tracking-[-1.8px] text-black md:text-[72px]">
        Oppia World
      </h1>

      {/* Subtitle */}
      <p className="mx-auto mt-8 max-w-[680px] font-serif text-xl italic leading-[32.5px] text-[#5e5e5e]">
        A curated ecosystem for the modern intellect. We build tools that honor
        the craft of thought,
        <br className="hidden md:block" />
        {" "}the weight of words, and the pursuit of clarity in a digital age.
      </p>
    </section>
  );
}
