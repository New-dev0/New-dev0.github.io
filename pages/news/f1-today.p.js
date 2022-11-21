import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1 today</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1 today"/>
        <meta name="description" content="Trending News about F1 today" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1 today</h1>
            <Image width={800} height={500} src="https://s3-eu-west-1.amazonaws.com/racingnews-v2-prod/_1200x630_crop_center-center_82_none/XPB_1187009_HiRes.jpg?v=1668954718" alt="F1 today"/>
            <h3>Recent News</h3>
            <a href='https://racingnews365.com/f1-2022-abu-dhabi-gp-race-results'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 2022 Abu Dhabi GP - Race results</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT6XLABBEKOU6HbIkbf4u9sd_d771Q8cF3gfzctqDRHEQHZe41GiBZL0EKn1KSvdho7jJK7L7ht" alt="F1 2022 Abu Dhabi GP - Race results" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen claimed a record-extending 15th Formula 1 win of the season in Abu Dhabi as Charles Leclerc snatched P2 in the championship.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/f1/abu-dhabi-grand-prix-live-stream-updates-results-b2229006.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 LIVE: Abu Dhabi Grand Prix result and reaction as Max ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaWbwCa61GaIAHaf2bu-vZfwbei8pCWVs-SWWoMua1pKLHrCeg_GOHk9ybYHycXTFraUkln9gi" alt="F1 LIVE: Abu Dhabi Grand Prix result and reaction as Max ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen celebrated his second title with a victory at the final race of the season as Charles Leclerc beat Sergio Perez to second place.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/formula-1/news/f1-abu-dhabi-grand-prix-2022-live-highlights-and-analysis/oheoheib3vdtpkqzsqanaibf'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Abu Dhabi Grand Prix 2022 result: Highlights and analysis as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSP_dR7tcS45r4cRLw2b7otFiHaqvLP6O4MiJkwzg5kvHrgv9T9Un-xSgKa1pGzygs99VGDKnsp" alt="F1 Abu Dhabi Grand Prix 2022 result: Highlights and analysis as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen won the final race of the 2022 Formula One season, his 15th of the year as Charles Leclerc took P2 in the drivers&#39; championship.</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/alfa-sacrificed-abu-dhabi-f1-race-on-aston-hold-up-tactics-in-p6-battle-/10403016/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Alfa &quot;sacrificed&quot; Abu Dhabi F1 race to hold up Aston for P6</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSuPmW81ljfSyNvT3jH3nf9wd6Fufy-VANFLUUsDEcIXUgsE8hKITwjVpHJIogtwIJig___rZ7v" alt="Alfa &quot;sacrificed&quot; Abu Dhabi F1 race to hold up Aston for P6" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alfa Romeo approached the Abu Dhabi Grand Prix with the intent to &#39;make life difficult&#39; for Aston Martin as the two teams battled for sixth in Formula 1&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/formula-one/f1-live-stream-abu-dhabi-grand-prix-2022-race-updates-latest-news-b1041170.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 LIVE! Abu Dhabi Grand Prix race result, updates and latest news ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUNQIxC6KFNsTlQrRyu7cBECEdlKooUyQ7VEbLyRIs12i9kR1h2zJOdYg531XcQ6677Q-AcKDY" alt="F1 LIVE! Abu Dhabi Grand Prix race result, updates and latest news ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Charles Leclerc beat Sergio Perez to second place in the 2022 F1 Drivers&#39; Championship. The Abu Dhabi Grand Prix podium reflected the final standings overall as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whathifi.com/advice/abu-dhabi-grand-prix-live-stream-how-to-watch-the-f1-free-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abu Dhabi Grand Prix live stream: how to watch the F1 for free ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS4XwhpKTTtfBnKj41Djm95lBXcICRtBHiv3RNJ3u2nBRtVIIa8yLZV5AhblLwOWwNS35jYeCvw" alt="Abu Dhabi Grand Prix live stream: how to watch the F1 for free ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch the 2022 Abu Dhabi Grand Prix live stream from where you are in the world – plus all the best free F1 streams, expert analysis, qualifying news&nbsp;...</p></div>
            </div>
        </a><a href='https://www.express.co.uk/sport/f1-autosport/1699040/f1-live-abu-dhabi-grand-prix-updates-lewis-hamilton-max-verstappen'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen wins Abu Dhabi GP as Hamilton ends season with a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT0mQITyubxQZGlKiyeey7blYcAYWlLr1Pg82AR_dcrth6ShH6DdZWbYFeq44hurlguJdLKe5i1" alt="Verstappen wins Abu Dhabi GP as Hamilton ends season with a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Express Sport brings you live updates from the F1 season&#39;s final race in Abu Dhabi.</p></div>
            </div>
        </a>
        </Template></>;
}