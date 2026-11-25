"use client";
import Link from "next/link";
import { ResponsiveImage } from "./responsive-image";
import { useEffect, useRef, useState } from "react";
import { Arrow } from "./ui";

const links = [
  ["Solutions", "/solutions"],
  ["Who we serve", "#"],
  ["MSP partners", "#"],
  ["About", "#"],
  ["Pricing", "#"],
  ["Resources", "#"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      const before = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = before;
      };
    } else dialog.current?.close();
  }, [open]);

  return (
    <>
      <a
        className="skip"
        href="#main"
      >
        Skip to content
      </a>
      <header className="header site-header">
        <Link
          href="/"
          className="logo"
          aria-label="CorSentri home"
        >
          <ResponsiveImage
            src="/brand/inverse-logo.png"
            alt="CorSentri"
            width="176"
            height="38"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
            >
              {name}
            </a>
          ))}
        </nav>
        <a
          className="header-cta"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Let’s talk <Arrow />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          onClick={() => setOpen(true)}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          Menu <span>+</span>
        </button>
      </header>
      <dialog
        ref={dialog}
        id="site-menu"
        className="menu-dialog"
        onCancel={() => setOpen(false)}
        aria-label="Navigation"
      >
        <div className="menu-dialog-top">
          <Link
            href="/"
            onClick={() => {
              setOpen(false);
            }}
            aria-label="CorSentri home"
          >
            <ResponsiveImage
              src="/brand/inverse-logo.png"
              width="150"
              alt="CorSentri"
            />
          </Link>
          <button
            onClick={() => {
              setOpen(false);
              toggle.current?.focus();
            }}
            aria-label="Close menu"
          >
            Close ×
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([name, href], i) => (
            <a
              key={name}
              href={href}
              onClick={(e) => {
                if (href === "#") e.preventDefault();
                setOpen(false);
              }}
            >
              <small>0{i + 1}</small>
              {name}
              <Arrow />
            </a>
          ))}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            className="mobile-book"
          >
            Book a consultation <Arrow />
          </a>
        </nav>
        <p>Smarter security. Greater confidence.</p>
      </dialog>
    </>
  );
}

export function SiteEffects() {
  useEffect(() => {
    document.documentElement.classList.add("has-motion");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll("[data-reveal]")
      .forEach((e) => observer.observe(e));

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest("a");
      if (!a) return;

      const href = a.getAttribute("href") ?? "";
      const isAppRoute = href === "/" || href === "/solutions";
      const isExistingAnchor =
        href.startsWith("#") && document.getElementById(href.slice(1));
      const isExternalLink = /^(https?:|mailto:|tel:)/i.test(href);

      if (!isAppRoute && !isExistingAnchor && !isExternalLink) {
        e.preventDefault();
      }
    };
    document.addEventListener("click", handleGlobalClick, true);

    return () => {
      observer.disconnect();
      document.removeEventListener("click", handleGlobalClick, true);
    };
  }, []);
  return null;
}

export function SiteFooter() {
  const [paused, setPaused] = useState(false);
  const settings = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
    return () => document.documentElement.classList.remove("motion-paused");
  }, [paused]);

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div>
            <Link
              href="/"
              aria-label="CorSentri home"
            >
              <ResponsiveImage
                loading="lazy"
                src="/brand/white-logo.svg"
                width="200"
                height="45"
                alt="CorSentri"
              />
            </Link>
            <p>
              Smarter security.
              <br />
              Greater confidence.
            </p>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Request a free risk assessment ↗
            </a>
          </div>
          <div>
            <span>Explore</span>
            {links.map(([name]) => (
              <a
                key={name}
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                {name}
              </a>
            ))}
          </div>
          <div>
            <span>Get in touch</span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Book a consultation ↗
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              contact@corsentri.com
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              (980) 409-4888
            </a>
            <p>Charlotte, NC</p>
          </div>
          <div>
            <span>Stay connected</span>
            <a href="#" onClick={(e) => e.preventDefault()}>
              LinkedIn ↗
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Instagram ↗
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              X ↗
            </a>

            <a
              className="back-top"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Back to top ↑
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} CorSentri LLC</span>
          <span>Always watching. Always human.</span>
          <div>
            <button
              className="footer-button"
              onClick={() => setPaused(!paused)}
              aria-pressed={paused}
            >
              {paused ? "Resume" : "Pause"} animations {paused ? "▷" : "Ⅱ"}
            </button>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Privacy
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Terms
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              Cookies
            </a>
            <button
              className="footer-button"
              onClick={() => settings.current?.showModal()}
            >
              Cookie settings
            </button>
          </div>
        </div>
      </footer>
      <dialog
        ref={settings}
        className="settings-dialog"
        aria-labelledby="settings-title"
      >
        <button
          className="dialog-close"
          onClick={() => settings.current?.close()}
          aria-label="Close cookie settings"
        >
          ×
        </button>
        <p className="eyebrow">Your privacy</p>
        <h2 id="settings-title">Cookie settings</h2>
        <div className="setting-row">
          <div>
            <strong>Essential</strong>
            <p>Hosting and basic website functionality.</p>
          </div>
          <span>Always on</span>
        </div>
        <div className="setting-row">
          <div>
            <strong>Analytics</strong>
            <p>No analytics tools are installed.</p>
          </div>
          <span>Off</span>
        </div>
        <p>
          The Calendly calendar loads only when you choose to open it. Calendly
          manages its own cookies and privacy settings.
        </p>
        <button
          className="form-button"
          onClick={() => settings.current?.close()}
        >
          Done <Arrow />
        </button>
      </dialog>
    </>
  );
}
