import React from 'react';
import styles from "./aboutpage.module.css"

const About = () => {
    return (
        <div className={styles.About__page}>
            <section className={styles.section1}>
                <h1>A brand built on the love of craftmanship,<br />
                quality and outstanding customer service
                </h1>
            </section>
            <section className={styles.section2}>
                <div className={styles.from__studio}>
                    <h1>From a studio in London to a global brand with <br />
                    over 400 outlets</h1>
                    <p>When we started Avion, the idea was simple. Make high quality furniture <br />
                         affordable and available for the mass market. </p>
                    <p>Handmade, and lovingly crafted furniture and homeware is what we live, <br /> breathe and design so our Chelsea boutique become the hotbed for the <br /> London interior design community.</p>
                </div>
                <div className={styles.studio__img}>

                </div>
            </section>
        </div>
    );
};

export default About;