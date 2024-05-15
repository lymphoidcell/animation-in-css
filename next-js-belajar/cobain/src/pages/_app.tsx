// fungsinya sama dengan main.jsx di react

import '@/styles/globals.css'
import type { AppProps } from "next/app";
import Navbar from "../components/layouts/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
