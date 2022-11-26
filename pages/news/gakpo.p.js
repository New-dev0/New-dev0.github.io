import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gakpo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gakpo"/>
        <meta name="description" content="Trending News about Gakpo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gakpo</h1>
            <Image width={800} height={500} src="https://www.trtspor.com.tr/resimler/482000/483161_1.jpg" alt="Gakpo"/>
            <h3>Recent News</h3>
            <a href='https://www.trtspor.com.tr/videolar/gunun-golu-gakpo-2022-fifa-dunya-kupasi-6-gun-46129.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Günün Golü | Gakpo | 2022 FIFA Dünya Kupası | 6. Gün</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR1aFvqMsretQUeh5KGC4cLIK4rTp7pYGwGyVIx7yrL2L-QetH0jPhsy5NILr9Qv6-RGucDuXoM" alt="Günün Golü | Gakpo | 2022 FIFA Dünya Kupası | 6. Gün" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dünya Kupası&#39;nın 6. gününün en güzel golü Hollandalı oyuncu Gakpo&#39;dan geldi.</p></div>
            </div>
        </a>
        </Template></>;
}