import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dieter Hallervorden</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dieter Hallervorden"/>
        <meta name="description" content="Trending News about Dieter Hallervorden" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dieter Hallervorden</h1>
            <Image width={800} height={500} src="https://media.news.de/images/857785587/images/55/c6/7d4e97b0f6f7ab308145434b7fa4/nopic/no_pic/1200/675/1/1/-/42/1024/576/-/-/dieter-hallervorden-performt-auf-der-buehne_857785587_1200x675_c628ce4fd7197f4c5295bbff43550b1a.jpg" alt="Dieter Hallervorden"/>
            <h3>Recent News</h3>
            <a href='https://www.news.de/promis/856624119/dieter-hallervorden-tour-2022-2023-termine-und-tickets-fuer-tournee-und-auftritte-in-dessau-rosslau-und-co/1/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dieter Hallervorden auf Tour 2022/2023: Termine und Städte: Hier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTmM63MZQFnJkEHzasr1m89yE4X_aLOgTbvlHLW3uT2ZfDE8uiJab1aDp4XzeujfwptmWroGdt0" alt="Dieter Hallervorden auf Tour 2022/2023: Termine und Städte: Hier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dieter Hallervorden geht wieder auf Tour! Mehr über die Termine und Städte seiner Tournee sowie Infos zu den Tickets erfahren Sie hier bei news.de.</p></div>
            </div>
        </a>
        </Template></>;
}