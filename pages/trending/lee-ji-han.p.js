import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lee Ji Han</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lee Ji Han"/>
        <meta name="description" content="Trending News about Lee Ji Han" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lee Ji Han</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95207763,width-1070,height-580,imgsize-19664,overlay-economictimes/photo.jpg" alt="Lee Ji Han"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/us/k-pop-singer-and-actor-lee-ji-han-dies-in-seoul-halloween-stampede/articleshow/95207674.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>K Pop singer, actor Lee Ji-han dies in Seoul Halloween stampede</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR9HojW0GcNytvZQycSvUbp7uJLWUgitZZqc9IPrM4n-RUwbdoUaAGJ7Yh2kLCw9lZy9iLitYsL9Q" alt="K Pop singer, actor Lee Ji-han dies in Seoul Halloween stampede" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>K-Pop star and actor Lee Ji-han has been confirmed as one of the victims of the Seoul Halloween stampede that killed over 150 people. Many people, mostly in&nbsp;...</p></div>
            </div>
        </a><a href='https://newsroomodisha.com/k-pop-singer-actor-lee-jihan-dead-among-scores-killed-in-itaewon-stampede/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>K-Pop singer-actor Lee Jihan dead among scores killed in Itaewon ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQGoMCa1mtaiDEDszcD_qHBglCW-AkhsgBwSHkpNdwIUNGIUD2gRF0RW_H5HZR1P1-USJ3Qy4ZC" alt="K-Pop singer-actor Lee Jihan dead among scores killed in Itaewon ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seoul: Singer and actor Lee Jihan is confirmed to have passed away in the crowd crush that occurred during Halloween celebration in Seoul, South Korea over&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/10/31/entertainment/lee-ji-han-dead-seoul-crowd-surge/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lee Ji Han, K-pop singer, killed in Seoul crowd crush</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Lee Ji Han, K-pop singer, killed in Seoul crowd crush" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lee Ji Han, a Korean actor and K-pop singer, was among the more than 150 victims who died during a crowd surge at a Halloween celebration in Seoul over the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ndtv.com/world-news/south-korean-actor-singer-lee-ji-han-died-in-the-deadly-halloween-stampede-3476870'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korean Actor, Singer Lee Jihan Killed In Deadly Halloween ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQehyo5Ne14rkq4xs-5YRIDWnc-HGs4w7YkDxrBykoMTghuSPgXDq3Bcv8iI1lxorvlO8JXoI-E" alt="South Korean Actor, Singer Lee Jihan Killed In Deadly Halloween ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>South Korean actor-singer Lee Ji Han died in the deadly Halloween 2022 stampede in Seoul&#39;s Itaewon district. He was 24.</p></div>
            </div>
        </a><a href='https://www.wionews.com/entertainment/south-korean-actor-lee-ji-han-dies-in-itaewon-halloween-stampede-he-was-24-529835'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Korean actor Lee Ji-han dies in Itaewon Halloween stampede ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSDdMiiujxRcRurgGitZUSPySwjl2G7giL3ZKCRP6067vvtXXKKd3ZEfH4Mthfc8s0tbcZ1gKm" alt="South Korean actor Lee Ji-han dies in Itaewon Halloween stampede ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lee Ji Han, the South Korean singer and actor, has lost his life in a horrific Halloween crowd surge in Seoul, South Korea. He was 24 years old.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c4n26d63326o'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lee Ji Han death: Profile of K-drama actor wey die for Seoul ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkPsoJlyAVZeyT0f9tUktzW4TrPDv5V2GGb2ecq6J3s3HgfoCgXLt15c8BapDMwUWw1Tv3ufk2" alt="Lee Ji Han death: Profile of K-drama actor wey die for Seoul ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>935 Entertainment &amp; 9 Auto Entertainment don confam di death of South Korean actor, Lee Jihan for di tragic Halloween crush wey happun for Seoul on Saturday&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}