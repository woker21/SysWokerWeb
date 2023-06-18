import Head from 'next/head';
import Link from 'next/link';
import Menu from './componentes/menu';
import Footer from './componentes/footer';

export default function Home() {
  return (
    <>
    <Head>
      <title>SysWoker - Home</title>
    </Head>
    <Menu/>
    {/*Fin de Head y Menu*/}
    <h1>Inicio</h1>

    <Footer/>
    </>
  )
}
