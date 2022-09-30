import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tap</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tap"/>
        <meta name="description" content="Trending News about Tap" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tap</h1>
            <Image width={800} height={500} src="https://www.dancemagazine.com/wp-content/uploads/2022/09/JumaaneTaylor-1-by-William-Frederking-courtesy-Taylor_Web_R1-scaled.jpg" alt="Tap"/>
            <h3>Recent News</h3>
            <a href='https://www.dancemagazine.com/jumaane-taylor-tap-dancer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jumaane Taylor, Tap Dancer and Artistic Director of Chicago ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSKf3UiK8gYYYziHcVeLlMft9oxQpVTXPkZcOYn02dl21WDkhoFDcmBmgN2BrKhhKPgy_lEQjf2" alt="Jumaane Taylor, Tap Dancer and Artistic Director of Chicago ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I believe I dance because I am thankful to believe in God. This art form I practice comes from a spiritual tradition, and I feel the history of that&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}