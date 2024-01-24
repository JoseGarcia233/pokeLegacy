import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../app/globals.css'
import {Providers} from "./providers";
import NavB from "./components/NavB"
import Footer from "../app/components/Footer"



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon Legacy',
  description: 'App about pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
      <NavB />
      <Providers>
          {children}
      </Providers>

        <Footer />
        </body>
    </html>
  )
}
