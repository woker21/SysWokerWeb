import styles from '../../styles/Footer.module.css'


const Footer = () => {
    return (
        <>

            <div className={styles.mainFooter}>
                <div className={styles.cuadro}>
                    <div className={styles.cuadro1}>
                        <h1>cuadro</h1>
                    </div>
                </div>
                <h1 className={styles.footer}>Footer</h1>

            </div>
        </>
    );
}

export default Footer;