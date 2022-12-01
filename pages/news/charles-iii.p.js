import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Charles III</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Charles III"/>
        <meta name="description" content="Trending News about Charles III" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Charles III</h1>
            <Image width={800} height={500} src="" alt="Charles III"/>
            <h3>Recent News</h3>
            <a href='https://krdo.com/news/2022/11/30/king-charles-iiis-three-day-visit-to-canada-cost-taxpayers-at-least-1-4-million/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>King Charles III&#39;s three-day visit to Canada cost taxpayers at least ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="King Charles III&#39;s three-day visit to Canada cost taxpayers at least ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The $1.4 million does not include government, military and police salaries, or normal operational costs, which would make the true bill higher. It also does not&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}