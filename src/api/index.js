import axios from "axios";

const client = axios.create({
    baseURL: `http://localhost:3500`
});

const getAllProducts = async () => {
    const { data } = await client.get("products");
    return data;
};

const getProdcut = async (id) => {
    const { data } = await client.get(`products/${id}`)
    return data
}

const createProduct = async ({ name, description, amount }) => {
    const product = { name, description, amount }
    const { data } = await client.post("products", product);
    return data;
}

const updateProduct = async ({ id, ...product } ) => {
    const { data } = await client.put(`products/${id}`, product);
    return data;
}

const deleteProduct = async (id) => {
    const { data } = await client.delete(`products/${id}`);
    return data;
}

export {
    getAllProducts,
    getProdcut,
    createProduct, 
    updateProduct,
    deleteProduct
}