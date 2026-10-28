import Image from "next/image";
import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Job discovery", "/jobs"],
      ["Worker AI", "/worker-ai"],
      ["Companies", "/companies"],
      ["Salary data", "/salary-data"],
    ],
  },
  {
    title: "Navigations",
    links: [
      ["Help center", "/help"],
      ["Career library", "/career-library"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Brand Guideline", "/brand-guideline"],
      ["Newsroom", "/newsroom"],
    ],
  },
];

const socialLinks = [
  { name: "Facebook", label: "f", href: "https://www.facebook.com/" },
  { name: "Pinterest", label: "p", href: "https://www.pinterest.com/" },
  { name: "LinkedIn", label: "in", href: "https://www.linkedin.com/" },
];

function Footer() {
  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-6 pb-7 pt-9 sm:px-9 md:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-[minmax(240px,1.8fr)_repeat(3,minmax(110px,1fr))] md:gap-x-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" aria-label="Hireloop home" className="inline-flex">
              <Image
                src="/images/logo.png"
                alt="Hireloop"
                width={96}
                height={24}
                className="h-6 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-[245px] text-[11px] leading-[1.8] text-white/35">
              The AI-native career platform. Built for people who take their work
              seriously.
            </p>
          </div>

          {footerGroups.map(({ title, links }) => (
            <section key={title} aria-labelledby={`footer-${title.toLowerCase()}`}>
              <h2
                id={`footer-${title.toLowerCase()}`}
                className="text-[11px] font-medium text-[#5149c9]"
              >
                {title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-[10px] leading-4 text-white/35 transition-colors hover:text-white/75"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/[0.04] pt-5 sm:flex-row sm:items-center sm:justify-between sm:border-0 sm:pt-0">
          <div className="flex items-center gap-1.5" aria-label="Social media">
            {socialLinks.map(({ name, label, href }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className={`flex h-[26px] w-[26px] items-center justify-center rounded-md text-[15px] font-bold text-white/50 transition-colors hover:text-white ${
                  name === "Pinterest" ? "bg-[#292282]" : "bg-white/[0.06]"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 text-[10px] text-white/35 sm:flex-row sm:items-center sm:gap-5">
            <p>Copyright 2024 --HireLoop</p>
            <div className="flex items-center gap-1.5">
              <Link href="/terms" className="transition-colors hover:text-white/70">
                Terms &amp; Policy
              </Link>
              <span aria-hidden="true">-</span>
              <Link href="/privacy" className="transition-colors hover:text-white/70">
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
