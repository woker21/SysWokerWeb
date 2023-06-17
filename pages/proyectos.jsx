import Head from "next/head";
import Menu from "./componentes/menu";

const Proyectos = () => {
    return ( 
        <>
        <Head>
            <title>Proyectos - SysWoker</title>
        </Head>

        <Menu/>
        {/*Fin de Head y Menu*/}

        <h1>Proyectos</h1>
        </>
     );
}
 
export default Proyectos;