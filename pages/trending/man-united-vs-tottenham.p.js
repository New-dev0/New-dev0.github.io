import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Man United vs Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Man United vs Tottenham"/>
        <meta name="description" content="Trending News about Man United vs Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Man United vs Tottenham</h1>
            <Image width={800} height={500} src="https://assets.khelnow.com/news/uploads/2022/10/united-vs-tottenham-lead-pic-1024x512.jpg" alt="Man United vs Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://khelnow.com/football/manchester-united-vs-tottenham-hotspur-head-to-head-record'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United vs Tottenham Hotspur: Head-to-Head record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROTcssSquT4tZwxQOW6djidTH0RvVFMMNEx3WLJWQbxFX3Vq3H6K5UYh3r2eAlArOxeQN8hAiR" alt="Manchester United vs Tottenham Hotspur: Head-to-Head record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United will welcome Tottenham Hotspur in the Premier League at Old Trafford on Wednesday for their 197th meeting.</p></div>
            </div>
        </a><a href='https://www.manutd.com/en/news/detail/erik-ten-hag-delivers-team-news-for-man-utd-v-tottenham-19-oct'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Erik ten Hag delivers team news for Man Utd v Tottenham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTjjgE_hGOb7hHJEvi3fgNgJKnqeTEzxtYEMGZkUHMA2bm7PAutDKaRCoK9-9CkfFtRGuUT3U-j" alt="Erik ten Hag delivers team news for Man Utd v Tottenham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The manager delivers an update on his squad as the Reds prepare to welcome Spurs to Old Trafford.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/man-utd-vs-tottenham-live-stream-tv-channel-kick-off-how-to-watch/bltcc72b83ae417f01d'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United vs Tottenham: Live stream, TV channel, kick-off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTaoS6zqLNBb8zGGuBXd6jr_yUe3fDPG3G-C2ltft6rRRFfaGrEJKOWIQIp-xA5g-ZUM2bnvycY" alt="Manchester United vs Tottenham: Live stream, TV channel, kick-off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Where to watch Man Utd vs Tottenham Premier League game, plus kick-off time and team news.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/man-united-vs-tottenham-spurs-time-tv-channel-stream-odds/j93b03iyym0etcwpilxrrm1l'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United vs. Tottenham Hotspur: Time, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrQFkVs4vssXU_sum-62o6ZVco9plgPbinHnKjokzJzIUtN1AnQ8naobeFy06hsXtl6vBhJT5_" alt="Manchester United vs. Tottenham Hotspur: Time, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tottenham head to Old Trafford to face Manchester United on October 19. Here is how to watch the action, and the latest odds.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63224228'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Manchester United v Tottenham Hotspur</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR4ZOtslKCYqEZY5MbXwVhaZVNSqC2ll6TJowwiq80kN-kYBNA9f18O2wOxNxmSl-3moRyyXXKi" alt="Manchester United v Tottenham Hotspur" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Manchester United forward Marcus Rashford dropped out of the starting line-up against Newcastle following illness but could return on Wednesday.</p></div>
            </div>
        </a><a href='https://www.90min.com/posts/man-utd-predicted-lineup-vs-tottenham-premier-league-19-10-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Man Utd predicted lineup vs Tottenham - Premier League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSojyVETClT6Xjlml1QhE4MIBI5HYr40SkhDpUWjscKeA8QBkuzGPpXkeMGz-KKTCsnL8-5YgVd" alt="Man Utd predicted lineup vs Tottenham - Premier League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Predicting Manchester United&#39;s starting XI for their Premier League clash&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}