import { Routes,Route } from "react-router-dom";
import Servicios from "./servers";
import Home from "./inicio";
import Portafolio from "./usuarios";



function Rutas(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/inicio' element={<Home/>}/>
            <Route path='/servers' element={<Servicios />}/>
            <Route path='/usuario' element={<Portafolio />}/>
        </Routes>
    );
}


export default Rutas;