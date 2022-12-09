import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Blackamoor brooch</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Blackamoor brooch"/>
        <meta name="description" content="Trending News about Blackamoor brooch" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Blackamoor brooch</h1>
            <Image width={800} height={500} src="https://wp.inews.co.uk/wp-content/uploads/2022/12/SEI_136874871.jpg" alt="Blackamoor brooch"/>
            <h3>Recent News</h3>
            <a href='https://inews.co.uk/news/blackamoor-brooch-what-princess-michael-harry-and-meghan-explained-2018258'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What is a Blackamoor brooch? The controversy around Princess ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRMvXaVc5kIllDibE99tIWX3ibKfVoYmFuqHS0_uYrtcjiLpz2iNnlmAUqXeFNuyp026WptU4k0" alt="What is a Blackamoor brooch? The controversy around Princess ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prince Harry discusses how Princess Michael wearing a Blackamoor brooch to a Christmas lunch where Meghan was present in 2017 could be interpreted as racist.</p></div>
            </div>
        </a><a href='https://www.haaretz.com/israel-news/2022-12-08/ty-article-magazine/.highlight/why-the-world-got-racist-royal-jewelry-wrong/0000017f-f678-d318-afff-f77b57f10000'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Harry &amp; Meghan&#39; and the royal brooch: Why the World Got &#39;Racist ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTw1Q7L-R0xzCvTnXyHHTYIkH6WDn2Q044X21tJS1M_iMwOJWDjCDUeFhcOMRkCp89F0QP92mLM" alt="&#39;Harry &amp; Meghan&#39; and the royal brooch: Why the World Got &#39;Racist ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Brooch Worn by Princess Michael of Kent Caused an Uproar Last Week, but Looking at Its History Proves That Meghan Markle Should Not Be Insulted by It.</p></div>
            </div>
        </a>
        </Template></>;
}