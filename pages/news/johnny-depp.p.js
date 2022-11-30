import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Johnny Depp</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Johnny Depp"/>
        <meta name="description" content="Trending News about Johnny Depp" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Johnny Depp</h1>
            <Image width={800} height={500} src="https://ia.tmgrup.com.tr/d8a6b4/740/474/36/0/921/567?u=https://i.tmgrup.com.tr/es/2022/11/29/johnny-deppin-neredeyse-oynayacagi-3-keanu-reeves-filmi-rolu-1669711980448.jpg" alt="Johnny Depp"/>
            <h3>Recent News</h3>
            <a href='https://www.esquire.com.tr/ekstra/kultur-sanat/2022/11/29/johnny-deppin-neredeyse-oynayacagi-3-keanu-reeves-filmi-rolu'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Johnny Depp&#39;in Neredeyse Oynayacağı 3 Keanu Reeves Filmi Rolü</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRjuxMGhW9fEtfa5AUuuaIt1X6rv25cMRiDhXQY23dSk1Odg9U185hHyDQ4vptHjEMyFnEB6j_G" alt="Johnny Depp&#39;in Neredeyse Oynayacağı 3 Keanu Reeves Filmi Rolü" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Johnny Depp neredeyse Keanu Reeves&#39;in en unutulmaz karakterlerinden üçünü oynuyordu ve öyle yapsaydı, Hollywood çok farklı olurdu. İşte nedeni.</p></div>
            </div>
        </a>
        </Template></>;
}