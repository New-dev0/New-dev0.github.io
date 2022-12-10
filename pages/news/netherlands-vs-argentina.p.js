import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Netherlands vs Argentina</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Netherlands vs Argentina"/>
        <meta name="description" content="Trending News about Netherlands vs Argentina" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Netherlands vs Argentina</h1>
            <Image width={800} height={500} src="https://img.rasset.ie/001cf8c1-1600.jpg" alt="Netherlands vs Argentina"/>
            <h3>Recent News</h3>
            <a href='https://www.rte.ie/sport/world-cup-2022/2022/1209/1340968-world-cup-2022-netherlands-v-argentina-updates/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Argentina through on penalites - recap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTlCHkALDEdDx6yoTgbwNv4Xfbj_24E5OxEbXzbWxmesKJIgU-qOplJLqtqX7gt9ejXGig-HY1T" alt="World Cup 2022: Argentina through on penalites - recap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina are through to the semi-finals of the World Cup after beating the Netherlands 4-3 on penalties with the sides level 2-2 after extra-time.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/netherlands-vs-argentina/report/463021'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 - Netherlands 2-2 Argentina AET (3-4 on pens ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTLSaIjYOuZqLKczsACf3qo2j21j39f3BVcjWmGum4bA2q1QWgHCWWRENsBlT2leEybW6ZGIVeL" alt="World Cup 2022 - Netherlands 2-2 Argentina AET (3-4 on pens ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match report as Emiliano Martinez saves two penalties to ensure Argentina make it into World Cup last four; Nahuel Molinas strike and Lionel Messis penalty&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/pidgin/articles/c0k1xnek1rpo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs Argentina highlights: Wout Weghorst double no fit ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsccMWiyIVwH9EU8wiI4na7qWOtlyQHSwLNMb5atRGV407l3i783YI9RWdesh9l4E0FmnCKLhU" alt="Netherlands vs Argentina highlights: Wout Weghorst double no fit ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Di two kontris dey meet for World Cup eight years afta dem bin play di semi final game for 2014 World Cup, wia Argentina win via penalty shootout.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/12/9/recap-netherlands-vs-argentina-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Netherlands vs Argentina – World Cup 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS-fKggLRgA8KNunXlQV-GtU9VgNd9eEzeNEF-BbmrrpNuvyxB0z7K3DnegtHycEMQ9vZC35Gwd" alt="Recap: Netherlands vs Argentina – World Cup 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina win 4-3 on penalties after Netherlands had come back from two goals down to equalise in normal time.</p></div>
            </div>
        </a><a href='https://www.foxsports.com/stories/soccer/world-cup-2022-top-plays-netherlands-argentina-quarterfinals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands vs. Argentina highlights: Argentina advances in thriller</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUcWHENoQVIN6guJC65xbY9DuINEHAMaF8MQK1u9k8M8jV-JPzx_dsBUZJI2UPTFYnOuZ3QanQ" alt="Netherlands vs. Argentina highlights: Argentina advances in thriller" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina defeated the Netherlands in a thrilling World Cup quarterfinal match on Friday. Here are the highlights!</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/sport/soccer/2022/12/09/world-cup-quarter-final-live-updates-qatar-2022-argentina-netherlands-lionel-messi/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina see off Netherlands in nailbiter: As it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWrioRtYeehDOa07AP2vKcIDKhvJ087ixE0VCFxKZPVvNcF6VZ__bCeVZePy5F0qxpuMkKhrdW" alt="Argentina see off Netherlands in nailbiter: As it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi looks to keep World Cup dream alive against Louis van Gaal&#39;s Dutch side.</p></div>
            </div>
        </a>
        </Template></>;
}