import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/header";
import Bbb from "@/components/bb";
import { Footer } from "@/components/footer";

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
        <main className="overflow-hidden h-full w-full flex flex-col">
          {children}
        </main>
        <Bbb />
        <Footer />
      </body>
    </html>
  );
}
