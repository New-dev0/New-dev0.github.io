import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kamala Harris</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kamala Harris"/>
        <meta name="description" content="Trending News about Kamala Harris" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kamala Harris</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/Kamala-Harris-Diwali-1200.jpg" alt="Kamala Harris"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/lifestyle/life-style/kamala-harris-diwali-celebration-us-vice-president-festival-meaning-8228417/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Kamala Harris&#39; Diwali celebration: US vice president explains ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTIB7MV7ueMjfQ3aNPc5gAELOCKHDRjOaRVIphXkdFWFZ7DBEU6nniav4sI5B3k0FnjNsI-tiBH" alt="Inside Kamala Harris&#39; Diwali celebration: US vice president explains ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;...an age-old concept that transcends cultures and communities,&quot; said the US vice president about the festival.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/kamala-harris-recalls-diwali-celebrations-as-a-child-her-travels-to-india/articleshow/95075025.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kamala Harris recalls Diwali celebrations as a child, her travels to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTb7mKxY_pF3O7S4CkXJ2Un1OWWmanv1KB4WkY8roXhBG_W_WCmmnmWWNig1h8eC-TgRup6CN8-" alt="Kamala Harris recalls Diwali celebrations as a child, her travels to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>US Vice President Kamala Harris addressed more than 200 Indian Americans who were invited to the White House for Diwali celebrations.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/world/us-vice-president-kamala-harris-recollects-fond-memories-of-celebrating-diwali-in-india-2526414.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US VP Kamala Harris recollects fond memories of celebrating Diwali ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStWUiO5dEDKSrVQmBX-3vJ7HDDv7sesOVgOOjKijGDY8AMqPgmxg4QVH0oR5puNqIGDJgQR7JA" alt="US VP Kamala Harris recollects fond memories of celebrating Diwali ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi: US Vice President Kamala Harris, the first-ever Indian-origin person to hold the post, on Monday (October 24, 2022) recollected her frequent&nbsp;...</p></div>
            </div>
        </a><a href='https://abcnews.go.com/Politics/kamala-harris-bidens-host-major-diwali-celebration-white/story?id=92026477'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bidens host first major Diwali celebration with Kamala Harris at the ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRlGurCYJ9D2ByVXjnOT1vR_3i3clIr3PvLX0VVfxLG3hkOsulBhigaW9Tn4_ZqOJtcTJV1Rrio" alt="Bidens host first major Diwali celebration with Kamala Harris at the ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For Diwali, Kamala Harris held a Friday reception for the festival at her residence in Washington and then attended a White House celebration on Monday with&nbsp;...</p></div>
            </div>
        </a><a href='https://kashmirreader.com/2022/10/26/was-able-to-become-us-vice-prez-because-of-my-mother-kamala-harris/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Was able to become US vice prez because of my mother: Kamala ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Was able to become US vice prez because of my mother: Kamala ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Washington: United States Vice President Kamala Harris attributed her success to the dedication, determination and courage of her Indian American mother.</p></div>
            </div>
        </a><a href='https://www.y-axis.com/news/diwali-celebration-in-the-white-house-joe-biden-hosts-kamala-harris-joins/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joe Biden hosts reception for Diwali celebration in the White House</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQTJJRJP83a_coNyRDr_L4pyt8yH7wrX_qIUr8-KXhMoFAlICFDo_t-XdDllea88So2pCggCoty" alt="Joe Biden hosts reception for Diwali celebration in the White House" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On October 24, 2022, US President Joe Biden hosted a reception for Diwali celebration in the White House. V.P. Kamala Harris and 200 Indian Americans&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}