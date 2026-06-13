import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | AstroMerchant",
    default: "AstroMerchant - Stellar Payment Gateway",
  },
  description:
    "Accept payments in XLM and other Stellar assets with AstroMerchant. A modern payment gateway built on the Stellar network.",
  keywords: ["stellar", "payments", "xlm", "crypto", "merchant", "gateway"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          {children}
          <Toaster
            richColors
            position="top-right"
            toastOptions={{
              duration: 4000,
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
