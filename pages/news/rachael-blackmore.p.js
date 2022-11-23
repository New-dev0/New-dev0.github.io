import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RACHAEL BLACKMORE</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RACHAEL BLACKMORE"/>
        <meta name="description" content="Trending News about RACHAEL BLACKMORE" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RACHAEL BLACKMORE</h1>
            <Image width={800} height={500} src="https://www.thesun.ie/wp-content/uploads/sites/3/2022/11/crop-9773853.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" alt="RACHAEL BLACKMORE"/>
            <h3>Recent News</h3>
            <a href='https://www.thesun.ie/sport/9773397/rachael-blackmore-henry-de-bromhead-son-jacks-tragic-passing/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rachael Blackmore described as an &#39;incredible person&#39; by Henry de ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSzqR8r_lE6uWkWnEJZDHqY_Tx8uqNQ0la4h3NxzlbmjQsfEGB-CHSPElgmHPr1OVG6pKVacKxF" alt="Rachael Blackmore described as an &#39;incredible person&#39; by Henry de ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RACHAEL BLACKMORE has been hailed for providing emotional support to the de Bromhead family in the wake of Jack&#39;s tragic passing.Jack de Bromhead, 13,</p></div>
            </div>
        </a>
        </Template></>;
}