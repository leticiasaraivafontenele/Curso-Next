import { Inter } from "next/font/google";
import "./globals.css";
import MainContainer from "@/components/MainContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Generated by create next app",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel='icon' href="/favicon.ico"/>
      </head>
      <body className={inter.className}>
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}