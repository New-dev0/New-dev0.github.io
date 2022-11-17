import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>OneRepublic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,OneRepublic"/>
        <meta name="description" content="Trending News about OneRepublic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>OneRepublic</h1>
            <Image width={800} height={500} src="https://blog.siriusxm.com/wp-content/uploads/2022/11/OneRepub-Blog.jpg" alt="OneRepublic"/>
            <h3>Recent News</h3>
            <a href='https://blog.siriusxm.com/onerepublic-pandora-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Experience OneRepublic&#39;s Pandora LIVE concert at Avant Gardner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQddB4TfbAkoZi-NtDVe42S0YFGCdur8v5eu_lVv8MK5QZGTusUIHCo6QMkP_hYChRQai3iq6Ix" alt="Experience OneRepublic&#39;s Pandora LIVE concert at Avant Gardner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hosted by SiriusXM Hits 1 hosts, the GRAMMY®-nominated band&#39;s Pandora LIVE will take place at Avant Gardner in Brooklyn on December 5.</p></div>
            </div>
        </a>
        </Template></>;
}