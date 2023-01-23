import { useRef } from 'react';
import { useUpdateProduct } from '../hooks';

const EditProduct = ({ id, name, amount, description }) => {
  const nameRef = useRef(name);
  const amountRef = useRef(amount);
  const descRef = useRef(description);
  const updateProduct = useUpdateProduct();

  const getFormvalues = (e) => {
    e.preventDefault();
    const product = {
      name: nameRef.current.value,
      amount: amountRef.current.value,
      description: descRef.current.value,
    };
    updateProduct.mutate(...{id, ...product});
  }

  return (
      <form className='editProduct' onSubmit={getFormvalues}>
        <h3> Edit Product </h3>
        <label htmlFor="">
          Name:
        <input type="text" name="name" ref={nameRef} defaultValue={name} />
        </label>

        <label htmlFor="">
          Amount:
          <input type="text" name="amount" ref={amountRef}  defaultValue={amount}  />
        </label>

        <label htmlFor="">
           Description:
          <input type="text" name="description" ref={descRef} defaultValue={description} />
        </label>
        <button type='submit'>Edit</button>
      </form>
  )
}

export default EditProduct
