import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(DEV) Signs App",
  description: "(DEV) Modernized signs app for the Greek Driving Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
