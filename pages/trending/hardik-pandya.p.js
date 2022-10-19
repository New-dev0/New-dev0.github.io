import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hardik Pandya</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hardik Pandya"/>
        <meta name="description" content="Trending News about Hardik Pandya" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hardik Pandya</h1>
            <Image width={800} height={500} src="https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/10/18/2547133-untitled-design-2022-10-18t091927.261.jpg" alt="Hardik Pandya"/>
            <h3>Recent News</h3>
            <a href='https://www.dnaindia.com/cricket/report-from-virat-kohli-to-hardik-pandya-these-are-the-highest-paid-players-in-india-s-current-t20-world-cup-squad-2993673'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>From Virat Kohli to Hardik Pandya: These are the highest paid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRceJJWPqvnatIC65xcy8A7HfwYw34vI1DVynrJMqCz25sKBFP6-LMHP46QSwCmsyXeU1DmomP5" alt="From Virat Kohli to Hardik Pandya: These are the highest paid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cricket has always been a flamboyant sport. And, the T20 World Cup, which was inaugurated by the Indian victory back in 2007, is back in search of another&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}