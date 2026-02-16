function GetStartedSteps() {
  const steps = [
    {
      number: "1",
      title: "Sign Up & Choose a Plan",
      description: "Create your parent account in 30 seconds."
    },
    {
      number: "2",
      title: "Create Explorer Profiles",
      description: "Add up to 3 child profiles with fun avatars."
    },
    {
      number: "3",
      title: "Start the Adventure!",
      description: "Kids begin their AI journey with Level 1 missions."
    }
  ];

  return (
    <section className="mt-16 lg:mt-20">
      <div className="rounded-[32px] bg-[#fbf8f3] px-4 py-12 sm:px-8 lg:px-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            Get Started in 3 Steps
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            Set up your family&apos;s AI journey in just a few taps.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center gap-3">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#ff7aa2] to-[#ff5a3c] text-white font-semibold text-lg shadow-md">
                {step.number}
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStartedSteps;
