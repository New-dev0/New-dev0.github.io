import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>England football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,England football"/>
        <meta name="description" content="Trending News about England football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>England football</h1>
            <Image width={800} height={500} src="https://e0.365dm.com/22/09/1600x900/skysports-gary-neville-book-cover_5911141.jpg?20220927141931" alt="England football"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/news/11095/12706357/gary-neville-exclusive-interview-on-the-attempted-murder-of-english-football-and-his-vision-for-a-better-game'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gary Neville exclusive interview: On the &#39;attempted murder&#39; of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQnBwAeLN1tVamNB5Flwc1Mgj5431BUc1Gw25vQLPWz841lJD957wJ8ktYOwgFMVynpO_DrSXhy" alt="Gary Neville exclusive interview: On the &#39;attempted murder&#39; of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In this in-depth interview with Sky Sports to coincide with the release of his new book The People&#39;s Game: A View from A Front Seat in Football,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}