import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linktree",
  description: "This is a linktree created by mubashir ali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/pro-.jpg" sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

