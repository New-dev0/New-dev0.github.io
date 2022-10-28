import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Amitabh Bachchan news</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Amitabh Bachchan news"/>
        <meta name="description" content="Trending News about Amitabh Bachchan news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Amitabh Bachchan news</h1>
            <Image width={800} height={500} src="" alt="Amitabh Bachchan news"/>
            <h3>Recent News</h3>
            <a href='https://zeenews.india.com/hindi/auto-news/amitabh-bachchan-car-collection/1412926'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Star Ki Car: इन कारों में सफर करते हैं Amitabh Bachchan, ऐसा है उनका ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNwJQY22t676X_fz5A24u9u_hsSfKLKzNW9Kv85kKpC12G-hL7PWOnq2zhTPAzQtuwgkDy7Suu" alt="Star Ki Car: इन कारों में सफर करते हैं Amitabh Bachchan, ऐसा है उनका ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amitabh Bachchan: अगर आप अमिताभ बच्चन के फैन हैं तो आप उनकी निजी जिंदगी में भी दिलचस्पी रखते&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/entertainment/television/kaun-banega-crorepati-14-when-amitabh-bachchan-jumped-into-a-herd-of-30-and-40-camels-2246716'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>जब 30-40 ऊंटों के झुंड में कूदे Amitabh Bachchan, सिर पर लगी चोट, हो ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcThtw2wYd4XkEMtI3raLlc4AtLkeoqsntls85M9GNci5Xcftf8AAGr3YbQu5uqGVGHEg--oQEpD" alt="जब 30-40 ऊंटों के झुंड में कूदे Amitabh Bachchan, सिर पर लगी चोट, हो ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kaun Banega Crorepati 14: क्विज शो &#39;कौन बनेगा करोड़पति 14&#39; चर्चा में बना है. शो में होस्ट अमिताभ&nbsp;...</p></div>
            </div>
        </a><a href='https://www.koimoi.com/entertainment-news/kbc-14-amitabh-bachchan-shares-how-he-injured-himself-while-shooting-for-eklavya/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KBC 14: Amitabh Bachchan Shares How He Injured Himself While ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRDiGSC-EXc7p05CYSw9At06cS7SxtKzYWmZBWoAbGHDwYEf8MASkxL3pnZkPEyacKRazrIl-L7" alt="KBC 14: Amitabh Bachchan Shares How He Injured Himself While ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amitabh Bachchan revealed his shooting experience when he had to jump into a herd of camels for 2007 action movie Eklavya: The Royal Guard.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/entertainment/bollywood-amitabh-bachchan-get-injured-while-shooting-among-camels-kaun-banega-crorepati-throwback-an-4806131.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>अमिताभ बच्चन एक बार ऊंटों के बीच शूटिंग करते समय हो गए थे घायल, बिग बी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRcxAMTfOEEFOSVqso-e76vHiS0diO3DLvPv8SeZx3AhsEcH6WLs93CxVbWqZpk_v834LX4-Ogw" alt="अमिताभ बच्चन एक बार ऊंटों के बीच शूटिंग करते समय हो गए थे घायल, बिग बी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अमिताभ बच्चन (Amitabh Bahchcan) टीवी शो &#39;कौन बनेगा करोड़पति&#39; के सेट पर अपनी निजी और पेशेवर&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}