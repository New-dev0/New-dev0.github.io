import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lauri Markkanen</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lauri Markkanen"/>
        <meta name="description" content="Trending News about Lauri Markkanen" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lauri Markkanen</h1>
            <Image width={800} height={500} src="https://library.sportingnews.com/styles/facebook_1200x630/s3/2022-10/nba-plain--fce3b58c-17f5-4362-85f5-02bdbd6212fa.png?itok=-Wa6LKnA" alt="Lauri Markkanen"/>
            <h3>Recent News</h3>
            <a href='https://www.sportingnews.com/ar/nba/news/lauri-markkanen-all-star-explosion-utah-jazz/aaen2goolpnq8laneuzhs9rv'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La explosión de Lauri Markkanen: cómo pasó de jugador de rol en ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQhQQpZpgD4l2hVen835t9cdkaCL7_HOLsfKfsbIb36nuqPxcfXWvtABtK0apcy-T8YAxVeN5h6" alt="La explosión de Lauri Markkanen: cómo pasó de jugador de rol en ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Markkanen encontró su lugar ideal en Utah Jazz, algo que demuestra la importancia de poder encajar en la NBA.</p></div>
            </div>
        </a>
        </Template></>;
}