import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Courtois</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Courtois"/>
        <meta name="description" content="Trending News about Courtois" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Courtois</h1>
            <Image width={800} height={500} src="https://i.cnnturk.com/i/cnnturk/75/1200x675/637e6e405cf3b000d0ad345e" alt="Courtois"/>
            <h3>Recent News</h3>
            <a href='https://www.cnnturk.com/spor/futbol/thibaut-courtoisnin-sevgilisi-mishel-gerzig-kimdir'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Thibaut Courtois&#39;nın sevgilisi Mishel Gerzig kimdir?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTwDaE_MYSpYex7rd1VOJmEmPVp48Y2plBsjtDzOk8xBJXfk1Zy5xZKBM3SZF87RxYZSzy_CUQ0" alt="Thibaut Courtois&#39;nın sevgilisi Mishel Gerzig kimdir?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid file bekçisi Thibaut Courtois&#39;yı sevgilisi Mishel Gerzig, 2022 Dünya Kupası&#39;nda da yalnız bırakmadı. Mishel Gerzig, Katar&#39;da sevgilisini&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}