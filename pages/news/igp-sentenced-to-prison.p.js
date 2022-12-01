import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IGP sentenced to prison</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IGP sentenced to prison"/>
        <meta name="description" content="Trending News about IGP sentenced to prison" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IGP sentenced to prison</h1>
            <Image width={800} height={500} src="" alt="IGP sentenced to prison"/>
            <h3>Recent News</h3>
            <a href='https://www.vanguardngr.com/2022/11/breaking-igp-reacts-to-three-month-prison-sentence/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IGP reacts to three-month prison sentence</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBQvyW28bWH-GhrOi-Naf6lAOatrnEPZhIAninlThCtD5ENbwP0R9nrUy-aINrGS11p1wG38rV" alt="IGP reacts to three-month prison sentence" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Inspector-General of Police (IGP), Usman Baba has reacted to the order of a Federal High Court in Abuja, on Tuesday, sentencing him (IGP) to three&nbsp;...</p></div>
            </div>
        </a><a href='https://www.channelstv.com/2022/11/29/just-in-court-sentences-igp-to-three-months-in-prison-for-contempt/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Court Sentences IGP To Three Months In Prison For Contempt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRFZqBs2P6FeyD8GKzBymXLl7YD8zHp4yiIOcxBCIdXkwo_Sx_KSNNY4JaXAbVL3vbAEQtEVHHL" alt="Court Sentences IGP To Three Months In Prison For Contempt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Justice Mobolaji Olajuwon of the Federal High Court, Abuja has sentenced the Inspector-General of Police (IGP), Usman Baba to three months in prison for&nbsp;...</p></div>
            </div>
        </a><a href='https://punchng.com/breaking-court-sentences-igp-to-three-months-in-prison/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BREAKING: Court sentences IGP to three months in prison</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSqIv409bJOhr_z8DFoHP-6jHX_MfJA8HW1CKboM0pKQA8uVhSVfksojhTzi0cPl0eCG_1tFkV9" alt="BREAKING: Court sentences IGP to three months in prison" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal High Court sitting in Abuja, on Tuesday, sentenced the Inspector-General of Police, Usman Baba, to three months in prison for disobeying a valid&nbsp;...</p></div>
            </div>
        </a><a href='https://guardian.ng/news/court-sentences-police-igp-to-prison-for-disobeying-court-order/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Court sentences police IGP to prison for disobeying court order</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4kUt0hYWUOPFvmxwUIn6RcQopZhxmvKbbWRN-RXrnpGtAfIk6GRA5HKqMI-ojbAIG0-p0IgRI" alt="Court sentences police IGP to prison for disobeying court order" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Federal High Court, Abuja has sentenced the Inspector-General of Police (IGP), Usman Baba, to three months in prison for disobeying a court order.</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/cpd241kjlyyo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Usman Alkali Baba: Why court sentence IGP to three months in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSw8pm4e18iUfXaHdC74EMd6mMnh9qxc73yiZYyNfmX8VUFDPd1QXhCyXnrUJ3R8jW2JbNRqRwU" alt="Usman Alkali Baba: Why court sentence IGP to three months in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Court sentence di Inspector-General of Police (IGP), Usman Baba to three months for prison sake of e disobey court order but di Force say dem no dsey aware&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}