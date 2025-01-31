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
        const response = await fetch(`${API_URL}/products`, {
            cache: 'force-cache'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchProductById = async (id: string) => {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            cache: 'force-cache'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return null;
    }
};

export const fetchProductByCategory = async (category: string) => {
    try {
        const response = await fetch(`${API_URL}/products/category/${category}`, {
            cache: 'force-cache'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products by category:", error);
        return [];
    }
};

export default API;