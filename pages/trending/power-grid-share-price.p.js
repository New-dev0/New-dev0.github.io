import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Power Grid share price</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Power Grid share price"/>
        <meta name="description" content="Trending News about Power Grid share price" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Power Grid share price</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94451841,width-1070,height-580,imgsize-119548,overlay-etmarkets/photo.jpg" alt="Power Grid share price"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/markets/stocks/news/will-power-grid-benefit-if-it-acquires-pfcs-stake-in-rec/articleshow/94451845.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Will Power Grid benefit if it acquires PFC&#39;s stake in REC?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR0wSGtWeX_riJSAXWR-ksnsz1GiSGoYrSh27NyBmt8ArsS1rxFfujwAxoDP9Y5pAmnVT5SQv6B" alt="Will Power Grid benefit if it acquires PFC&#39;s stake in REC?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>may end up earning an 11% dividend,&quot; the brokerage firm said. While the acquisition price is unknown, REC&#39;s current market price is closer to PFC&#39;s acquisition&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbctv18.com/market/stocks/power-grid-share-price-finance-ministry-no-proposal-of-buying-pfc-stake-in-rec-14803601.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Power Grid recovers as sources from FinMin say that there is no ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSMH1YJKWQqJfAqY5ulZAvQ6dJAPumwzINHIHswXbAPeo3W9bCujmMjifQlfd3CFVFgEMGz03tP" alt="Power Grid recovers as sources from FinMin say that there is no ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shares of PSU Maharatna company Power Grid Corporation of India recovered before closing on Monday, after declining for the seventh straight trading session&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}