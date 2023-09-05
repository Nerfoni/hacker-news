import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/context/providers";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hacker News",
  description: "Hacker News Assignment",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="flex min-h-screen flex-col items-center px-10 py-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
