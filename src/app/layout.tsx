import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.css";
import NextAuthSessionProvider from "@/component/providers/nextAuth";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mitthi",
  description: "Chit-Chat application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
}
