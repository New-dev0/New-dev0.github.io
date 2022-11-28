import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Musiala</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Musiala"/>
        <meta name="description" content="Trending News about Musiala" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Musiala</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/47DF/production/_127799381_jamalmusiala.jpg" alt="Musiala"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.co.uk/sport/football/63776700'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The next Messi&#39; - Musiala destined for greatness</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcROppmjsw0M7uKbYuK74lYPvoII_xj5IS-qbULZ3tiagm8ki88hEM3FrY50seA1pAplwwe2ZilI" alt="&#39;The next Messi&#39; - Musiala destined for greatness" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Germany teenager Jamal Musiala&#39;s performance in the 1-1 draw with Spain again shows how exciting his future in the game can be.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11475519/Mauricio-Pochettino-claims-Jamal-Musiala-one-best-young-players-world.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mauricio Pochettino claims Jamal Musiala &#39;is one of the best young ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtjr09tHxQqLo1Ea4HVHWQ0674fccjr0n1Lm03s5jAQQcM9jSovlVW-AGKnlp_5t97R6bSSO9-" alt="Mauricio Pochettino claims Jamal Musiala &#39;is one of the best young ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musiala was the shining star at the heart of Germany&#39;s midfield and his performance was rewarded with the assist for the goal which earned Hansi Flick&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://metro.co.uk/2022/11/27/world-cup-pochettino-schmeichel-rave-about-chelsea-star-jamal-musiala-17836479/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup: Pochettino, Schmeichel rave about ex-Chelsea star ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjz_44Bwu477NQNBYnzHL6RASXRMKic-Rl18cFQMhunwdv4zUx2PJja4UFFIwtXv6h9Svxj2AO" alt="World Cup: Pochettino, Schmeichel rave about ex-Chelsea star ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jurgen Klinsmann, Mauricio Pochettino and Peter Schmeichel hailed former Chelsea academy star Jamal Musiala as he continued to impress for Germany at the&nbsp;...</p></div>
            </div>
        </a><a href='https://soccernet.ng/2022/11/spain-1-1-germany-musialas-brilliance-salvages-germans-world-cup-dream-draws-applauds-from-nigerians.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spain 1-1 Germany: Musiala&#39;s brilliance salvages German&#39;s World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSKyJeUhsf7nY8UJDr53hk0TanymRTybN1UeJuKdSXTIwOdV-9CnmzySniaocafu0j0Q93Pz3BO" alt="Spain 1-1 Germany: Musiala&#39;s brilliance salvages German&#39;s World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamal Musiala was the star attraction for Nigerians as Germany scored late to claim a 1-1 draw with Spain on matchday two of the 2022 FIFA World Cup in Qatar.</p></div>
            </div>
        </a><a href='https://www.yourlocalguardian.co.uk/news/23147709.jamal-musiala-ex-croydon-schoolboy-playing-germany/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamal Musiala: The ex-Croydon schoolboy playing for Germany</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTuOnrhqNEjkMuoHRZI4kZEUCDxdHOQNEFQdVcaBJSNYN6hddGmcfcoRbbjvwi8pDClWy6LZJ7E" alt="Jamal Musiala: The ex-Croydon schoolboy playing for Germany" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 19-year-old has come a long way since his days at the Whitgift School in South Croydon, along the way signing for German giants Bayern Munich and becoming&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tribalfootball.com/articles/pochettino-and-klinsmann-hail-germany-whiz-musiala-full-of-surprising-elements-4438071'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pochettino and Klinsmann hail Germany whiz Musiala: Full of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTQj203BBU7Tbc5PTjbD0HATKtSNapft52nrAKA_7KG1IvesVsSrBO4nm1LXsy6-sNGu9QijEdS" alt="Pochettino and Klinsmann hail Germany whiz Musiala: Full of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pundits Mauiricio Pochettino and Jurgen Klinsmann hailed Jamal Musiala after Germany&#39;s 1-1 draw with Spain in Sunday&#39;s World Cup clash.The result keeps.</p></div>
            </div>
        </a>
        </Template></>;
}