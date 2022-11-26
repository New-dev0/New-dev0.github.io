import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mia Khalifa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mia Khalifa"/>
        <meta name="description" content="Trending News about Mia Khalifa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mia Khalifa</h1>
            <Image width={800} height={500} src="https://i2-prod.dailystar.co.uk/incoming/article28571777.ece/ALTERNATES/s1200/1_2021-11-20-11.jpg" alt="Mia Khalifa"/>
            <h3>Recent News</h3>
            <a href='https://www.dailystar.co.uk/news/weird-news/screaming-mia-khalifa-hails-black-28580617'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Screaming Mia Khalifa hails Black Friday killer Balenciaga heels as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQLbhBgP-rF0ONukQbfKc2t2IkkR1VXnMQnxs7jeWX9rI8DO2wCLyf75BEP6_EXqD-_Y6DfZqEI" alt="Screaming Mia Khalifa hails Black Friday killer Balenciaga heels as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ex-Pornhub star Mia Khalifa has thrown herself into Black Friday by unboxing some mystery designer items including a pair of Balenciaga boots that made her&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}