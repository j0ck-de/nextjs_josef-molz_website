import "@/styles/globals.css";
import { Nunito_Sans, Amatic_SC, Martel_Sans } from "next/font/google";

import { Header } from "@/components/organisms";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});
const amaticSC = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-amatic-sc",
});
const martelSans = Martel_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-martel-sans",
});

export const metadata = {
  title: "Josef Molz - Website",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${amaticSC.variable} ${martelSans.variable} container debug-screens mx-auto px-4 `}
      >
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}
