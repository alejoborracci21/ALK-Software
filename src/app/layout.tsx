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
    <html lang="en" className={styles.html}>
      <head>
      </head>

      <body className={inter.className}>
        <nav className={styles.navbar}>
        <Link href={"/"} className={styles.link}>
            <button className={styles.button}>Inicio</button>
          </Link>
          <Link href={"/about"} className={styles.link}>
            <button className={styles.button}>Nosotros</button>
          </Link>
          <Link href={"/portfolio"} className={styles.link}>
            <button className={styles.button}>Portfolio</button>
          </Link>
          <Link href={"/contact"} className={styles.link}>
            <button className={styles.button}>Contacto</button>
          </Link>
        </nav>


        <div>{children}</div>

        <footer className={styles.footer}>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
