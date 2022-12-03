import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jimmy Fallon</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jimmy Fallon"/>
        <meta name="description" content="Trending News about Jimmy Fallon" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jimmy Fallon</h1>
            <Image width={800} height={500} src="https://pagesix.com/wp-content/uploads/sites/3/2022/12/jimmy-fallon-james-corden-hp.jpg?quality=75&strip=all&w=1200" alt="Jimmy Fallon"/>
            <h3>Recent News</h3>
            <a href='https://pagesix.com/2022/12/02/jimmy-fallon-pokes-fun-at-james-corden-egg-scandal/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jimmy Fallon pokes fun at James Corden and Balthazar owner feud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQUakhZGFPdImNwiRXMJ0NYnsgSt9LkC5tVQ34zcuHgAQUZe-jcegZT7pmaIFQLYyOzU1UWL73X" alt="Jimmy Fallon pokes fun at James Corden and Balthazar owner feud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>James Fallon pokes fun at fellow late-night talk show host James Corden&#39;s recent restaurant scandal.</p></div>
            </div>
        </a>
        </Template></>;
}