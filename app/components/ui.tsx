import Link from "next/link";
import { ResponsiveImage } from "./responsive-image";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M6 18 18 6M6 6h12v12" : "M4 12h15m-6-6 6 6-6 6"} />
    </svg>
  );
}

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}

export function Button({
  href = "/book-a-consultation",
  children,
  outline = false,
}: {
  href?: string;
  children: React.ReactNode;
  outline?: boolean;
}) {
  return (
    <Link className={`cta ${outline ? "outline" : ""}`} href={href}>
      <span>{children}</span>
      <span className="cta-arrow">
        <Arrow />
      </span>
    </Link>
  );
}

export function PageHero({
  label,
  title,
  description,
  children,
  variant = "",
}: {
  label: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  variant?: string;
}) {
  return (
    <section className={`page-hero ${variant}`}>
      <div className="page-hero-inner">
        <div className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <span>{label}</span>
        </div>
        <Label>{label}</Label>
        <h1>{title}</h1>
        {description && <p className="page-intro">{description}</p>}
        {children && <div className="page-actions">{children}</div>}
      </div>
      <div className="hero-watermark" aria-hidden="true">
        <ResponsiveImage
          width={120}
          height={120}
          src="/brand/white-logomark.svg"
          alt=""
        />
      </div>
    </section>
  );
}

export function Closing({
  title = (
    <>
      Know what’s happening.
      <br />
      <span>Act with confidence.</span>
    </>
  ),
  description =
    "Book a consultation to talk through your systems, your concerns and how CorSentri monitoring would work for your organization.",
}: {
  title?: React.ReactNode;
  description?: string;
}) {
  return (
    <section className="contact section">
      <Label>Get started</Label>
      <div className="contact-heading" data-reveal>
        <h2>{title}</h2>
        <Link
          className="contact-arrow"
          href="/book-a-consultation"
          aria-label="Book a consultation"
        >
          <Arrow />
        </Link>
      </div>
      <div className="contact-bottom">
        <p>{description}</p>
        <div>
          <Button>Book a consultation</Button>
          <Link className="text-link" href="/free-risk-assessment">
            Free risk assessment <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FAQs({
  items,
  title = "Good questions. Clear answers.",
}: {
  items: string[][];
  title?: string;
}) {
  return (
    <section className="faq section">
      <div data-reveal>
        <Label>Frequently asked questions</Label>
        <h2>{title}</h2>
        <p>
          Not covered here? A consultation is the quickest way to get answers
          for your setup.
        </p>
        <Link className="text-link" href="/book-a-consultation">
          Talk it through <Arrow />
        </Link>
      </div>
      <div className="faq-list">
        {items.map(([question, answer], index) => (
          <details name="page-faq" key={question}>
            <summary>
              <span>0{index + 1}</span>
              <h3>{question}</h3>
              <b>+</b>
            </summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function NumberedList({ items }: { items: string[][] }) {
  return (
    <div className="numbered-list">
      {items.map(([title, body], index) => (
        <div key={title} data-reveal>
          <span>0{index + 1}</span>
          <div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <Arrow />
        </div>
      ))}
    </div>
  );
}
