import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      style={{
        padding: "160px 24px 120px",
        textAlign: "center",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p className="eyebrow">
        <span /> Page Not Found
      </p>
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 56px)",
          letterSpacing: "-0.04em",
          margin: "24px 0",
        }}
      >
        Let’s find your way back.
      </h1>
      <p
        style={{
          maxWidth: "480px",
          color: "var(--color-sage)",
          marginBottom: "36px",
          lineHeight: 1.7,
        }}
      >
        This page isn’t available. Explore our cybersecurity monitoring on the
        homepage.
      </p>
      <Link href="/" className="cta">
        <span>Back to homepage</span>
      </Link>
    </main>
  );
}
