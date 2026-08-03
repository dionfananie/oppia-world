export function Footer() {
  return (
    <footer className="border-t border-[#c4c7c7] bg-white">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-8 px-6 py-12">
        <p className="text-sm font-medium tracking-[0.7px] text-[#444748]">
          &copy; 2024 Oppia World. Editorial Precision in Digital Learning.
        </p>
        <div className="flex gap-8">
          {/* TODO: wire to routes */}
          <a
            href="#"
            className="text-sm font-medium tracking-[0.7px] text-[#444748]"
          >
            Terms
          </a>
          {/* TODO: wire to routes */}
          <a
            href="#"
            className="text-sm font-medium tracking-[0.7px] text-[#444748]"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
