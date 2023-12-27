import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const apiUrl = process.env.API;

export const required = () => {
  axios
    .get(apiUrl)
    .then((response) => console.log(response.data))
    .catch((error) => console.log("Erro Encontrado", error()))
    .finally("O processo chegou no axios e aqui é o final do processo");
};
