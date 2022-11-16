import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cam Newton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cam Newton"/>
        <meta name="description" content="Trending News about Cam Newton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cam Newton</h1>
            <Image width={800} height={500} src="https://staticc.sportskeeda.com/editor/2022/11/31caf-16685467189774-1920.jpg" alt="Cam Newton"/>
            <h3>Recent News</h3>
            <a href='https://www.sportskeeda.com/nfl/cam-newton-s-career-stats-are-nfl-hall-fame-material'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Do Cam Newton&#39;s career stats warrant him a spot in NFL&#39;s Pro ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRG_yIQDSh0RXQBEScb3lrbKMYpcAlkKjSmyOapvHNhotDo9yUBpEO1CrZqrUK39JIKI_1fi2Su" alt="Do Cam Newton&#39;s career stats warrant him a spot in NFL&#39;s Pro ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newton&#39;s career was at its zenith during his spell with the Carolina Panthers. He was a prodigious rookie coming out of Auburn, taken with the first pick by the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}