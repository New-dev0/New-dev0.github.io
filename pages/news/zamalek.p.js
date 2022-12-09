import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zamalek</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zamalek"/>
        <meta name="description" content="Trending News about Zamalek" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zamalek</h1>
            <Image width={800} height={500} src="https://www.kingfut.com/wp-content/uploads/2022/12/Fjaax9EWIAI34nJ.jpeg" alt="Zamalek"/>
            <h3>Recent News</h3>
            <a href='https://www.kingfut.com/2022/12/08/zamalek-terminate-zakaria-el-wardi-contract/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>OFFICIAL: Zamalek terminate Zakaria El-Wardi contract after just six ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQTA0dD5s5P30KIGMnYQFaclPEUoXWWimAYHKUNPKCJapgz4UjWuI-DixkUa9JWdXhQqVXRbKDD" alt="OFFICIAL: Zamalek terminate Zakaria El-Wardi contract after just six ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zamalek have announced the departure of Moroccan midfielder Zakaria El-Wardi by mutual agreement on Thursday.</p></div>
            </div>
        </a><a href='https://www.kingfut.com/2022/12/08/rouqa-miss-pyramids-clash/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zamalek&#39;s Mohamed Ashraf Rouka suspended for Pyramids Clash</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRzxbVwGCcCtx_K999m9iFVg4unE-zO657xI5NtTZwY0zk1oQ-Dwzcv9Gopnlktv9cd2Rc4GFAe" alt="Zamalek&#39;s Mohamed Ashraf Rouka suspended for Pyramids Clash" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rouka has been an essential element in Jesualdo Ferreira&#39;s team as he started all Zamalek games this season in Egyptian Premier League, CAF Champions League and&nbsp;...</p></div>
            </div>
        </a><a href='https://english.ahram.org.eg/NewsContent/6/51/482271/Sports/Egyptian-Football/Zamalek-announce-departure-of-Zakaria-ElWardi-amic.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zamalek announce departure of Zakaria El-Wardi amicably due to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRW4NXjMbEXddHPLDGMKxCJmFtuURqIUE2FYz2Bw1aS9dfd0Y1BXC4_CElgOAiFHTgnVH3a6ZdW" alt="Zamalek announce departure of Zakaria El-Wardi amicably due to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zamalek president, Mortada Mansour announced Thursday the departure of the recently-signed Moroccan midfielder Zakaria El-Wardi amicably based on the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}