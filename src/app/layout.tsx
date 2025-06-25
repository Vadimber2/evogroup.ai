import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  display: 'swap',
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "ФискалеПро - ИИ-решения для бизнеса и государственного сектора",
  description: "ИИ-центричная IT-компания, специализирующаяся на разработке комплексных цифровых решений для банков, нефтеперерабатывающих компаний и государственного сектора Кыргызской Республики",
  keywords: ["искусственный интеллект", "API интеграция", "банковские решения", "автоматизация", "Кыргызстан", "ИИ", "финтех"],
  authors: [{ name: "ФискалеПро" }],
  openGraph: {
    title: "ФискалеПро - ИИ-решения для enterprise",
    description: "Комплексные ИИ-решения для банков и промышленности Кыргызстана",
    type: "website",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "ФискалеПро - ИИ-решения для enterprise",
    description: "Комплексные ИИ-решения для банков и промышленности Кыргызстана",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-inter antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
