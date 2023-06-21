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

                <div className={styles.container_redes}>
                    <button className={styles.btn_redes}>
                        <span>Redes Sociales</span>
                        <div class="container">
                            <a href="https://www.instagram.com/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/" target="_blank">
                                <i class="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.youtube.com/" target="_blank">
                                <i class="fa-brands fa-telegram"></i>
                            </a>
                        </div>
                    </button>
                </div>
            </div>

        </>
    );
}

export default Menu;