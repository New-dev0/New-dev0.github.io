import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rte Player</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rte Player"/>
        <meta name="description" content="Trending News about Rte Player" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rte Player</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/p001cd389-1600.png" alt="Rte Player"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1118/1336957-enough-is-enough-on-tuesdays-fair-city/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Enough is enough on Tuesday&#39;s Fair City</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSkAQQg8dpa_NzPuyEtfqL31PsiMPLSk23MCCaYj2yQJoRpsJphX0ZTyDBj2GzNoidbHA7fshxc" alt="Enough is enough on Tuesday&#39;s Fair City" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Doug lays down the law on Tuesday&#39;s Fair City on RTÉ One and the RTÉ Player. Tuesday&#39;s drama sees the power ructions in the garage come to a head as Pete&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}