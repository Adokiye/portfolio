import Link from "next/link";
import React from "react";
import { profile } from "data/profile";

const Header = ({ onSocialProofClick }) => {
  return (
    <header className="w-full border-b border-zinc-300/80 py-4 px-4 md:px-8 bg-white/85 backdrop-blur-md fixed top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto flex items-start justify-between gap-4">
        <Link href="/" className="group">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 md:w-11 md:h-11 border border-black bg-black text-white flex items-center justify-center text-xs md:text-sm font-bold tracking-[0.2em] transition-transform group-hover:-translate-y-0.5">
              PI
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold tracking-tight text-black">
                {profile.name}
              </h1>
              <p className="text-xs md:text-sm text-zinc-600">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>
        </Link>

        <button
          onClick={onSocialProofClick}
          className="px-3 py-2 border border-zinc-400 text-xs md:text-sm uppercase tracking-widest text-black hover:bg-zinc-100 transition-colors whitespace-nowrap"
        >
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
