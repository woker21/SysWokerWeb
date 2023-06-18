import Head from "next/head";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

const Contacto = () => {
    return ( 
        <>
        <Head>
            <title>Contacto SysWoker</title>
        </Head>
        <Menu/>
        {/*Fin de Head y Menu*/}

        
        <h1>Contacto</h1>

        <Footer/>
        </>
     );
}
 
export default Contacto;