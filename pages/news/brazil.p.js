import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Brazil</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Brazil"/>
        <meta name="description" content="Trending News about Brazil" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Brazil</h1>
            <Image width={800} height={500} src="https://www.thegoan.net/uploads/news/big_91629_IMG-20221120-WA0024.jpg" alt="Brazil"/>
            <h3>Recent News</h3>
            <a href='https://www.thegoan.net/goa-news/goan-gets-%E2%80%98medal-of-merit%E2%80%99-for-service-at-brazil-embassy/91629.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goan gets &#39;medal of merit&#39; for service at Brazil embassy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQb4ImeINz3doz2jqoWwQKx5HvI3yqSQRZ6JMptvFsqd5wQHm8lDzSUJQCuhdNocsZbi4Mgw3vV" alt="Goan gets &#39;medal of merit&#39; for service at Brazil embassy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roque Orlando Costa of Margao was on Sunday conferred the prestigious Medal of Merit &quot;Order of Rio Branco&quot; and a Diploma of Recognition from the Brazilian&nbsp;...</p></div>
            </div>
        </a><a href='https://www.heraldgoa.in/Goa/Orlando-Costa-bestowed-with-a-medal-by-Brazil-Ambassador/197004'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Orlando Costa bestowed with a medal by Brazil Ambassador</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVhssZTXbuvPyM23HTI6cXfjvenGKQC3FmArsQ9A6EstYGQd10I86NkuMcyvHY-8EiHfA3bv16" alt="Orlando Costa bestowed with a medal by Brazil Ambassador" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Team Herald. PANJIM: Roque Orlando Costa, former Trade Officer of Brazilian Embassy, New Delhi, and son-of-the-soil from Margao was awarded prestigious&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}