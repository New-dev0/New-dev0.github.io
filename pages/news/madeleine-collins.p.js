import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Madeleine Collins</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Madeleine Collins"/>
        <meta name="description" content="Trending News about Madeleine Collins" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Madeleine Collins</h1>
            <Image width={800} height={500} src="https://imgsrc.cineserie.com/2022/11/judith-fauvet-virginie-efira-madeleine-collins.png?ver=1" alt="Madeleine Collins"/>
            <h3>Recent News</h3>
            <a href='https://www.cineserie.com/news/cinema/madeleine-collins-que-comprendre-de-la-fin-du-film-avec-virginie-efira-5510460/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Madeleine Collins : comment comprendre la fin de ce thriller avec ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_jWutJYoAX2aIfadWYkALUSGTcoeyQZilewwc71B4qVpNSex0rguhnMLEcB2K1HwXUk3mcxos" alt="Madeleine Collins : comment comprendre la fin de ce thriller avec ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Haletant et mystérieux jusqu&#39;à ses dernières secondes, &quot;Madeleine Collins&quot; est un excellent thriller sublimé par Virginie Efira.</p></div>
            </div>
        </a>
        </Template></>;
}