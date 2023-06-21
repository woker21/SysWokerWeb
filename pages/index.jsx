import Head from 'next/head';
import Link from 'next/link';
import Menu from './componentes/menu';
import Footer from './componentes/footer';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <title>SysWoker - Home</title>
    </Head>
    <Menu/>
    {/*Fin de Head y Menu*/}
    <section className={styles.container}>
      <h1>Inicio</h1>
    </section>

    <Footer/>
    </>
  )
}
