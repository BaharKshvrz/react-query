import {  RemoveCircleRounded } from '@mui/icons-material';
import { useDeleteProduct } from '../hooks';

const RemoveProduct = ({id}) => {
  const remove = useDeleteProduct();
  return (
    <RemoveCircleRounded sx={{color: "red", cursor: "pointer"}} onClick={() => remove.mutate(id)}/>
  )
}

export default RemoveProduct
