import Head from "next/head";
import Link from "next/link";
import styles from '../../styles/Menu.module.css'




const Menu = () => {
    return (
        <>

        <Head>
        <link rel="stylesheet" href="../css/menu.css" />
        </Head>
        
            <div id="menu" className={styles.menu}>

                <div id="logo" className={styles.logo}>
                    <img className={styles.icon} src="https://res.cloudinary.com/dxaanvzjo/image/upload/v1687044613/logo2_gwdibu.png" alt="" />
                </div>

                <nav id="navMenu" className={styles.navMenu}>
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

                <div className={styles.redes}>
                    <a  href="https://www.instagram.com/" target="_blank">
                        <button className={styles.btnRedes}>Redes Sociales</button>
                    </a>
                </div>
            </div>

        </>
    );
}

export default Menu;