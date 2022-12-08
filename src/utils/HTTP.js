import axios from "axios";
import {SERVER_URL} from "@/config/Properties";

let HTTP = axios.create({
    baseURL: SERVER_URL
});

export default HTTP;