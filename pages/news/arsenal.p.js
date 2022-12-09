import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal"/>
        <meta name="description" content="Trending News about Arsenal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2a1cbddeaacd172a/639217b6227d822439857af1/Fabio_Vieira_Arsenal_Lyon_2022.png" alt="Arsenal"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-za/lists/vieira-sparkles-hein-saves-four-penalties-arsenal-winners-losers-ratings-as-gunners-thump-lyon-in-dubai-super-cup/blt024bac56ae9fc0dc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vieira sparkles and Hein saves FOUR penalties! Arsenal winners ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTbA_qWURv_WhpSdkaUQ-QLSEK35V9ldZAsXQQairjoCC6fi2mlXgql3S02EU4byCr4JGs6NbE_" alt="Vieira sparkles and Hein saves FOUR penalties! Arsenal winners ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Gunners began their Dubai Super Cup campaign with a comfortable success against Lyon in which several players made the case for more playing time.</p></div>
            </div>
        </a><a href='https://www.arsenal.com/news/highlights-arsenal-3-0-lyon'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights &amp; full 90: Arsenal 3-0 Lyon | Video | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTy3E_NGtsHnUm7p1ne98k8upJtF6XxqPDw6l5EmI7etZs9lNMiS4ba4fjBktAALjx-cm5cS9paCQ" alt="Highlights &amp; full 90: Arsenal 3-0 Lyon | Video | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The squad – minus the players involved in the World Cup – were given a useful run out in the opening game of the Dubai Super Cup, with some excellent goals&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/report?gameId=657438'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Lyon - Football Match Report - December 8, 2022 - ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT1M4o587vUs_tiFTvu3qqH1705gohNdFS0IC-D4USyH4DviNAOnLzmQdl511WxBvAW3vvomfAx" alt="Arsenal vs. Lyon - Football Match Report - December 8, 2022 - ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal beat Lyon 3-0 in a friendly in Dubai on Thursday as those players not involved in the World Cup in Qatar kicked off their preparations for the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.london/arsenal-fc/transfer-news/arsenal-arteta-jesus-january-martinelli-25709150'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mikel Arteta reveals Gabriel Jesus Arsenal January transfer plan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRgmmxdP_dx0M8OFzTY9DcDIj0QWxmciZ0elLRcvPAvFn_ATwfCzgIVfY-lwVoGvlrUeQS6PwEY" alt="Mikel Arteta reveals Gabriel Jesus Arsenal January transfer plan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal will be without Gabriel Jesus for the foreseeable future after the striker underwent surgery on a knee injury picked up whilst away with Brazil at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/arsenal-vs-lyon-live-score-highlights-lineups-friendly/recuz3a7zogmrst2iw2yzvfp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Lyon result: Gunners show their class in mid-season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT1fi3QjrwcrO0zN9v3EnBMjuaRfZrXHe9VU7ZYfh3GAE7npDGCRuEZYoJdFq3h_mC61l3eu203" alt="Arsenal vs. Lyon result: Gunners show their class in mid-season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal&#39;s preparations for the return of English and European football began in the best possible way, as the Premier League leaders swept Ligue 1 club Lyon&nbsp;...</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/arsenal/mikel-arteta-hints-how-gunners-replace-gabriel-jesus-injury-january-transfer-probe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mikel Arteta hints at how Arsenal will replace Gabriel Jesus during ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkXiGUY2aEKHAonhUWNyaoV_7PM6Fc7FtObewqLlJEgCYiedga70bLO7SCJGmz6jRtFcINxnbY" alt="Mikel Arteta hints at how Arsenal will replace Gabriel Jesus during ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal manager Mikel Arteta has provided some insight into how the club might respond to the injury suffered by Gabriel Jesus.</p></div>
            </div>
        </a><a href='https://www.football.london/arsenal-fc/news/zinchenko-arteta-arsenal-injury-jesus-25707204'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oleksandr Zinchenko hands Mikel Arteta fresh Arsenal injury ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTDwgEB96wGeIwr6ZY1IbzCdyXWp1ZHSesiGL1S1afoSa9SZuyCcM4kgRwCANIs2Ajb164DMI0t" alt="Oleksandr Zinchenko hands Mikel Arteta fresh Arsenal injury ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Arsenal star missed the Gunners&#39; Dubai Super Cup opener against Olympique Lyonnais today after recently only recovering from a calf injury in October.</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/arsenal/29913-premier-league-arsenal-legend-warns-gunners-top-four/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier League: Arsenal Legend Warns Gunners Could Miss Top ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRA-wHYirbIan0TLzpBSO3fbrmCGXUq_u7QGHcASVfoT1mGzDxdSNadNx5VsD90MnsewYug-wUU" alt="Premier League: Arsenal Legend Warns Gunners Could Miss Top ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News - Paul Merson has expressed fears Arsenal could miss out on a top four finish unless they sign a cover for the injured Gabriel Jesus.</p></div>
            </div>
        </a><a href='https://www.arsenal.com/news/be-part-our-arsenal-forest'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Be a part of our Arsenal Forest! | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSTEXv0dnsPxhENPyh29WJvFsHrbHonvnc-nXSAHSo5YtAD2g6uM3Ct1aJ6Tl66YTSgQZqmpH_p" alt="Be a part of our Arsenal Forest! | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Give your friends their very own piece of Arsenal in Africa courtesy of our carbon offsetting project in Bore, Kenya.</p></div>
            </div>
        </a><a href='https://thetopflight.com/2022/12/08/bad-news-arsenal-risk-gabriel-martinelli/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The bad news continues for Arsenal as they risk losing Gabriel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQmYo5Jh5fnGGX3xE_8qXHSzIObIUzbn7-0ZfsdreP7EpUN0xwPFtbgE6ZiRcA9osUirftzcRB3" alt="The bad news continues for Arsenal as they risk losing Gabriel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Although Jesus has not been in good goal scoring form, the Brazil international striker has been exceptional in other areas of the game. Both his creativity and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}