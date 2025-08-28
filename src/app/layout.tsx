import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/sidebar.component";

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
    <html lang="en">
      <body
        className={`${quicksand.className}  antialiased bg-black bg-gradient-to-br to-black via-black from-gray-800 text-white min-h-screen`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
