import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake in Delhi today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake in Delhi today"/>
        <meta name="description" content="Trending News about Earthquake in Delhi today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake in Delhi today</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95388718,width-1070,height-580,imgsize-36916,overlay-economictimes/photo.jpg" alt="Earthquake in Delhi today"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/india/5-6-magnitude-earthquake-jolts-nepal-rattles-delhi-ncr/articleshow/95388709.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6.3-magnitude earthquake jolts Nepal, rattles Delhi, Noida</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTw6d4f9wIPK7mUserXNs5BTIdXzU_PCyFfLj7iqP8TtGqcLAO0Qpk3w1jusLK0dfnw9t0d9nBL" alt="6.3-magnitude earthquake jolts Nepal, rattles Delhi, Noida" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi earthquake: It hit around 2:00 am (2030 GMT) and sent tremors into northern India. The quake reportedly claimed 6 people in the Doti District of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/india/story/tremors-felt-in-delhi-ncr-2294991-2022-11-09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake of 6.3 magnitude hits Nepal, 6 dead; tremors felt in Delhi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ13BD6kSCKokNsZdnIVvdFsgsFBKKs8Yyd6qixafa73pv6Tw1hLv_PUUuzR7hP_68iYxQF9_1-" alt="Earthquake of 6.3 magnitude hits Nepal, 6 dead; tremors felt in Delhi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An earthquake of 6.3 magnitude hit Nepal in the wee hours of Wednesday. The tremors were felt in parts of Delhi-NCR region.</p></div>
            </div>
        </a><a href='https://tech.hindustantimes.com/tech/news/horrific-earthquake-in-delhi-protect-yourself-check-these-5-earthquake-apps-now-71667976082740.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Horrific Earthquake in Delhi! Protect yourself, check these 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIJl43Gk2nUoSfNB9MYUs974yNQh9XVeqhqYPgLdyOhwRDz7Tkjf6ojXFVQV4nU76fef93dvUi" alt="Horrific Earthquake in Delhi! Protect yourself, check these 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi experienced strong tremors from the 6.3 magnitude earthquake in Nepal today. To make sure you&#39;re protected from such deadly disasters, check out these&nbsp;...</p></div>
            </div>
        </a><a href='https://www.financialexpress.com/lifestyle/science/massive-earthquake-jolts-delhi-ncr-usgs-maps-nepals-dipayal-as-epicentre/2795151/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6.3 magnitude earthquake jolts Nepal, strong tremors felt in Delhi-NCR</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRARtK7SGosjyFh3v6x7nd6GixSvrL-wrLu8lwLvmzbLcdmP3NB9itMHWzJTXUwjQ8EKor0CUGc" alt="6.3 magnitude earthquake jolts Nepal, strong tremors felt in Delhi-NCR" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: Several people living in Delhi-NCR took to Twitter to express their anguish and shock.</p></div>
            </div>
        </a><a href='https://www.ndtv.com/india-news/strong-earthquake-tremors-felt-in-delhi-neighbouring-areas-3502604'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Strong Tremors In Delhi, Neighbouring Areas After 6.3 Magnitude ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQukr9dj7Wai0VnC8mrdGTfV_8tD_-1-w_9SkUoYpYxb7pmLGQdludOsIlOzSf8clR3_zDdFLD-" alt="Strong Tremors In Delhi, Neighbouring Areas After 6.3 Magnitude ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi around 2 am after a 6.3 magnitude earthquake struck in Nepal.</p></div>
            </div>
        </a><a href='https://www.moneycontrol.com/news/trends/delhi-residents-share-videos-memes-after-late-night-earthquake-tremors-jolt-capital-9475011.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi residents share videos, memes after late-night earthquake ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRnbHjnO1a7E9TGSWKVJ0OVo5t0vc4fLWNyPMgrqrmEKgfMFpADYZIWDROETJ8RJSj2FkhZbMZk" alt="Delhi residents share videos, memes after late-night earthquake ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Strong tremors were felt in Delhi and adjoining areas from a 6.3 magnitude earthquake that struck Nepal in the early hours of Wednesday.</p></div>
            </div>
        </a>
        </Template></>;
}