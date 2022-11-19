import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Theranos</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Theranos"/>
        <meta name="description" content="Trending News about Theranos" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Theranos</h1>
            <Image width={800} height={500} src="https://media.npr.org/assets/img/2022/11/18/gettyimages-1442569803_wide-84565f2d0e7f0fc4f9039474e18cd0ed098ee5b4-s1400-c100.jpg" alt="Theranos"/>
            <h3>Recent News</h3>
            <a href='https://www.npr.org/2022/11/18/1137606060/elizabeth-holmes-sentenced-11-years-prison'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes sentenced to 11 years in prison for Theranos fraud</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTGzUpY4INZPT3gPC7B2m-H9bMEbWaVeTICe79Tv_xAs7lLA4GRgQySWdeYcfNESuGmbmsrDF3g" alt="Elizabeth Holmes sentenced to 11 years in prison for Theranos fraud" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Holmes was convicted on charges related to defrauding investors who poured hundreds of millions of dollars into her blood-testing company, believing it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/technology/elizabeth-holmes-sentence-theranos.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Elizabeth Holmes Is Sentenced to More Than 11 Years for Theranos ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSIXW4i0ezoPTnN11vY3tgqXhv2m8odY8-Ol9lhqTWuypsI7bbzXeyDhdUsMn9Bnzwuosdv121K" alt="Elizabeth Holmes Is Sentenced to More Than 11 Years for Theranos ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ms. Holmes was convicted in January of four counts of wire fraud for deceiving investors with claims about her blood testing start-up Theranos.</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/11/18/holmes-11-year-prison-sentence-00069561'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Holmes gets more than 11 years in prison for Theranos scam</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQRrwDQGSGXdD1zN8HZSJXv6YsrwQHvxSzbO5u47WPcZihTL3FBPnxU-U46WuEZdFa7bbW6rZtw" alt="Holmes gets more than 11 years in prison for Theranos scam" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A federal judge on Friday sentenced disgraced Theranos CEO Elizabeth Holmes to more than 11 years in prison for duping investors in the failed startup that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/us-news/2022/nov/18/elizabeth-holmes-theranos-trial-sentencing'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Theranos founder Elizabeth Holmes sentenced to more than 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSYzfjPaGCa31o3l7DgfxtKTXA16wwg75WNNL-1d5usriRhjeM8K8L5XIeW6xA4pbSD8kD48xO5" alt="Theranos founder Elizabeth Holmes sentenced to more than 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>She was convicted in January on four counts of deceiving investors with fraudulent claims on her blood testing startup.</p></div>
            </div>
        </a>
        </Template></>;
}