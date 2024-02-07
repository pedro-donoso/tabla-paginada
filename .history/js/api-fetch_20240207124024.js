const url = "https://fakestoreapi.com/products";

export const traerData = async () => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
