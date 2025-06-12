import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import { Account } from "./creacion-cuenta.vm";
import { SubidaCuenta } from "./creacion-subida";

export const CreacionCuentaPage: React.FC = () => {

const [account, setAccount] = React.useState<Account>({ type: "", name: ""});
const [nombre, setNombre] = React.useState<string>("");
const [tipe, setType] = React.useState<string>("");

    const convertirCuenta = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        setAccount(
            {
            name : nombre,
            type : tipe
           }
        )

        SubidaCuenta(account)
    }

    return (
        <AppLayout> 
            <div>
               <h1>Movement List</h1> 
            </div>
            <form onSubmit={convertirCuenta}>
            <p>Tipo de cuenta:</p>
            <select name="tQuery" required onChange ={(f) => setType(f.target.value)} value={tipe}>
                <option value={"0"}>Escoge un tipo:</option>
                <option value={"1"}>Tipo 1</option>
                <option value={"2"}>Tipo 2</option>
                <option value={"3"}>Tipo 3</option>
            </select>
            <p>Alias:</p>
            <input name="nQuery" type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <button type="submit" value="">Guardar</button>
            </form>
        </AppLayout>
    )  
}