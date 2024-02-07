const url = "https://fakestoreapi.com/products";

console.log(url);

export const traerData = async () => {
    try {
        const resp = await fetch(url)
        const data = await resp.json()

        return data;
    } catch (error) {

        return error;
    }
}