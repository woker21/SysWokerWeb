import { Route, Routes } from "react-router-dom";
import Inicio from "./inicio";


const Rutas = () => {
    return ( <>
    <h1>Rutas</h1>
    
        <Routes>
            <Route path="/" element={<Inicio/>}/>
        </Routes>


    </> );
}
 
export default Rutas;