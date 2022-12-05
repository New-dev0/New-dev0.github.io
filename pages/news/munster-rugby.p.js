import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Munster Rugby</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Munster Rugby"/>
        <meta name="description" content="Trending News about Munster Rugby" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Munster Rugby</h1>
            <Image width={800} height={500} src="https://d2cx26qpfwuhvu.cloudfront.net/munster/wp-content/uploads/2022/12/02114827/inpho_01997174-scaled-e1669981770927.jpg" alt="Munster Rugby"/>
            <h3>Recent News</h3>
            <a href='https://www.munsterrugby.ie/2022/12/02/john-ryan-becomes-13th-player-to-join-munster-200-club/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>John Ryan Becomes 13th Player To Join Munster 200 Club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRYW5eRKGFpdnyx0sJQBEtGmJAUDcsN8mVIDbdjEZy9iH-AJN9tuDqIZI_y8r-QJ02QUnmMZRJd" alt="John Ryan Becomes 13th Player To Join Munster 200 Club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>John Ryan starts against Edinburgh on Friday night, becoming the 13th Munster player to join the 200 club at the DAM Health Stadium.</p></div>
            </div>
        </a><a href='https://www.munsterrugby.ie/2022/12/02/academy-update-november-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Academy Update | November 2022 - Munster Rugby</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR8bLluV-grKL5ORys806UPzNHDqNYE_aQzJ0u8y7eq0of18fSU_WC3nuxSpgKjpOtu3wU05MkL" alt="Academy Update | November 2022 - Munster Rugby" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Elite Player Development Officer Brendan O&#39;Connor. Inpho. For the latest update on the province&#39;s player pathway, we spoke to Elite Player Development&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}