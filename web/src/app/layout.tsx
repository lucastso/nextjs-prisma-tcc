import { ReactNode } from 'react'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { fontOutfit } from '@/assets/fonts'
import { Providers } from '@/redux/provider'
import { ClerkProvider } from '@clerk/nextjs'

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
          <ClerkProvider>
            <main className="flex min-h-screen flex-col justify-between overflow-x-hidden">
              {/* @ts-expect-error Server Component */}
              <Navbar />
              {children}
              <Footer />
            </main>
          </ClerkProvider>
        </Providers>
      </body>
    </html>
  )
}
