import type { Metadata } from "next";
import { Catamaran, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const catamaran = Catamaran({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-catamaran",
})

const noto_sans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans",
})

export const metadata: Metadata = {
  title: "PawBuddy",
  description: "Pet Care Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${catamaran.variable} ${noto_sans.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
