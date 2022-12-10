import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mercy Johnson</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mercy Johnson"/>
        <meta name="description" content="Trending News about Mercy Johnson" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mercy Johnson</h1>
            <Image width={800} height={500} src="https://www.bellanaija.com/wp-content/uploads/2022/12/hqdefault-2-e1670576709218.jpeg" alt="Mercy Johnson"/>
            <h3>Recent News</h3>
            <a href='https://www.bellanaija.com/2022/12/waje-mercy-johnson-okojie-mercys-menu-season-3/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Waje &amp; Mercy Johnson Okojie discuss motherhood, music ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQghvdcenOVGX5zyWUl0pN6qkNyqQ_Z7GyqOBr0nGzTRO-kd6yVOKeO_mt9vVUCy7X-_Bf0uWjf" alt="Waje &amp; Mercy Johnson Okojie discuss motherhood, music ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In this episode of “Mercy&#39;s Menu,” Mercy Johnson Okojie is joined by the beautiful and talented music star, songwriter and actress, Waje.</p></div>
            </div>
        </a>
        </Template></>;
}