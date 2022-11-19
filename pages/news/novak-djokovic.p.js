import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Novak Djokovic</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Novak Djokovic"/>
        <meta name="description" content="Trending News about Novak Djokovic" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Novak Djokovic</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/tennis/qg8vwn/article66155155.ece/alternates/FREE_1200/Djokovic.jpg" alt="Novak Djokovic"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/tennis/novak-djokovic-beats-daniil-medvedev-atp-finals-quarterfinals-result/article66155150.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic downs Daniil Medvedev in thriller to stay unbeaten ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQCabnGC4wi9Wy1mnD7C-d2KsCxDUYl8JhyoTNsSF8E45tXgAtOaS3RRRz5BDzwIHjjw2E3BQcv" alt="Novak Djokovic downs Daniil Medvedev in thriller to stay unbeaten ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic went into the Red Group dead tie already assured of his place in the semi-finals after wins over Andrey Rublev and Stefanos Tsitsipas.</p></div>
            </div>
        </a><a href='https://www.atptour.com/en/news/djokovic-medvedev-turin-2022-friday'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic Defeats Daniil Medvedev In Turin Thriller | ATP Tour ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1Hda5iY9EgEqyLMbhrrhXn2BQFv9pSN3YJfaFSyXCXIkBQ9Fc78Z_b62JV30awpOgTah12Bdx" alt="Novak Djokovic Defeats Daniil Medvedev In Turin Thriller | ATP Tour ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Novak Djokovic defeats Daniil Medvedev 6-3, 6-7(5), 7-6(2) on Friday at the Nitto ATP Finals in Turin.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/novak-djokovic-vs-daniil-medvedev-live-streaming-when-and-where-to-watch-atp-tour-finals-match-535328'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic vs Daniil Medvedev, Live streaming: When and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Novak Djokovic vs Daniil Medvedev, Live streaming: When and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The action continues in the ATP Tour Finals as 21-time Grand Slam winner Novak Djokovic will face Russia&#39;s Daniil Medvedev in the round-robin stage on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/18/sports/tennis/djokovic-nadal-atp-finals.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Novak Djokovic Finds Harmony and a Lot of Wins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRsFiRPaoLxAfWyZYYfWxzcqwifyjrkupN0RuS6Tn9xb18CcwO30WfaWvAxHyIDKL9-O-TTw3Ju" alt="Novak Djokovic Finds Harmony and a Lot of Wins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic missed long stretches of the tennis season because he has refused to get vaccinated against Covid-19. That has only made him more determined.</p></div>
            </div>
        </a><a href='https://www.eurosport.com/tennis/atp-finals/2022/live-daniil-medvedev-novak-djokovic_mtc1406935/live-commentary.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Daniil Medvedev - Novak Djokovic live: ATP Finals - Tennis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRf10SDZpJQfydwW7k-zpviVdQHmFuXCnaX0vdAyuDQKUTpFMywcRUZEeMsolScO-8kzDVPAzMY" alt="Daniil Medvedev - Novak Djokovic live: ATP Finals - Tennis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get the latest Tennis updates on Eurosport. Catch Daniil Medvedev - Novak Djokovic live on 17/11/2022. Find scores, stats and comments in real time.</p></div>
            </div>
        </a><a href='https://scroll.in/field/1037786/watch-novak-djokovic-saves-set-point-against-daniil-medvedev-with-a-stunning-rally-at-atp-finals'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Novak Djokovic saves set point against Daniil Medvedev ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTfMj3q5d3bNVMlP-EXeyQd1tYGWzvT-INQO9xtxwR1PZJb2PmPiewr3d9q7xXmc6uDKmeuHfON" alt="Watch: Novak Djokovic saves set point against Daniil Medvedev ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Djokovic, who is known for his ability to step up during the crunch moments, came up with another point for the ages in Turin.</p></div>
            </div>
        </a>
        </Template></>;
}