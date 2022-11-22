import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands"/>
        <meta name="description" content="Trending News about Netherlands" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands</h1>
            <Image width={800} height={500} src="" alt="Netherlands"/>
            <h3>Recent News</h3>
            <a href='https://www.washingtonpost.com/business/interactive/2022/netherlands-agriculture-technology/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands is the second-largest exporter of agricultural products</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSE2xUmfq_RzJlJqlk9WrsuY4vDXZBk8hObA3d9QeZpumDsdVAnlno9PFZVeWNcGjuUeVb-VuDW" alt="Netherlands is the second-largest exporter of agricultural products" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Netherlands has used advances in vertical farming, seed technology and robotics to become the world&#39;s second-largest agriculture exporter.</p></div>
            </div>
        </a>
        </Template></>;
}