"use client";

import { ResponsiveImage } from "./components/responsive-image";
import {
  HeroMotion,
  ServiceAccordion,
  ProcessTabs,
} from "./components/home-interactions";

const book = "#";
const risk = "#";

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
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

function CTA({
  href = book,
  children,
  secondary = false,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  secondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a
      className={`cta ${secondary ? "secondary" : ""}`}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
    >
      <span>{children}</span>
      <span className="cta-arrow">
        <Arrow diagonal />
      </span>
    </a>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span /> {children}
    </p>
  );
}

const faqs = [
  [
    "What is cybersecurity monitoring?",
    "Keeping continuous watch over activity across your systems, such as sign-ins, file changes and settings, to spot suspicious behavior early so our security team can review it and pass it to the right person.",
  ],
  [
    "Do we need our own security team?",
    "No. CorSentri is a managed service: AI-enabled technology watches your critical systems, and our security team reviews what it flags. You stay in charge of decisions, and we tell you what happened, why it matters and what to do next.",
  ],
  [
    "Which systems can you monitor?",
    "Coverage is confirmed during onboarding based on your environment and service agreement. We talk through your systems during your consultation.",
  ],
  [
    "What happens if you spot a threat?",
    "Our security team reviews the activity. If it needs your attention, you get an alert with context: what happened, why it matters and the recommended next step. Alert handling, notification channels and response responsibilities are agreed as part of your service.",
  ],
  [
    "Does monitoring make us compliant?",
    "No. Monitoring alone does not make an organization compliant with HIPAA or any other framework. It can support your wider security efforts by helping you keep an eye on activity in systems that hold patient or client information. Your compliance program remains your responsibility.",
  ],
  [
    "How much does it cost?",
    "It depends on the systems we monitor and your service requirements. We talk it through during your consultation, so you know what is included before anything starts.",
  ],
  [
    "How do we get started?",
    "Book a consultation. We talk through your systems and concerns, agree what to cover, set up monitoring and confirm how alerts will reach you.",
  ],
];

