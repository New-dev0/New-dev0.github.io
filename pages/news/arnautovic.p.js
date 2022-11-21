import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arnautovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arnautovic"/>
        <meta name="description" content="Trending News about Arnautovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arnautovic</h1>
            <Image width={800} height={500} src="https://imgl.krone.at/scaled/2861489/v5b469a/og_image.jpg" alt="Arnautovic"/>
            <h3>Recent News</h3>
            <a href='https://www.krone.at/2861487'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kein Wembley-Gedanke - Arnautovic: Dolce Vita lässt Schmerz ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjOo0eA9g7xb1wIiPyxtNIRYlUpWHmGJAoogjt2VSYJYXfdsn-QC_76LwMjQBz38hOsdE9ffms" alt="Kein Wembley-Gedanke - Arnautovic: Dolce Vita lässt Schmerz ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heute trifft Österreich erstmals seit dem bitteren EM-Aus wieder auf die „Squadra Azzurra“ - Marko Arnautovic ist in Bologna zum Italien-Fan mutiert.</p></div>
            </div>
        </a>
        </Template></>;
}