import type { Metadata } from "next";
import "@/styles/globals.css";
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
        <main className="overflow-hidden h-full w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
