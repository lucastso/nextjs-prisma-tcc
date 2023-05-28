import { ProductProps } from '@/types/product_props'
import { Star } from 'lucide-react'
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
  return (
    <Link
      className="col-span-1 flex w-full cursor-pointer flex-col gap-4"
      href={`/products/${id}`}
    >
      <div className="relative aspect-video">
        <Image
          src={image}
          alt=""
          width={512}
          height={256}
          className="aspect-video object-contain"
        />
        <span className="absolute left-2 top-2 rounded-full bg-orange-200/75 px-3 font-semibold text-orange-500">
          {category}
        </span>
      </div>

      <div className="flex flex-col items-start">
        <div className="flex w-full items-start justify-between">
          <span className="text-lg font-semibold">{title}</span>
          <span className="whitespace-nowrap">
            R$ <strong className="text-lg">{price}</strong>
          </span>
        </div>

        <div className="space-y-2">
          <span>
            {description.length > 15
              ? description.slice(0, 40).concat('...')
              : description}
          </span>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star size={16} fill="#808080" stroke="#808080" />
              <Star size={16} fill="#808080" stroke="#808080" />
              <Star size={16} fill="#808080" stroke="#808080" />
              <Star size={16} fill="#808080" stroke="#808080" />
              <Star size={16} stroke="#808080" />
            </div>
            <span>4</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductComponent
