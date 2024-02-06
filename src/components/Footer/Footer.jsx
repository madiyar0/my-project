import React from 'react';
import styles from "./footer.module.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.section1}>
                <div className={styles.list}>
                    <div className={styles.Menu}>                   
                        <ul>
                            <li>Menu</li>
                            <li>New arrivals</li>
                            <li>Best sellers</li>
                            <li>Recently viewed</li>
                            <li>Popular this week</li>
                            <li>All products</li>
                        </ul>
                    </div>
                    <div className={styles.categories}>                  
                        <ul className={styles.ul_2}>
                            <li>Categories</li>
                            <li>Crockery</li>
                            <li>Furniture</li>
                            <li>Homeware</li>
                            <li>Plant pots</li>
                            <li>Chairs</li>
                            <li>Crockery</li>
                        </ul>
                    </div>
                    <div className={styles.company}>
                        <ul className={styles.ul_company}>
                            <li>Our company</li>
                            <li>About us</li>
                            <li>Vacancies</li>
                            <li>Contact us</li>
                            <li>Privacy</li>
                            <li>Returns policy</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.join}>
                    <p>Join our mailing list</p>
                    <TextField style={{
                        width: "550px",
                        background: "#b4b4b4",
                        opacity: "0.4"
                        
                        
                    }}
                    
                    InputLabelProps={{ 
                        style: { color: "white"}, 
                    }}
                    id="filled-basic" 
                    label="your@email.com" 
                    variant="filled" />
                    <Button style={{
                        height: "55px",
                        width: "120px",
                        border:"none",
                        background:"#fff",
                        borderRadius:"0",
                        color:"black"
                    }}
                    variant="outlined">Sing up</Button>
                </div>
            </div>
            <hr style={{
                width: "1340px",
                opacity: "0.2"
            }}/>
            <div className={styles.section2}>
                <div className={styles.copy}>
                    <p>Copyright 2022 Avion LTD</p>
                </div>
                <div styleName={styles.icons}>

                </div>
            </div>
        </div>
    );
};

export default Footer;