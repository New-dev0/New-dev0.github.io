import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amitabh Bachchan</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amitabh Bachchan"/>
        <meta name="description" content="Trending News about Amitabh Bachchan" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amitabh Bachchan</h1>
            <Image width={800} height={500} src="" alt="Amitabh Bachchan"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/hindi/auto-news/amitabh-bachchan-car-collection/1412926'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Ki Car: इन कारों में सफर करते हैं Amitabh Bachchan, ऐसा है उनका ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNwJQY22t676X_fz5A24u9u_hsSfKLKzNW9Kv85kKpC12G-hL7PWOnq2zhTPAzQtuwgkDy7Suu" alt="Star Ki Car: इन कारों में सफर करते हैं Amitabh Bachchan, ऐसा है उनका ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amitabh Bachchan: अगर आप अमिताभ बच्चन के फैन हैं तो आप उनकी निजी जिंदगी में भी दिलचस्पी रखते&nbsp;...</p></div>
            </div>
        </a><a href='https://www.koimoi.com/entertainment-news/kbc-14-amitabh-bachchan-shares-how-he-injured-himself-while-shooting-for-eklavya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KBC 14: Amitabh Bachchan Shares How He Injured Himself While ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDiGSC-EXc7p05CYSw9At06cS7SxtKzYWmZBWoAbGHDwYEf8MASkxL3pnZkPEyacKRazrIl-L7" alt="KBC 14: Amitabh Bachchan Shares How He Injured Himself While ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amitabh Bachchan revealed his shooting experience when he had to jump into a herd of camels for 2007 action movie Eklavya: The Royal Guard.</p></div>
            </div>
        </a>
        </Template></>;
}