import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Yesterday</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Yesterday"/>
        <meta name="description" content="Trending News about Yesterday" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Yesterday</h1>
            <Image width={800} height={500} src="https://www.tsn.ca/polopoly_fs/1.1674278!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/ottawa-senators-give-head-coach-d-j-smith-two-year-extension-article-image-0.jpg" alt="Yesterday"/>
            <h3>Recent News</h3>
            <a href='https://www.tsn.ca/radio/ottawa-1200/smith-we-were-disappointed-with-ourselves-yesterday-1.1881076'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Smith: We were disappointed with ourselves yesterday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlnfYWbgiLrLNRkyW5ao1SVPD6PA0Xa2jVzGrvKnFtqpnQ8wN_LL8NRUMT534_Dh-ea1qi8Dsh" alt="Smith: We were disappointed with ourselves yesterday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>William Nylander scored two goals and John Tavares added a goal and two assists as the Maple Leafs beat the Sabres. Matt Murray made 32 saves to pick up the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}