import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lazio</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lazio"/>
        <meta name="description" content="Trending News about Lazio" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lazio</h1>
            <Image width={800} height={500} src="https://icdn.sempreinter.com/wp-content/uploads/2022/11/Zdenek-Zeman-1.jpg" alt="Lazio"/>
            <h3>Recent News</h3>
            <a href='https://sempreinter.com/2022/11/14/ex-roma-lazio-coach-zdenek-zeman-calciopoli-system-existed-already-in-1994-close-to-taking-inter-job-twice/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ex-Roma &amp; Lazio Coach Zdenek Zeman: &quot;Calciopoli System Existed ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQHb2YSiUq2pnPPgFFoFTu1f1Jz9g_18tFHJJyTqN7Xx62SV8zzUASFtJYSx_8r13_z8UHBRCy8" alt="Ex-Roma &amp; Lazio Coach Zdenek Zeman: &quot;Calciopoli System Existed ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former AS Roma and Lazio coach Zdenek Zeman has said that the system which promoted the Calciopoli scandal in 2006 was really in place back in 1994,</p></div>
            </div>
        </a>
        </Template></>;
}