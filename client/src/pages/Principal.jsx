import React from "react"
import style from "../components/principal.module.css"

export function Landing(){
    return (
        <div className={"container" + "" + style.FullWidth}>
            <div className="row">
                <div className={"text-bg-dark p-3"+" "+"col-sm-2 col-md-2 col-lg-2 col-xl-2 my-3"}>
                    hola
                </div>
                <div className={" col-sm-10 col-md-10 col-lg-10 col-xl-10 my-3"+" "+ style.back2}>
                    <div>
                        <h3>Peliculas ver y comprar peliculas en HD</h3>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}