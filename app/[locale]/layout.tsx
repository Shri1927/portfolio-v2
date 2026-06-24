import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
// NextIntl
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
//
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Shrishail Bidave",
  description:
    "Software Engineer skilled in Java, Node.js, React, Next.js, and building scalable systems with AI integrations.",
  icons: {
    icon: "/assets/favicon.ico",
  },
  // Facebook
  openGraph: {
    title: "Shrishail Bidave",
    description:
      "Software Engineer skilled in Java, Node.js, React, Next.js, and building scalable systems with AI integrations.",
    url: "https://example.com",
    // siteName: "Shrishail Bidave Portfolio",
    type: "website",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Preview image Shrishail Bidave Portfolio",
      },
    ],
  },
  // Twitter
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Shrishail Bidave",
    description:
      "Software Engineer skilled in Java, Node.js, React, Next.js, and building scalable systems with AI integrations.",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Preview image Shrishail Bidave Portfolio",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={ubuntu.className} id="root">{children}</body>
    </html></NextIntlClientProvider>
  );
}
