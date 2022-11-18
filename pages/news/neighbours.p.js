import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Neighbours</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Neighbours"/>
        <meta name="description" content="Trending News about Neighbours" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Neighbours</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/0012d928-1600.jpg" alt="Neighbours"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1117/1336657-neighbours-to-return-as-amazon-resurrects-aussie-soap/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neighbours to return as Amazon resurrects Aussie soap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_chHvpFbmSBOf2ZH3QkGAdpg5M5FRtaLIGTY5qxfHY1GceU7Eeum5VyCEuXaq5ynQTMaIjftk" alt="Neighbours to return as Amazon resurrects Aussie soap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s been announced that Neighbours will return to screens with a new series on streaming site Amazon Freevee.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/tv-and-radio/2022/nov/17/amazon-neighbours-the-undead-apocalypse-the-soap-opera-that-came-back-from-the-dead'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neighbours, the Undead Apocalypse: the soap opera that came ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9TW8f2ArIArNPxK3ovzpQfcGHeSnN62KGcvfM9DUhF21rQra_gDOnkHn9fnPGcH_3lE2jRaUT" alt="Neighbours, the Undead Apocalypse: the soap opera that came ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>So far, it has been confirmed that Stefan Dennis (Paul Robinson), Alan Fletcher (Karl Kennedy), Ryan Moloney (Toadie Rebecchi) and Jackie Woodburne (Susan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.anglocelt.ie/2022/11/17/neighbours-to-return-to-screens-following-soaps-cancellation/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neighbours to return to screens following soap&#39;s cancellation | Anglo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQtad1inZVBWEKdZRbx1UKW-SXTkFKHu8f_TwshwOOCGM4bI-cb4b1dYySoPwBiwxkc3jjlCo1E" alt="Neighbours to return to screens following soap&#39;s cancellation | Anglo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Australian soap opera was initially axed earlier this year after failing to secure new funding.</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/soaps/holby-city/a41993797/holby-city-davood-ghadami-neighbours-revival/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Holby City star calls for show to be revived after Neighbours news</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSeWdv8H6FHdoSGDX1GqNt7jCLvSVL2eALCser2DDAgHEU1ah33jAM1c0xzpSCNYmUR8dUJRV3S" alt="Holby City star calls for show to be revived after Neighbours news" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holby City star Davood Ghadami﻿ has called for the soap to be revived after news that Neighbours is being brought back.</p></div>
            </div>
        </a><a href='https://news.sky.com/story/neighbours-to-be-back-on-air-next-year-as-ramsay-street-returns-12749449'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neighbours to be back on air next year as Ramsay Street returns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQXypEnOeA34RYIGI47-cnC1gMRA78lyWNRFFexx-9SRvsW6vYc42d14gc_icU66fM0wECd4Mfd" alt="Neighbours to be back on air next year as Ramsay Street returns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Freevee and Fremantle announced the return of Neighbours, with a brand-new series to begin filming in Australia in 2023. The continuation of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.midlands103.com/news/entertainment/neighbours-is-coming-back-to-our-screens/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neighbours Is Coming Back To Our Screens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRrZQrFmqZ2eFzfr-XTG9yvgVRujN7RKpX7KkioajX7-fw1CGPW45sz-Bof1-UyduATMQhjSxnz" alt="Neighbours Is Coming Back To Our Screens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Aussie soap, which ran for 37 years, aired its final episode here in July.</p></div>
            </div>
        </a>
        </Template></>;
}