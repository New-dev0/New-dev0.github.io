import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>DJ Tira</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,DJ Tira"/>
        <meta name="description" content="Trending News about DJ Tira" /></Head><Template>
            <h1 style={{fontSize: "30"}}>DJ Tira</h1>
            <Image width={800} height={500} src="https://img.fresherslive.com/latestnews/images/articles/origin/2022/11/28/what-happened-to-dj-tira-638477aac17f9-1669625770.jpg" alt="DJ Tira"/>
            <h3>Recent News</h3>
            <a href='https://latestnews.fresherslive.com/articles/what-happened-to-dj-tira-know-about-dj-tira-and-twins-bio-instagram-1108847'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What Happened To DJ Tira? Know About DJ Tira And Twins Bio ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTvB3Z48QRg7Agu7nZusQCFGWA-s0KQkGmmW5wGbe2WyckcQucDjK_t2Y3GkocuY--hnMStngEw" alt="What Happened To DJ Tira? Know About DJ Tira And Twins Bio ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>What Happened To DJ Tira - About the South African DJ, record producer, and Kwaito artist DJ Tira, people want to know What Happened To DJ Tira.</p></div>
            </div>
        </a>
        </Template></>;
}