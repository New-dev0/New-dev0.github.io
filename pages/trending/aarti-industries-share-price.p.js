import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Aarti Industries Share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Aarti Industries Share price"/>
        <meta name="description" content="Trending News about Aarti Industries Share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Aarti Industries Share price</h1>
            <Image width={800} height={500} src="https://bl-i.thgim.com/public/incoming/gjdt9/article66029838.ece/alternates/FREE_1200/IMG_CCI_UDHindu_KSL_UNG4_2_1_TJAAH70R.jpg" alt="Aarti Industries Share price"/>
            <h3>Recent News</h3>
            <a href='https://www.thehindubusinessline.com/portfolio/news-analysis/aarti-industries-how-demerger-will-impact-stock/article66029582.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aarti Industries: How demerger will impact stock</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQURN0i22fVIN64as7sy5B4wovla3a_hiFYCeXCe0MY74AaVLaeU_cMIe8WjX7tuD6KbevAvY4v" alt="Aarti Industries: How demerger will impact stock" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Accordingly, the pharma business (22 per cent of FY22 revenues) will be demerged into APL, and the original speciality chemicals business will continue under&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/business/stocks/aarti-industries-hits-52-week-low-ahead-of-pharma-demerger-record-date-9356601.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aarti Industries hits 52-week low ahead of pharma demerger record ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRuVvSNXYdWNpVfiRnYFe5WHWwaUQI0C9lMltuCcwHATvYDglaX6XYQvhUOID00r7HmcWI4V1_q" alt="Aarti Industries hits 52-week low ahead of pharma demerger record ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As on record date, shareholders will receive one equity share of Aarti Pharmalabs for every four shares of Aarti Industries. The company had announced the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/market-news/news-aarti-industries-demerger-all-you-need-to-know-203938'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aarti Industries demerger: All you need to know</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSrVs5vL2kol72qPXY84K7PQRF_nXG6GU6x02f2mDX4Yyat99cUihMfUQmyjSbU3lvQF9aHwid1" alt="Aarti Industries demerger: All you need to know" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The company has plans to strengthen its manufacturing capability by adding over 50 new products in the pharma division with a Capex of Rs 350-500 crore in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/market/stocks/aarti-industries-shares-52-week-low-pharma-business-demerge-14979601.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Aarti Industries shares fall to 52-week low ahead of Pharma ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR4O0VGmzsNfOhNEhun_iJG3f-255fOrdaryBozamZrCfshIfGqJ1QHRij2q8BwolIAXoM1kzv-" alt="Aarti Industries shares fall to 52-week low ahead of Pharma ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The company&#39;s management said that it aims to demerge its pharma business into a separate entity &#39;Aarti Pharmalabs&#39; as it aims to focus on the pharma&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}