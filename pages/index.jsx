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
    <a>
      <button>Contactanos</button>
    </a>
    </div>
    </div>

    <div className={styles.lotiPhone}>

    <Lottie animationData={AniPhone} loop={true} />
    </div>
      
    </section>
    <Footer/>
    </>
  )
}
