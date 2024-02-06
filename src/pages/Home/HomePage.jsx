import React from 'react';
import styles from'./homepage.module.css'
import Main from '../../components/Main/Main';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div className={styles.homepage}>
            <div className="main">
                <section className={styles.section1}>
                    <div className={styles.the__furniture}>
                        <h1>The furniture brand for the <br /> future, with timeless designs</h1>
                        <button>View collection</button>
                        <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
                        with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
                        using modern web technologies.</p>
                    </div>  
                    <div className={styles.chair__img}>
                        <img src="./images/Photo.png" alt="" />
                    </div>
                </section>
                <Main />
                <section className={styles.section2}>
                        <h1 className={styles.h1}>New Ceramics</h1>
                    <div className={styles.new__ceramics}>
                        <div className={styles.dandy__chair}>
                            <img src="./images/Photo.png" alt="" />
                            <h1>The Dandy chair</h1>
                            <p>£250</p>
                        </div>
                        <div className={styles.rustic__vase}>
                            <img src="./images/rusticVase.png" alt="" />
                            <h1>Rustic Vase Set</h1>
                            <p>£155</p>
                        </div>
                        <div className={styles.silky__vase}>
                            <img src="./images/silkyVase.png" alt="" />
                            <h1>The Silky Vase</h1>
                            <p>£125</p>
                        </div>
                        <div className={styles.lucy__lamp}>
                            <img src="./images/lucyLamp.png" alt="" />
                            <h1>The Lucy Lamp</h1>
                            <p>£390</p>
                        </div>
                    </div>
                    <button className={styles.dandy__view}>View collection</button>
                </section>
                <section className={styles.section3}>
                    <div className={styles.it__started}>
                        <h1>It started with a small idea</h1>
                        <p>A global brand with local beginnings, our story begain in a <br /> small studio in South London in early 2014</p>
                        <button className={styles.started__collection}>View collection</button>
                    </div>
                    <div className={styles.room__img}>
                        <img src="./images/roomImg.png" alt="" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;