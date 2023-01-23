import { deleteProduct, getAllProducts, getProdcut, updateProduct } from "../api";
import { useMutation, useQuery, useQueryClient } from "react-query";

const useAllProducts = () => {
   // return useQuery("products", getAllProducts);
    return useQuery("products", getAllProducts, {
        refetchOnWindowFocus: false,
    });
}

const useProduct = (id) => {
   return useQuery(['product', id], () => getProdcut(id))
}

const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation((id) => deleteProduct(id), {
        onSuccess: (_, id) => {
            // queryClient.invalidateQueries(['products'])
            // OR
            const products = queryClient.getQueryData("products");
            const data = products.filter(item => item.id !== id);
            queryClient.setQueryData("products", data);
        }
    });
    }

const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation(({ id, ...product }) => updateProduct({ id, ...product }), {
        onSuccess: (_, { id, ...product }) => {
            // queryClient.refetchQueries("products");
            // queryClient.refetchQueries(["product", id]);
            // OR
            const products = queryClient.getQueryData("products");
            const data = products.map(item => {
                if (item.id === id) {
                    return { ...item, ...product };
                }
                return item;
            });
            queryClient.setQueryData("products", data);
            queryClient.setQueryData(["product", id], {id, ...product});
        }
    });
 }
 
export {
    useAllProducts,
    useProduct,
    useUpdateProduct,
    useDeleteProduct
}