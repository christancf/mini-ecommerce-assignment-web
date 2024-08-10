import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/molecules/Navbar";

export const metadata: Metadata = {
  title: "MiniEcomm",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="pt-6 px-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
