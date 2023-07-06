import Head from 'next/head';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import Lottie from "lottie-react";
import AniPhone from '../images/phone.json';
import styles from '../styles/Inicio.module.css'

export default function Home() {
  


  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <title>SysWoker - Home</title>
    </Head>
    <Menu/>
    {/*Fin de Head y Menu*/}
    <section className={styles.containerSeccion}>

    <div className={styles.contenido}>
    <div>
    <h1>Diseñamos tus ideas y <br/> tus Negocios</h1>

    <h3>un servicio totalmente <span>PERSONALIZADO</span>
    <br /> 
    donde planificaremos la marca de tu <br /> Emprendimiento
    </h3>
    <button className={styles.cssbuttons_io_button}> 
                            Contactanos
                            <div className={styles.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                            </div>
                        </button>
    </div>
    </div>

    <div className={styles.lotiPhone}>

    <Lottie className={styles.phone1} animationData={AniPhone} loop={true} />

    <div className={styles.detras}>
      <div className={styles.detras1}>

      </div>
    </div>

    </div>
      
    </section>
    <Footer/>
    </>
  )
}
