import React from 'react';
import styles from'./homepage.module.css'

const Home = () => {
    return (
        <div className={styles.homepage}>
            <div className="header">
                <div className={styles.homeImg}>

                </div>
            </div>
            <div className="main">
                <section className={styles.section1}>
                    <div className={styles.whatMakes__h1}>
                        <h1>What makes our brand different</h1>
                    </div>
                    <div className={styles.whatMakes__tabs}>
                        <div className={styles.next__day}>
                            <h1>Next day as standard</h1>
                            <p>Order before 3pm and get <br/>your order the next day as <br/>standard</p>
                        </div>
                        <div className={styles.made__by}>
                            <h1>Made by true artisans</h1>
                            <p>Handmade crafted goods <br />made with real passion and <br />craftmanship</p>
                        </div>
                        <div className={styles.unbeatble__prices}>
                            <h1>Unbeatable prices</h1>
                            <p>For our materials and quality <br />you won’t find better prices <br />anywhere</p>
                        </div>
                        <div className={styles.recycled__packaging}>
                            <h1>Recycled packaging</h1>
                            <p>We use 100% recycled to <br /> ensure our footprint is more <br /> manageable</p>
                        </div>
                    </div>
                </section>
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