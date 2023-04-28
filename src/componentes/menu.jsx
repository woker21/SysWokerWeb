import { NavLink } from "react-router-dom";
import  logoWoker from "../images/syswoker.png"




const Menu = () => {
    return (
        <>
        <nav className="menu">
           <div id="logoWoker">
            <img src={logoWoker} alt="Logo de SysWoker" />
           </div>
            <ul>
                <li><NavLink to='../inicio'>Inicio</NavLink></li>
                <li><NavLink to='../servers'>Servicios</NavLink></li>
                <li><NavLink to='../usuario'>Portafolio</NavLink></li>
                <li><NavLink to='../negocios'>Negocios</NavLink></li>
                <li><NavLink to='../usuario'>Desarrollo a Medida</NavLink></li>
            </ul>
        </nav>
        </>
    );
}

export default Menu;