import { NavLink } from "react-router-dom";
let steam = require('../images/steam.png')




const Menu = () => {
    return (
        <>
        <nav className="menu">
            <a className="logosteam" href=""><i class="fa-brands fa-steam-symbol"></i><span>Search</span></a>
            <ul>
                <li><NavLink to='../inicio'>Inicio</NavLink></li>
                <li><NavLink to='../servers'>Servicios</NavLink></li>
                <li><NavLink to='../usuario'>Portafolio</NavLink></li>
            </ul>
        </nav>
        </>
    );
}

export default Menu;