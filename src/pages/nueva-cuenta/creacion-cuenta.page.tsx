import { AppLayout } from "@/layouts/app/app-layout";
import React from "react";
import { Account } from "./creacion-cuenta.vm";
import { SubidaCuenta } from "./api/creacion-subida";
import classes from "../nueva-cuenta/creacion-cuenta.page.module.css"


export const CreacionCuentaPage: React.FC = () => {

const [account, setAccount] = React.useState<Account>({ type: "", name: ""});


    const convertirCuenta = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        SubidaCuenta(account)
    }

    return (
        <AppLayout> 
            <div className={classes.headerContainer}>
               <h1 className={classes.headerText}>Movement List</h1> 
            </div>
            <form onSubmit={convertirCuenta} className={classes.formContainer}>
               <div>
                 <div className={classes.formElement}>
                    <p>Tipo de cuenta:</p>
                    <select name="tQuery" className={classes.formSelect} required onChange ={(f) => setAccount({...account, type: f.target.value})} value={account.type}>
                        <option value={"0"}>Escoge un tipo:</option>
                        <option value={"1"}>Tipo 1</option>
                        <option value={"2"}>Tipo 2</option>
                        <option value={"3"}>Tipo 3</option>
                    </select>
                </div>
                <div className={classes.formElement}>
                    <p>Alias:</p>
                    <input name="nQuery" type="text" onChange={(e) => setAccount({...account, name: e.target.value})} value={account.name}/>
                </div>
            </div>
            <button type="submit" value="">Guardar</button>
            </form>
        </AppLayout>
    )  
}