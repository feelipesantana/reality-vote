import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950`}
      >
        <div className="grid grid-cols-2 h-full">
          <header className="h-10 border border-gray-100/10 flex items-center justify-center text-gray-300 font-extrabold">
            Votação Reality
          </header>

          <div className="flex flex-1">
            <Aside />
            <main>{children}</main>
          </div>
        </div>
        <footer className="h-10">Footer</footer>
      </body>
    </html>
  );
}
