import React from 'react'
import { useAllProducts } from '../hooks'

const ProductCount = () => {
  const { data, isLoading} = useAllProducts()
  return (
    <h1>Total Products: {isLoading ? "loading" : data.length }</h1>
  )
}

export default ProductCount
