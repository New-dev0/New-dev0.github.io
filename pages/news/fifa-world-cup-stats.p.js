import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup stats</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup stats"/>
        <meta name="description" content="Trending News about FIFA World Cup stats" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup stats</h1>
            <Image width={800} height={500} src="" alt="FIFA World Cup stats"/>
            <h3>Recent News</h3>
            <a href='https://www.socialmediatoday.com/news/Twitter-Shares-Stats-on-2022-World-Cup-Engagement-Infographic/637423/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Provides New Stats on 2022 World Cup Engagement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Twitter Provides New Stats on 2022 World Cup Engagement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup is already dominating online discussion, and it&#39;s got a few weeks of competition left yet, which will likely see the tournament become an&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}