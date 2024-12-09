import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/header";
import Blob from "@/components/blob";

export const metadata: Metadata = {
  title: "Home | Ranim Mohammad",
  description: "Home page for you and me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        <main className="overflow-hidden h-full w-full">
          <Blob />
          {children}
        </main>
      </body>
    </html>
  );
}
