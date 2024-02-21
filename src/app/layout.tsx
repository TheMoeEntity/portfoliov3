import AppLayout from "../components/AppLayout";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const italiana = Poppins({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOE - Frontend Web Developer",
  description:
    "Portfolio page for Moses Chukwudi Nwigberi, a bad-ass web developer based in Lagos, Nigeria.",
  keywords:
    "Moe, Moses Chukwudi Nwigberi, Web Developer, Lagos, Ebonyi State, Nigeria",
  authors: [{ name: "Moses Chukwudi Nwigberi" }],
  creator: "Moses Chukwudi Nwigberi",
  applicationName: "Moe's Portfolio",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={italiana.className}>
        <AppLayout>{children}</AppLayout>
        <Script
          src="https://kit.fontawesome.com/4ef8c63dd7.js"
          crossOrigin="anonymous"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <Script
          id="bootstrap-cdn"
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        />
      </body>
    </html>
  );
}
