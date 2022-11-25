import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>FIFA World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,FIFA World Cup games"/>
        <meta name="description" content="Trending News about FIFA World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>FIFA World Cup games</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/FIFA-WC.jpg" alt="FIFA World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/football/switzerland-vs-cameroon-uruguay-vs-south-korea-portugal-vs-ghana-fifa-world-cup-2022-8287179/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Highlights: POR scrape past GHA, Embolo&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIoPRQFGeBqDXdK5SsAVM68FaHGmICIIjhM72RN9_mKuFU3DW-SSG8a_rqEbMlIvQjuEQogq66" alt="FIFA World Cup 2022 Highlights: POR scrape past GHA, Embolo&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup Highlights: Cristiano Ronaldo becomes first player to score in five different World Cups.</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/2022-fifa-world-cup-how-to-stream-todays-portugal-vs-ghana-game-2022-11-24/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: How to stream today&#39;s Portugal vs. Ghana game</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvB1gBmNYvT3eVtQ4vBVjWkuKIW8g__UtotJkVXKJmgmDQHWy7KdG_AUhkJb06HaHoAvSqk-1Q" alt="2022 FIFA World Cup: How to stream today&#39;s Portugal vs. Ghana game" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>How to watch Portugal vs. Ghana 2022 FIFA World Cup soccer game right now -- for free.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/brazil-vs-serbia-live-score-fifa-world-cup-updates-commentary-highlights-qatar-2022-a-selecao-group-g/article66179177.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>BRA 2-0 SRB, HIGHLIGHTS FIFA World Cup: Richarlison scores ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxuisviR6ToLAMuJ3c10C593g-1Q1xG8ZZjLW9So8U0mNoo6UA1HWdMkG_j7EsWb8aQL42FCrK" alt="BRA 2-0 SRB, HIGHLIGHTS FIFA World Cup: Richarlison scores ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Catch the live score, updates and commentary from the Brazil vs Serbia FIFA World Cup Group G game at the Lusail Stadium.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/fifa-world-cup-2022-live-score-switzerland-vs-cameroon-football-latest-updates-101669278947475.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup Switzerland vs Cameroon Highlights: Embolo helps ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRt2MoZFLZ2nTljeoH10o60V03zOuiDtzp3kxBYt6BRXxi8XbzpZRLRRdM6TXzIxa2NH7v2-WJq" alt="FIFA World Cup Switzerland vs Cameroon Highlights: Embolo helps ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Switzerland vs Cameroon Highlights FIFA World Cup 2022: Embolo&#39;s strike helps Switzerland win by 1-0 against Cameroon. Catch all Live score and update of&nbsp;...</p></div>
            </div>
        </a><a href='https://supersport.com/football/fifa-world-cup-2022/news/b4fb36a4-7cb1-4f34-8904-a655f5d99861/netherlands-v-ecuador-what-the-stats-say'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netherlands v Ecuador – what the stats say | SuperSport</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Netherlands v Ecuador – what the stats say | SuperSport" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Netherlands have lost just two of their 14 Fifa World Cup matches against South American opponents (W8 D4), losing the 1978 final against Argentina, and a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/fifa-world-cup-2022-live-score-brazil-vs-serbia-football-latest-updates-lusail-stadium-al-daayen-101669313543653.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Brazil vs Serbia highlights: BRA beat SRB 2-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSaAnAHK4YbIXsAiI17erzA9EU1q3OyCyYGruxgcCdTmfuOgbOIg9dlfn-y48b5_gnlvwLMl-rr" alt="FIFA World Cup 2022 Brazil vs Serbia highlights: BRA beat SRB 2-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022 Brazil vs Serbia highlights: Richarlison scored twice, the second of which was a sensational bicycle kick, as a dominant Brazil started&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/fifa-world-cup-2022-matchday-5-todays-games-and-schedule/articleshow/95729916.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 matchday 5: Today&#39;s games and schedule</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTzr0VCbD776HvP8rdlgI-ZIJWPBmGA5F_I7ti2ai9H_FuGlW9sKK7R-6lQNoVRHnCiKDIdITnV" alt="FIFA World Cup 2022 matchday 5: Today&#39;s games and schedule" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Matchday five features a mix of Europe, South America and Africa, with Brazil, Uruguay, Portugal and Ghana all in action. South Korea and Switzerland also&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/news/japan-world-cup-dressing-room-28574136'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>State Japan left World Cup dressing room in after stunning Germany ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTJGoBJMnfbqirPbM82XLA6ZIu6QehRFNjoP-taWzXJL00dhkFu1gk8XZpBFmKJ40-JZkNRSu-O" alt="State Japan left World Cup dressing room in after stunning Germany ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&quot;After an historic victory against Germany at the #FIFAWorldCup on Match Day 4, Japan fans cleaned up their rubbish in the stadium, whilst the Samurai Blue left&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056703-richarlison-celebrated-for-best-goal-of-the-world-cup-as-neymar-brazil-beat-serbia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Richarlison Celebrated for Best Goal of the World Cup as Neymar ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdFbvyPQX23l2yPgqPM07ESZURnJQvwVJGtC3q944xmdrbLVe-abyFOTt4pWk_lamzAXSaqbg8" alt="Richarlison Celebrated for Best Goal of the World Cup as Neymar ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Richarlison had a memorable start to the 2022 FIFA World Cup, scoring both goals in Brazil&#39;s 2-0 victory over Serbia at Lusail Iconic Stadium on Thursday.</p></div>
            </div>
        </a><a href='https://www.livemint.com/sports/football-news/fifa-world-cup-2022-brazil-vs-serbia-prediction-time-live-streaming-details-11669315290168.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Brazil vs Serbia prediction, time, live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSRK0DZaQ3pZnakN0edb8Xjlud0AscuCvMBbboF5Liz1PMfAYIk-TaAYXKdCDRU8mF5qrkoJyJ1" alt="FIFA World Cup 2022: Brazil vs Serbia prediction, time, live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following 2002, Brazil could only reach the semi-final once and have suffered three quarter-final exits, while Serbia in its all three World Cup appearances&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}