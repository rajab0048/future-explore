import { useNavigate } from "react-router-dom";

function FamiliesCTA() {
  const navigate = useNavigate();

  const handleStartTrial = () => {
    navigate('auth');
  };
  return (
    <section className="mt-20 lg:mt-24">
      <div className="rounded-[32px] bg-gradient-to-r from-[#ff5a3c] via-[#ff6f7a] to-[#ff7ad9] px-4 py-14 sm:px-10 lg:px-20 text-center text-white shadow-[0_24px_60px_rgba(248,113,113,0.55)]">
        <div className="flex justify-center mb-4">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none">
              <path
                d="M7 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                stroke="white"
                strokeWidth="1.4"
              />
              <path
                d="M13 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                stroke="white"
                strokeWidth="1.4"
              />
              <path
                d="M3.5 16a3.5 3.5 0 0 1 7 0"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M9.5 15.5a3.5 3.5 0 0 1 7 0"
                stroke="white"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Join 10,000+ Families
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/90 max-w-xl mx-auto">
          Give your child the gift of understanding AI — through play, discovery, and
          adventure.
        </p>

        <button 
          onClick={handleStartTrial}
          className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white/90 bg-white/0 px-8 py-3 text-sm sm:text-base font-semibold text-white hover:bg-white/10 transition-all shadow-[0_14px_30px_rgba(15,23,42,0.18)]"
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
          <span>Start Free Trial</span>
        </button>
      </div>
    </section>
  );
}

export default FamiliesCTA;
