import type { Metadata } from "next";
import { SolutionsPage } from "../components/solutions-page";
import { solutionsDescription, solutionsTitle } from "../lib/solutions-content";

export const metadata: Metadata = {
  title: `${solutionsTitle} | CorSentri`,
  description: solutionsDescription,
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: `${solutionsTitle} | CorSentri`,
    description: solutionsDescription,
  },
};

export default function Page() {
  return (
    <main id="main" className="inner-page page-solutions">
      <SolutionsPage />
    </main>
  );
}
