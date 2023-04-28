import { Routes,Route } from "react-router-dom";
import Servicios from "./servers";
import Home from "./inicio";
import Portafolio from "./usuarios";
import Negocio from "./negocio";
import DesarrolloMedida from "./desarrollo";



function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home/>}/>
            <Route path='/servers' element={<Servicios />}/>
            <Route path='/usuario' element={<Portafolio />}/>
            <Route path='/negocios' element={<Negocio />}/>
            <Route path='/desarrollo' element={<DesarrolloMedida />}/>
        </Routes>
    );
}


export default Rutas;