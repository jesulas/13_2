import axios from "axios";
import { Account } from "../creacion-cuenta.vm";

export const SubidaCuenta = (cuenta: Account) => {
axios.post("http://localhost:3000/api/account-list", cuenta)
.then((response) => {
    console.log(response.data)
})
.catch((error) => {
    console.log(error)
})
}