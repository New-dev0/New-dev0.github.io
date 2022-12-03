import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Willie Nelson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Willie Nelson"/>
        <meta name="description" content="Trending News about Willie Nelson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Willie Nelson</h1>
            <Image width={800} height={500} src="https://media.distractify.com/brand-img/tJuPOgNJg/1200x628/willienelson-1669993866633.jpg" alt="Willie Nelson"/>
            <h3>Recent News</h3>
            <a href='https://www.distractify.com/p/willie-nelson-net-worth'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Willie Nelson&#39;s Net Worth: How Rich Is the Country Star?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5sY7qF-KgUq5SK9hlNx2FkWzNkn3ZgPqE5_jaZ6MLLhCyHFTnDInqGhNc8JobKPCiBnMnFCwn" alt="Willie Nelson&#39;s Net Worth: How Rich Is the Country Star?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What is Willie Nelson&#39;s net worth? The singer is one of the most iconic living stars in all of country music, but how much money has he made?</p></div>
            </div>
        </a><a href='https://www.distractify.com/p/willie-nelson-children'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s Everything We Know About Willie Nelson&#39;s 8 Children</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTugYIJgCr0_NcSvt04QDhWg5-eG4c9KADhlNuzB2A8cT7B8PiyMBY1cZC7AI7YxIEUcUNz_g_W" alt="Here&#39;s Everything We Know About Willie Nelson&#39;s 8 Children" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Country music icon Willie Nelson is known to have a huge family with multiple children. It&#39;s time to get acquainted with his brood.</p></div>
            </div>
        </a>
        </Template></>;
}