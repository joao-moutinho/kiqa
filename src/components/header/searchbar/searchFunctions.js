import axios from "axios";

export const searchFetch = async (searchRegex) =>
await axios
    .get(
      `https://kiqa-be.herokuapp.com/products/search?name=${searchRegex}&page=0&size=10`
    )
    .then((res) => res.data);
