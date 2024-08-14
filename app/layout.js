import { Inter } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BookProvider } from "./context/BookContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Books Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <BookProvider>
          {children}
        </BookProvider>
        <Footer />
      </body>
    </html>);
}
