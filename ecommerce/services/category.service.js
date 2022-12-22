import api from "../api";

export default {
  async getCategories() {
    const result = await api.get("/categories");
    return result.data;
  },
};
