import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>December prayer</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,December prayer"/>
        <meta name="description" content="Trending News about December prayer" /></Head><Template>
            <h1 style={{fontSize: "30"}}>December prayer</h1>
            <Image width={800} height={500} src="" alt="December prayer"/>
            <h3>Recent News</h3>
            <a href='https://www.vaticannews.va/en/pope/news/2022-12/pope-december-prayer-intention-for-volunteer-organizations.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pope&#39;s December prayer intention: For volunteer organizations</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRHkDvLM-TXze5ug8bfAgfNRlJLrun1_JO-SScQueeIwjZu-kWPSn7-sjDKUB5tS2GH01wCJ7Gc" alt="Pope&#39;s December prayer intention: For volunteer organizations" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pope Francis releases his prayer intention for December, asking the faithful to pray that volunteer organizations, and that those who work in them may ...</p></div>
            </div>
        </a><a href='https://www.catholicnewsagency.com/news/252961/this-is-pope-francis-prayer-intention-for-december'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>This is Pope Francis&#39; prayer intention for December</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6Oq4WAMJme4aoDsVXR2ixg5kFzKyEBP7UUBg-KEZBkBerDLFUJw94w81Kx3G69g7okFnpQq6f" alt="This is Pope Francis&#39; prayer intention for December" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“The world needs volunteers and organizations committed to seeking the common good,” the Holy Father said in a video appeal released Dec. 1. “This is a word&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indcatholicnews.com/news/46033'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Pope Video - December 2022: Volunteer Not-for-Profit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfTJWGwNL9iR8cZm89r1Fu3Y6E7lVPcYAgCQmWChHnYDJGt9HkvD1RxX3sW9O7JrMGgN-_LuFW" alt="The Pope Video - December 2022: Volunteer Not-for-Profit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We pray that volunteer non-profit organizations committed to human development find people dedicated to the common good and ceaselessly seek out new paths&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}