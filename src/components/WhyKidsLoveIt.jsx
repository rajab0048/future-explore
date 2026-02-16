function WhyKidsLoveIt() {
  const items = [
    {
      title: "AI Made Simple",
      description: "Fun stories and activities explain AI concepts kids can actually understand.",
      color: "bg-rose-100 text-rose-500",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
          <path
            d="M6.5 4.5A3.5 3.5 0 0 1 10 1a3.5 3.5 0 0 1 3.5 3.5c0 1.5-.7 2.3-1.3 3-.5.6-.7.9-.7 1.5v.3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M10 12.5v2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="17" r="1" fill="currentColor" />
        </svg>
      )
    },
    {
      title: "Earn Badges",
      description: "Complete missions to unlock shiny badges and level up your explorer rank.",
      color: "bg-amber-100 text-amber-500",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 3 7.5 7.5 3 8.3 6.2 11.7 5.5 16.5 10 14.3 14.5 16.5 13.8 11.7 17 8.3l-4.5-.8z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      )
    },
    {
      title: "Parent Approved",
      description: "Safe, ad-free, COPPA-compliant learning with full parent controls.",
      color: "bg-sky-100 text-sky-500",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 3 5 5v4.4c0 3.4 2 5.9 5 7.6 3-1.7 5-4.2 5-7.6V5z"
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
      )
    },
    {
      title: "Adventure Learning",
      description: "Each lesson is a mission in an exciting explorer journey through AI.",
      color: "bg-emerald-100 text-emerald-500",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none">
          <path
            d="M6 14.5 7.5 12 9.5 13 8 15.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 16.5 11.7 13 15 9.5 10.5 4.5 6.5 6.5 5 10.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    }
  ];

  return (
    <section className="mt-20 lg:mt-24">
      <div className="rounded-[32px] bg-[#fbf8f3] px-4 py-12 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Kids Love It
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Learning AI has never been this fun.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)] px-5 py-6 flex flex-col gap-3"
            >
              <div
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full ${item.color}`}
              >
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyKidsLoveIt;
