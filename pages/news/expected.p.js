import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Expected</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Expected"/>
        <meta name="description" content="Trending News about Expected" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Expected</h1>
            <Image width={800} height={500} src="https://mmo.aiircdn.com/277/605a20e278a02.jpg" alt="Expected"/>
            <h3>Recent News</h3>
            <a href='https://www.midlands103.com/news/midlands-news/merry-special-guest-expected-at-westmeath-canal-clean-up/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;Merry Special Guest&quot; Expected At Westmeath Canal Clean Up</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSoim-dBjUCsBwuaEmuBEMgMO5V_Um9pUvvu5JMxWertOwrkcaVc3aGJu1oTJhw-IcvJYDUaE28" alt="&quot;Merry Special Guest&quot; Expected At Westmeath Canal Clean Up" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Refreshments for volunteers will also be available. Westmeath County Council is calling for helpers, young and old, for a Christmas canal clean up this&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}