"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Services", "/services"],
  ["Pricing", "/pricing"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const showBrandSubtitle = pathname !== "/";

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="PawCircle LLC home">
          <span
            className="brand-mark"
            aria-hidden="true"
            style={{ background: "transparent", boxShadow: "none", borderRadius: "50%", overflow: "hidden", padding: 0 }}
          >
            <img
              src="/pawcircle-mark.svg"
              alt=""
              width="42"
              height="42"
              style={{ display: "block", width: "100%", height: "100%" }}
            />
          </span>
          <span>
            <strong>PawCircle LLC</strong>
            {showBrandSubtitle ? (
              <small>Websites and online tools for independent service businesses</small>
            ) : null}
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={menuOpen ? "primary-nav primary-nav-open" : "primary-nav"}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => {
            const active = pathname === href;
            return (
              <Link key={href} href={href} aria-current={active ? "page" : undefined}>
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
