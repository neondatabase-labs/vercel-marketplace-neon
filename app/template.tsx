// import PostgresVersion from "./version";
import Image from "next/image";
import logo from "@/assets/template/logo.svg";
import logoDark from "@/assets/template/logo-dark.svg";
import Link from "next/link";
import arrow from "@/assets/template/arrow.svg";
import discord from "@/assets/template/discord.svg";
import docs from "@/assets/template/docs.svg";

const DATA = {
  title: "Next-Gen Templates<br> with Neon & Vercel",
  description:
    "Pre-built, optimized, and deployment-ready in minutes.<br> Fast-track your app development with Neon and Vercel.",
  button: {
    text: "Create Neon Database",
    href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fneondatabase-labs%2Fvercel-marketplace-neon%2Ftree%2Fmain&project-name=my-vercel-neon-app&repository-name=my-vercel-neon-app&products=[{%22type%22:%22integration%22,%22integrationSlug%22:%22neon%22,%22productSlug%22:%22neon%22,%22protocol%22:%22storage%22}]",
  },
  link: {
    text: "View on GitHub",
    href: "https://github.com/neondatabase-labs/vercel-marketplace-neon",
  },
  footerLinks: [
    {
      text: "Docs",
      href: "https://neon.tech/docs/",
      icon: docs,
    },
    {
      text: "Discord",
      href: "https://discord.com/invite/92vNTzKDGp",
      icon: discord,
    },
  ],
};

function Logo() {
  return (
    <>
      <Image
        className="md:h-6 md:w-auto dark:hidden"
        src={logo}
        alt="logo"
        width={102}
        height={28}
      />
      <Image
        className="hidden md:h-6 md:w-auto dark:block"
        src={logoDark}
        alt="logo"
        width={102}
        height={28}
      />
    </>
  );
}
export default function Template() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-xl flex-1 flex-col md:max-w-lg sm:max-w-md sm:px-5">
        <main className="flex flex-1 flex-col justify-center">
          <div className="mb-7 sm:mb-6">
            <Logo />
          </div>
          {/* <PostgresVersion /> */}
          <h1
            className="text-[52px] font-semibold leading-[1.125] tracking-[-0.04em] md:text-[44px] sm:text-[32px] sm:[&_br]:hidden"
            dangerouslySetInnerHTML={{ __html: DATA.title }}
          />
          <p
            className="mt-3.5 max-w-lg text-xl leading-snug tracking-[-0.02em] text-[#61646B] md:text-[18px] sm:text-[16px] dark:text-[#94979E] sm:[&_br]:hidden"
            dangerouslySetInnerHTML={{ __html: DATA.description }}
          />
          <div className="mt-10 flex flex-wrap items-center gap-5 md:mt-9 sm:mt-8">
            <Link
              className="rounded-full bg-[#00E599] px-7 py-3 font-semibold tracking-[-0.04em] text-[#0C0D0D] transition-colors duration-200 hover:bg-[#00E5BF] md:px-5 md:py-2.5"
              href={DATA.button.href}
              target="_blank"
            >
              {DATA.button.text}
            </Link>
            <Link
              className="group flex items-center gap-2 tracking-[-0.03em]"
              href={DATA.link.href}
              target="_blank"
            >
              {DATA.link.text}
              <Image
                className="transition-transform duration-200 group-hover:translate-x-1 dark:invert"
                src={arrow}
                alt="arrow"
                width={16}
                height={10}
              />
            </Link>
          </div>
        </main>
        <footer className="flex items-center justify-between border-t border-[#E4E5E7] pb-12 pt-10 sm:py-5 dark:border-[#303236]">
          <Logo />
          <div className="flex gap-6">
            {DATA.footerLinks.map((link) => (
              <Link
                className="flex items-center gap-2 opacity-70 transition-opacity duration-200 hover:opacity-100"
                key={link.text}
                href={link.href}
                target="_blank"
              >
                <Image
                  className="dark:invert"
                  src={link.icon}
                  alt={link.text}
                  width={16}
                  height={16}
                />
                <span className="text-[15px] tracking-[-0.02em]">{link.text}</span>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
