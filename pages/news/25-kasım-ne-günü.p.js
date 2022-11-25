import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>25 Kasım ne Günü</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,25 Kasım ne Günü"/>
        <meta name="description" content="Trending News about 25 Kasım ne Günü" /></Head><Template>
            <h1 style={{fontSize: "30"}}>25 Kasım ne Günü</h1>
            <Image width={800} height={500} src="" alt="25 Kasım ne Günü"/>
            <h3>Recent News</h3>
            <a href='https://www.evrensel.net/haber/475470/gebzeli-kadin-isciler-durup-beklemek-yerine-bir-adim-atmamiz-gerek'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gebzeli kadın işçiler: Durup beklemek yerine bir adım atmamız gerek</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQB2nLunXV5Iv5K6Rlt0LprB0dMYNoF7lXbygqrwdJ8YF9XU7nX3JtsAc1iwmFmcvW2ZkEAeZYi" alt="Gebzeli kadın işçiler: Durup beklemek yerine bir adım atmamız gerek" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gebze&#39;de konuştuğumuz metal ve petrokimya işçisi kadınlar, &#39;25 Kasım ve diğer bütün günlerde de kadınlar meydanlarda, birlik olmalı&#39; dedi.</p></div>
            </div>
        </a>
        </Template></>;
}