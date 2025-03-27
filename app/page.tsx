import Image from "next/image";
import logo from "@/assets/logo.svg";
import logoDark from "@/assets/logo-dark.svg";
import Link from "next/link";
import arrow from "@/assets/arrow.svg";
import discord from "@/assets/discord.svg";
import docs from "@/assets/docs.svg";
import theme from "@/assets/theme.svg";

const DATA = {
  title: "Next-Gen Templates<br> with Neon & Vercel",
  description:
    "Pre-built, optimized, and deployment-ready in minutes. Fast&#8209;track your app development with Neon and Vercel.",
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 md:max-w-lg md:px-0 lg:max-w-xl">
        <main className="flex flex-1 flex-col justify-center">
          <div className="mb-6 md:mb-7">
            <Image
              className="lg:h-7 lg:w-auto dark:hidden"
              src={logo}
              alt="Neon logo"
              width={88}
              height={24}
              priority
            />
            <Image
              className="hidden lg:h-7 lg:w-auto dark:block"
              src={logoDark}
              alt="Neon logo"
              width={88}
              height={24}
              priority
            />
          </div>
          <h1
            className="text-3xl font-semibold leading-none tracking-tighter md:text-4xl md:leading-none lg:text-5xl lg:leading-none"
            dangerouslySetInnerHTML={{ __html: DATA.title }}
          />
          <p
            className="mt-3.5 max-w-lg text-base leading-snug tracking-tight text-[#61646B] md:text-lg md:leading-snug lg:text-xl lg:leading-snug dark:text-[#94979E]"
            dangerouslySetInnerHTML={{ __html: DATA.description }}
          />
          <div className="mt-8 flex flex-wrap items-center gap-5 md:mt-9 lg:mt-10">
            <Link
              className="rounded-full bg-[#00E599] px-5 py-2.5 font-semibold tracking-tight text-[#0C0D0D] transition-colors duration-200 hover:bg-[#00E5BF] lg:px-7 lg:py-3"
              href={DATA.button.href}
              target="_blank"
            >
              {DATA.button.text}
            </Link>
            <Link
              className="group flex items-center gap-2 leading-none tracking-tight"
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
                priority
              />
            </Link>
          </div>
        </main>
        <footer className="flex items-center justify-between border-t border-[#E4E5E7] py-5 md:pb-12 md:pt-10 dark:border-[#303236]">
          <div className="flex items-center gap-2.5 text-sm leading-none tracking-tight">
            <Image
              className="dark:invert"
              src={theme}
              alt="theme"
              width={16}
              height={16}
              priority
            />
            <span className="dark:hidden">Light</span>
            <span className="hidden dark:block">Dark</span>
          </div>
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
                  priority
                />
                <span className="text-sm tracking-tight">{link.text}</span>
              </Link>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
