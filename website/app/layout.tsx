import { Montserrat } from "next/font/google"

import "./globals.css"

export const metadata = {
  title: 'Glyph Quest',
  description: 'Tresure Hunt',
}

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
  display: "swap", 
});

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  )
}
