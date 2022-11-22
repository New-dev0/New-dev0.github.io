import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>David Beckham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,David Beckham"/>
        <meta name="description" content="Trending News about David Beckham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>David Beckham</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/17B80/production/_127725179_lycettgetty.jpg" alt="David Beckham"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/entertainment-arts-63703831'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Joe Lycett did not shred £10k in David Beckham Qatar protest</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbp7YlT6w8mXgQXdbcZMdoe2qIXNxWwrDQPn6j36KrEH7EZgn9MPW7f-SfmSVeB5Lo-417hDBa" alt="Joe Lycett did not shred £10k in David Beckham Qatar protest" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The comedian has donated his David Beckham Qatar World Cup protest money to LGBT charities.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/uk-comedian-destroys-11-900-after-this-fifa-wc-challenge-to-david-beckham-101669028744553.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UK comedian destroys $11900 after this FIFA WC challenge to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSiSUQes52PmYT2ZS_3gCdytm0fDvnWgKTwiHZY3ac_5dURdGYMHnt4nSPgtpi0zymEydsWY4NX" alt="UK comedian destroys $11900 after this FIFA WC challenge to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup: David Beckham, who played for Manchester United and Real Madrid midfielder, is working for Qatar, which has been criticised for human rights&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/21/football/joe-lycett-david-beckham-qatar-world-cup-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>British comedian Joe Lycett did not shred $11000 over David ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnpNPj70Ud1-9UkFHLlSB72UuY5f0cVIiNcPJ9Yq_Zx8OgPcIa3iw5EEL8yLVU5rAVe0vRo31U" alt="British comedian Joe Lycett did not shred $11000 over David ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lycett had called on English football icon David Beckham to step down from being an ambassador for Qatar during the World Cup due to the country&#39;s human rights&nbsp;...</p></div>
            </div>
        </a><a href='https://fortune.com/2022/11/21/comedian-joe-lycett-condemns-david-beckham-multimillion-deal-ambassador-qatar-world-cup-fake-stunt-shredding-12000-money/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comedian condemns David Beckham&#39;s multimillion-dollar deal to be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS1qeudBa16-Jf4SNjpB3LjlIloBuZVculI76QjaRscwRhzeDFNt-mhUuvqjJ1g7L_rvq-fCZUU" alt="Comedian condemns David Beckham&#39;s multimillion-dollar deal to be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>British Comedian Joe Lycett appeared to have shredded almost $12,000 (£10,000) of his own money in protest of world-famous former soccer player David&nbsp;...</p></div>
            </div>
        </a><a href='https://deadline.com/2022/11/david-beckham-joe-lycett-shredded-cash-fake-1235178473/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comedian Joe Lycett Sets Record Straight About David Beckham ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTUo--UP_poWeaIQzB_tv9Ft9OnLguyaIoUzppvfWj6jxHRs3Fj2TnhIviu2XuZl1wTl1ETAlhk" alt="Comedian Joe Lycett Sets Record Straight About David Beckham ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Broadcaster Joe Lycett has revealed the £10000 he shredded in protest of David Beckham&#39;s ambassador role at the Qatari World Cup was not real cash.</p></div>
            </div>
        </a><a href='https://www.sbs.com.au/news/article/comedian-joe-lycett-shreds-17-000-in-protest-against-david-beckhams-qatar-world-cup-partnership/6n9u87zb1'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Comedian Joe Lycett &#39;shreds&#39; $17000 in protest against David ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSzj4bJFn33IB8vdlY_Qr8v3YjYbA35EiMFvJ2MVrTWOHDWl8nhSBuCBciIvdw0-o2HiTXwjNXR" alt="Comedian Joe Lycett &#39;shreds&#39; $17000 in protest against David ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Last week, the English comedian publicly urged Beckham to end his promotional partnership with the country over its treatment of LGBTIQ+ people.</p></div>
            </div>
        </a>
        </Template></>;
}