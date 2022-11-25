import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chris Hughton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chris Hughton"/>
        <meta name="description" content="Trending News about Chris Hughton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chris Hughton</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28577073.ece/ALTERNATES/s1200/0_Chris-Hughton-technical-advisor-of-Ghana-arrives-at-the-stadium-prior-to-the-FIFA-World-Cup-Qatar-2022-Group-H-match.jpg" alt="Chris Hughton"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/soccer/chris-hughtons-ghanaian-roots-explained-28577236'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chris Hughton&#39;s Ghanaian roots explained ahead of World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnZSRzmZXqID3VyOdcXR28e2FH_ht5hiV8beZiRJ2rnvKEv4toDPV4yRDKO8zewJgdPGB-45VB" alt="Chris Hughton&#39;s Ghanaian roots explained ahead of World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Republic of Ireland international Chris Hughton is gearing up for a massive few weeks as technical advisor of Ghana.</p></div>
            </div>
        </a><a href='https://www.offalyexpress.ie/news/soccer/973037/former-ireland-player-part-of-ghana-s-backroom-team-for-world-cup-in-qatar.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Former Ireland player part of Ghana&#39;s backroom team for World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQzmPxu_pKhHRQnll-LyAVCTczVo7TiTqgevqg1oII2Jp-F7nCnZLGUSaiGRJzPASGdnRjtOV6e" alt="Former Ireland player part of Ghana&#39;s backroom team for World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Republic of Ireland defender and assistant manager Chris Hughton will be part of Ghana&#39;s backroom team for the World Cup in Qatar.</p></div>
            </div>
        </a>
        </Template></>;
}