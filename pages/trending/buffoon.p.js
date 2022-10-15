import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Buffoon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Buffoon"/>
        <meta name="description" content="Trending News about Buffoon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Buffoon</h1>
            <Image width={800} height={500} src="https://images.ottplay.com/images/buffoon-922.jpg" alt="Buffoon"/>
            <h3>Recent News</h3>
            <a href='https://www.ottplay.com/review/buffoon-movie-review-vaibhavs-action-thriller-is-enjoyable-in-parts-thanks-to-a-few-earnest-performances/6f6fb8c4de23'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Buffoon movie review: Vaibhav&#39;s action thriller is enjoyable in parts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtu9jpUPb4EBno7eYgurSsQ3RvKRQVqWOrOuaxClU3rBK_kbmmaWB7wMWmyKCjYKgJK5wFAXsW" alt="Buffoon movie review: Vaibhav&#39;s action thriller is enjoyable in parts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The film touches upon various social-political issues as well, but none of them, including the Sri Lankan refugee crisis, has been explored fully to its&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}