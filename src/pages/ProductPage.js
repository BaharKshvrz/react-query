import React from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks'
import EditProduct from '../components/EditProduct';

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading } = useProduct(parseInt(id))
 
  if (isLoading) return <p> loading ... </p>;
  return (
    <div className='productDetail'>
      <table>
        <tbody>
        <tr>
          <td>Name:</td>
          <td>{data.name}</td>
        </tr>

        <tr>
          <td>Amount:</td>
          <td>{data.amount}</td>
        </tr>
        
        <tr>
          <td>Description:</td>
          <td>{data.description}</td>
      </tr>
        </tbody>
      </table>
      <EditProduct
        id={data.id}
        name={data.name}
        amount={data.amount}
        description={data.description}
      />
    </div>
  )
}

export default ProductPage
