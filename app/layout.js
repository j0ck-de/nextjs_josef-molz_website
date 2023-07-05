import "@/styles/globals.css";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/molecules";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Josef Molz - Website",
  description: "Personal portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} debug-screens`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
