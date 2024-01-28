import React from 'react';
import styles from "./main.module.css"

const main = () => {
    return (
        <div className={styles.main}>
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
        </div>
    );
};

export default main;