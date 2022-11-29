import api from "../api";

export default {
  async getProducts() {
    const result = await api.get("/products");
    if (result.data.pruducts) {
      return result.data.products.map((e) => {
        return {
          image: "image",
          name: e,
          title,
          category: e.category,
          price: `R$ ${e.price},99`,
          createdAt: new Date().toLocaleDateString(),
          id: e.id,
        };
      });
    } else {
      return [];
    }
  },
};
