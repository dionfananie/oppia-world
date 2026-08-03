import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import oppiaWorldLogo from "~/assets/home/oppia-world-logo.png";
import profile from "~/assets/home/profile.png";
import iconSearch from "~/assets/home/icon-search.svg";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#c4c7c7] bg-[rgba(249,249,249,0.8)] backdrop-blur-[12px]">
      <div className="mx-auto flex h-[64px] max-w-[1120px] items-center justify-between px-6">
        {/* Logo + Site Name */}
        <Link to="/" className="flex items-center gap-4">
          {/* <img
            src={oppiaWorldLogo}
            alt="Oppia World"
            className="size-8"
          /> */}
          <span className="font-serif text-2xl font-semibold tracking-[-0.6px] text-black">
            Oppia World
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-serif text-base font-semibold uppercase text-black"
          >
            EXPLORE
          </Link>
          {/* TODO: wire to routes */}
          <a
            href="#"
            className="text-sm font-medium uppercase tracking-[0.7px] text-[#444748]"
          >
            LIBRARY
          </a>
          {/* TODO: wire to routes */}
          <a
            href="#"
            className="text-sm font-medium uppercase tracking-[0.7px] text-[#444748]"
          >
            ABOUT
          </a>
        </nav>


      </div>
    </header>
  );
}
