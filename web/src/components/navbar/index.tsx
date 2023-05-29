import Image from 'next/image'
import appLogo from '../../assets/logo.svg'
import Link from 'next/link'
import { ShoppingCart, Search, Menu, StarIcon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className="flex w-screen flex-col justify-center">
      <div className="w-screen border-b border-zinc-100 py-3 xs:text-sm lg:text-xs">
        <div className="mx-auto flex items-center justify-between xs:w-full xs:flex-col xs:gap-8 xs:px-6 lg:w-4/6 lg:flex-row lg:gap-0 lg:px-0">
          <div className="xs:text-center lg:text-start">
            <a href="#" className="underline">
              Inscreva-se
            </a>{' '}
            em nossa newsletter.
          </div>

          <Link href="/cart" className="flex items-center justify-center gap-2">
            <ShoppingCart size={16} />
            <span>
              R$ <strong>0</strong>
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto flex items-center justify-between py-6 xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
        <div className="flex items-center justify-center gap-24 font-semibold">
          <Link href="/">
            <Image src={appLogo} alt="Paracord" className="w-24" />
          </Link>

          <div className="items-center gap-12 xs:hidden lg:flex">
            <Link href="/products" className="font-semibold">
              Produtos
            </Link>
            <Link
              href="/products/new"
              className="flex items-center gap-1 font-semibold"
            >
              <span>Novos</span>
              <StarIcon size={12} color="#060606" fill="#ffff00" />
            </Link>
            <Link href="/products/categories" className="font-semibold">
              Categorias
            </Link>
          </div>
        </div>

        <div className="items-center justify-center xs:hidden lg:flex">
          <div className="relative flex h-10 w-56 items-center rounded-full bg-zinc-100">
            <input
              type="text"
              className="absolute left-0 w-full bg-transparent pl-4 pr-12 focus:outline-none"
              placeholder="Pesquisar..."
            />
            <Link
              href="/products"
              className="absolute right-0 flex h-10 w-10 items-center justify-center text-sm font-bold"
            >
              <Search size={16} />
            </Link>
          </div>
        </div>

        <Menu className="cursor-pointer xs:block lg:hidden" />
      </div>
    </nav>
  )
}

export default Navbar
