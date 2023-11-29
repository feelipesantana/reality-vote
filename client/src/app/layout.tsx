import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Aside } from "@/components/Aside";
import { AppProvider } from "@/providers";

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
      <AppProvider>
        <body
          className={`${inter.className} w-screen h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950`}
        >
          <div className="flex flex-col h-full">
            <header className="text-xl h-10 border border-gray-100/10 flex items-center justify-center text-gray-300 font-extrabold">
              Votação Reality
            </header>

            <div className="flex flex-1">
              <Aside />
              <main className="w-full">{children}</main>
            </div>
            <footer className="h-10 border border-gray-100/10 flex items-center justify-center text-xs text-gray-300 font-extrabold">
              Feito com ❤️ by Felipe Santana{" "}
            </footer>
          </div>
        </body>
      </AppProvider>
    </html>
  );
}
