import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Vera Pauw</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Vera Pauw"/>
        <meta name="description" content="Trending News about Vera Pauw" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Vera Pauw</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28643909.ece/ALTERNATES/s1200/0_Pauw-Late-Late.jpg" alt="Vera Pauw"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/soccer/vera-pauw-commended-brave-interview-28641247'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vera Pauw commended for &#39;brave&#39; interview with Ryan Tubridy on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ7ZOVtZcaDvye6Wst9PGGdCrEm2Mzi4eby3BJnuU_cCjgCVmkyOYRMUZxf1TiS75Edhi-1Z3m" alt="Vera Pauw commended for &#39;brave&#39; interview with Ryan Tubridy on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In a statement released earlier this year, Pauw said that she had been &#39;raped&#39; and &#39;sexually abused&#39; as a young footballer. In the interview with Tubridy, Pauw&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9835266/inside-vera-pauws-relationship-husband-ireland-womens-team/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside Vera Pauw&#39;s relationship with husband Bert van Lingen as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgXJarSC0U6lsiSmXVDhfRPaUNIK35fCoAe1sbEd9VWixJCBBqbwOJkRX3emGhbWO49gKSApX-" alt="Inside Vera Pauw&#39;s relationship with husband Bert van Lingen as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VERA PAUW has become a much-loved figure here in her two campaigns in charge of the Republic of Ireland women&#39;s team.The Dutch coach saw her team fall.</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/tv-film/late-late-show-viewers-praise-28643835'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late Late Show viewers praise &#39;incredible&#39; Vera Pauw as she opens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSZ7ZOVtZcaDvye6Wst9PGGdCrEm2Mzi4eby3BJnuU_cCjgCVmkyOYRMUZxf1TiS75Edhi-1Z3m" alt="Late Late Show viewers praise &#39;incredible&#39; Vera Pauw as she opens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viewers were deeply moved by Vera&#39;s honest and raw interview as she opened up to host Ryan Tubridy about the aftermath of coming forward publicly about&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}