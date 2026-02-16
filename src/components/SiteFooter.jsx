function SiteFooter() {
  return (
    <footer className="mt-16 bg-white pt-10 pb-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4 text-sm text-slate-600">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center text-white font-bold text-base">
                F
              </div>
              <span className="font-display font-semibold text-base text-slate-900">
                Future <span className="text-pink-500">Explorer</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xs">
              Making AI fun and safe for young explorers ages 6–9.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Platform</h3>
            <ul className="space-y-1">
              <li>Pricing</li>
              <li>Lessons</li>
              <li>Downloads</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Parents</h3>
            <ul className="space-y-1">
              <li>Safety &amp; Privacy</li>
              <li>FAQ</li>
              <li>Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2 text-sm">Legal</h3>
            <ul className="space-y-1">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>COPPA Compliance</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 h-px bg-slate-100" />

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-slate-400">
          <span>© 2026 Future Explorer. All rights reserved.</span>
          <span>
            Built with <span className="text-pink-500">♥</span> for curious kids.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
