import React, { useState } from "react"
import style from "../components/InicioSesion.module.css"

export function InicioSesion(){
    const [email, setemail] = useState('');
    const [name, setname] = useState('');
    const [pass, setpass] = useState('');
    
    const addToList = () => {
        console.log(email + name+ pass)
    }

    return (
        <div className={"d-flex flex-column align-items-center mb-3 p-2"}>
            <div className={"p-2"+" "+style.minwidthborder}>
                <h1>crud app</h1>
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="">correo</label>
                    <input type="text" placeholder="correo" 
                    onChange={(e) => {
                        setemail(e.target.value);
                    }}/>
                    <label htmlFor="">nombre</label>
                    <input type="text" placeholder="nombre"
                    onChange={(e) => {
                        setname(e.target.value);
                    }}/>
                    <label htmlFor="">contraseña</label>
                    <input type="text" placeholder="contraseña" 
                    onChange={(e) => {
                        setpass(e.target.value);
                    }}/>
                    <button onClick={addToList} className={style.buttonre}>add user</button>
                </div>
            </div>
            
        </div>
    )
}