import Head from "next/head";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

const Servicios = () => {
    return ( 
        <>
        <Head>
            <title>Servicios - SysWoker</title>
        </Head>
        <Menu/>
        {/*Fin de Head y Menu*/}


        <h1>Servicios</h1>

        <Footer/>
        </>
     );
}
 
export default Servicios;