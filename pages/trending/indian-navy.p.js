import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Indian Navy</title>
        <meta name="description" content="Trending News about Indian Navy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Indian Navy</h1>
            <Image width={800} height={500} src="https://static.tnn.in/thumb/msid-94422739,imgsize-100,width-1280,height-720,resizemode-75/94422739.jpg" alt="Indian Navy"/>
            <h3>Recent News</h3>
            <a href='https://www.timesnownews.com/jobs/indian-navy-agniveer-ssr-admit-card-2022-likely-soon-on-joinindiannavy-gov-in-know-how-to-download-article-94422739'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Indian Navy Agniveer SSR Admit Card 2022 likely soon on ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnjj2HSF-1PKjEUrv5WpJLbKj0cSAF13Nxe8KZLNWt-wdxWr6LbbyXlfkMGHUwf27hWrvuAsE8" alt="Indian Navy Agniveer SSR Admit Card 2022 likely soon on ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Indian Navy Agniveer SSR Admit Card 2022 is expected to release soon and the candidates who have registered for the exam can check their registered&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}