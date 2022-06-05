import React from "react"
import style from "../components/InicioSesion.module.css"

export function InicioSesion(){
    return (
        <div className={"d-flex flex-column align-items-center mb-3 p-2"}>
            <div className={"p-2"+" "+style.minwidthborder}>
                <h1>crud app</h1>
                <div className="d-flex flex-column mb-3">
                    <label htmlFor="">correo</label>
                    <input type="text" placeholder="correo"/>
                    <label htmlFor="">nombre</label>
                    <input type="text" placeholder="nombre"/>
                    <label htmlFor="">contraseña</label>
                    <input type="text" placeholder="contraseña"/>
                    <button className={style.buttonre}>add user</button>
                </div>
            </div>
            
        </div>
    )
}