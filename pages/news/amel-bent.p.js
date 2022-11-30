import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amel Bent</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amel Bent"/>
        <meta name="description" content="Trending News about Amel Bent" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amel Bent</h1>
            <Image width={800} height={500} src="http://www.chartsinfrance.net/style/breves/3/photo_1669730955.jpg" alt="Amel Bent"/>
            <h3>Recent News</h3>
            <a href='http://www.chartsinfrance.net/Amel-Bent/news-123224.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Amel Bent et Soprano rendent hommage à Charles Aznavour en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSrU0e1v-Ch4a6C8Uos4qfMii9RcTxePFpiF7NeU-ezZyV5f_tKWn3b55iwv2toZizh3OSO2gW" alt="Amel Bent et Soprano rendent hommage à Charles Aznavour en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ce soir, France 2 propose &quot;La fête de la chanson française&quot;, animée par Laury Thilleman et André Manoukian, avec Michel Polnareff, Juliette Armanet,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}