import { NavLink } from "react-router-dom";


const Menu = () => {
    return (
        <>
        <nav id="menu">
            <ul className="ul">
                <li className="li"><NavLink to='/inicio'>Inicio</NavLink></li>
                <li className="li"><NavLink to='./contacto'>Contacto</NavLink></li>
                <li className="li"><NavLink to='./servicios'>Servicios</NavLink></li>
            </ul>
        </nav>
        </>
    );
}
 
export default Menu;