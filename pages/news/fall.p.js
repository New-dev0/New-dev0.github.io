import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Fall</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Fall"/>
        <meta name="description" content="Trending News about Fall" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Fall</h1>
            <Image width={800} height={500} src="" alt="Fall"/>
            <h3>Recent News</h3>
            <a href='https://telugu.filmibeat.com/reviews/anjali-sp-charan-web-series-full-review-and-rating-in-telugu-115387.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fall Series Review: అంజలి కొత్త సిరీస్ &#39;ఫాల్&#39;.. ఆ పాత్రలో తొలిసారిగా సింగర్ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTKExDnl0QeGzwJEI5J31WPjYD2Frdb8e4OeTyxqr_SMeJR16Gqfks9IAxRbWaywyneV44ldVRv" alt="Fall Series Review: అంజలి కొత్త సిరీస్ &#39;ఫాల్&#39;.. ఆ పాత్రలో తొలిసారిగా సింగర్ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>రేటింగ్: 2.5/5. టైటిల్: ఫాల్ వెబ్ సిరీస్ నటీనటులు: అంజలి, ఎస్పీ చరణ్, సోనియా అగర్వాల్,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eenadu.net/telugu-news/movies/fall-web-series-review-starring-anjali-sp-charan-sonia-agarwal/0203/122230302'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fall Review: రివ్యూ: ఫాల్‌.. అంజలి, ఎస్పీ చరణ్‌ల సిరీస్‌ ఎలా ఉందంటే?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT9aB4Xc7FcpoRj_hW1RXnchGwAeSMYclGsDbZdcgBWX7Lrz9qkfBqlpZLMenSDU0SokyV5JlBr" alt="Fall Review: రివ్యూ: ఫాల్‌.. అంజలి, ఎస్పీ చరణ్‌ల సిరీస్‌ ఎలా ఉందంటే?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>అంజలి, ఎస్పీ చరణ్‌, సోనియా అగర్వాల్‌ తదితరులు ప్రధాన పాత్రలు పోషించిన వెబ్‌ సిరీస్‌&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}