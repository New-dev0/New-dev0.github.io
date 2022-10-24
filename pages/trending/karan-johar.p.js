import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karan Johar</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karan Johar"/>
        <meta name="description" content="Trending News about Karan Johar" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karan Johar</h1>
            <Image width={800} height={500} src="https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/10/karan-johar-calls-bff-kajol-family-0001.jpg" alt="Karan Johar"/>
            <h3>Recent News</h3>
            <a href='https://www.koimoi.com/bollywood-news/karan-johar-calls-bff-kajol-manish-malhotra-his-friends-family/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karan Johar Calls BFF Kajol &amp; Manish Malhotra His &#39;Friends &amp; Family&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR7V-EviJBLkrHPj5OJcDfymTizGjvzYuQniY08SWbiQKcZBttasBloOznCwRHM_IX-lv5-qLw8" alt="Karan Johar Calls BFF Kajol &amp; Manish Malhotra His &#39;Friends &amp; Family&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Multi-hyphenate Karan Johar, who is set to host the &#39;Weekend Ka Vaar&#39; episode of reality television show &#39;Bigg Boss 16&#39;, recently had a blast during a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dnaindia.com/hindi/entertainment/bollywood/news-janhvi-kapoor-spotted-ex-boyfriend-shikhar-pahariya-karan-johar-gave-dating-gestures-4057764'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Janhvi Kapoor: एक्स ब्वॉयफ्रेंड के साथ स्पॉट हुईं एक्ट्रेस, Karan Johar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLH1DwPPi2ffe6N_LMqaBPEdUcmZQvpIAp2CtbI_awTBNb98uU8OUax8FOhCr1AV7nMqm7Tt_i" alt="Janhvi Kapoor: एक्स ब्वॉयफ्रेंड के साथ स्पॉट हुईं एक्ट्रेस, Karan Johar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Janhvi Kapoor को पहली बार सार्वजनिक रूप से अपने कथित एक्स ब्वॉयफ्रेंड Shikhar Pahariya के साथ स्पॉट&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}