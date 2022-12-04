import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Don McLean</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Don McLean"/>
        <meta name="description" content="Trending News about Don McLean" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Don McLean</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001ced97-1600.jpg" alt="Don McLean"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/entertainment/2022/1203/1339575-whats-on-10-top-tv-and-streaming-tips-for-saturday/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s on? 10 top TV and streaming tips for Saturday</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-ts_VnFwisEnM74vwaQzOlm4XEZ8jRacXw_cWLk9dctoRQVl907bxtRPhDfqgVjaq15rZOJ99" alt="What&#39;s on? 10 top TV and streaming tips for Saturday" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Minnie Driver&#39;s among the guests on this week&#39;s Angela Scanlon&#39;s Ask Me Anything, there&#39;s a Don McLean night on BBC Two, Strictly results show is on tonight&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}