import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Joel Campbell</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Joel Campbell"/>
        <meta name="description" content="Trending News about Joel Campbell" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Joel Campbell</h1>
            <Image width={800} height={500} src="https://i2-prod.mirror.co.uk/incoming/article28560600.ece/ALTERNATES/s1200/0_GettyImages-507385390.jpg" alt="Joel Campbell"/>
            <h3>Recent News</h3>
            <a href='https://www.mirror.co.uk/sport/football/news/arsenal-wenger-campbell-world-cup-28558728'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsene Wenger&#39;s &quot;fighter&quot; eyeing enormous World Cup shock after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGp5C-ykv6AyasZEuVKxox06-6yOiDraf96H62SZa48TGKWGZvFyfTjQqp5O-Q32W2axPBrQWV" alt="Arsene Wenger&#39;s &quot;fighter&quot; eyeing enormous World Cup shock after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joel Campbell failed to realise lofty expectations of him during his seven years at Arsenal during Arsene Wenger&#39;s reign, but is out to prove a point with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}