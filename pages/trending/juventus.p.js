import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juventus</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juventus"/>
        <meta name="description" content="Trending News about Juventus" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juventus</h1>
            <Image width={800} height={500} src="https://imageio.forbes.com/specials-images/imageserve/63467d6cee94ea797cb5c03b/0x0.jpg?format=jpg&width=1200" alt="Juventus"/>
            <h3>Recent News</h3>
            <a href='https://www.forbes.com/sites/danieleproch/2022/10/12/uefa-champions-league-juventus-and-ac-milan-watch-round-of-16-slip-away-but-theres-hope/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League: Juventus And AC Milan Watch Round Of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTNVkjG23c7UY6Oh3Psqu_MPaXwsQfUe2A3FXMKksbZEb7s1i3dlshHL54jXXAkahySXJ-FBvC" alt="UEFA Champions League: Juventus And AC Milan Watch Round Of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Failing to advance to the tournament&#39;s next phase would mean missing out on a large chunk of the tournament&#39;s prize money, besides suffering the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/juventus-embarrassed-maccabi-haifa-champions-league/blt4f5662971e61c160'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Curtains for Allegri? Juventus embarrassed by Maccabi Haifa in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQM_gnhgzt68Pcc5aQhXlBTYjrQx5v_L-zoc5cB4ge9hdR0RbEF1wBLrkyMY_RPuRZU4ZXX4oRD" alt="Curtains for Allegri? Juventus embarrassed by Maccabi Haifa in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The pressure that has already piled on Max Allegri increased tenfold in Israel as Juventus were beaten 2-0 by Maccabi Haifa in the Champions League.</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/maccabi-haifa-register-first-ucl-victory-since-2002-push-juventus-closer-to-elimination-with-2-0-win-524674'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maccabi Haifa register first UCL victory since 2002, push Juventus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTxCUz9KQr7YgGZKuDHeZmXK1oaUv44b4BY_tqB80Orb_flyIBQommGcZ2jeJk5dPyyZC2hkLSI" alt="Maccabi Haifa register first UCL victory since 2002, push Juventus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Omer Atzili scored twice as Maccabi Haifa beat struggling Juventus 2-0 on Tuesday in Champions League Group H, pushing the Italian giants to the brink of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.australianjewishnews.com/maccabi-haifa-topple-italian-club-juventus-2-0/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maccabi Haifa topple Italian club Juventus 2-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSPHfohUMvu6TeCWjUAmzxttEOxLEh9NL9mRphUvUvSsbPAFNzcH2f8G5EASQIcK5Z5keBua_m" alt="Maccabi Haifa topple Italian club Juventus 2-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MACCABI Haifa FC upset renowned Italian side Juventus 2-0 in a UEFA Champions League group stage match in the early hours of October 12 (Australian time),&nbsp;...</p></div>
            </div>
        </a><a href='https://football-italia.net/whats-behind-juventus-decision-not-to-sack-allegri/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What&#39;s behind Juventus&#39; decision not to sack Allegri - Football Italia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTZp3Tav2dGAJ2RRZGK4l7qoHGczfpiI2I69EvHU8ya2ZzNx0__FC5vzro-QZwozN2BvJy-vpQN" alt="What&#39;s behind Juventus&#39; decision not to sack Allegri - Football Italia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Juventus have decided against sacking Massimiliano Allegri despite a poor start to the season and La Gazzetta Dello Sport highlights how Andrea Agnelli&#39;s.</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report/_/gameId/652635'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Maccabi Haifa vs. Juventus - Football Match Report - October 11 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQi614S92LcQaUnvBG_x8gyCBaJN67lgOfs4rUALhN-NDC-GNP6Subtxs_PY9OF0Ei3fgoZnlJC" alt="Maccabi Haifa vs. Juventus - Football Match Report - October 11 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Maccabi Haifa vs. Juventus 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.chinadaily.com.cn/a/202210/13/WS634747b6a310fd2b29e7c1c3.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juventus on verge of CL elimination after 2-0 loss at Haifa</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQkSU7tLbvhtFLx7XRrKzOO0DTp9iuNmyj0lgBqx-LCuQOMDk8E38X5AU1NVQp6FdEtnPqqS4nL" alt="Juventus on verge of CL elimination after 2-0 loss at Haifa" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Omer Atzili scored two first-half goals as Haifa earned its first Champions League win in two decades. Juventus was left third in Group H with two games to play&nbsp;...</p></div>
            </div>
        </a><a href='https://theathletic.com/3681178/2022/10/11/andrea-agnelli-massimiliano-allegri-juventus/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Andrea Agnelli backs Massimiliano Allegri and says he will remain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT18smUzoOinzQS9eMyXXt7kP5ApqjLzyKarnibtSMJfhYjctd1PB2W61szthnwCBf3unhFn316" alt="Andrea Agnelli backs Massimiliano Allegri and says he will remain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Juventus president Andrea Agnelli has said he will not sack Massimiliano Allegri despite seeing his side fall to a disastrous 2-0 defeat by Maccabi Haifa in&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/juventus/25601-massimiliano-allegri-embattled-juventus-head-coach-blames-players-poor-run-form/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Massimiliano Allegri: Embattled Juventus Head Coach Blames ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBQcSLL0I7OunugArMfBKWh35xRtb_Q2VlabKOLbJOF1pxCBjbCq2hhyyzs4knU9CWUKG5xvxY" alt="Massimiliano Allegri: Embattled Juventus Head Coach Blames ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News ☆ Under-siege Juventus head coach Massimiliano Allegri has opined that his side&#39;s issue is the lack of desire to compete, not tactical&nbsp;...</p></div>
            </div>
        </a><a href='https://football-italia.net/champions-league-what-juventus-need-to-qualify-for-the-round-of-16/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: what Juventus need to qualify for the Round of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTHmEf8O81DrphVbJGjSuGYIfGu0gSPIE4BAnhGU7XgyB0DWDGrndgAacdAlQuNfJtEjM3Q51yy" alt="Champions League: what Juventus need to qualify for the Round of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If Benfica and PSG win their games against Maccabi Haifa, Juventus will be eliminated. If Maccabi get a draw against PSG, then Juve must beat Benfica away and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}