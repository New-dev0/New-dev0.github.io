import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Atletico Madrid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Atletico Madrid"/>
        <meta name="description" content="Trending News about Atletico Madrid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Atletico Madrid</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3716731120a3ae79/635be107e953da0381c34b78/Transfer_Gurus_Web_Atletico.jpg" alt="Atletico Madrid"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/lists/atletico-madrid-most-expensive-signings-la-liga-spent-1-5-billion-incoming-transfers/blt3ee5b49e264d8dd4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Atletico Madrid most expensive signings - How La Liga giants spent ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTZmWvyW8kayLWFvlRkIRB_3KmOXdJja3NhUaxBS_4v5DG3Ij_dVDJMFPjI6DSLnHkqfjpw2M0y" alt="Atletico Madrid most expensive signings - How La Liga giants spent ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Rojiblancos have brought in some big names since Diego Simeone took charge over a decade ago.</p></div>
            </div>
        </a><a href='https://bolavip.com/en/soccer/antoine-griezmanns-salary-at-atletico-madrid-how-much-he-makes-per-hour-day-week-month-and-year-20221102-0044.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Antoine Griezmann&#39;s salary at Atletico Madrid: How much he makes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDKHyHDOXKWG3vFGS9IwnvRZwhKOvcVGShBsNzv3goIC8T7f0XzH-IGV2zA1ChCVrD307818-9" alt="Antoine Griezmann&#39;s salary at Atletico Madrid: How much he makes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antoine Griezmann had a couple of irregular seasons since he moved to Barcelona, but now he is back playing for Atletico Madrid. Read along to find out how&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}