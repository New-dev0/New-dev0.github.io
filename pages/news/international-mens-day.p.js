import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>International Mens Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,International Mens Day"/>
        <meta name="description" content="Trending News about International Mens Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>International Mens Day</h1>
            <Image width={800} height={500} src="" alt="International Mens Day"/>
            <h3>Recent News</h3>
            <a href='https://guardian.ng/sport/international-mens-day-doa-extends-support-to-lagos-based-grassroots-football-club/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>International Men&#39;s Day: DOA extends support to Lagos-based ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT2hOgH3ZcpQhlSCCDVzXrOijgc6uX-qFKha5S2aU1eTF0HSe6BTAuZtCWq_tNHqa3XIoj0Sp5-" alt="International Men&#39;s Day: DOA extends support to Lagos-based ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A leading Lagos-based specialised law firm, Duale, Ovia &amp; Alex-Adedipe (DOA), is marking the 2022 International Men&#39;s Day by supporting Team360,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}