import "./globals.css";
import Navbar from "../components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "David Koll | Full-stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="shortcut icon" href="/assets/DK_logo.png" />
      </Head> */}
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
