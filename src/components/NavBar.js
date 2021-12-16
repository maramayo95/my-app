import React from 'react'

function NavBar() {
    return (
        <div>
            <header>
            
            <nav className ="navBar">
               <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Anime</a></li>
                    <li><a href="#">Series</a></li>
                    <li><a href="#">Contacto</a></li>
               </ul>

            </nav>

                <div className="header-text">
                <h1>Tokyo Spirits</h1>
                <p>Bienvenidos a la página de Tokyo Spirits</p>
                </div>
            
            <div className="gradient">
            </div>
            </header>
        </div>
    )
}

export default NavBar
