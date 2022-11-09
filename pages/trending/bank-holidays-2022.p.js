import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bank Holidays 2022</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bank Holidays 2022"/>
        <meta name="description" content="Trending News about Bank Holidays 2022" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bank Holidays 2022</h1>
            <Image width={800} height={500} src="" alt="Bank Holidays 2022"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/telugu/business/bank-holidays-november-2022-is-guru-nanak-jayanti-2022-and-kartik-purnima-2022-holiday-for-banks-82424'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bank Holidays November 2022: గురు నానక్ జయంతి, కార్తిక పౌర్ణమి ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQs8x9dPfQWL5Q3Op5MM2i2yC0vH5iOuJ_yExBPnPEE4IkyXopr0zFldo2DlyPhXb-E2eC8xvNC" alt="Bank Holidays November 2022: గురు నానక్ జయంతి, కార్తిక పౌర్ణమి ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bank Holidays November 2022: ఇవాళ గురునానక్ జయంతి.. కార్తిక పౌర్ణమి పర్వదినం కూడా కావడంతో పలు&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}