import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hit 2 rating</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hit 2 rating"/>
        <meta name="description" content="Trending News about Hit 2 rating" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hit 2 rating</h1>
            <Image width={800} height={500} src="https://resize.indiatv.in/resize/newbucket/1200_-/2022/12/hit-review-1669985084.jpg" alt="Hit 2 rating"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatv.in/entertainment/bollywood/hit-the-second-case-movie-review-twitter-reaction-netizens-likes-adivi-sesh-and-meenakshi-chaudhary-performance-2022-12-02-908305'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hit 2 Review: अदिवि सेष की मीनाक्षी संग लव स्टोरी दर्शकों को आई पसंद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQdlg2SYUxjO7w3PNTkXhq7lDYTUojLKRbJhzZgw5Ja43KxU7Upcdh0BbCF0MwOXxMvFbZpX06M" alt="Hit 2 Review: अदिवि सेष की मीनाक्षी संग लव स्टोरी दर्शकों को आई पसंद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>HIT: The Second Case Twitter Review: एक्टर Adivi Sesh की फिल्म &#39;हिट: द सेकेंड केस&#39; आज सिनेमाघरों में रिलीज&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/entertainment/south-cinema-hit-2-telugu-movie-review-netizens-heap-praise-on-adivi-sesh-and-meenakshi-chaudhary-performance-mogi-4989281.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hit 2 Review: &#39;हिट 2&#39; में अदिवि सेष पहले दिन ही हिट, इंप्रेसिव है मीनाक्षी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRs8WN2nMdJJ6qP0jQRjHI92xOft0MbCSq9SqBWVZdbNnlPgo0rz_Zx6kvAQcx9HWJLjYcOo_hk" alt="Hit 2 Review: &#39;हिट 2&#39; में अदिवि सेष पहले दिन ही हिट, इंप्रेसिव है मीनाक्षी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hit 2 Movie Review: तेलुगू स्टार अदिवि सेष की हिट 2 फिल्म रिलीज हो चुकी है जिसमें वे अभिनेत्री&nbsp;...</p></div>
            </div>
        </a><a href='https://worlddailynews24.com/hit-2-movie-review-and-rating/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>हिट 2 मूवी की समीक्षा और रेटिंग - World Daily News 24</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8E7JgtK63yrCh7-gEeFCfAzpi9aSkD2W5eL4bcE_lmb597C52xGitdj10G6QVe-_Zpvni7MjQ" alt="हिट 2 मूवी की समीक्षा और रेटिंग - World Daily News 24" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>निर्देशक शैलेश कोलानू की हिट वर्स की दूसरी किस्त, एचआईटी 2 जिसमें आदिवी सेश मुख्य&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}