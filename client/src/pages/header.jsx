import React from "react"
import { Link } from "react-router-dom"

export function TopHeader(){
    return(
        <div >
            <nav class="navbar bg-dark">
                <div class="container-fluid">
                    <Link to="/" class="navbar-brand">Navbar</Link>
                    
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <Link to="/InicioSesion"> crear usuario</Link>
                </div>
            </nav>
        </div>
    )
}