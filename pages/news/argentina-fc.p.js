import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina FC"/>
        <meta name="description" content="Trending News about Argentina FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina FC</h1>
            <Image width={800} height={500} src="" alt="Argentina FC"/>
            <h3>Recent News</h3>
            <a href='https://www.lbbonline.com/news/fc-home-deco-campaign-targets-argentina-football-fans-with-innovative-passion-calculator'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FC Home &amp; Deco Campaign Targets Argentina Football Fans with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS82LMtjb0gAOG2uWvpzWLqtb-nhWqW8XD86xfa_jOJT9GrLCPghSD1ZUlVARZfMAiYV9Swdw20" alt="FC Home &amp; Deco Campaign Targets Argentina Football Fans with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Little Black Book, Powered by an algorithm created by Wunderman Thompson Dubai, &#39;The Passion Calculator&#39; is based on the quantity and intensity of comments&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}