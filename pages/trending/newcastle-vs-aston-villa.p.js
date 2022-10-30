import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Newcastle vs aston villa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Newcastle vs aston villa"/>
        <meta name="description" content="Trending News about Newcastle vs aston villa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Newcastle vs aston villa</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/0aeff56adb42f73577cf95420663fe8091e12a1c/0_0_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=fb6818a173e8d6b13063e8848a1002ac" alt="Newcastle vs aston villa"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/football/live/2022/oct/29/brighton-v-chelsea-newcastle-v-aston-villa-premier-league-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brighton 4-1 Chelsea, Newcastle 4-0 Aston Villa: Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTotfc1PR1Fm0lZfTdkoCubJd1HUlCPCMYN4UncnkvkafWDnf8dBUkOvwgQlhOon-kWKpmhW9ZK" alt="Brighton 4-1 Chelsea, Newcastle 4-0 Aston Villa: Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>There was a humbling defeat for Graham Potter at the hands of his old team, while Newcastle further established their upwardly mobile credentials with a&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}