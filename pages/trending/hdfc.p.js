import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>HDFC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,HDFC"/>
        <meta name="description" content="Trending News about HDFC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>HDFC</h1>
            <Image width={800} height={500} src="https://images.cnbctv18.com/wp-content/uploads/2019/09/merger-1019x573.jpg" alt="HDFC"/>
            <h3>Recent News</h3>
            <a href='https://www.cnbctv18.com/personal-finance/hdfc-merger-with-hdfc-bank-what-will-happen-to-mutual-fund-portfolios-nse-investments-15054111.htm'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HDFC twins merger: What will happen to the mutual fund portfolios?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS1To5CrgTBBqqdtYnEBfL7mGYp-Ejyu4SokvR1KygZPEPDx7XNWK-Pw3U2nue26PFsFYAgJB9A" alt="HDFC twins merger: What will happen to the mutual fund portfolios?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The merger proposal of HDFC Bank and HDFC Ltd has already got all the approvals, barring shareholders&#39; nod (scheduled on November 25) along with the final&nbsp;...</p></div>
            </div>
        </a><a href='https://jantaserishta.com/business/hdfc-axis-icici-bank-credit-cards-have-the-most-1707803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQu45o1nQpnNYfxOzRt3oZNFE7pUHgcNMgL7SfUHVB7Yu9uFRSg8ChnOf-wMpbQ93G_bW3vj-Rc" alt="HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वित्त वर्ष 2023 की जुलाई-सितंबर तिमाही में में क्रेडिट कार्ड की संख्या में उल्लेखनीय&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}