import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal vs Man utd</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal vs Man utd"/>
        <meta name="description" content="Trending News about Arsenal vs Man utd" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal vs Man utd</h1>
            <Image width={800} height={500} src="https://e0.365dm.com/22/11/768x432/skysports-russo-alessia-man-utd_5971721.jpg?20221119192513" alt="Arsenal vs Man utd"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/arsenal-women-vs-man-united-women/report/473938'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal Women 2-3 Manchester United Women: Alessia Russo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMsi8YgI0OfGcSSU2zAA0IgQvv2BUxqWcT_YHhq65rGn8u-JZ3avcq1kb7ruoHX5kBNLo8aJ27" alt="Arsenal Women 2-3 Manchester United Women: Alessia Russo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Match report and free highlights as Man Utd inflict first defeat of season on WSL leaders Arsenal in front of over 40000 fans at Emirates; Alessia Russo and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/live/2022/nov/19/arsenal-v-manchester-united-womens-super-league-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal 2-3 Manchester United: Women&#39;s Super League – as it ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSt29g0Nm-zgPmJ-dScVs6801cqAX3XPbi6zie83_1v5uLPYJJxX9LVBBeoOJgM55vuQ4bNIXde" alt="Arsenal 2-3 Manchester United: Women&#39;s Super League – as it ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite taking a first half lead, Manchester United were forced to dig deep and come from behind with two late goals to win a thriller at the Emirates&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mirror.co.uk/sport/football/arsenal-man-utd-wsl-live-28534123'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal fell to their first league defeat of the season against Man ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSDiurerx7o9Jfm0HPg0N61Is4zWH6-kO-HaAgV_htIUd5UogfYNRZFKuxiwemTjFBCVAA9KAg0" alt="Arsenal fell to their first league defeat of the season against Man ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal lost for the first time in 15 Women&#39;s Super League games to hand the advantage to rivals Chelsea after their defeat to Manchester United.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63606405'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late Man Utd double ends Arsenal&#39;s perfect WSL start</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRgeB39QBX25S2vkT8iOy10KQs6mEdai-B8qjvUOZBOuam1ywSZxf0bSGZPAPRXO4QJr9cYW_D8" alt="Late Man Utd double ends Arsenal&#39;s perfect WSL start" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But headers by Millie Turner and Alessia Russo in the final five minutes completed a sensational turnaround. It ends a 14-game league winning run for Arsenal,&nbsp;...</p></div>
            </div>
        </a><a href='https://worldsoccertalk.com/news/where-to-find-arsenal-vs-man-united-on-us-tv-2-20221119-WST-407845.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Where to find Arsenal vs. Man United on US TV</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKmh3fMAyelvQclf0o1FmHEEEcCevKafOt2A6f90Hdu7pqJQIPGu5B3kp7KF3ctoBwFxnKpsof" alt="Where to find Arsenal vs. Man United on US TV" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are all of the details of where you can watch Arsenal FC vs. Manchester United FC on US television and via legal streaming: WHO Arsenal FC vs.</p></div>
            </div>
        </a><a href='https://www.espn.co.uk/football/report/_/gameId/648345'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Manchester United - Football Match Report - November ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkGkP3DaBSu_DRb9SyFut25BlfiqmjxSn3E-KdSZ_BUb2JRhdh3kr75Lh7hmywuJtr88v6krQ8" alt="Arsenal vs. Manchester United - Football Match Report - November ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Her effort low and uninspired, yet an intervention from Maya Le Tissier caused the ball to deflect into the top right side of Mary Earps&#39; goal. With the wind in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}