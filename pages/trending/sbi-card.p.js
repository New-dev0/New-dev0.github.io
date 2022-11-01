import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>SBI Card</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,SBI Card"/>
        <meta name="description" content="Trending News about SBI Card" /></Head><Template>
            <h1 style={{fontSize: "30"}}>SBI Card</h1>
            <Image width={800} height={500} src="https://cdn.zeebiz.com/sites/default/files/2022/10/31/208077-screenshot-2022-10-31-194054.jpg" alt="SBI Card"/>
            <h3>Recent News</h3>
            <a href='https://www.zeebiz.com/companies/video-gallery-news-par-views-rama-mohan-rao-amara-md-ceo-sbi-card-talks-on-september-result-in-conversation-with-anil-singhvi-205483'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>News Par Views: Rama Mohan Rao Amara, MD &amp; CEO, SBI Card ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT35dHfVaxh0k8cHz23LsQJbooJrq0Pvp2GyeCiVtmZtWcl6zkKY-a4HSC7oN7yYr5Bth9o8Xrs" alt="News Par Views: Rama Mohan Rao Amara, MD &amp; CEO, SBI Card ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Where did the Q2 results support? What is the growth outlook for future?What is the plan for capacity expansion? Watch Anil Singhvi&#39;s exclusive conversation&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}