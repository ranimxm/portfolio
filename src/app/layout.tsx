import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "../components/header";

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
      <body>
        <Header />
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
