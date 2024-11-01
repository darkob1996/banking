"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

function Sidebar({ user }: SiderbarProps) {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
            className="size-[24px] max-xl:size-14"
          />

          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((sidebarLink) => {
          const isActive =
            sidebarLink.route === pathname ||
            pathname.startsWith(`${sidebarLink.route}/`);

          return (
            <Link
              href={sidebarLink.route}
              key={sidebarLink.label}
              className={`sidebar-link ${isActive && "bg-bank-gradient"}`}
            >
              <div className="relative size-6">
                <Image
                  src={sidebarLink.imgURL}
                  alt={sidebarLink.label}
                  fill
                  className={`${isActive && "brightness-[2] invert-0"}`}
                />
              </div>

              <p className={`sidebar-label ${isActive && "!text-white"}`}>
                {sidebarLink.label}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      FOOTER
    </section>
  );
}

export default Sidebar;
