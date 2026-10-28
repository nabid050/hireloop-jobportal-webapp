import Image from "next/image";

const stats = [
  { label: "Active Jobs", value: "50K", icon: "jobs" },
  { label: "Companies", value: "12K", icon: "companies" },
  { label: "Job Seekers", value: "2M", icon: "seekers" },
  { label: "Satisfaction Rate", value: "97%", icon: "satisfaction" },
];

function StatIcon({ name }) {
  const iconPaths = {
    jobs: (
      <>
        <path d="M3 8.5h10.5v8H3z" />
        <path d="M6 8.5V6h4v2.5M13.5 11h2.5v5.5h-2.5M5 11v2m3-2v2m3-2v2" />
      </>
    ),
    companies: (
      <>
        <path d="M3 16.5h13M5 14V8h3v6m2 0V5h3v9m2-4h2v4" />
      </>
    ),
    seekers: (
      <>
        <circle cx="8" cy="8" r="4" />
        <path d="m11 11 4 4M6.5 8h3M8 6.5v3" />
      </>
    ),
    satisfaction: (
      <path d="m9.5 2.5 2.1 4.3 4.7.7-3.4 3.3.8 4.7-4.2-2.2-4.2 2.2.8-4.7-3.4-3.3 4.7-.7 2.1-4.3Z" />
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 19 19"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    >
      {iconPaths[name]}
    </svg>
  );
}

function StatSection() {
  return (
    <section className="relative isolate min-h-[590px] overflow-hidden bg-black px-4 pb-6 pt-5 text-white sm:min-h-[620px] sm:px-7">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/globe.png"
          alt=""
          aria-hidden="true"
          width={1440}
          height={1882}
          priority
          className="absolute left-1/2 top-[calc(16rem-52vw)] w-[max(650px,min(1440px,125vw))] max-w-none -translate-x-1/2 opacity-90 max-sm:top-[-8rem] sm:top-[calc(19rem-52vw)]"
        />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/70 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#111113]/90 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-white/45 shadow-[0_0_22px_rgba(115,91,255,0.12)]">
          <span aria-hidden="true" className="text-[11px]">
            💼
          </span>
          <span className="font-semibold tracking-normal text-white">50,000+</span>
          <span>new jobs this month</span>
        </div>

        <h1 className="mt-4 text-[clamp(1.8rem,4.2vw,2.65rem)] font-semibold leading-tight tracking-[-0.045em]">
          Find Your Dream Job Today
        </h1>
        <p className="mt-2 max-w-[560px] text-[11px] leading-[1.7] text-white/55 sm:text-xs">
          HireLoop connects top talent with world-class companies. Browse thousands of
          <br className="hidden sm:block" /> curated opportunities and land your next role — faster.
        </p>

        <div
          role="search"
          className="mt-5 flex w-full max-w-[660px] items-center gap-1 rounded-xl border border-white/10 bg-[#111112]/95 p-1.5 shadow-[0_8px_35px_rgba(0,0,0,0.38)]"
        >
          <label className="flex min-w-0 flex-1 items-center gap-2 px-2 text-white/50">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="m13 13 4 4" />
            </svg>
            <span className="sr-only">Job title, skill, or company</span>
            <input
              type="search"
              placeholder="Job title, skill or company"
              className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-white/40"
            />
          </label>

          <span aria-hidden="true" className="h-6 w-px bg-white/15" />

          <label className="flex min-w-0 flex-1 items-center gap-2 px-2 text-white/50">
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M16 8.3c0 4.2-6 9-6 9s-6-4.8-6-9a6 6 0 1 1 12 0Z" />
              <circle cx="10" cy="8" r="2" />
            </svg>
            <span className="sr-only">Location</span>
            <input
              type="text"
              placeholder="Location or Remote"
              className="min-w-0 flex-1 bg-transparent text-[10px] text-white outline-none placeholder:text-white/40"
            />
          </label>

          <button
            type="button"
            aria-label="Search jobs"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5145f5] text-white shadow-[0_0_14px_rgba(81,69,245,0.55)] transition-colors hover:bg-[#655aff]"
          >
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="8.5" cy="8.5" r="5.5" />
              <path d="m13 13 4 4" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[9px]">
          <span className="mr-1 text-white/40">Trending Position</span>
          {["Product Designer", "AI Engineering", "DevOps Engineer"].map((position) => (
            <span
              key={position}
              className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-white/65"
            >
              {position}
            </span>
          ))}
        </div>
      </div>

      <p className="absolute left-1/2 top-[65%] z-10 w-[min(90%,460px)] -translate-x-1/2 -translate-y-1/2 text-center text-lg font-light leading-snug tracking-[-0.035em] text-white/80 sm:text-[22px]">
        Assisting over <span className="font-medium text-white">15,000</span> job seekers
        <br />
        find their dream positions.
      </p>

      <div className="absolute inset-x-0 bottom-6 z-20 mx-auto grid max-w-[1120px] grid-cols-2 gap-2.5 px-2 sm:bottom-7 sm:grid-cols-4 sm:gap-3 sm:px-0">
        {stats.map(({ label, value, icon }) => (
          <article
            key={label}
            className="flex min-h-[106px] flex-col rounded-xl border border-white/[0.09] bg-gradient-to-br from-black/95 via-[#080808]/95 to-[#1b1b1b]/95 p-3 shadow-[0_12px_30px_rgba(0,0,0,0.5)] backdrop-blur-md sm:min-h-[126px] sm:p-4"
          >
            <span className="text-white/75">
              <StatIcon name={icon} />
            </span>
            <strong className="mt-auto text-[26px] font-medium leading-none tracking-[-0.045em] sm:text-[32px]">
              {value}
            </strong>
            <span className="mt-2 text-[9px] text-white/75 sm:text-[10px]">{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default StatSection;
