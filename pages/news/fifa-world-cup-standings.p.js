import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup standings</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup standings"/>
        <meta name="description" content="Trending News about FIFA World Cup standings" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup standings</h1>
            <Image width={800} height={500} src="https://navbharattimes.indiatimes.com/photo/msid-95710581,imgsize-61734/pic.jpg" alt="FIFA World Cup standings"/>
            <h3>Recent News</h3>
            <a href='https://navbharattimes.indiatimes.com/sports/football/fifa-world-cup/news/fifa-world-cup-qatar-2022-points-table-all-group-current-standings-updates-in-hindi/articleshow/95709686.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup Points Table:पुर्तगाल ने की तूफानी शुरुआत ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6KaNfYfVUqmDEjqLj8tLGRurc-0rY9kmHZsO9-UsOCC8pBLdyBJ6oqnzq327ceJt3MB0bvUoV" alt="FIFA World Cup Points Table:पुर्तगाल ने की तूफानी शुरुआत ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फीफा वर्ल्ड कप 2022 (FIFA World Cup 2022 Latest Points Table) का अपडेट पॉइंट्स टेबल यहां देखिए...</p></div>
            </div>
        </a>
        </Template></>;
}