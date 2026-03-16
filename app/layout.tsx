import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PosadApp",
  description: "PosadApp - A Venezuelan inns app",
  keywords: ["PosadApp", "Venezuelan inns", "Inns app"],
  authors: [
    {
      name: "PosadApp",
      url: "https://posadapp.com",
    },
  ],
  openGraph: {
    title: "PosadApp",
    description: "PosadApp - A Venezuelan inns app",
    type: "website",
    locale: "es-ES",
    siteName: "PosadApp",
  },
  twitter: {
    title: "PosadApp",
    description: "PosadApp - A Venezuelan inns app",
    card: "summary_large_image",
    site: "@PosadApp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
