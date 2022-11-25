import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Michelle Mone</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Michelle Mone"/>
        <meta name="description" content="Trending News about Michelle Mone" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Michelle Mone</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/ae306f9946fd1a2e14d971626f2d31ea28ea18e8/874_107_2321_1393/master/2321.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=e723d615e627d7a131524cf4f353b56a" alt="Michelle Mone"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/politics/2022/nov/24/tories-run-for-the-hills-rather-than-face-labour-over-michelle-mone-and-ppe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tories run for the hills rather than face Labour over Michelle Mone ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQmcA4fzeQbW_jrJZq1hQZt8WvJQy5vY88SoNAO4cIJvyeR4chmKWimAFNqEOP5cxwxY_XwHKkH" alt="Tories run for the hills rather than face Labour over Michelle Mone ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When a minister was needed to field Angela Rayner&#39;s questions over the VIP fast lane, luckless Neil O&#39;Brien was the only one to pick up the phone.</p></div>
            </div>
        </a>
        </Template></>;
}