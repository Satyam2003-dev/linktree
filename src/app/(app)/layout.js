import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Linktree",
  description: "Linktree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Link Tree</title>
      </head>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
