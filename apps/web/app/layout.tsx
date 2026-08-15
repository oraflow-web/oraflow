import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OraFlow",
  description: "Stomatološki blog — zdravlje zuba za celu porodicu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
