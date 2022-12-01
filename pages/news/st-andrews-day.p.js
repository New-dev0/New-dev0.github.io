import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>St Andrews Day</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,St Andrews Day"/>
        <meta name="description" content="Trending News about St Andrews Day" /></Head><Template>
            <h1 style={{fontSize: "30"}}>St Andrews Day</h1>
            <Image width={800} height={500} src="" alt="St Andrews Day"/>
            <h3>Recent News</h3>
            <a href='https://www.scotsman.com/heritage-and-retro/heritage/st-andrews-day-2022-who-is-saint-andrew-and-why-does-scotland-celebrate-him-3933987'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St Andrew&#39;s Day 2022: Who is Saint Andrew and why does Scotland ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRVSo4H55nmSqOOpKgUw4jhSv6iNey_-7wA-YoZIwz_SFs1jF13npqx3Cxu53K1COcJ4-E6_1PS" alt="St Andrew&#39;s Day 2022: Who is Saint Andrew and why does Scotland ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scots worldwide are set up to celebrate their patron saint, Saint Andrew, today - but some are wondering when this happens, why we celebrate him,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/tvshowbiz/article-11485585/Phillip-Schofield-Holly-Willoughby-drink-booze-St-Andrews-day.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Phillip Schofield and Holly Willoughby drink booze for St Andrew&#39;s day</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRZtLHVnPZHqHRzKMs8NIqBUyZNx7zBZMvsQkCECxqSBxbDKCIzbTD-vauSbaBNqWuYj1Hox3rc" alt="Phillip Schofield and Holly Willoughby drink booze for St Andrew&#39;s day" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They have a penchant for getting on the liquor live on air and famously hosted This Morning hungover many times after the National Television Awards.</p></div>
            </div>
        </a><a href='https://simpleflying.com/loganair-fleet-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St Andrew&#39;s Day: The Loganair Fleet In 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJJQ-PasJKRF9dYn22_hO54eEiSBAN_-Hgs16mHehdG9SM_wNTWhJGqNkR6LG-s_UBK2k2uYUD" alt="St Andrew&#39;s Day: The Loganair Fleet In 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Scotlands airline has more than 40 aircraft at its disposal. Loganair Embraer Jet Photo: Getty Images. Today marks St Andrew&#39;s day,&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/uk/st-andrews-day-google-doodle-honors-scotlands-patron-saint/articleshow/95893148.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St. Andrew&#39;s Day: Google Doodle honors Scotland&#39;s patron saint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQRgGpHTUziFPCiSn3cRKnn7dX0liAbcLGddMPIKfbhegMrxGI1PQx8NdMd2vTAC43Hgz0bXAxH" alt="St. Andrew&#39;s Day: Google Doodle honors Scotland&#39;s patron saint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>St. Andrew&#39;s Day is the official Scottish national holiday that honors Scotland&#39;s patron saint. This year, Google celebrated the event with a Doodle&nbsp;...</p></div>
            </div>
        </a><a href='https://www.scottishdailyexpress.co.uk/news/scottish-news/alex-salmond-tries-hijack-st-28622230'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alex Salmond tries to &#39;hijack&#39; St Andrew&#39;s Day with rambling ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT6_x9V_y0qGpMQ3gl0GqdkwIQyt8bIKiZYNYy5WjYE1XqAlXj-yzp3DClGcN1egN-xW23PuMkG" alt="Alex Salmond tries to &#39;hijack&#39; St Andrew&#39;s Day with rambling ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He asks voters to sign up to Alba&#39;s made-up declaration, claiming it &quot;resolves Scottish nationhood, Scottish rights, Scottish sovereignty&quot;. Salmond also claims&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailyrecord.co.uk/scotland-now/st-andrews-day-everything-you-28617377'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St Andrew&#39;s Day - everything you need to know about Scotland&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTk_OamWdIBJ1v2azutTkAcEC57uirjdgrgIWKTILz4vRrZclc2HLPq407PPFhdJBirhyWgwzbG" alt="St Andrew&#39;s Day - everything you need to know about Scotland&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vintage engraving of Saint Andrew the Apostle was a Christian Apostle and the brother of Saint Peter.</p></div>
            </div>
        </a><a href='https://www.thenational.scot/news/23161399.holyrood-holds-first-ever-st-andrews-day-celebration/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Holyrood holds first ever St Andrew&#39;s Day celebration</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTtkLpWfvxTrrfFUPBVV31dONHzknXa9QbUCSjQYn2nW5X9Fpm4Zg-tWdWgS8VtKCnxLLSBpZte" alt="Holyrood holds first ever St Andrew&#39;s Day celebration" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SNP MSP Paul McLellan invited politicians, faith leaders, community groups, and international representatives to the inaugural event at Holyrood,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/news/uk/st-andrews-day-2022-scotland-bank-holiday-meaning-history-celebrations-b1043725.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>St Andrew&#39;s Day 2022: Why is the day celebrated and do Scots get a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNeMqJ20MyA9q-QC1tQQGfBdBMelM6nfyyr5cFZ6uneTmHZuWrsjFhFhySiUdPF_oXl7YoRlXv" alt="St Andrew&#39;s Day 2022: Why is the day celebrated and do Scots get a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Each year Scots get together to celebrate the patron saint St Andrew. What takes place on the day and is it a bank holiday?</p></div>
            </div>
        </a><a href='https://www.forces.net/military-life/scotland/st-andrews-day-2022-military-marks-scotlands-patron-saint'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Military community celebrates St Andrew&#39;s Day across social media</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQhLjLc4Vsuu5AKuH8vEfE-5mT49PxabMO6qrQrBC6RMMbfCDCfWfJMAWpwsRgkeGcYi6n3Op4J" alt="Military community celebrates St Andrew&#39;s Day across social media" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Today marks 701 years since St Andrew officially became the patron saint of Scotland.</p></div>
            </div>
        </a><a href='https://www.thecourier.co.uk/fp/opinion/3936988/st-andrews-day-kezia-dugdale-opinion/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>KEZIA DUGDALE: St Andrews day is lacking something – maybe it&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSVjXAc5O5CcESj-RuWXp0rMgcCtdRIeA8ZVbXJp983yWfpoz8uen9GF5G4HcGXCkhiCPfmoqlZ" alt="KEZIA DUGDALE: St Andrews day is lacking something – maybe it&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>photo shows woman with mouth wide open and a Scotland flag painted on her face. Is it time to sing a song of St Andrews&#39;s Day? On this St Andrew&#39;s Day –&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}