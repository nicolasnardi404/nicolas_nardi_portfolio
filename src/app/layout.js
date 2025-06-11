import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nicolas Nardi Portfolio",
  description: "Web Developer, Bio Gardener and Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
