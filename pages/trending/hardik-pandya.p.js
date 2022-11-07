import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hardik Pandya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hardik Pandya"/>
        <meta name="description" content="Trending News about Hardik Pandya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hardik Pandya</h1>
            <Image width={800} height={500} src="https://english.cdn.zeenews.com/sites/default/files/2022/11/06/1113284-1-49.jpg" alt="Hardik Pandya"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/cricket/india-vs-zimbabwe-t20-world-cup-2022-rohit-sharmas-priceless-reaction-to-hardik-pandyas-one-handed-catch-goes-viral-watch-2531846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Rohit Sharmas PRICELESS reaction to Hardik Pandyas one ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2R0QKqDUbgLgIEXFPNK6dCTid5hcCop-w9I9r4tPyVsXolm3BuR2vS1X2W-hiWMqlS8ujdcGD" alt="Watch: Rohit Sharmas PRICELESS reaction to Hardik Pandyas one ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India thrashed Zimbabwe by 71 runs in their final Super 12 match of the ICC T20 World Cup 2022 here at the Melbourn Cricket Ground on Sunday.</p></div>
            </div>
        </a><a href='https://www.sportstiger.com/news/watch-hardik-pandya-escapes-hit-wicket-as-it-was-free-hit-but-gets-out-on-next-ball-in-t20-world-cup-clash-vs-zimbabwe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Hardik Pandya escapes hit wicket as it was free hit but gets ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIa9QhHxxRA_Uv58vQw-Y7xZKB7N2E_RlhEGbxvVzdaLRhf_neBgUY5zFI2JyLH3nBDUFgJOoc" alt="WATCH: Hardik Pandya escapes hit wicket as it was free hit but gets ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Opener KL Rahul, and middle-order Suryakumar Yadav played fine knocks to ensure competitive runs on board for India.</p></div>
            </div>
        </a><a href='https://www.iwmbuzz.com/sports/news-sports/t20-world-cup-from-virat-kohli-hardik-pandya-to-k-l-rahul-share-winning-snaps-on-social-media-as-team-india-qualifies-for-semis-by-knocking-out-south-africa/2022/11/06'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>T20 World Cup: From Virat Kohli, Hardik Pandya To K.L.Rahul ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEZnbbcH0A-6mxEod8cBcCCoqc6lYCf0DY56cP3l-la4vRE6wEep1SO9gs3CMnXczsa83qQGCt" alt="T20 World Cup: From Virat Kohli, Hardik Pandya To K.L.Rahul ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team India players Virat Kohli, Hardik Pandya and K.L.Rahul shared with the fans pictures from their solid performance, take a look.</p></div>
            </div>
        </a>
        </Template></>;
}