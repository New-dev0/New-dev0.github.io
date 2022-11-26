import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>BHEL share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,BHEL share price"/>
        <meta name="description" content="Trending News about BHEL share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>BHEL share price</h1>
            <Image width={800} height={500} src="https://images.cnbctv18.com/wp-content/uploads/2022/11/WhatsApp-Image-2022-11-25-at-15.05.02-1019x573.jpeg" alt="BHEL share price"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbctv18.com/market/stocks/bhel-shares-52-week-high-2021-gains-over-60-percent-year-to-date-15260391.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BHEL shares extend gains to a 52-week high; up 35% this year</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEAR5qSG4O4U-cJYpPq68ah7hjmlov3HmYLKzGiT3uBwo3WRXAwVku6Q5tv3zuhk4VWtnHCADS" alt="BHEL shares extend gains to a 52-week high; up 35% this year" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>BHEL shares have been on an uptrend since mid-October after the company signed an agreement with Coal India and NLC India for setting up coal&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}