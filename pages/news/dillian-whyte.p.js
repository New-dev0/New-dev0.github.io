import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Dillian Whyte</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Dillian Whyte"/>
        <meta name="description" content="Trending News about Dillian Whyte" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Dillian Whyte</h1>
            <Image width={800} height={500} src="https://i2-prod.mirror.co.uk/incoming/article28593248.ece/ALTERNATES/s1200/0_Boxing-in-London-Dillian-Whyte-v-Jermaine-Franklin.jpg" alt="Dillian Whyte"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/sport/other-sport/boxing/breaking-dillian-whyte-earns-win-28593414'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dillian Whyte earns win over Jermaine Franklin in front of Anthony ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS26TqviWtd5B9T6ywfY0Z1ZO4puTfy-4oygXQOxXjDsHBEwykOEkF1UvVqhsLvmWFnLJ-Znutq" alt="Dillian Whyte earns win over Jermaine Franklin in front of Anthony ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Whyte took on unbeaten American Franklin in his first fight since he was stopped by Tyson Fury at Wembley seven months ago.</p></div>
            </div>
        </a><a href='https://www.dazn.com/en-IE/news/boxing/dillian-whyte-vs-jermaine-franklin-live-updates-results-highlights/1709x1xq9ifeh11wowdfxrukgg'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dillian Whyte vs. Jermaine Franklin: Live updates, results, highlights ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUa_iPYEm2VKWTxedRl6N0iewsnd_Ch7F0lrTIuKiglY253nFol2Bqg6ifzGEbLR198A91QV5b" alt="Dillian Whyte vs. Jermaine Franklin: Live updates, results, highlights ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After being knocked out by WBC world heavyweight champion Tyson Fury earlier this year, Dillian Whyte is hoping to bounce back from this setback with a win&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/boxing/63770501'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Whyte labours to majority points win over Franklin</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSd_Am_Nb6lR6gPEn0H_SCIvMSviQ3whetHVKHoS_AGJ8HB_tEX04Ja7q5YlpWClOgFzJfgMX2C" alt="Whyte labours to majority points win over Franklin" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Anthony Joshua watching ringside, Dillian Whyte&#39;s big comeback night fell flat as he laboured past Jermaine Franklin in London.</p></div>
            </div>
        </a><a href='https://www.belfasttelegraph.co.uk/sport/boxing/dillian-whyte-returns-to-winning-ways-with-decision-win-over-jermaine-franklin-42176663.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dillian Whyte returns to winning ways with decision win over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8--ErPXANypGqvsTgfmT0fJBytagEp4-7zZAK-S0Ko8S-T-ha5jdVTAhia_0s2m3QGG4xu2Lb" alt="Dillian Whyte returns to winning ways with decision win over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dillian Whyte earned a majority decision victory over Jermaine Franklin to hand him his first career loss at Wembley Arena.</p></div>
            </div>
        </a><a href='https://www.skysports.com/boxing/news/12183/12756282/dillian-whyte-edges-out-jermaine-franklin-could-he-now-be-anthony-joshuas-next-opponent'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dillian Whyte edges out Jermaine Franklin | Could he now be ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwDm5YAqmv9HRYOkgsFw8FO2SwpQPh7TgLp84b-1ybR5fPw5K7FswQrFdx8FA2-e35b2eAbpU3" alt="Dillian Whyte edges out Jermaine Franklin | Could he now be ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With former foe Anthony Joshua looking on Dillian Whyte came back from defeat to Tyson Fury to beat Jermaine Franklin on tight majority decision at Wembley&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}