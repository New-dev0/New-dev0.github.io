import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Karim Benzema</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Karim Benzema"/>
        <meta name="description" content="Trending News about Karim Benzema" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Karim Benzema</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/Karim-Benzema.jpg" alt="Karim Benzema"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/karim-benzema-ruled-out-of-world-cup-due-to-thigh-injury-8278343/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup due to thigh injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQoKvs3ZeyL9zwrJ0DzqWpP5Oaot2WoAw__-fmcsNNVQX75ifKTDNHKS8BaFCXJYssmCZZtcW4H" alt="Karim Benzema ruled out of World Cup due to thigh injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Three days before France&#39;s opening match against Australia, a last-minute thigh injury forces the Ballon d&#39;Or winner to give up his place in Didier&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/france-striker-karim-benzema-injured-in-training-ruled-out-of-2022-fifa-world-cup/articleshow/95642533.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France striker Karim Benzema injured in training, ruled out of 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8ZO5TG9knB8wu6n4-6w5fqJLw4mZZNc981RESP7JMcfu0ewZGiwaRUW3Vh-lciZCIak6TEHXA" alt="France striker Karim Benzema injured in training, ruled out of 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 Ballon d&#39;Or winner Karim Benzema was injured during a training session on Saturday hours ahead of the World Cup 2022 inauguration.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/deschamps-why-did-not-replace-karim-benzema-france-world-cup-squad/blt8137887f1c2d1c5f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Deschamps explains why he did not replace Karim Benzema in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRh5CkCQ1AqX7HrS71UXY88TQXG1uSLwgcaUCo4i190kZDSg_SlpNMQnV1S1ESWo_KRATA-fmfL" alt="Deschamps explains why he did not replace Karim Benzema in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Didier Deschamps has explained why he opted not to replace Karim Benzema in France&#39;s World Cup squad after injury ruled the forward out.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/football/fifa-world-cup-2022-karim-benzema-paul-pogba-and-more-stars-missing-from-france-squad-in-qatar-2538025.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Karim Benzema, Paul Pogba, and more stars ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdsf032sxgi_Njuyj3fh8Nr_gckXz0iTUjXATNVJzni-1hXPeUGiZK7HtZ3t5W-IU3HLcK4hTe" alt="FIFA World Cup 2022: Karim Benzema, Paul Pogba, and more stars ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Deschamps is already missing the services of midfielders Paul Pogba and N&#39;Golo Kante, who were instrumental in France&#39;s triumph four years back.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/france-fra/story/4806724/world-cup-france-karim-benzema-suffers-injury-in-training'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup with injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTNkk0tyv5DqxyvWFN11TNzw8ynD5IU3wEgWXlXLMNuKxeoZBHh65-N3jB6z6Lcq45kATpMaRTqQ" alt="Karim Benzema ruled out of World Cup with injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema has been ruled out of the World Cup after suffering an injury to his left thigh during training on Saturday in Doha.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/20/sports/soccer/karim-benzema-france-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France&#39;s Karim Benzema Is Out of World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTgU5Ib2PpVrMHzsTLNkIbUAglIn1l4MJOWNJurIswqchfh7h41Vms4L_S2tQUAsZ55EajSaIq" alt="France&#39;s Karim Benzema Is Out of World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The forward was seen as critical to the title hopes of a France team already hit hard by injuries.</p></div>
            </div>
        </a>
        </Template></>;
}