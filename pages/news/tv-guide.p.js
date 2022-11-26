import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>TV guide</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,TV guide"/>
        <meta name="description" content="Trending News about TV guide" /></Head><Template>
            <h1 style={{fontSize: "30"}}>TV guide</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28574705.ece/ALTERNATES/s1200/0_christmas-tv-movie-film.jpg" alt="TV guide"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/news/irish-news/ireland-christmas-tv-guide-tg4-28581084'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ireland Christmas TV guide as TG4 confirms line-up of festive ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSY0iBcMS5EE8E_gxphzDt26LNawdV-peGohAWnQWV2A2SM6afXr9FtAAtwD_504hXFZ-cTMzFJ" alt="Ireland Christmas TV guide as TG4 confirms line-up of festive ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>TG4 have just released the lineup of films they&#39;ll be showing over the holidays and there are a few Christmas crackers in store.</p></div>
            </div>
        </a>
        </Template></>;
}