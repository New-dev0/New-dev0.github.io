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
            <Image width={800} height={500} src="https://assets3.cbsnewsstatic.com/hub/i/r/2022/11/23/d25e7666-7f97-4319-bf0a-b1132c9a375a/thumbnail/1200x630/52f9724a5e1155e6e2d4fc44c7e03b71/fifa-canada-alphonso-davies.jpg" alt="FIFA World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://www.cbsnews.com/essentials/2022-fifa-world-cup-how-to-stream-todays-belgium-vs-canada-game-2022-11-23/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: How to stream today&#39;s Belgium vs. Canada ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRQjGBTk096Ez-FPGmBkKzHrktrfVaeInn56USeux1cPzrCjmbzgPuzwohvC8FvamKNR2ls-RUx" alt="2022 FIFA World Cup: How to stream today&#39;s Belgium vs. Canada ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Alphonso Davies of Canada poses during the official FIFA World Cup Qatar 2022 portrait session on Nov. 19, 2022 in Doha, Qatar. Mike Hewitt - FIFA/FIFA via&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/news/liveblog/2022/11/23/world-cup-2022-morocco-hopes-for-win-as-mena-steals-the-show'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 updates: Spain&#39;s Gavi makes history</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRE_asdW3b-4NqQp0N7yx65PVQAqum4wmqC8R3nVLjhZuB30u9FudqF-dqEjs4ti783wLC3bCnA" alt="World Cup 2022 updates: Spain&#39;s Gavi makes history" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Belgium have paid tribute to their goalkeeper Thibaut Courtois after their win against Canada. Courtois&#39;s save on a 10th minute penalty taken by Canada&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tvtechnology.com/news/fifa-world-cup-2022-ratings-on-telemundo-and-peacock-up-72-vs-2018'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022 Ratings on Telemundo And Peacock Up 72 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRehc4O0kl7z8rfydq7_tiGjeBiU4b8tWn6Lo_Etbj_dFeJ53h60djpPsA_lzgN-trYMf4N6GaW" alt="FIFA World Cup 2022 Ratings on Telemundo And Peacock Up 72 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first four games of 2022 tournament averaged total audience delivery of 2.6M viewers across Telemundo, Peacock and Telemundo digital streaming&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbsnews.com/essentials/2022-fifa-world-cup-how-to-stream-todays-spain-vs-costa-rica-game-2022-11-23/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup: How to stream today&#39;s Spain vs. Costa Rica ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSJPViue_ZHjGqbEM7EJIbMrYoYHdZYBGU4blEkZK4h91oJPg4h3W1FPGoD9nzl4zMrDkOaiGo1" alt="2022 FIFA World Cup: How to stream today&#39;s Spain vs. Costa Rica ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CBS Essentials is created independently from the CBS News staff. We may receive commissions from some links to products on this page. Promotions are subject to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/liveblog/2022/11/23/live-morocco-vs-croatia-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Morocco vs Croatia 0-0: World Cup 2022 – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSC5KCjekf7LP0zXPlNKQMuTxQFr_G6CE95FNoOkKJ_pu6C-q1dAc4YqRcdZnzzMyMTf-C6OFnK" alt="Morocco vs Croatia 0-0: World Cup 2022 – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the updates from Wednesday&#39;s World Cup match between Morocco and Croatia at Qatar&#39;s Al Bayt Stadium.</p></div>
            </div>
        </a><a href='https://www.foxsports.com/stories/soccer/world-cup-2022-top-plays-spain-costa-rica'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 highlights: Spain steamrolls Costa Rica 7-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQmIx8JR6JMvyBE2m3oVBSPYtqXUiHsKOYlylhE2iAn6x4OdnPlf9EafYcXrvTKOBvZ_K4kQU7J" alt="World Cup 2022 highlights: Spain steamrolls Costa Rica 7-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 FIFA World Cup continued Wednesday, as Spain dominated Costa Rica on FOX. Here are the top plays!</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/fifa-world-cup-qatar-2022-wc-live-updates-november-23-spain-germany-croatia/article66172573.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup, Day 4 LIVE: Davies misses penalty; Spain thrashes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR3njYaRfG3NKRir1ROJpA-WTSJd1a-kj0tkpDD2-5E_cIRhZvogskvUqnvHslD09DKudzT2pPM" alt="FIFA World Cup, Day 4 LIVE: Davies misses penalty; Spain thrashes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022, Day 4 LIVE: There will be four important matches played across as many stadiums in Qatar, with the first one - Morocco vs Croatia&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tsn.ca/fifa-world-cup/canada-vs-belgium-2022-fifa-world-cup-blog-1.1882660'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Canada Gameday Live Blog: Starting XI set</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Canada Gameday Live Blog: Starting XI set" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Watch Canada&#39;s game vs. Belgium on Wednesday at 2pm et/11am pt on TSN, with pregame coverage underway on TSN5.</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/liveblog/2022/11/23/live-germany-vs-japan-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany vs Japan 1-2: World Cup 2022 – as it happened</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTPHK6Qo8VZXhMLleh9Dc3mJVImA0K4ZgT4y2iWk9MLOmSm1bJ4FtwMLOi5oQQYgT7EUD_AxLET" alt="Germany vs Japan 1-2: World Cup 2022 – as it happened" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All the updates from Wednesday&#39;s World Cup match between Germany and Japan at Qatar&#39;s Khalifa International Stadium.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/live/2022/11/23/sports/world-cup-scores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup Highlights: After Germany Was Upset by Japan, Favorites ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS-BG7HPOGjKV3rbq9JJQ_5wg8cqD5gswaFTDa7xgx37a63stb4WyC8xGy75d-5mjvGWvs9zhR2" alt="World Cup Highlights: After Germany Was Upset by Japan, Favorites ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>For the second straight day, a World Cup favorite stumbled. Spain made up for it by scoring 7 goals on Costa Rica.</p></div>
            </div>
        </a>
        </Template></>;
}