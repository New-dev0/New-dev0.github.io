import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Galatasaray</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Galatasaray"/>
        <meta name="description" content="Trending News about Galatasaray" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Galatasaray</h1>
            <Image width={800} height={500} src="https://gazetefutbol.de/wp-content/uploads/2022/12/AW773811_12-scaled-e1670089411548.jpg" alt="Galatasaray"/>
            <h3>Recent News</h3>
            <a href='https://gazetefutbol.de/galatasaray-verliert-erstes-testspiel-gegen-rayo-vallecano/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Galatasaray verliert erstes Testspiel gegen Rayo Vallecano</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz3uVn4gqqgTVdd5XdJpTv-RN6K2l7qAC7WfMJF7bo0WazAOavF5dNtxD2vEzmpnkmXf8Gq5qE" alt="Galatasaray verliert erstes Testspiel gegen Rayo Vallecano" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Beide Mannschaften trafen am Samstag im Nef-Stadion im Zuge der Kooperation zwischen der türkischen Klubvereinigung und der La Liga aufeinander, gemäß welcher&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}