import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Zara</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Zara"/>
        <meta name="description" content="Trending News about Zara" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Zara</h1>
            <Image width={800} height={500} src="https://images.english.elpais.com/resizer/IqdGhVm6qWnVDY_E4D_v_44P9nI=/1200x0/filters:focal(1979x1044:1989x1054)/cloudfront-eu-central-1.images.arcpublishing.com/prisa/VGUNGRHO4OAR6FSRPCXLFZKMEE.jpg" alt="Zara"/>
            <h3>Recent News</h3>
            <a href='https://english.elpais.com/economy-and-business/2022-11-25/no-the-owner-of-zara-is-not-going-to-buy-manchester-united.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No, the founder of Zara is not going to buy Manchester United</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBkQbZzS7p75rC-uv5QUngeldgbiOfKZssv77Rh0Rf8a3iMyaSLhx7PO73trcahEfgC0HnVf1m" alt="No, the founder of Zara is not going to buy Manchester United" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A fake news story in a local British outlet quickly gained traction after other media quickly picked it up without fact-checking first.</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/sport/football/football-news/manchester-united-takeover-amancio-ortega-25595842'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara founder Amancio Ortega registers interest in buying ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHtUCkkDwogBAFhPgGKvZ2HMDAGb1k8MNoS2jhUBJftHegFeLDhPdOUJoGlc8DLHMTFwabZnkz" alt="Zara founder Amancio Ortega registers interest in buying ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amancio Ortega is the 19th-richest person in the world, according to Forbes&#39; real-time billionaires list, and has informed senior executives of his interest&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/man-utd-takeover-zara-glazers-28575605'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd takeover: Zara founder Amancio Ortega throws hat in ring ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxWH5U30IBQi_QkcDcaZNPVMxLI45NyV9zvgw6q58LmwaJtZD970BgsVzTKpV_eRtQdmrz2RrK" alt="Man Utd takeover: Zara founder Amancio Ortega throws hat in ring ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Glazers have put Manchester United up for sale and Zara founder Amancio Ortega has expressed an interest in buying the club with Apple and Sir Jim&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/transfer-paper-talk/12709/12755007/zara-owner-amancio-ortega-who-is-aged-86-emerges-as-a-potential-bidder-for-manchester-united-paper-talk'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara owner Amancio Ortega, who is aged 86, emerges as a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZ5zlrDLi3rYV-4HATPT5ZncGSBGpg5UC7WIdwX2SCSveDnu9wzV8joLjcWWXFQaODrg89ecEy" alt="Zara owner Amancio Ortega, who is aged 86, emerges as a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea have reportedly made contact over a deal for Porto goalkeeper Diogo Costa, who is also being tracked closely by Manchester United.</p></div>
            </div>
        </a><a href='https://www.thesun.co.uk/sport/20536303/zara-man-utd-takeover-bidding-richest/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara founder interested in Man Utd takeover as world&#39;s 19th richest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSxI6hzWR_wcexW_uQMjZ0UruNk5krXX9P3iqHBpmVgK1yS33FM6RMEo9nMaS56vUk4whziIMNf" alt="Zara founder interested in Man Utd takeover as world&#39;s 19th richest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ZARA founder Amancio Ortega wants to buy Manchester United, according to reports.The Red Devils were put up for sale last night, with the Glazer famil.</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/football/1701046/man-utd-takeover-zara-chief-amancio-ortega-apple-the-glazers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd takeover: Zara chief Amancio Ortega &#39;interested&#39; in rivalling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDJKE51Q1uC5g6Hi6jzylRjQJZYQ1h-_dxGSA1ZREP2KjOT_7auRXvlCxtxsrWnisXQwqN2NGJ" alt="Man Utd takeover: Zara chief Amancio Ortega &#39;interested&#39; in rivalling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Billionaires are queueing up to bid for Manchester United with the Glazers open to a sale.</p></div>
            </div>
        </a><a href='https://www.besoccer.com/new/zara-founder-amancio-ortega-wants-to-buy-man-utd-1205753'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zara founder Amancio Ortega wants to buy Man Utd!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSbDvuDOBGBOhkJGGZWZo_mDjKLP-pDVkxMQvzUur2po6TnhPPIM13pt0U8DwCTh3YJNXI7GH63" alt="Zara founder Amancio Ortega wants to buy Man Utd!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to information revealed by &#39;Manchester Evening News&#39;, Amancio Ortega wants to buy Man Utd. The Spanish businessman has contacted the club to&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}