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
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRk0Fligvsl3hnTLERlYUkSwhKCkgVKIIxs5eR8IkForL0FrXTgtEYLvTlar3YCDIu0trYPFOf6" alt="France striker Karim Benzema injured in training, ruled out of 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 Ballon d&#39;Or winner Karim Benzema was injured during a training session on Saturday hours ahead of the World Cup 2022 inauguration.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/benzema-world-cup-withdrawal-injury-blow-france/blt7cb78382686c2dfa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema&#39;s World Cup withdrawal is a bitter blow for France ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQzMHemZmtFn_81SXDPN8Wtb4unSb9Qmvf2-dO7vi3XZovdNQuygXmzM0pUQC_QZYR4aq3R-DTP" alt="Karim Benzema&#39;s World Cup withdrawal is a bitter blow for France ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Love him or loathe him, France forward Karim Benzema has been the best player in the world in 2022 and deserved to grace the game&#39;s grandest stage one more&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/france-fra/story/4806724/world-cup-france-karim-benzema-suffers-injury-in-training'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema ruled out of World Cup with injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSTNkk0tyv5DqxyvWFN11TNzw8ynD5IU3wEgWXlXLMNuKxeoZBHh65-N3jB6z6Lcq45kATpMaRTqQ" alt="Karim Benzema ruled out of World Cup with injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema has been ruled out of the World Cup after suffering an injury to his left thigh during training on Saturday in Doha.</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/football/ballon-dor-holder-benzema-out-of-fifa-world-cup-with-thigh-tear/article66158858.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>France&#39;s Benzema out of FIFA World Cup 2022 with thigh tear</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeyVr9Q8vshb0OsBnUe8ZNtAm16oTEHfawDhdLRcz4qBFFL6JX6lzf-qcfEyFTokcf3e9BBTNg" alt="France&#39;s Benzema out of FIFA World Cup 2022 with thigh tear" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema is out of the World Cup,” the French soccer federation (FFF) said. &quot;After hurting the quadriceps on his left thigh the Real Madrid striker is&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/news/12098/12751403/karim-benzema-france-striker-ruled-out-of-2022-world-cup-in-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Karim Benzema: France striker ruled out of 2022 World Cup in Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeSgxD8KiS0JjIcv8P1Wfi7ztFQiv9wkLQ3c1vU9p2RhxjGljhftjX9QnsWkktUFdweAJywcIQ" alt="Karim Benzema: France striker ruled out of 2022 World Cup in Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France striker Karim Benzema ruled out of 2022 World Cup with a thigh injury in huge blow for reigning champions on eve of tournament; Real Madrid forward&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}