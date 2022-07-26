import api from "./apiConfig.js"

export const getPizzas = async () => {
  try {
    const response = await api.get("/all");
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getPizza = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bakePizza = async (pizza) => {
  try {
    const response = await api.post("/", pizza);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePizza = async (id, pizza) => {
  try {
    const response = await api.put(`/${id}`, pizza)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePizza = async (id) => {
  try {
    const response = await api.get.delete(`/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};


