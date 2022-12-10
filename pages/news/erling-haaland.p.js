import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Erling Haaland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Erling Haaland"/>
        <meta name="description" content="Trending News about Erling Haaland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Erling Haaland</h1>
            <Image width={800} height={500} src="https://www.derwesten.de/wp-content/uploads/sites/8/2022/12/imago1018172968h.jpg" alt="Erling Haaland"/>
            <h3>Recent News</h3>
            <a href='https://www.derwesten.de/sport/fussball/bvb/jude-bellingham-borussia-dortmund-bvb-erling-haaland-wechsel-news-transfer-id300341615.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jude Bellingham enthüllt Chatnachrichten mit Erling Haaland – BVB ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQLKZAEnod9N8w65EvwGYCLu3Os8bN7-5fJEIKrZn-B5w6WwAUisrUyTgljH-BfERyxOezZL_Z-" alt="Jude Bellingham enthüllt Chatnachrichten mit Erling Haaland – BVB ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Einige Spieler reiften bei Borussia Dortmund zu Top-Stars. Wir zeigen dir, welche Juwele beim BVB zu Spitzenspielern wurden.</p></div>
            </div>
        </a>
        </Template></>;
}