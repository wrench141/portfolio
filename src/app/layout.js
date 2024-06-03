export const metadata = {
  title: "Dedsec.corp",
  description:
    "Dedsec, a digital agency for B2B companies, startups, brands to elevate their business over internet and attract new customers.",
};

import "../styles/App.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></Script>
      <Script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></Script>
    </html>
  )
}


  