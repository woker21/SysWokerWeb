import styles from '../../styles/Card2.module.css'



const Card2 = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>

                    <img src="https://fadzrinmadu.github.io/hosted-assets/product-card-ui-design-using-html-and-css/img.png" className={styles.card__img} alt="" />

                    <div className={styles.card__content}>
                        <div className={styles.card__data}>
                            <h1 className={styles.card__title}>Nike Air Jordan</h1>
                            <span className={styles.card__preci}>$99</span>
                            <p className={styles.card__description}>Nike Air Jordan Footwear basketball sneakers.</p>
                            <a href="#" className={styles.card__button}>Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card2;