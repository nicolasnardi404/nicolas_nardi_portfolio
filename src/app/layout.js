import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Nicolas Nardi Portfolio",
  description: "Web Developer, Bio Gardener and Artist",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
