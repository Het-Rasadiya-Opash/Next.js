'use client'

import { useSearchParams } from "next/navigation"

const ProductsList = () => {
    const params=useSearchParams()
    console.log(params)

    const category=params.get('category')||'all';
    const sort=params.get('sort')||'default';
    const page=params.get('page')||'1';

  return (
    <div>
      showing {category} products, sorted by {sort}, page {page}
    </div>
  )
}

export default ProductsList
