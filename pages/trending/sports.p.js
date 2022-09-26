import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.bloomberg.com/news/newsletters/2022-09-25/tv-has-turned-pro-sports-into-a-recession-proof-investment'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>TV Has Turned Pro Sports Into a Recession-Proof Investment</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ9FSh-zkbqO-KaQYNhUPo-pjPV6IqhZuSkmFHDlhDsVX78mU1sqbJGtWDCpz359S2KfOuYo8S0" alt="TV Has Turned Pro Sports Into a Recession-Proof Investment" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Four US professional sports teams are for sale with one more on the way. Why this could be just the beginning of a sports deal bonanza.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/09/25/1124931137/sunday-puzzle-find-the-sport'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sunday Puzzle: Find the sport!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRLRyV8MFdMZIaR0GTNLW2MHgfL_9er1gBj0WuuCeKUH0Bjc2ldLAAsbcb74kjY15qobPth5BMx" alt="Sunday Puzzle: Find the sport!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NPR&#39;s Ayesha Rascoe plays the puzzle with winner Kel Hanlon of Jessup, Maryland and puzzle master Will Shortz.</p></div>
            </div>
        </a><a href='https://www.timesnowhindi.com/india/article/gorakhpur-may-get-the-gift-of-sports-city/444225'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gorakhpur Sports City: गोरखपुर को मिल सकती है &#39;स्पोर्ट्स सिटी&#39; की सौगात</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQH0rhlL0C6ftlPcyTA0iX4Gr6bzZSFtzRcTaqbr1F9JV8qmOYmDrq6w0XuKOTmD14K9b7tZY9" alt="Gorakhpur Sports City: गोरखपुर को मिल सकती है &#39;स्पोर्ट्स सिटी&#39; की सौगात" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इनमें 100-150 एकड़ जमीन में स्पोर्टस सिटी होगी। बाकी जमीन में खास किस्म के बहुउद्देश्यीय&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}