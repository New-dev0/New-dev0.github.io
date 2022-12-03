import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Alex Jones</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Alex Jones"/>
        <meta name="description" content="Trending News about Alex Jones" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Alex Jones</h1>
            <Image width={800} height={500} src="https://thumbnails.texastribune.org/FHjy9q-FEmnMhU5xZXJv5KVFQQA=/1200x630/filters:quality(95):focal(0x0:3000x2000)/static.texastribune.org/media/files/93c93d10bf28059fcf0268e75c7f4c69/Reopen%20Texas%20Protest%20JV%20TT%2012.jpg" alt="Alex Jones"/>
            <h3>Recent News</h3>
            <a href='https://www.texastribune.org/2022/12/02/alex-jones-bankruptcy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones files for bankruptcy after Sandy Hook judgments</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBhZQ63A2uEkHzZZx8BOm949ifjxIO9w0_CdmCbv5l3ok2xWcjlOr-bIc-wq5VlliXLxOBzqDq" alt="Alex Jones files for bankruptcy after Sandy Hook judgments" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>InfoWars host and conspiracy theorist Alex Jones has filed for bankruptcy in a Texas court after being ordered by multiple courts to pay almost $1.5 billion in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/02/business/alex-jones-bankruptcy/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones has filed for personal bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBHyh1dB8VTJVjCmD3AdqnXwpjup1FSz5ERjP5s5dUg5c3KMJVstHWOB15pwZCgAbEtTSQRYK0" alt="Alex Jones has filed for personal bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Right-wing conspiracy theorist Alex Jones filed for personal Chapter 11 bankruptcy protection in a Texas court on Friday, according to court documents.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/12/02/us/politics/alex-jones-bankruptcy.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones Files for Bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTtV49s0Ufezfus280bokrdMZbPaaPFhu3r1v3DNgZGE4dQz4gYpED8t368cm53AasulxgDlQyO" alt="Alex Jones Files for Bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Infowars broadcaster has been ordered by courts to pay about $1.5 billion in damages to Sandy Hook families hurt by his promotion of conspiracy&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/nation/2022/12/02/alex-jones-bankruptcy-sandy-hook/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones files for bankruptcy, owing nearly $1.5B to Sandy Hook ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQDZWturUDV4Jxw1kegil7I9cRiJn2Zh-eiUMdfds8d-gVFP-cW4pF-cfXqKZkDzB2l-VFjsGrF" alt="Alex Jones files for bankruptcy, owing nearly $1.5B to Sandy Hook ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Infowars founder lost a series of court battles over his years of lies that the Sandy Hook Elementary School shooting was a hoax.</p></div>
            </div>
        </a><a href='https://www.politico.com/news/2022/12/02/alex-jones-files-bankruptcy-00071903'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Infowars host Alex Jones files for personal bankruptcy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSSs6vvu_Eaqq6Lyku-OG_rP0ToAv8FMsXO7ypBZl5HdSuRaJmz2gTL5ikHxLq2Se10k5hICh-H" alt="Infowars host Alex Jones files for personal bankruptcy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jones faces nearly $1.5 billion in court judgments over conspiracy theories he spread about the Sandy Hook school massacre.</p></div>
            </div>
        </a><a href='https://www.reuters.com/world/us/alex-jones-files-bankruptcy-following-sandy-hook-verdict-court-filing-2022-12-02/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Jones files for bankruptcy following $1.5 billion Sandy Hook ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS9mrtH8A9fUtthCQJRL7hm2vqDmtddXF0t3P8CS3_lLO7t1KQBgAa3YKJXvMFOTgggIG9d1oXl" alt="Alex Jones files for bankruptcy following $1.5 billion Sandy Hook ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Conspiracy theorist Alex Jones filed for bankruptcy on Friday, after he and the parent of his Infowars website were ordered to pay about $1.5 billion for&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}