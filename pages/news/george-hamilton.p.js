import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>George Hamilton</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,George Hamilton"/>
        <meta name="description" content="Trending News about George Hamilton" /></Head><Template>
            <h1 style={{fontSize: "30"}}>George Hamilton</h1>
            <Image width={800} height={500} src="https://i2-prod.irishmirror.ie/incoming/article28539443.ece/ALTERNATES/s1200/0_georgePNG.png" alt="George Hamilton"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/soccer/soccer-news/rtes-george-hamilton-sports-black-28539370'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE&#39;s George Hamilton sports black eye as he reports live from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTlBlC32LgwygwXOMdxLf-FDS2IEk3yGkfgA37StsQTOx4ce_hITKwM7s1iyyV0opIH5GEFuKEF" alt="RTE&#39;s George Hamilton sports black eye as he reports live from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The commentator has travelled to the Middle East for the tournament and was reporting back to Peter Collins in studio when viewers noticed the bruising on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thesun.ie/sport/football/9762878/rte-george-hamilton-black-eye-qatar-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RTE legend George Hamilton explains how he suffered black eye ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYL0HVsb2XERMXogdupDyZvmeu_1D1aI89D2C81FL8BHTnatcUT-NHDVzLdqjhavE4Hh6rzKz5" alt="RTE legend George Hamilton explains how he suffered black eye ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RTE viewers were left shocked after seeing George Hamilton&#39;s black eye during the national broadcaster&#39;s coverage of day one of the World Cup.The comm.</p></div>
            </div>
        </a><a href='https://extra.ie/2022/11/20/sport/soccernews/george-hamilton-black-eye'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Confusion after RTE&#39;s George Hamilton appears with black eye</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSTh1uLE0wcrM8t0-tBxdqwBNu7aPhPcOyZ7tD6yyEto7-FKouGJSfwQRoOAJFxSd3H2M2SMXVl" alt="Confusion after RTE&#39;s George Hamilton appears with black eye" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With RTE&#39;s coverage of the 2022 World Cup up and running, viewers were a bit confused when it came time for George Hamilton to present his first report&nbsp;...</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/tv-film/viewers-express-concern-rtes-george-28540112'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Viewers express concern as RTE&#39;s George Hamilton appears with ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7qD-mr_SOrt62XSgi4AIrHzI6SCQ6Cqm41TBsczD4HCn5c5wwxtHOx2qXmz-8b0YlSj73sK7G" alt="Viewers express concern as RTE&#39;s George Hamilton appears with ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Viewers of RTE&#39;S coverage of the World Cup, taking place this year in Qatar, expressed confusion and concern as veteran broadcaster George Hamilton appeared&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/sport/soccer/2022/11/21/world-cup-tv-view-rte-pundits-give-it-socks-as-they-defy-fifas-order-to-focus-on-the-football/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup TV View: RTÉ pundits give it socks as they defy Fifa&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRncesPFJVCooSo2dNTgmfjP-zKajEgN9_WmzQ-A6bVcpKhQsSCtwG-jUCLWeZrb6UDGzulf1Db" alt="World Cup TV View: RTÉ pundits give it socks as they defy Fifa&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>RTÉ and BBC devote bulk of build-ups to opening game on all the issues Fifa would have liked ignored.</p></div>
            </div>
        </a>
        </Template></>;
}