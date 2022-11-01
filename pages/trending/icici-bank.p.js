import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Icici bank</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Icici bank"/>
        <meta name="description" content="Trending News about Icici bank" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Icici bank</h1>
            <Image width={800} height={500} src="https://jantaserishta.com/h-upload/2022/10/31/2172516-untitled-19-copy.jpg" alt="Icici bank"/>
            <h3>Recent News</h3>
            <a href='https://jantaserishta.com/business/hdfc-axis-icici-bank-credit-cards-have-the-most-1707803'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQu45o1nQpnNYfxOzRt3oZNFE7pUHgcNMgL7SfUHVB7Yu9uFRSg8ChnOf-wMpbQ93G_bW3vj-Rc" alt="HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वित्त वर्ष 2023 की जुलाई-सितंबर तिमाही में में क्रेडिट कार्ड की संख्या में उल्लेखनीय&nbsp;...</p></div>
            </div>
        </a><a href='https://www.punjabkesari.in/business/news/hdfc-axis-icici-bank-credit-cards-declined-the-most-1704324'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक घटे</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="HDFC, ऐक्सिस, आईसीआईसीआई बैंक के क्रेडिट कार्ड सर्वाधिक घटे" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>वित्त वर्ष 2023 की जुलाई-सितंबर तिमाही में में क्रेडिट कार्ड की संख्या में उल्लेखनीय&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}