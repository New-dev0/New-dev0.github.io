import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fb</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fb"/>
        <meta name="description" content="Trending News about Fb" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fb</h1>
            <Image width={800} height={500} src="https://img.fanatik.com.tr/img/75/0x0/6387486866a97c050300fae5.gif" alt="Fb"/>
            <h3>Recent News</h3>
            <a href='https://www.fanatik.com.tr/sinan-bolat-fenerbahceden-gelen-transfer-teklifini-acikladi-2311776'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sinan Bolat Fenerbahçe&#39;den gelen transfer teklifini açıkladı!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6m_OgSef3GBy9cmITtyjA9_lDfA0_nD272IfuA8e0a89A9u-wfJ329AnXScIBSqZBvQu6krk4" alt="Sinan Bolat Fenerbahçe&#39;den gelen transfer teklifini açıkladı!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Süper Ligde Galatasaray ve Kayserispor formaları giyen, A Milli Futbol Takımında forma şansı bulan tecrübeli kaleci Sinan Bolat, Fenerbahçeden transfer&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}