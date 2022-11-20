import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kraftklub Wien</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kraftklub Wien"/>
        <meta name="description" content="Trending News about Kraftklub Wien" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kraftklub Wien</h1>
            <Image width={800} height={500} src="https://media04.meinbezirk.at/article/2022/11/15/9/31727839_XXL.jpg" alt="Kraftklub Wien"/>
            <h3>Recent News</h3>
            <a href='https://www.meinbezirk.at/wien/c-lokales/christkindlmaerkte-und-kraftklub-konzert-sorgen-fuer-staus_a5711503'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wochenende in Wien: Christkindlmärkte und Kraftklub-Konzert ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSszfgeQk0QGS1Ko8G2xowVWCeVTweUsuvc3OsC-WGGsaapJlQvUuy7hXyYHynev0gnsXnUoRaT" alt="Wochenende in Wien: Christkindlmärkte und Kraftklub-Konzert ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Am kommenden Wochenende machen wieder zwei Christkindlmärkte auf – und ein Konzert in der Wiener Stadthalle gibt&#39;s auch. Das wird voraussichtlich zu Staus&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}