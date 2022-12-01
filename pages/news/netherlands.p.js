import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands"/>
        <meta name="description" content="Trending News about Netherlands" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands</h1>
            <Image width={800} height={500} src="https://cdn.who.int/media/images/default-source/funding/sd_nl_signing.tmb-1200v.jpg?sfvrsn=7b7f5c8f_1" alt="Netherlands"/>
            <h3>Recent News</h3>
            <a href='https://www.who.int/news/item/30-11-2022-the-netherlands-increases-its-flexible-contribution-for--a-strong-and-agile-who'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Netherlands increases its flexible contribution for “a strong and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSJ9Q4GbAGbXedHObAY-RmogihlfFycLhi9z_RNCPLq2NkJfQBjAv1yQ1fZ-eE3SWimKhyws-c6" alt="The Netherlands increases its flexible contribution for “a strong and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On 29 November 2022, the Ministry of Foreign Affairs of the Netherlands and the World Health Organization (WHO) signed a new multi-annual agreement for US$&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}