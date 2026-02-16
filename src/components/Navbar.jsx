import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
              F
            </div>
            <span className="font-display font-semibold text-lg tracking-tight">
              Future <span className="text-pink-500">Explorer</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <button className="hover:text-slate-900 transition-colors">Home</button>
            <button className="hover:text-slate-900 transition-colors">Pricing</button>
            <button className="hover:text-slate-900 transition-colors">Features</button>
            <button className="hover:text-slate-900 transition-colors">How It Works</button>
          </nav>

          <div className="hidden lg:flex items-center gap-4 text-sm">
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              Log In
            </button>
            <button className="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-md hover:shadow-lg transition-all">
              Start Free
            </button>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button className="hidden sm:inline-flex px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all">
              Start Free
            </button>
            <button
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-slate-200 text-slate-700"
              aria-label="Toggle menu"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <span className="relative block h-3 w-3">
                  <span className="absolute inset-0 h-0.5 w-full rotate-45 bg-slate-800 rounded-sm" />
                  <span className="absolute inset-0 h-0.5 w-full -rotate-45 bg-slate-800 rounded-sm" />
                </span>
              ) : (
                <span className="flex flex-col items-center justify-center gap-1">
                  <span className="h-0.5 w-4 bg-slate-800 rounded-sm" />
                  <span className="h-0.5 w-4 bg-slate-800 rounded-sm" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 sm:px-6 pt-3 pb-4 space-y-2 text-sm text-slate-700">
          <button className="block w-full text-left py-2">Home</button>
          <button className="block w-full text-left py-2">Pricing</button>
          <button className="block w-full text-left py-2">Features</button>
          <button className="block w-full text-left py-2">How It Works</button>
          <div className="h-px bg-slate-100 my-2" />
          <button className="block w-full text-left py-2">Log In</button>
          <button className="mt-1 w-full rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold py-2 shadow-md">
            Start Free
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
