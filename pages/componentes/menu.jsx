import Head from "next/head";
import Link from "next/link";


const Menu = () => {
    return (
        <>

        <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        </Head>
            <div id="menu" className="flex items-center bg-gray-800 text-white list-none justify-around">

                <div id="logo" className="">
                    <img src="https://woker21.github.io/Portafolio-Woker/images/logo.png" alt="" />
                </div>

                <nav id="navMenu" className="flex ">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/negocios">Negocio</Link>
                    </li>
                    <li>
                        <Link href="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link href="proyectos">Proyectos</Link>
                    </li>
                    <li>
                        <Link href="/contacto">Contacto</Link>
                    </li>
                </nav>

                <div>
                    <a href="https://www.instagram.com/" target="_blank">
                        <button >Redes Sociales</button>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Menu;