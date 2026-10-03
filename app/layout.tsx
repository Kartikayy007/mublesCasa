import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });
const sans = DM_Sans({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Muebles Casa | Hospitality Furniture",
  description: "Bespoke furniture for hotels, resorts and restaurants.",
  icons: { icon: "/assets/logo.JPG", apple: "/assets/logo.JPG" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className={`${display.variable} ${sans.variable}`}><body>{children}</body></html>;
}
