import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indian cricket team</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Indian cricket team"/>
        <meta name="description" content="Trending News about Indian cricket team" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indian cricket team</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/sites/dailyo//resources/202210/gettyimages-1354674497-1-1200041022050355.jpeg" alt="Indian cricket team"/>
            <h3>Recent News</h3>
            <a href='https://www.dailyo.in/ground/3-cricketers-who-disappeared-from-indian-team-after-short-stints-37512'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 cricketers who disappeared from Indian team after short stints</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRJJrQW9wqh-biW7hF3ItfbQg4g3EPnPTJFnwTw6VBMERDRs1VE4NBwYQfiwUCpHsZYWUhnBzpo" alt="3 cricketers who disappeared from Indian team after short stints" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the recent times, we have seen some good debuts in the Indian cricket team by players like Suryakumar Yadav, Arshdeep Singh, Shubhman Gill and Sanju&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}