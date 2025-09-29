import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ACLED",
  description: "Clarity in Crisis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
