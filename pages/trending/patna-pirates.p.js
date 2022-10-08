import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Patna Pirates</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Patna Pirates"/>
        <meta name="description" content="Trending News about Patna Pirates" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Patna Pirates</h1>
            <Image width={800} height={500} src="https://hindi.insidesport.in/wp-content/uploads/2022/10/puneri-vs-patna.webp" alt="Patna Pirates"/>
            <h3>Recent News</h3>
            <a href='https://hindi.insidesport.in/latest/patna-pirates-vs-puneri-paltan-live-score-vivo-pro-kabaddi-league-season-9-live-score-follow-pkl-2022-live-updates-504593/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patna Pirates vs Puneri Paltan Live: पटना पाइरेट्स और पुनेरी पलटन के ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR0ZKpRwzWFo_WbKoRdr8UruYdVSBE6c7Ya6WzYwv5jVM-qWF001k8701OMw7BTRxENDGeGHQ6r" alt="Patna Pirates vs Puneri Paltan Live: पटना पाइरेट्स और पुनेरी पलटन के ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patna Pirates vs Puneri Paltan Live: प्रो कबड्डी लीग (Vivo Pro Kabaddi League 2022) में शनिवार को ट्रिपल मुकाबलों के&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}