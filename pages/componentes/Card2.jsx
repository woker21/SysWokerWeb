import styles from '../../styles/Card2.module.css'



const Card2 = ({image, title, parrafo, info}) => {
    return (
        <>
            <div className={styles.container}>
                
                <div className={styles.card}>

                    <img src={image} className={styles.card__img} alt="" />

                    <div className={styles.card__content}>
                        <div className={styles.card__data}>
                            <h1 className={styles.card__title}>{title}</h1>
                            <span className={styles.card__preci}>{parrafo}</span>
                            <p className={styles.card__description}>{info}</p>
                            <a href="/servicios" className={styles.card__button}>Mas Informacion</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card2;