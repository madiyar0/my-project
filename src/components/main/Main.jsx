import React from 'react';
import styles from "./main.module.css"
import TextField from '@mui/material/TextField';

const main = () => {
    return (
        <div className={styles.main}>
            <section className={styles.section__whatMakes}>
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
            <section className={styles.join__the_club}>
                <div className={styles.join__sing__up}>
                    <h1>Join the club and get the benefits</h1>
                    <p>Sign up for our newsletter and receive exclusive offers on new <br /> ranges, sales, pop up stores and more</p>
                    <TextField id="filled-basic" label="your@email.com" variant="filled" />
                    <button>Sing up</button>
                </div>
            </section>
        </div>
    );
};

export default main;