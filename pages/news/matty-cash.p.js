import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matty Cash</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matty Cash"/>
        <meta name="description" content="Trending News about Matty Cash" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matty Cash</h1>
            <Image width={800} height={500} src="https://i2-prod.birminghammail.co.uk/incoming/article25670885.ece/ALTERNATES/s1200/0_France-v-Poland-Round-of-16-FIFA-World-Cup-Qatar-2022.jpg" alt="Matty Cash"/>
            <h3>Recent News</h3>
            <a href='https://www.birminghammail.co.uk/sport/football/football-news/matty-cash-poland-france-mbappe-25540178'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Explained: Why Matty Cash is playing for Poland at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTxmzqYVvxFyThplLCEBjVwm_pjThO6MXw0kJjoxGzL5F4EwdYciFZKnsmfrUI3xy4gp2me-Ljk" alt="Explained: Why Matty Cash is playing for Poland at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aston Villa news as BirminghamLive explains why Matty Cash is representing Poland in the 2022 Qatar World Cup.</p></div>
            </div>
        </a>
        </Template></>;
}