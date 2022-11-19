import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Score</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Score"/>
        <meta name="description" content="Trending News about Score" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Score</h1>
            <Image width={800} height={500} src="" alt="Score"/>
            <h3>Recent News</h3>
            <a href='https://www.unicef.org/supply/stories/unicef-delivers-supplies-ensure-every-child-can-score-goals-life'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UNICEF delivers supplies to ensure that every child can score goals ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="UNICEF delivers supplies to ensure that every child can score goals ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We celebrate World Children&#39;s Day on the same day as the football World Cup kicks off, offering a chance to show how play can bring joy to all children.</p></div>
            </div>
        </a>
        </Template></>;
}