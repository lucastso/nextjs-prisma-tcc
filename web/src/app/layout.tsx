import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { fontOutfit } from '@/assets/fonts'
import { Providers } from '@/redux/provider'

export const metadata = {
  title: 'Paracord',
  description: 'E-commerce',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${fontOutfit.className} text-zinc-900 selection:bg-fuchsia-950 selection:text-fuchsia-400`}
      >
        <Providers>
          <main className="flex min-h-screen flex-col justify-between overflow-x-hidden">
            <Navbar />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
