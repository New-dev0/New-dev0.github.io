import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ryan Giggs</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ryan Giggs"/>
        <meta name="description" content="Trending News about Ryan Giggs" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ryan Giggs</h1>
            <Image width={800} height={500} src="https://i2-prod.walesonline.co.uk/incoming/article25520173.ece/ALTERNATES/s1200/1_Ryan-Giggs-File-Photo.jpg" alt="Ryan Giggs"/>
            <h3>Recent News</h3>
            <a href='https://www.walesonline.co.uk/sport/football/latest-ryan-giggs-man-who-25520149'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The latest on Ryan Giggs, the man who could have been leading ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQSXmAhMlD59Q5S_rRgdXUL8gvYACiLvwT2Ons7HHf1fyV5E3JpBOrvtJwt6T3qBQzN84q6nxw5" alt="The latest on Ryan Giggs, the man who could have been leading ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Manchester United legend led Wales to Euro 2020 but is no longer Wales manager.</p></div>
            </div>
        </a><a href='https://www.the-sun.com/sport/2989978/ryan-giggs-not-wales-manager-world-cup-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why is Ryan Giggs not Wales manager at the 2022 World Cup?...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ49rVU9VcEPzVzRVvKROeZD4ePuFlqd87mK_Ml9w3C1Vw5l2fyXAvcB_d-IQsIUtgmF_Hubsnt" alt="Why is Ryan Giggs not Wales manager at the 2022 World Cup?..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WALES will be looking to impress at the World Cup, when they take on the United States in the opener - but Ryan Giggs&#39; managerial tenure is a distant.</p></div>
            </div>
        </a>
        </Template></>;
}