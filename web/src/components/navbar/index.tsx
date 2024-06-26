import Image from 'next/image'
import appLogo from '../../assets/logo.svg'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import NavbarSearch from '../navbar_search'
import NavbarCart from '../navbar_cart'
import { UserButton, auth, SignInButton } from '@clerk/nextjs'

const Navbar = async () => {
  const { userId } = auth()

  return (
    <nav className="flex w-screen flex-col justify-center">
      <div className="w-screen border-b border-zinc-100 py-3 xs:text-sm lg:text-xs">
        <div className="mx-auto flex items-center justify-end space-x-8 xs:w-full xs:flex-col xs:gap-8 xs:px-6 lg:w-4/6 lg:flex-row lg:gap-0 lg:px-0">
          {userId ? (
            <UserButton />
          ) : (
            <SignInButton afterSignInUrl="/" afterSignUpUrl="/" />
          )}
          <NavbarCart />
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
            {userId && (
              <Link href="/orders" className="font-semibold">
                Pedidos
              </Link>
            )}
          </div>
        </div>

        <div className="items-center justify-center xs:hidden lg:flex">
          <NavbarSearch />
        </div>

        <Menu className="cursor-pointer xs:block lg:hidden" />
      </div>
    </nav>
  )
}

export default Navbar
