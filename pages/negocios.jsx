import Head from "next/head";
import Menu from "./componentes/menu";
import Footer from "./componentes/footer";

const Inicio = () => {
    return (
        <>
        <Head>
            <title>Negocios - SysWoker</title>
        </Head>

        <Menu/>
        {/*Fin de Head y Menu*/}


        <h1>Negocios</h1>

        <Footer/>
        </>
    );
}



export default Inicio;