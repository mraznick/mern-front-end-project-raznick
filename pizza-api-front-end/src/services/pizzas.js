import { response } from "express";
import api from "./apiConfig.js"

export const getPizzas = () => {

  try {
    const response = await api.get("/pizzas");
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getPizza = async (id) => {
  try {
    const repsonse = await api.get(`/pizzas/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const bakePizza = async (pizza) => {
  try {
    const response = await api.post("/pizzas", pizza);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePizza = async (id, pizza) => {
  try {
    const response = await api.put(`/pizzas/${id}`, pizza)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePizza = async (id) => {
  try {
    const response = await api.get.delete(`/pizzas/${id}`)
    return response.data;
  } catch (error) {
    throw error;
  }
};


