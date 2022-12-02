import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zamalek</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zamalek"/>
        <meta name="description" content="Trending News about Zamalek" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zamalek</h1>
            <Image width={800} height={500} src="https://english.ahram.org.eg/Media/News/2022/12/1/41_2022-638055278742100242-210.jpg" alt="Zamalek"/>
            <h3>Recent News</h3>
            <a href='https://english.ahram.org.eg/NewsContent/6/51/480904/Sports/Egyptian-Football/Zamalek-drop-another-two-points-after-Masry-draw.aspx'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zamalek drop another two points after Masry draw - Egyptian ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIkarNxbGmeMwC8fNfKkQMe1GzuMqoJ_RJPHt6zsszmqH6F-E7gtGvedCS0fGtvNUGQ9WDH2VH" alt="Zamalek drop another two points after Masry draw - Egyptian ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Zamalek were held for the second consecutive time in the Egyptian league this season following their 2-2 draw against Masry at Alexandria&#39;s Borg El-Arab&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}