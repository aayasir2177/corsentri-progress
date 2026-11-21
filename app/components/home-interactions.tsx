"use client";
import { ResponsiveImage } from "./responsive-image";
import { useState, useRef } from "react";
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
const services = [
  [
    "Continuous monitoring",
    "Always on. Always watching.",
    "We collect and watch activity from your critical systems 24/7/365. Before monitoring starts, we confirm exactly which systems are covered, so there are no gaps or surprises.",
  ],
  [
    "Threat detection",
    "Small signals. A clearer picture.",
    "AI-enabled technology looks for activity that doesn’t fit, like a sign-in from an unusual location at 2 a.m. Our security team reviews what it flags and connects related events so they’re assessed together.",
  ],
  [
    "Alerts & escalation",
    "The right people. The right context.",
    "When something needs attention, you get an alert with context: what happened, why it matters and the recommended next step. Notification channels and response responsibilities are agreed as part of your service.",
  ],
  [
    "Reporting & guidance",
    "Clarity you can act on.",
    "Clear reports in plain English summarize what was seen, what it meant and practical ways to strengthen your security.",
  ],
];
const steps = [
  [
    "Connect & configure",
    "We confirm what’s covered, set up access and choose who gets notified, then tune monitoring to how your organization normally works.",
  ],
  [
    "Monitor activity",
    "Activity across your systems is watched 24/7/365 for signs of suspicious behavior.",
  ],
  [
    "Analyze & review",
    "AI-enabled technology analyzes unusual activity. Our security team reviews it to separate real concerns from routine noise.",
  ],
  [
    "Notify & escalate",
    "You’re told what happened, why it matters and the recommended next step, through the contacts and channels you chose.",
  ],
  [
    "Report & improve",
    "Reports show patterns over time and practical ways to strengthen your security.",
  ],
];

export function ServiceAccordion() {
  const [active, setActive] = useState(0);
  return (
    <div className="solutions-layout">
      <div className="service-art" data-reveal>
        <div className={`radar radar-${active}`} aria-hidden="true">
          <div className="radar-sweep" />
          <i />
          <i />
          <i />
          <ResponsiveImage
            width={120}
            height={120}
            src="/brand/white-logomark.svg"
            alt=""
          />
          <b className="radar-point p1" />
          <b className="radar-point p2" />
          <b className="radar-point p3" />
        </div>
        <div className="service-art-bottom">
          <span>0{active + 1} / 04</span>
          <p>{services[active][1]}</p>
          <span>THE CORSENTRI APPROACH</span>
        </div>
      </div>
      <div className="service-list">
        {services.map(([title, , body], i) => (
          <div
            key={title}
            className={`service ${active === i ? "active" : ""}`}
          >
            <button
              aria-expanded={active === i}
              aria-controls={`service-${i}`}
              onClick={() => setActive(i)}
            >
              <span className="number">0{i + 1}</span>
              <h3>{title}</h3>
              <span className="plus">{active === i ? "−" : "+"}</span>
            </button>
            <div id={`service-${i}`} hidden={active !== i}>
              <p>{body}</p>
            </div>
          </div>
        ))}
        <a
          className="text-link"
          href="#"
          onClick={(e) => e.preventDefault()}
        >
          Explore our solutions <Arrow diagonal />
        </a>
      </div>
    </div>
  );
}
export function ProcessTabs() {
  const [step, setStep] = useState(0);
  const book = "#";
  return (
    <>
      {" "}
      <div
        className="process-tabs"
        role="tablist"
        aria-label="Monitoring process"
      >
        {steps.map(([title], i) => (
          <button
            key={title}
            id={`step-tab-${i}`}
            role="tab"
            aria-selected={step === i}
            aria-controls={`step-panel-${i}`}
            tabIndex={step === i ? 0 : -1}
            onClick={() => setStep(i)}
            onKeyDown={(e) => {
              let next = step;
              if (e.key === "ArrowRight") next = (step + 1) % 5;
              else if (e.key === "ArrowLeft") next = (step + 4) % 5;
              else if (e.key === "Home") next = 0;
              else if (e.key === "End") next = 4;
              else return;
              e.preventDefault();
              setStep(next);
              document.getElementById(`step-tab-${next}`)?.focus();
            }}
          >
            <span>0{i + 1}</span>
            <span>{title}</span>
            <Arrow diagonal />
          </button>
        ))}
      </div>
      <div
        className="process-detail"
        id={`step-panel-${step}`}
        role="tabpanel"
        aria-labelledby={`step-tab-${step}`}
        tabIndex={0}
      >
        <span className="process-num">0{step + 1}</span>
        <div key={step}>
          <h3>{steps[step][0]}</h3>
          <p>{steps[step][1]}</p>
        </div>
        <a
          className="round-link"
          href={book}
          onClick={(e) => e.preventDefault()}
          aria-label="Book a consultation"
        >
          <Arrow diagonal />
        </a>
      </div>
    </>
  );
}
export function HeroMotion({ children }: { children: React.ReactNode }) {
  const hero = useRef<HTMLElement>(null);
  return (
    <section
      className="hero"
      ref={hero}
      onPointerMove={(e) => {
        if (
          e.pointerType !== "mouse" ||
          window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
          return;
        const r = e.currentTarget.getBoundingClientRect();
        hero.current?.style.setProperty(
          "--mx",
          `${(e.clientX - r.left - r.width / 2) * 0.018}px`,
        );
        hero.current?.style.setProperty(
          "--my",
          `${(e.clientY - r.top - r.height / 2) * 0.018}px`,
        );
      }}
    >
      {children}
    </section>
  );
}
