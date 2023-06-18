import Head from "next/head";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

const Proyectos = () => {
    return ( 
        <>
        <Head>
            <title>Proyectos - SysWoker</title>
        </Head>

        <Menu/>
        {/*Fin de Head y Menu*/}

        <h1>Proyectos</h1>

        <Footer/>
        </>
     );
}
 
export default Proyectos;