import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./globals.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALK-Software"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body className={inter.className}>
        <div className={styles.navbar}>
        <Link href={"/about"}><button>Nosotros</button></Link>
        <Link href={"/portfolio"}><button>Portfolio</button></Link>
        <Link href={"/contact"}><button>Contacto</button></Link>
      </div>
      
    <div>
      {children}
    </div>

      <footer>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
      </footer>
      </body>
    </html>
  );
}
