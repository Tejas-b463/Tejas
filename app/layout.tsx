import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const SpaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  
  metadataBase: new URL("http://localhost:3000"),

  icons:{
    icon:'/favicon.svg'
  },

  title: "Tejas Banait - Software Developer",
  authors: {
    name: "tejas",
  },

  description:
    "Based in India, I'm a Full Stack developer passionate about building a modern web application that users love",
  openGraph: {
    title: "tejas",
    description:
      "Based in India, I'm a Full Stack developer passionate about building a modern web application that users love",
    url: "http://localhost:3000",
    siteName: "tejas",
    images: "/og.png",
    type: "website",
  },
  keywords: ["tejas banait", "tejas", "tejasbanait"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={SpaceGrotesk.className}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
