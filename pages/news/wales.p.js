import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Wales</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Wales"/>
        <meta name="description" content="Trending News about Wales" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Wales</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/7D06/production/_127660023_ebiketwokids-1.jpg" alt="Wales"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/uk-wales-63556273'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sustainability: E-bike loans aim to tame Wales&#39; hilly towns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS8i5dgUagLEEvrrnDt2Y20etfMuesXzU96venQmMUYZAs3MgkNz6pmL2OOg9NqQnHdo4mA6rJd" alt="Sustainability: E-bike loans aim to tame Wales&#39; hilly towns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>One family can now get both their children around on one bike instead of using a car.</p></div>
            </div>
        </a><a href='https://apnews.com/article/sports-europe-australia-rugby-wales-4abe17338fa762752d56a9f9e5fdfdb0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wallabies come back from 21 down to overhaul Wales 39-34</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRInPGWA6Qs7cQMQ7AP6PO7j9bilFQ88Ar3SmBmjxwlH4oW07TihKNFr-AjlqPMZO-8Dd6Y_XBr" alt="Wallabies come back from 21 down to overhaul Wales 39-34" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CARDIFF, Wales (AP) — Australia came from 21 points down with 23 minutes left to overhaul Wales 39-34 in an astonishing turnaround in their Cardiff rugby&nbsp;...</p></div>
            </div>
        </a><a href='https://www.barrons.com/articles/australia-beat-wales-in-remarkable-comeback-01669483506'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia&#39;s Remarkable Comeback Piles Pressure On Wales Boss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Australia&#39;s Remarkable Comeback Piles Pressure On Wales Boss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia came from 34-13 down to beat Wales 39-34 in an extraordinary Autumn Nations Series Test at The Principality Stadium on Saturday which will pile&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/ca/rugby-union/news/wales-vs-australia-live-stream-tv-channel-lineups-2022/xwegtwx9ba2xfjxhuv8dudp5'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales vs. Australia result, highlights and analysis as Wallabies ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgENT6UPJAlywv-LqE2_E8pBNsXf5lNVbcicbKXavkhhqlStfTok75vEs9xsFq1ejiJnhAg1-0" alt="Wales vs. Australia result, highlights and analysis as Wallabies ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales and Australia closed out their autumn 2022 campaigns by putting on one heck of a show in Cardiff, as the Wallabies came back from 34-13 down to win&nbsp;...</p></div>
            </div>
        </a><a href='https://news.yahoo.com/wales-vs-australia-live-rugby-140221669.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Wales vs Australia LIVE rugby: Latest score and updates as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSEx178uSfm10igQSQOuEZRsB84UkLmqnS-l8t4C0tShdf6lRjD0ADtccuqP3X-lq89pN90W-rK" alt="Wales vs Australia LIVE rugby: Latest score and updates as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Wales face the Wallabies looking to bounce back from their embarrassing defeat to Georgia last week.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/26/wales-australia-autumn-nations-series-rugby-union-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia overturn 21-point deficit to complete wild comeback over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRzQNtj2tfpHrXm2RB7TiQBBSfrmbYz0B44DpzPYU7NGN5GdapVEMp_Keck67RPTzH_c9Ut5484" alt="Australia overturn 21-point deficit to complete wild comeback over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mark Nawaqanitawase scored twice as the Wallabies rallied from 34-13 down to win 39-34 and add to Wales&#39;s woes.</p></div>
            </div>
        </a>
        </Template></>;
}