import styles from '../../styles/Footer.module.css'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container1}>
                <div className={styles.titulos}>
                    <h1>Contactanos</h1>
                    <p>No te pierdas la oportunidad de darle <span>vida</span> a tu negocio</p>
                </div>
                <div className={styles.fila}>
                    <div className={styles.botones}>
                        <div>
                            <button><i class="fa-solid fa-mobile-screen-button"></i></button>
                            <p>+34 647562456</p>
                        </div>
                        <div>
                            <button><i class="fa-regular fa-envelope"></i></button>
                            <p>correo@gmail.com</p>
                        </div>
                        <div>
                            <button><i class="fa-brands fa-instagram"></i></button>
                            <p>SysWorker_Dev</p>
                        </div>
                    </div>
                    <div className={styles.info_asesoria}>
                        <h2>Asesoria Gratuita</h2>
                        <p>Tenemos sede en Santa Cruz de la Palma. Con soporte online a toda España y Venezuela</p>
                        <button className={styles.cssbuttons_io_button}> 
                            Contactanos
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div className={styles.triangulo}></div>
            </div>
            <div className={styles.container2}>
                <img src="https://res.cloudinary.com/dxaanvzjo/image/upload/v1687044613/logo2_gwdibu.png" alt="" />
                <div className={styles.info_container}>
                    <p>Correo@gmail.com</p>
                    <div>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-telegram"></i>
                    </div>
                    <p>Powered By SysWorker</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;