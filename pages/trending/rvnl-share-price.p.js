import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RVNL Share Price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RVNL Share Price"/>
        <meta name="description" content="Trending News about RVNL Share Price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RVNL Share Price</h1>
            <Image width={800} height={500} src="" alt="RVNL Share Price"/>
            <h3>Recent News</h3>
            <a href='https://www.livehindustan.com/business/story-rvnl-share-price-surges-62-percent-in-16-trading-days-after-lot-of-contracts-7357962.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>इस कंपनी को मिल रहे एक से बढ़कर एक कॉन्ट्रैक्ट, 62% चढ़ गया शेयर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHEtSkkj-6Vgjv_SoWvyhphuElxLa13YUmTdNDLL5EGiPcz_jOXBAOmlua6Ph8fHAr_rM3dV0X" alt="इस कंपनी को मिल रहे एक से बढ़कर एक कॉन्ट्रैक्ट, 62% चढ़ गया शेयर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रेलवे इंफ्रास्ट्रक्चर कंपनी रेल विकास निगम (RVNL) के शेयरों ने मंगलवार के इंट्रा-डे&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}