export default function Home() {
  return (
    <div className="site" id="top">
      <main id="main">
        <HeroMotion>
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy">
            <h1>
              <span>Smarter security.</span>
              <span className="muted">Greater confidence.</span>
            </h1>
            <p>
              Cybersecurity monitoring that helps protect your business, detect
              threats, and keep you informed.
            </p>
            <div className="hero-actions">
              <CTA>Book a consultation</CTA>
              <a
                className="text-link"
                href={risk}
                onClick={(e) => e.preventDefault()}
              >
                Free risk assessment <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="sentinel" aria-hidden="true">
            <div className="orbital-coordinate top">CONTINUOUS VIGILANCE</div>
            <div className="orbital-stage">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit orbit-four" />
              <div className="orbit orbit-five" />
              <div className="orbit-inner" />
              <div className="orbital-core">
                <ResponsiveImage
                  width={120}
                  height={120}
                  src="/brand/white-logomark.svg"
                  alt=""
                />
              </div>
              <div className="orbital-speck speck-one" />
              <div className="orbital-speck speck-two" />
            </div>
          </div>
          <div className="hero-bottom">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              <span className="scroll-icon">↓</span> A clearer view of your
              security
            </a>
          </div>
        </HeroMotion>

        <section className="intro section" id="approach">
          <Label>The confidence to move forward</Label>
          <div data-reveal>
            <h2>
              You focus on what’s next.
              <br />
              <span className="sage-text">
                We keep watch over
                <br className="desktop-break" /> what matters.
              </span>
            </h2>
            <div className="intro-bottom">
              <p>
                CorSentri is a managed cybersecurity monitoring and threat
                detection service. We watch for suspicious activity across your
                critical systems, around the clock. Our security team reviews
                what matters and keeps you informed.
              </p>
              <a
                className="round-link"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label="Explore our solutions"
              >
                <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>

        <section className="night-panel" aria-labelledby="night-title">
          <ResponsiveImage
            src="/images/architecture.jpg"
            alt="Modern office architecture"
            loading="lazy"
          />
          <div className="night-shade" />
          <div className="night-content" data-reveal>
            <Label>Why monitoring matters</Label>
            <h2 id="night-title">
              Your day ends.
              <br />
              The risks don’t.
            </h2>
            <p>
              Warning signs don’t wait for office hours. A password used from an
              unfamiliar country. An admin account nobody remembers creating.
              Small signals deserve attention, whenever they appear.
            </p>
            <a
              className="text-link"
              href={risk}
              onClick={(e) => e.preventDefault()}
            >
              Know where you stand <Arrow diagonal />
            </a>
          </div>
          <div className="night-time" aria-hidden="true">
            02:17<span>BUSINESS ASLEEP. MONITORING AWAKE.</span>
          </div>
        </section>

        <section className="coverage section" id="coverage">
          <div data-reveal>
            <Label>Every hour accounted for</Label>
            <h2>
              A working week.
              <br />A wider view.
            </h2>
            <p>
              There are 168 hours in a week. A typical working week covers just
              40. We keep watching through the other 128, too.
            </p>
            <div className="coverage-key">
              <span>
                <i />
                Office hours
              </span>
              <span>
                <i />
                Beyond the 9–5
              </span>
            </div>
          </div>
          <div
            className="week"
            data-reveal
            role="img"
            aria-label="Weekly coverage: 40 office hours and 128 hours outside the nine-to-five. CorSentri monitors all 168 hours."
          >
            <div className="week-title">
              <span>ONE WEEK / 168 HOURS</span>
              <span>
                24/7 SOC COVERAGE <i />
              </span>
            </div>
            <div className="week-grid">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map(
                (day, d) => (
                  <div key={day}>
                    <span>{day}</span>
                    {Array.from({ length: 24 }, (_, h) => (
                      <i
                        key={h}
                        className={
                          d < 5 && h >= 9 && h < 17 ? "office-hour" : ""
                        }
                        style={{ animationDelay: `${d * 0.12 + h * 0.04}s` }}
                      />
                    ))}
                  </div>
                ),
              )}
            </div>
            <div className="week-foot">
              <strong>
                128<span>hours beyond the 9–5.</span>
              </strong>
              <span>
                Still covered. <Arrow diagonal />
              </span>
            </div>
          </div>
        </section>

        <section className="solutions section" id="solutions">
          <div className="section-heading" data-reveal>
            <div>
              <Label>What we do</Label>
              <h2>
                Less uncertainty.
                <br />
                More clarity.
              </h2>
            </div>
            <p>
              Monitoring built around your systems and how your organization
              works. Expertise that turns unusual activity into clear next
              steps.
            </p>
          </div>
          <ServiceAccordion />
        </section>

        <section className="human section" id="about">
          <div className="human-heading" data-reveal>
            <Label>Intelligent technology. Human perspective.</Label>
            <h2>
              AI spots the signals.
              <br />
              <span>People see the context.</span>
            </h2>
          </div>
          <div className="human-layout">
            <div className="human-image" data-reveal>
              <ResponsiveImage
                src="/images/stock-meeting.jpg"
                alt="Professionals taking part in a business meeting"
                loading="lazy"
              />
              <div className="image-caption">
                <span>Real expertise.</span>
                <span>Clear communication.</span>
              </div>
            </div>
            <div className="human-copy" data-reveal>
              <p className="lead">
                Serious protection.
                <br />
                Explained in plain English.
              </p>
              <p>
                An unusual sign-in could be a real concern—or a colleague
                traveling. Our security team adds the context, confirms what
                matters and explains the next step.
              </p>
              <div className="human-points">
                {[
                  [
                    "01",
                    "Technology that never clocks off",
                    "AI-enabled monitoring flags suspicious patterns and puts important alerts first.",
                  ],
                  [
                    "02",
                    "Expertise without the overhead",
                    "A security team on your side, without building a department of your own.",
                  ],
                  [
                    "03",
                    "A process you can see",
                    "Agreed coverage, clear responsibilities and practical reports. Ready to grow with you.",
                  ],
                ].map(([n, t, d]) => (
                  <div key={n}>
                    <span>{n}</span>
                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="section-heading" data-reveal>
            <div>
              <Label>How it works</Label>
              <h2>Confidence, step by step.</h2>
            </div>
            <p>
              Five clear steps, from setup to ongoing monitoring. We’ll confirm
              each step and who is responsible during your consultation.
            </p>
          </div>
          <ProcessTabs />
        </section>

        <section className="industries section" id="who-we-serve">
          <div className="section-heading" data-reveal>
            <div>
              <Label>Who we serve</Label>
              <h2>
                What you hold matters.
                <br />
                So does who protects it.
              </h2>
            </div>
            <p>
              Patient records. Client files. Financial information. Monitoring
              for organizations with information worth protecting.
            </p>
          </div>
          <div className="industry-grid">
            {[
              ["Healthcare", "stock-healthcare.jpg", "healthcare"],
              ["Legal services", "stock-meeting.jpg", "legal"],
              ["Finance & insurance", "stock-collaboration.jpg", "finance"],
              ["Retail & hospitality", "stock-hospitality.jpg", "retail"],
            ].map(([title, img, id], i) => (
              <a
                href="#"
                className="industry"
                key={id}
                data-reveal
                onClick={(e) => e.preventDefault()}
              >
                <ResponsiveImage
                  src={`/images/${img}`}
                  alt={title}
                  loading="lazy"
                />
                <div>
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <Arrow diagonal />
                </div>
              </a>
            ))}
          </div>
          <p className="also">
            Also built for{" "}
            <span>
              Technology & SaaS · Professional services · Education ·
              Manufacturing · Nonprofits
            </span>
          </p>
        </section>

        <section className="partners section" id="partners">
          <div className="partner-pattern" aria-hidden="true">
            <div />
            <div />
            <ResponsiveImage
              width={120}
              height={120}
              src="/brand/white-logomark.svg"
              alt=""
            />
          </div>
          <div className="partner-copy" data-reveal>
            <Label>For MSPs & IT providers</Label>
            <h2>
              Your client relationships.
              <br />
              <span>Our security expertise.</span>
            </h2>
            <p>
              Offer your clients 24/7/365 monitoring and threat detection,
              without building a security practice of your own. A stronger
              offering. A shared commitment.
            </p>
            <CTA>Explore partnerships</CTA>
            <a
              className="partner-email"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              partners@corsentri.com <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="resources section" id="resources">
          <div className="section-heading" data-reveal>
            <div>
              <Label>A little more perspective</Label>
              <h2>Security, made clearer.</h2>
            </div>
            <a
              className="text-link"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              All insights <Arrow diagonal />
            </a>
          </div>
          <div className="resource-grid">
            {[
              [
                "What is cybersecurity monitoring? A plain-English guide",
                "stock-engineer.jpg",
                "what-is-cybersecurity-monitoring",
              ],
              [
                "Five warning signs your systems may need a closer look",
                "stock-collaboration.jpg",
                "five-warning-signs",
              ],
              [
                "What to ask before choosing a monitoring partner",
                "stock-meeting.jpg",
                "choosing-a-monitoring-partner",
              ],
            ].map(([title, img, slug], i) => (
              <a
                href="#"
                key={slug}
                className="resource"
                data-reveal
                onClick={(e) => e.preventDefault()}
              >
                <div className="resource-image">
                  <ResponsiveImage
                    src={`/images/${img}`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="resource-arrow">
                    <Arrow diagonal />
                  </span>
                </div>
                <p className="article-meta">
                  INSIGHTS <span>0{i + 1}</span>
                </p>
                <h3>{title}</h3>
                <span className="read-article">
                  Read article <Arrow />
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="faq section" id="faq">
          <div data-reveal>
            <Label>Good questions. Clear answers.</Label>
            <h2>
              Let’s clear
              <br />
              things up.
            </h2>
            <p>
              Every business is different. A conversation is the best way to
              understand what’s right for yours.
            </p>
            <a
              className="text-link"
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Talk to our team <Arrow diagonal />
            </a>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <details name="faq" key={q}>
                <summary>
                  <span>0{i + 1}</span>
                  <h3>{q}</h3>
                  <b>+</b>
                </summary>
                <p>
                  {a}
                  {q === "How much does it cost?" && (
                    <>
                      {" "}
                      <a href="#" onClick={(e) => e.preventDefault()}>
                        See how pricing works →
                      </a>
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <Label>Your next step starts here</Label>
          <div className="contact-heading" data-reveal>
            <h2>
              Know what’s happening.
              <br />
              <span>Move with confidence.</span>
            </h2>
            <a
              className="contact-arrow"
              href="#"
              onClick={(e) => e.preventDefault()}
              aria-label="Back to top"
            >
              <Arrow diagonal />
            </a>
          </div>
          <div className="contact-bottom">
            <p>
              Let’s talk about your systems, your concerns
              <br />
              and a clearer way forward.
            </p>
            <div>
              <CTA>Book a consultation</CTA>
              <span>30 minutes. A clearer perspective.</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
