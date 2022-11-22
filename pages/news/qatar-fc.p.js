import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Qatar FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Qatar FC"/>
        <meta name="description" content="Trending News about Qatar FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Qatar FC</h1>
            <Image width={800} height={500} src="http://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/video/2022/11/21/16x9_Koulibaly_From_Cobham_to_Qatar_Standard_TRAINING_WIDE" alt="Qatar FC"/>
            <h3>Recent News</h3>
            <a href='https://www.chelseafc.com/en/video/kalidou-koulibaly-or-from-cobham-to-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kalidou Koulibaly | From Cobham to Qatar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEJy3eckA9IuVbQYIsgkQ1OTV36Lb5mMoQ-Ju_32nQPDrXDXRk_ZANYUhzD6AdK6m2VQpySD0z" alt="Kalidou Koulibaly | From Cobham to Qatar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hear Kalidou Koulibaly describes what it will mean to wear the Senegal national team shirt at the 2022 FIFA World Cup in Qatar...</p></div>
            </div>
        </a>
        </Template></>;
}