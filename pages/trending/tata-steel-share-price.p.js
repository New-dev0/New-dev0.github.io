import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tata steel share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tata steel share price"/>
        <meta name="description" content="Trending News about Tata steel share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tata steel share price</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95197546,width-1070,height-580,imgsize-16602,overlay-etmarkets/photo.jpg" alt="Tata steel share price"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/markets/expert-view/maruti-could-touch-rs-12000-tata-steel-results-could-remain-bad-sandip-sabharwal/articleshow/95197585.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maruti could touch Rs 12000; Tata Steel results could remain bad ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQuK1b_WXzSsTjNAuv5f1xs8He5Z-v7Q28mmkEZCBx8d786NM0glmfqJIV6Dljv3KSEhpd7Xfi7" alt="Maruti could touch Rs 12000; Tata Steel results could remain bad ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Back home, we have seen the growth stocks take it on the chin. For IT services companies, it has not been the best year as well. However, our markets are not&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}