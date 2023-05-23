import { fontOutfit } from '@/assets/fonts'
import appLogo from '../../assets/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className={`w-screen ${fontOutfit.className}`}>
      <div className="mt-24 bg-zinc-50 text-sm text-white">
        <div className="mx-auto flex w-4/6 items-start justify-between py-12 xs:flex-col xs:gap-12 lg:flex-row lg:gap-0">
          <div className="flex flex-col items-start gap-4 text-zinc-400">
            <Link href="/">
              <Image src={appLogo} alt="Paracord" className="w-24" />
            </Link>
            <span>A Paracord é um e-commerce.</span>
          </div>
          <div className="flex items-start gap-24 text-zinc-900">
            <div className="flex flex-col gap-4">
              <strong>LOJA</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="/">Home</Link>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <strong>SUPORTE</strong>
              <div className="flex flex-col gap-2 text-zinc-400">
                <Link href="tel:15981289156">15-98128-9156</Link>
                <Link href="/terms">Termos de uso</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 xs:items-start lg:items-end">
            <strong className="text-zinc-900">MÉTODOS DE PAGAMENTO</strong>
            <Image
              src="https://vinomundi.com.br/wp-content/uploads/2022/02/bandeira-de-cartoes-11.webp"
              alt="Payment methods"
              className="w-48"
              width={128}
              height={24}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto w-4/6 border-t border-zinc-300 bg-white py-4 text-center text-xs text-zinc-400">
        <span>Copyright &copy; Woogon. Todos os direitos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer
