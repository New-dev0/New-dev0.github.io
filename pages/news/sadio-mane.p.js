import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sadio Mane</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sadio Mane"/>
        <meta name="description" content="Trending News about Sadio Mane" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sadio Mane</h1>
            <Image width={800} height={500} src="https://i2-prod.liverpoolecho.co.uk/incoming/article25669517.ece/ALTERNATES/s1200/0_GettyImages-1146975131.jpg" alt="Sadio Mane"/>
            <h3>Recent News</h3>
            <a href='https://www.liverpoolecho.co.uk/sport/football/football-news/sadio-mane-jurgen-klopp-liverpool-24263487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jurgen Klopp wanted to punch himself before saying sorry to Sadio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0Jyl4UvIG7Zdkx2WtFPtFDxzzDkahUcgGyNH3pbuho1a2ZB6BRQcrgH_H3URq_HDQ331eWhUi" alt="Jurgen Klopp wanted to punch himself before saying sorry to Sadio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sadio Mane left Liverpool for Bayern Munich after the two sides agreed a €41m deal in the sumer.</p></div>
            </div>
        </a>
        </Template></>;
}