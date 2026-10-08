import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Darakin Engineering",
    template: "%s | Darakin Engineering",
  },
  description:
    "Civil and structural engineering, infrastructure advisory, and technical project support for public and private sector clients.",
  icons: {
    icon: "/darakinLogo.png",
    shortcut: "/darakinLogo.png",
    apple: "/darakinLogo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[Lato,sans-serif]">
        <Header/>  
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
