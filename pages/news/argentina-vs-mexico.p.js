import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Argentina vs Mexico</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Argentina vs Mexico"/>
        <meta name="description" content="Trending News about Argentina vs Mexico" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Argentina vs Mexico</h1>
            <Image width={800} height={500} src="https://images.daznservices.com/di/library/DAZN_News/26/a0/messi-argentina_7dg1u2qa81bn17h097awbc59h.jpg?t=-1464122012&quality=100&h=300" alt="Argentina vs Mexico"/>
            <h3>Recent News</h3>
            <a href='https://www.dazn.com/en-IE/news/soccer/argentina-vs-mexico-time-tv-channel-preview-and-how-to-watch-fifa-world-cup-match/17k134o3acori1lb5tfmnnbuzo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Mexico: Time, TV channel, preview and how to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSycH9FSZkooSPjHbQeVEQagZLIzlcKNKErXQhwrEbV1uHUMGRIYSwxXGy01DZ1bBUwQT4nEsXE" alt="Argentina vs. Mexico: Time, TV channel, preview and how to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Argentines were shocked in their opening match, falling 2-1 to Saudi Arabia after having gone up early in the game. As one of the pre-tournament favourites,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aljazeera.com/sports/2022/11/26/mexico-vs-uruguay-last-chance-for-messis-men'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Mexico vs Argentina match preview</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRItp3gPCoqdSjtapZy6S7dLKiC6LXFC9nuJ4kfjJj3Wp0Rre6oPi5q2oUpw27WNqRJci08bx1M" alt="World Cup 2022: Mexico vs Argentina match preview" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Argentina are under huge pressure to get a win after the shock defeat to Saudi Arabia in their Group C opener.</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/fifa-world-cup/story/4814115/2022-world-cup-mexico-aim-to-oust-messi-and-argentina-usa-can-build-off-england-draw-saturdays-best-bets'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTL--XNzZ6RgSbNdT_G06fdNDwY0QHwQCExkR4CesMEYNuD_GxXJbsJFcD1roTPcb8FdHP9LbTa" alt="2022 World Cup: Mexico vs. Messi, Argentina, USA vs. England" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The World Cup&#39;s matches on Friday saw Qatar eliminated, while England and USA entertained. Here&#39;s the latest and what&#39;s ahead at the World Cup.</p></div>
            </div>
        </a><a href='https://www.sportsmole.co.uk/football/argentina/world-cup-2022/feature/world-cup-2022-argentina-vs-mexico-head-to-head-record_500596.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: Argentina vs. Mexico head-to-head record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQapslslJOdbBaceB6YFJXQ2JSw51uO5P1gIYA7a8AH_b_7WANRf0Dcg5zhCZiVE2AIKOeDhEzK" alt="World Cup 2022: Argentina vs. Mexico head-to-head record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ahead of Saturday&#39;s World Cup clash between Argentina and Mexico, Sports Mole looks at the head-to-head record between the two sides.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/argentina-vs-mexico-live-stream-how-to-watch-2022-world-cup-live-online-tv-channel-prediction-odds-time/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs. Mexico live stream: How to watch 2022 World Cup live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1bG9aPxlWVpEDghAGxwIv5-AnU9Nq8bXKyM7xWz7a5s_dRWtD7ft3evYfVk_hdVAIw6a_a5cp" alt="Argentina vs. Mexico live stream: How to watch 2022 World Cup live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi and company can&#39;t afford any more slip-ups.</p></div>
            </div>
        </a><a href='https://news.paddypower.com/football/2022/11/25/football-tips-our-20-1-punt-on-argentina-vs-mexico/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Football Tips: Messi the man in this 20/1 Argentina vs Mexico punt</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS3LegapQLSdTq5Af8vtlaI4ftZT5Jk-wjWWFis1GgF2L1q44id9nobywRKrULbTKWWsnReQ7XT" alt="Football Tips: Messi the man in this 20/1 Argentina vs Mexico punt" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two sides have met 10 times since 2005, with Mexico failing to win a single game. They have also met twice in the World Cup during that period, with&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/argentina-vs-mexico-lionel-messi-co-play-first-final-8290535/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Argentina vs Mexico: Lionel Messi &amp; Co play &#39;first final&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyXO-IsHIhVPklViwX5d2jhh7ixs20YH1znM9tsTwiZMdM0oxORBbJuV0V-UeeqHdb7gNBsXrf" alt="Argentina vs Mexico: Lionel Messi &amp; Co play &#39;first final&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Albiceleste landed in Doha as firm contender for the title. Now, they risk making a group-stage exit.</p></div>
            </div>
        </a>
        </Template></>;
}