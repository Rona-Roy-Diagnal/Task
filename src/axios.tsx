import axios from "axios";
import { baseUrl } from "./Constant/Constants";

const instance =axios.create({
    baseURL:baseUrl
})

export default instance;