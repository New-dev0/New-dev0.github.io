import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dicks Sporting Goods</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dicks Sporting Goods"/>
        <meta name="description" content="Trending News about Dicks Sporting Goods" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dicks Sporting Goods</h1>
            <Image width={800} height={500} src="https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/9/97/9971c633-cd9e-58c0-89c3-3887a28c344a/63813e2b7d795.image.jpg?crop=800%2C420%2C0%2C56&resize=800%2C420&order=crop%2Cresize" alt="Dicks Sporting Goods"/>
            <h3>Recent News</h3>
            <a href='https://www.nwitimes.com/business/local/massive-kids-empire-playground-and-party-zone-coming-to-dicks-sporting-goods-space-at-southlake/article_4b2dcf87-9288-571b-89ba-b4e5a212e55c.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Massive Kids Empire playground and party zone coming to Dick&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ_ICz5WT_GobBSF0dMdrZyI-_tAKbaBwejkKdnmt9j8UTEK-JgcOP2e89iSfWqTAPvKhf2mbWE" alt="Massive Kids Empire playground and party zone coming to Dick&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A massive playground and party zone will take over part of the vacant Dick&#39;s Sporting Goods space at the Southlake Mall.</p></div>
            </div>
        </a>
        </Template></>;
}