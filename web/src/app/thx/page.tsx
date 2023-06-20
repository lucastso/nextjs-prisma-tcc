import { Check } from 'lucide-react'
import Link from 'next/link'

export default function Thx() {
  return (
    <div className="mx-auto mb-auto mt-8 overflow-x-hidden xs:w-full xs:px-6 lg:w-4/6 lg:px-0">
      <span className="mb-4 flex items-center gap-1 text-xl font-semibold">
        Compra concluída! <Check size={16} />
      </span>
      <span>
        Obrigado por comprar, logo você terá seus produtos em sua casa. Você
        pode{' '}
        <Link href="/" className="font-semibold underline">
          voltar para o início
        </Link>{' '}
        agora.
      </span>
    </div>
  )
}
