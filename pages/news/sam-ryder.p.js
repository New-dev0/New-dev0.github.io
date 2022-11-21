import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sam Ryder</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sam Ryder"/>
        <meta name="description" content="Trending News about Sam Ryder" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sam Ryder</h1>
            <Image width={800} height={500} src="https://i2-prod.essexlive.news/incoming/article7075858.ece/ALTERNATES/s1200/0_download-4.jpg" alt="Sam Ryder"/>
            <h3>Recent News</h3>
            <a href='https://www.essexlive.news/news/celebs-tv/eurovisions-sam-ryder-involved-special-7801368'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eurovision&#39;s Sam Ryder to be involved in special Royal Variety ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQa04zrQT-_FqyAYEyAG4Z0XU82msJs9TY-JWgo3-0-GDeHQUm0S4Jgj0BSjl-sb5fZdXuYXd6Q" alt="Eurovision&#39;s Sam Ryder to be involved in special Royal Variety ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Essex&#39;s Eurovision star Sam Ryder is due to feature at a special Royal Variety Show honouring Queen Elizabeth II later this year.</p></div>
            </div>
        </a>
        </Template></>;
}