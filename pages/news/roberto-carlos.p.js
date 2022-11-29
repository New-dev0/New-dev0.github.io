import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Roberto Carlos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Roberto Carlos"/>
        <meta name="description" content="Trending News about Roberto Carlos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Roberto Carlos</h1>
            <Image width={800} height={500} src="https://static.daktilo.com/sites/535/uploads/2022/11/28/large/template-2.png" alt="Roberto Carlos"/>
            <h3>Recent News</h3>
            <a href='https://www.ozgurkocaeli.com.tr/makale/12620314/ugur-uludag/roberto-carlos-ronaldo-ve-kocaelisporun-efsaneleri'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roberto Carlos, Ronaldo ve Kocaelispor&#39;un efsaneleri…</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSn8HOMCuQKqnd7PkRJlDWhGAGtf7sjxK9b5L2rFNa4mk4kvtl9y7htpt_TU1maQXIjFpZ1yiJi" alt="Roberto Carlos, Ronaldo ve Kocaelispor&#39;un efsaneleri…" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Maradona, Socrates, Gerd Müller, Ruud Gullit, Roberto Carlos, Ronaldinho, Luis Ronaldo ve daha onlarcası… Say say bitmez… Bu kupada eski yıldızları sahada değil&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}