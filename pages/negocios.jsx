import Head from "next/head";
import Menu from "./componentes/menu";

const Inicio = () => {
    return (
        <>
        <Head>
            <title>Negocios - SysWoker</title>
        </Head>

        <Menu/>
        {/*Fin de Head y Menu*/}


        <h1>Negocios</h1>
        </>
    );
}



export default Inicio;