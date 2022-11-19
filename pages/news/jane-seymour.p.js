import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jane Seymour</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jane Seymour"/>
        <meta name="description" content="Trending News about Jane Seymour" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jane Seymour</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cd992-1600.jpg" alt="Jane Seymour"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1118/1337046-jane-seymour-on-ireland-ive-totally-gone-native/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jane Seymour on Ireland: &#39;I&#39;ve totally gone native&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTI_m-9a-3zXyE12hN3xUO50MFt1WwObCqPPzWVdrpqmcfoHx-yenRNzzSi-dXmkRKERA4MjnUW" alt="Jane Seymour on Ireland: &#39;I&#39;ve totally gone native&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Harry Wild star Jane Seymour has admitted that she&#39;s fallen in love with Ireland since she came here to film the TV dramedy.</p></div>
            </div>
        </a>
        </Template></>;
}