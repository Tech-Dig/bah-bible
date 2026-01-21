"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/academy", label: "Training Academy" },
  { href: "/sections/foh", label: "FOH" },
  { href: "/sections/boh", label: "BOH" },
  { href: "/sections/bar", label: "BAR" },
  { href: "/sections/managers", label: "Managers" },
  { href: "/sections/admin", label: "Admin" }
];

export default function Sidebar() {
  const path = usePathname();
  return (
    <aside className="w-72 border-r border-bah-line bg-bah-panel min-h-screen sticky top-0">
      <div className="p-5">
        <div className="text-xl font-semibold tracking-wide">
          BAH <span className="text-bah-ember">BIBLE</span>
        </div>
        <div className="text-sm text-bah-muted mt-1">Internal operations & training</div>
      </div>
      <nav className="px-3 pb-6 space-y-1">
        {nav.map((i) => {
          const active = path === i.href;
          return (
            <Link
              key={i.href}
              href={i.href}
              className={[
                "block px-3 py-2 rounded-xl border",
                active
                  ? "bg-bah-panel2 border-bah-ember text-bah-text shadow-soft"
                  : "bg-transparent border-transparent text-bah-muted hover:text-bah-text hover:bg-bah-panel2"
              ].join(" ")}
            >
              {i.label}
            </Link>
          );
        })}
        <div className="pt-4">
          <Link
            href="/admin"
            className="block px-3 py-2 rounded-xl bg-bah-panel2 border border-bah-line text-bah-text hover:border-bah-ember"
          >
            Admin Console
          </Link>
        </div>
      </nav>
    </aside>
  );
}