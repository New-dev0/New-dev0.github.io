import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Rod Stewart</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Rod Stewart"/>
        <meta name="description" content="Trending News about Rod Stewart" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Rod Stewart</h1>
            <Image width={800} height={500} src="https://i.dailymail.co.uk/1s/2022/11/18/09/64684243-0-image-a-7_1668762061658.jpg" alt="Rod Stewart"/>
            <h3>Recent News</h3>
            <a href='https://www.dailymail.co.uk/tvshowbiz/article-11443057/Rod-Stewart-wears-colours-Ukrainian-flag-sings-anti-war-song.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Rod Stewart wears colours of the Ukrainian flag and sings anti war ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbj2a6L5klmKtJtyKg9ZWKG3NG0nybJFUomL4g5z75PC-i4VaaAIzKBD3fV1WouPJgGODKYVLD" alt="Rod Stewart wears colours of the Ukrainian flag and sings anti war ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The rocker, 77, belted out his hit Rhythm of My Heart which he first wrote about the Vietnam war but he says is &#39;relatable to any conflict&#39;.</p></div>
            </div>
        </a>
        </Template></>;
}