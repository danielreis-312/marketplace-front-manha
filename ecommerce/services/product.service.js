import api from "../api";

export default {
  async getProducts() {
    const result = await api.get("/products");
    return result.data;
  },
  async getProduct(id) {
    const result = await api.get(`/products/${id}`);
    return result.data;
  },
  async createProduct(data) {
    const result = await api.post("/products", {
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      name: data.name,
      category: data.category,
      price: data.price,
      createdAt: new Date().toLocaleString(),
    });
    return result.data;
  },
  async updateProduct(data, id) {
    const result = await api.put(`/products/${id}`, {
      image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      name: data.name,
      category: data.category,
      price: data.price,
      createdAt: new Date().toLocaleString(),
    });
    return result.data;
  },
};
