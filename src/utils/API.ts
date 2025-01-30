import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const API = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const fetchProducts = async () => {
    try {
        const response = await API.get("/products");
        console.log("Fetch Products", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductById = async (id: number) => {
    try {
        const response = await API.get(`/products/${id}`);
        return response.data;
    }

    catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export default API;