const url = "https://fakestoreapi.com/products";

export const traerData = async () => {
  try {
    const resp = await fetch(url);

    console.log();

    const data = await resp.json();

    return data;
  } catch (error) {
    return error;
  }
};
