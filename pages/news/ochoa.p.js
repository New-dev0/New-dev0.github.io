import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ochoa</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ochoa"/>
        <meta name="description" content="Trending News about Ochoa" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ochoa</h1>
            <Image width={800} height={500} src="" alt="Ochoa"/>
            <h3>Recent News</h3>
            <a href='https://www.washingtonpost.com/sports/soccer/messi-steals-the-magic-that-ochoa-mexico-had-in-1st-game/2022/11/26/6148797a-6de2-11ed-8619-0b92f0565592_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi steals the magic that Ochoa, Mexico had in 1st game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRp84oNAwEaN1nzGHRouL5KRRreBZZAjuvnjJ4q9_ls5ix_LxL3Lgha2tfyvAW5qpikcuZPpiU4" alt="Messi steals the magic that Ochoa, Mexico had in 1st game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Guillermo Ochoa&#39;s World Cup magic didn&#39;t work against Lionel Messi and Argentina.</p></div>
            </div>
        </a><a href='https://www.dailystar.co.uk/sport/football/mexico-hero-ochoa-hands-model-28582912'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mexico hero Ochoa was accused of having six fingers - but still ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ12zJ7im_WTBHZvD5lhDuYYu6uZoCQS9RUNqQhZoicnl8LiAMxQCW7FB8ai_3S-rc20jBLHeO_" alt="Mexico hero Ochoa was accused of having six fingers - but still ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mexico hero Guillermo Ochoa was once falsely accused of having six fingers on one hand, giving him an unfair competitive advantage - but he still managed to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.elfutbolero.us/ligamx/While-Ochoa-makes-history-in-Qatar-2022-the-worst-news-for-Club-America-20221126-0015.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>While Ochoa makes history in Qatar 2022, the worst news for Club ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSLBvAvcQtZ0YiM6LcPlbSXbIRqAXFHCX37DICPwDQGVIAC-VVOdHWnWsfYKLtXwjkWThIfCy7u" alt="While Ochoa makes history in Qatar 2022, the worst news for Club ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Guillermo Ochoa becomes the hero of the Mexican National Team and now leaks one of the worst news for Club America.</p></div>
            </div>
        </a><a href='https://en.prothomalo.com/sports/football/u5tn4f502e'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Messi&#39;s World Cup dreams up against the legend of Ochoa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSs64Gbzhsh9qHSDmLOd36GOGJojXCCu2n_fkUgl_9JAOU6iExJLnTpwR5OjYdSsfks6YQQmA54" alt="Messi&#39;s World Cup dreams up against the legend of Ochoa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ochoa denied former World Cup winners Brazil and Germany in the past. Will Argentina be next?</p></div>
            </div>
        </a>
        </Template></>;
}