import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleStartJourney = () => {
    navigate('/auth');
  };
  return (
    <section className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-yellow-300">
            <svg
              className="h-3 w-3 text-yellow-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 1.5 12.3 7l5.2.4-4 3.4 1.3 5.1L10 13.6 5.2 15.9 6.5 10 2.3 7.4 7.7 7z" />
            </svg>
          </span>
          <span>For Ages 6–9</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
          Explore the World of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400">
            AI
          </span>{" "}
          Through Adventure
        </h1>

        <p className="text-sm sm:text-base text-slate-600 max-w-xl">
          Interactive missions, fun challenges, and shiny rewards teach your child the
          basics of Artificial Intelligence — safely and joyfully.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button 
            onClick={handleStartJourney}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:brightness-105 transition-all"
          >
            <span className="inline-flex h-4 w-4 items-center justify-center">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3.5 11.5 11 4l2.5 2.5L6.5 14l-3 1.5z"
                  fill="white"
                  fillOpacity="0.9"
                />
                <path d="M11 4 16 3l-1 5-2 1.5L11 4z" fill="white" />
              </svg>
            </span>
            <span>Start Your Journey</span>
          </button>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#ff5a3c] text-[#ff5a3c] font-semibold text-sm bg-white/90 shadow-sm hover:bg-[#fff0ea] hover:shadow-md transition-all">
            <span>See Plans</span>
            <span className="inline-flex h-4 w-4 items-center justify-center">
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
                <path
                  d="m7 4 6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mt-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 10.5 8.2 15 16 5.5l-1.6-1.3L8.1 12 5.5 9.2z" />
              </svg>
            </span>
            <span>Free trial</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-sky-500">
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none">
                <path
                  d="M4 5.5 15.5 17"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M7 4 14.5 9 10.8 11.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>Ad-free</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-50 text-violet-500">
              <svg className="h-3 w-3" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 2.5 5 4.5v4.4c0 4 2.1 6.7 5 8.6 2.9-1.9 5-4.6 5-8.6V4.5z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 10.2 9 11.8 12.3 8.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span>COPPA safe</span>
          </div>
        </div>
      </div>

      <div className="relative flex justify-center lg:justify-end">
        <div className="w-full max-w-md aspect-[4/3] rounded-[32px] bg-gradient-to-br from-sky-100 via-indigo-100 to-amber-100 shadow-[0_24px_60px_rgba(15,23,42,0.12)] overflow-hidden flex items-center justify-center">
          <div className="w-[85%] h-[75%] rounded-3xl bg-white/70 backdrop-blur-md border border-white/60 shadow-inner flex items-center justify-center text-slate-500 text-sm font-medium">
            Hero illustration area
          </div>
        </div>

        <div className="hidden sm:block absolute -bottom-6 -left-4 h-14 w-14 rounded-full bg-sky-200/70" />
        <div className="hidden sm:block absolute -top-6 -right-4 h-10 w-10 rounded-full bg-pink-200/70" />
      </div>
    </section>
  );
}

export default Hero;
