import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mark Wood</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mark Wood"/>
        <meta name="description" content="Trending News about Mark Wood" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mark Wood</h1>
            <Image width={800} height={500} src="https://media.crictracker.com/media/attachments/1667647481009_England-Cricket-Team.jpeg" alt="Mark Wood"/>
            <h3>Recent News</h3>
            <a href='https://www.crictracker.com/cricket-news/mark-wood-is-a-very-intelligent-bowler-he-offers-a-lot-more-than-just-pace-farokh-engineer/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mark Wood is a very intelligent bowler, he offers a lot more than just ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXuH13X2RYYj2vbO-K65H4TwPmCVYGSaJUAwAzTdA7rBbEjCK7kfCWSu2tMQa0TJMGR6GPtFo6" alt="Mark Wood is a very intelligent bowler, he offers a lot more than just ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Indian cricketer Farokh Engineer feels that England quick Mark Wood is an intelligent bowler and can offer a lot more than just pace.</p></div>
            </div>
        </a>
        </Template></>;
}