import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Victoria Secret</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Victoria Secret"/>
        <meta name="description" content="Trending News about Victoria Secret" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Victoria Secret</h1>
            <Image width={800} height={500} src="https://nypost.com/wp-content/uploads/sites/2/2022/11/vs-bf.jpg?quality=75&strip=all&w=1024" alt="Victoria Secret"/>
            <h3>Recent News</h3>
            <a href='https://nypost.com/2022/11/25/the-best-victorias-secret-black-friday-deals-of-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The best Victoria&#39;s Secret Black Friday Deals: Bras, pajamas, more</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQWqz_DD8uR384_q4t2y0mzkh-_AGVAF9KLCh6Cs_5lJ8gS3QRC2NrEUKKdb8lP5y3joitm1AlV" alt="The best Victoria&#39;s Secret Black Friday Deals: Bras, pajamas, more" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In honor of Black Friday, Victoria&#39;s Secret is slashing prices and offering limited time deals on bestselling items like bras, leggings, sports bras and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}