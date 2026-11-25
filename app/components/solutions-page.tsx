import Link from "next/link";
import { ResponsiveImage } from "./responsive-image";
import {
  Arrow,
  Button,
  Closing,
  FAQs,
  Label,
  NumberedList,
  PageHero,
} from "./ui";
import {
  solutionServices,
  solutionsDescription,
  solutionsFAQs,
  solutionsSteps,
} from "../lib/solutions-content";

function StandardActions() {
  return (
    <>
      <Button>Book a consultation</Button>
      <Link className="text-link" href="/free-risk-assessment">
        Free risk assessment <Arrow />
      </Link>
    </>
  );
}

function Signals() {
  return (
    <div className="signal-sculpture" aria-hidden="true">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <ResponsiveImage
        width={120}
        height={120}
        src="/brand/white-logomark.svg"
        alt=""
      />
      <span>24 / 7 / 365</span>
    </div>
  );
}

export function SolutionsPage() {
  return (
    <>
      <PageHero
        label="Solutions"
        title={
          <>
            Cybersecurity monitoring.
            <br />
            <em>Confidence, around the clock.</em>
          </>
        }
        description={solutionsDescription}
        variant="solutions-hero"
      >
        <StandardActions />
      </PageHero>

      <section className="solution-intro section">
        <div data-reveal>
          <Label>What’s included</Label>
          <h2>
            Four services.
            <br />
            <span className="sage-text">One team.</span>
          </h2>
          <p>Each part of the service, and exactly what it covers.</p>
          <div className="service-jumps">
            {solutionServices.map((service, index) => (
              <a
                href={`#service-detail-${index}`}
                key={service.title}
              >
                <small>0{index + 1}</small>
                {service.title}
                <Arrow />
              </a>
            ))}
          </div>
        </div>
        <Signals />
      </section>

      <section className="service-details section">
        {solutionServices.map((service, index) => (
          <article
            className="service-detail"
            id={`service-detail-${index}`}
            key={service.title}
            data-reveal
          >
            <span className="large-index">0{index + 1}</span>
            <div>
              <Label>
                {
                  [
                    "Always watching",
                    "Signals into insight",
                    "Context into action",
                    "A clearer picture",
                  ][index]
                }
              </Label>
              <h2>{service.title}</h2>
              <p className="service-subtitle">{service.subtitle}</p>
            </div>
            <ul>
              {service.items.map((item) => (
                <li key={item}>
                  <span>↗</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="technology-panel section">
        <div data-reveal>
          <Label>Technology and people</Label>
          <h2>
            AI spots the signals.
            <br />
            <span>
              Our team confirms
              <br />
              what matters.
            </span>
          </h2>
          <p>
            AI-enabled technology flags what looks unusual. Our security team
            adds context and tells you what needs attention.
          </p>
        </div>
        <div
          className="signal-flow"
          aria-label="AI flags unusual activity, our security team reviews it, and you receive context and next steps"
        >
          <div>
            <span>01 / TECHNOLOGY</span>
            <h3>Unusual activity</h3>
            <p>Signal detected</p>
            <i />
          </div>
          <b>↓</b>
          <div>
            <span>02 / HUMAN REVIEW</span>
            <h3>Context added</h3>
            <p>Reviewed by our security team</p>
            <i />
          </div>
          <b>↓</b>
          <div>
            <span>03 / CLEAR COMMUNICATION</span>
            <h3>Your next step</h3>
            <p>What happened. Why it matters.</p>
            <Arrow />
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div data-reveal>
          <Label>How it works</Label>
          <h2>
            From setup to
            <br />
            ongoing monitoring.
          </h2>
        </div>
        <NumberedList items={solutionsSteps} />
      </section>

      <FAQs items={solutionsFAQs} />
      <Closing />
    </>
  );
}
