import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Marcus Thuram</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Marcus Thuram"/>
        <meta name="description" content="Trending News about Marcus Thuram" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Marcus Thuram</h1>
            <Image width={800} height={500} src="https://premierleaguebrasil.com.br/wp-content/uploads/2022/11/5287812622120375.webp" alt="Marcus Thuram"/>
            <h3>Recent News</h3>
            <a href='https://premierleaguebrasil.com.br/clube-espanhol-se-informa-por-marcus-thuram/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clube espanhol se informa por Marcus Thuram - Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTyWQsA13S77s0x4Yv5z0mQddjoekXJJmjAjTxQibqzmmU3lebIvS1x0YSsLcpQFBLPnlTrnVC7" alt="Clube espanhol se informa por Marcus Thuram - Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Um dos jogadores de maior presença de área na Bundesliga, o atacante francês Marcus Thuram, segue com clubes de olho em seu futebol. O filho do.</p></div>
            </div>
        </a>
        </Template></>;
}