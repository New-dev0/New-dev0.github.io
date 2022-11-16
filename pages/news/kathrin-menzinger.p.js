import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kathrin Menzinger</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kathrin Menzinger"/>
        <meta name="description" content="Trending News about Kathrin Menzinger" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kathrin Menzinger</h1>
            <Image width={800} height={500} src="https://www.tz.de/bilder/2022/11/14/91914614/30284198-ungeplanter-zwischenfall-bei-let-dance-show-riesiges-netz-faellt-auf-kathrin-menzinger-3xfe.jpg" alt="Kathrin Menzinger"/>
            <h3>Recent News</h3>
            <a href='https://www.tz.de/tv/menzinger-ungeplanter-zwischenfall-lets-dance-show-riesiges-netz-faellt-auf-kathrin-zr-91914614.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ungeplanter Zwischenfall bei „Let&#39;s Dance“-Show: Riesiges Netz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSz_iy35E-baCWjqbZTy_3IiPXErp817F6TnsQUoEoX1dKBNpXZm3EELYBmBoIsAcNdWZ8mzcsv" alt="Ungeplanter Zwischenfall bei „Let&#39;s Dance“-Show: Riesiges Netz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kleiner Schock-Moment bei der „Let&#39;s Dance“-Liveshow in München. Während Profitänzerin Kathrin Menzinger als Engel eine emotionale Choreografie tanzt,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}