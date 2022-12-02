import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Future FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Future FC"/>
        <meta name="description" content="Trending News about Future FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Future FC</h1>
            <Image width={800} height={500} src="" alt="Future FC"/>
            <h3>Recent News</h3>
            <a href='https://www.madamasr.com/en/2022/12/01/feature/politics/the-rise-of-future-fc-how-a-government-affiliated-club-took-over-egyptian-football/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The rise of Future FC: How a government-affiliated club took over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQG_j1d216ZDA0gRPjhoJ_pIeJ7MD3tJT2SzzId_11GZrbjWtUT3N6Werq9kYYvQIcLK9w4zgvww" alt="The rise of Future FC: How a government-affiliated club took over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hours after Ittihad Alex SC&#39;s 1-0 triumph over Al-Ahly SC in the 1976 Egyptian Cup finale on the back of a goal hammered in by Talaat Youssef,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}