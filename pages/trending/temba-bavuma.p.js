import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Temba Bavuma</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Temba Bavuma"/>
        <meta name="description" content="Trending News about Temba Bavuma" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Temba Bavuma</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/10/New-Zealand-2.jpg" alt="Temba Bavuma"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/the-tale-of-struggling-captains-in-t20-world-cup-2022-8237417/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Drop Finch&#39; &#39;Sack Babar&#39; &#39;Remove Bavuma&#39; &#39;Get a move on Kane ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPJZv3FxjlsS0xmEED5jmmFyRV2XafosnySOZEMkM5yoqYb73tgvJ0HU6tXVxlyiUAfhiC6Z1U" alt="&#39;Drop Finch&#39; &#39;Sack Babar&#39; &#39;Remove Bavuma&#39; &#39;Get a move on Kane ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aaron Finch, Kane Williamson, Temba Bavuma, and Babar Azam are facing massive scrutiny from the former cricketers about their lack of intent and with the&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}