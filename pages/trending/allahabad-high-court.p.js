import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Allahabad High Court</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Allahabad High Court"/>
        <meta name="description" content="Trending News about Allahabad High Court" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Allahabad High Court</h1>
            <Image width={800} height={500} src="https://img.jagranjosh.com/images/2022/October/30102022/allahabad-high-court-recruitment-min.JPG" alt="Allahabad High Court"/>
            <h3>Recent News</h3>
            <a href='https://www.jagranjosh.com/articles/allahabad-high-court-recruitment-2022-for-group-d-steno-driver-ja-and-paid-apprentices-posts-1667122395-1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Allahabad High Court Recruitment 2022 for 3932 Group D, Steno ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTB2lXQcf9-Qdlgii5M9s9LRB1lvoHQSVs5NYjk7fJ6BQ5H1QIwA7kLMk3DCpXWUkApo_ySyBoP" alt="Allahabad High Court Recruitment 2022 for 3932 Group D, Steno ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Uttar Pradesh Civil Court Staff Centralized is hiring 3932 Stenographers, Junior Assistants, Paid apprentices, Drivers and Category &#39;D&#39; Cadre posts. Check&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}