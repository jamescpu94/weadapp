import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CityList from "./(components)/CityList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weadapp",
  description: "Weather App by James Udani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
