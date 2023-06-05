import { ProductProps } from '@/types/product_props'
import Image from 'next/image'
import Link from 'next/link'

const ProductComponent = ({
  id,
  title,
  description,
  price,
  image,
  category,
}: ProductProps) => {
  const formatToPrice = (number: number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }

  return (
    <div className="col-span-1 flex w-full flex-col gap-4">
      <Link
        className="relative aspect-video overflow-hidden"
        href={`/products/${id}`}
        title={title}
      >
        <Image
          src={image}
          alt=""
          width={512}
          height={256}
          className="aspect-video object-contain transition-all hover:scale-110"
        />
        <span className="absolute left-2 top-2 rounded-full bg-fuchsia-200/75 px-3 font-semibold text-fuchsia-500">
          {category}
        </span>
      </Link>

      <div className="flex flex-col items-start">
        <div className="flex w-full items-start justify-between gap-2">
          <Link
            href={`/products/${id}`}
            className="text-lg font-semibold"
            title={title}
          >
            {title}
          </Link>
          <span className="whitespace-nowrap">
            R$ <strong className="text-lg">{formatToPrice(price)}</strong>
          </span>
        </div>

        <span>
          {description.length > 16
            ? description.slice(0, 44).concat('...')
            : description}
        </span>
      </div>
    </div>
  )
}

export default ProductComponent
