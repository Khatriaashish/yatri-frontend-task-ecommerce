import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider.store";
import { Sidebar } from "../components";
import { Toaster } from "react-hot-toast";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yatri Store",
  description: "Get your amazingly amazing products here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <head>
        <meta name="theme-color" content="#1e293b"></meta>
      </head>
      <body
        className={`${quicksand.className} antialiased bg-black text-white min-h-screen h-full w-full`}
        style={{
          background:
            "radial-gradient(circle at top left, #1e293b 0%, #000000 60%, #000 100%)",
          backgroundAttachment: "fixed",
        }}
      >
        <Providers>
          <Toaster
            toastOptions={{
              style: {
                background: "#1f2937", // Tailwind gray-800
                color: "#f3f4f6", // Tailwind gray-100
              },
            }}
          />
          <Sidebar />
          <main className="md:pl-[64px] w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
