import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Real Madrid</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Real Madrid"/>
        <meta name="description" content="Trending News about Real Madrid" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Real Madrid</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1019%2Fr1078293_1296x729_16%2D9.jpg" alt="Real Madrid"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/spanish-laliga/story/4776029/real-madrid-beat-elche-as-ballon-dor-winner-benzema-scores'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid beat Elche as Ballon d&#39;Or winner Benzema scores</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRs8WSh1y4DTqXJcomCnvwqw_peL6Hl-AtzO-pBkaCkY0BDsm75PGW1gntZA5-P9mygZcpYE02F" alt="Real Madrid beat Elche as Ballon d&#39;Or winner Benzema scores" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Days after Real Madrid beat Barcelona and Karim Benzema winning the Ballon d&#39;Or, both team and player had little trouble against Elche.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/var-real-madrid-benzema-goals-ballon-d-or-rodrygo-elche/blt4fb2878af33de306'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Not even VAR can stop Benzema &amp; Real Madrid! Ballon d&#39;Or winner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRVkgp25LOHSIEO4ONL2PqgDGx9wfwD0yepssFv18_Fl_KMIC5tWTEfjv0UzQ457LheawWn17c7" alt="Not even VAR can stop Benzema &amp; Real Madrid! Ballon d&#39;Or winner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WHAT HAPPENED? The in-form Fede Valverde was on target once again for the Blancos against struggling opposition, as was Marco Asensio, while Karim Benzema&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/real-madrid-beats-bottom-placed-elche-la-liga-karim-benzema-fede-valverde/article66033144.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid breezes past rock-bottom Elche</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTJDPbx7eeRQs5EQnw1_RI0D0U0rpYeolTvktoZ2ddw9ZhRPN-QZTy0ulZ_eqK5NL-mrhVq5nTZ" alt="Real Madrid breezes past rock-bottom Elche" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Real Madrid tops the table with 28 points, six ahead second-placed Barcelona which has a game in hand and hosts Villarreal on Thursday.</p></div>
            </div>
        </a><a href='https://www.goal.com/en/news/real-madrid-vs-sevilla-live-stream-tv-channel-kick-off-time-and-where-to-watch/blt26bae87fa0f97d0b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Real Madrid vs Sevilla: Live stream, TV channel, kick-off time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSfHAPdNas2xB00xjF4l-CALUE6P5LmGKeSvAxpE-FiKg1jyE2bVpj_raxP9mgck1LyIzxdZNoc" alt="Real Madrid vs Sevilla: Live stream, TV channel, kick-off time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Los Blancos are in an impressive vein of form as they head into this fixture on the back of a comprehensive 3-0 victory over Elche. They showed no signs of post&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/la-liga-2022-23-ballon-d-or-winner-karim-benzema-scores-as-real-madrid-beat-elche-in-pics-photos-231296'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>La Liga 2022-23: Ballon d&#39;Or Winner Karim Benzema Scores As ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSq5YG-aCThxD1iV3uvnnvwRR4kBFXvnbZ5Ok9pabuKnizHNJKzdQNWLSQpN1jmLaf5hbpUgXg9" alt="La Liga 2022-23: Ballon d&#39;Or Winner Karim Benzema Scores As ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema celebrated his maiden Ballon d&#39;Or trophy with a goal as Real Madrid defeated Elche 3-0 on Wednesday night in La Liga 2022-23.</p></div>
            </div>
        </a><a href='https://a-sports.tv/laliga-real-madrid-cruise-past-elche-to-extend-lead-at-top/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LaLiga: Real Madrid cruise past Elche to extend lead at top</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT8O0OGgRZ-M5_35mvLgrVNA3bwM1Z8pmXcYyiufiAj__9ZNQpookD_4NwZ2hyaCr7yTDruf8fN" alt="LaLiga: Real Madrid cruise past Elche to extend lead at top" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Reigning Champions Real Madrid sealed a comfortable 3-0 win against the bottom side Elche on Wednesday to extend their lead at the top of the LaLiga table.</p></div>
            </div>
        </a><a href='https://www.realmadrid.com/en/news/2022/10/20/benzema-it-was-the-best-season-of-my-career'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzema: “It was the best season of my career”</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTAqBLY49LSt0kLWhXRIOSStQFu2uNE7gChVlzxtZqzV1rECHLFfhWK6-_jJV9eqZwVp7x9Mn1O" alt="Benzema: “It was the best season of my career”" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>I&#39;d been dreaming about it since I was a kid”, said the Real Madrid captain in Paris.</p></div>
            </div>
        </a><a href='https://therealchamps.com/2022/10/19/perez-benzema-two-real-madrid-legends/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florentino Perez compares Karim Benzema to two Real Madrid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7QCdL0kDiCFwjuGBtKEI6loYAaHa3KJpdjy_M4z-QrQLpS2m1syq1MHcmP25QJxbcRaXrEawQ" alt="Florentino Perez compares Karim Benzema to two Real Madrid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Except for Luka Modric, the Real Madrid striker is the only other player to win the most prestigious award in football during the Lionel Messi and Cristiano&nbsp;...</p></div>
            </div>
        </a><a href='https://www.realmadrid.com/en/about-real-madrid/the-club/sponsors/kaiyun'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kaiyun | Real Madrid CF</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSI0S3kHiUUH6G3geCXoXvkUr1baDltwgAjGO0PXjFnaWQ6vXSCWbS6oYSq6C1Cu6im9YMk1n2O" alt="Kaiyun | Real Madrid CF" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shaking the world of sports! Kaiyun Sports and the Real Madrid C.F. , one of La Liga giants, have officially reached a strategic cooperation in extension to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/real-madrid/2022/10/20/6351ab7546163f352a8b45b6.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Benzema: I&#39;ve fulfilled the three dreams I had in my life</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRf0-W9iakv3X5nhigoyGPHq4K0lM1WjXB7mQ2x43wBD25XCxyNKD7aLEgM6VCGfNJyP3oPlR0_" alt="Benzema: I&#39;ve fulfilled the three dreams I had in my life" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Karim Benzema&#39;s fantastic year was capped off by his Ballon d&#39;Or victory earlier this week, and the French striker admits he&#39;s now completed all the goals&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}