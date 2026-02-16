function PricingSection() {
  const checkIcon = (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none">
      <path
        d="M4 10.5 8.2 15 16 5.5l-1.6-1.3L8.1 12 5.5 9.2z"
        fill="currentColor"
      />
    </svg>
  );

  const features = {
    monthly: ["All 8 missions", "Up to 3 explorers", "Badges and certificates", "Downloadable worksheets"],
    yearly: ["Everything in Monthly", "Priority new content", "Exclusive posters", "Best value!"]
  };

  return (
    <section className="mt-16 lg:mt-20">
      <div className="rounded-[32px] bg-[#fbf8f3] px-4 py-12 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Simple, Honest Pricing
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <div className="md:max-w-xs w-full rounded-[30px] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] px-6 py-8 flex flex-col gap-4 min-h-[260px] mx-auto">
            <div>
              <p className="text-sm font-semibold text-slate-700">Monthly</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">$9.99</span>
                <span className="text-xs text-slate-500">/mo</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              {features.monthly.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    {checkIcon}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 inline-flex items-center justify-center rounded-full border-2 border-[#ff5a3c] px-5 py-2.5 text-sm font-semibold text-[#ff5a3c] bg-white/90 hover:bg-[#fff0ea] shadow-sm hover:shadow-md transition-all">
              Choose Monthly
            </button>
          </div>

          <div className="relative md:max-w-xs w-full rounded-[30px] bg-white px-6 py-8 flex flex-col gap-4 border-2 border-[#ff5a3c] shadow-[0_22px_50px_rgba(248,113,113,0.4)] min-h-[260px] mx-auto">
            <div className="absolute -top-3 right-6">
              <div className="rounded-full bg-[#ff5a3c] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md">
                Save 20%
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-700">Yearly</p>
              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">$79.99</span>
                <span className="text-xs text-slate-500">/yr</span>
              </div>
            </div>

            <ul className="space-y-2 text-sm text-slate-600">
              {features.yearly.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                    {checkIcon}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#ff5a3c] to-[#ff7aa2] px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-105 transition-all">
              Choose Yearly
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
