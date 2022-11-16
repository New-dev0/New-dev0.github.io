import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>World Cup games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,World Cup games"/>
        <meta name="description" content="Trending News about World Cup games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>World Cup games</h1>
            <Image width={800} height={500} src="https://www.cnet.com/a/img/resize/49a8bd4da9c6d1c2d4704a266e8945eade70c458/hub/2022/11/11/d69a356d-db63-4cd9-aa5e-6c69fd966b80/gettyimages-1429440875.jpg?auto=webp&fit=crop&height=630&precrop=1024,575,x0,y0&width=1200" alt="World Cup games"/>
            <h3>Recent News</h3>
            <a href='https://www.cnet.com/tech/services-and-software/world-cup-2022-how-to-stream-every-game-of-soccers-biggest-tournament/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: How to Livestream Every Match of FIFA&#39;s Biggest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqvTenY4Y1X4xwwmAZm8qItmWF21-wTjXrJhF0hdR2U7Am3vwBRYZDiq7_h9SMeDN5il_p7YG6" alt="World Cup 2022: How to Livestream Every Match of FIFA&#39;s Biggest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The FIFA World Cup runs from Nov. 20 to Dec. 18 in Qatar. Here&#39;s the best way to watch Team USA and all the other matches without cable.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/when-first-game-world-cup-date-time-first-match-and-stadium-fifa-qatar-2022/cubc9mbnu5fr5miuta7gi5ue'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>When is the first game of the World Cup? Date, time, first match and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQLx0nco2zuLL0S-LrTjPVzvHgCDUu-St63ofNIaUS7huyV237NrYPV74wEu5j1A-niICFX1EJ2" alt="When is the first game of the World Cup? Date, time, first match and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Find out which teams will face off in the opening match of the 2022 FIFA World Cup in Qatar, as well as details of the match date, kick-off time and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/world-cup-2022-fixtures-full-schedule-games-kick-off-times-2022-11-15/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022 fixtures: full schedule of games and kick-off times</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTGjwpdqiF4yUAUGTZCVoJCv5bOZ1xIFrj-wgrIA8dXIJ_58AFY7YfBIhtop8msrEQFpFFE5JT8" alt="World Cup 2022 fixtures: full schedule of games and kick-off times" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 World Cup in Qatar -- the first edition to be held in the Middle East and second in Asia after Japan and South Korea hosted the 2002 tournament&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/soccer/news/2022-fifa-world-cup-predictions-picking-every-game-lionel-messi-argentinas-path-to-the-title/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 FIFA World Cup predictions, picking every game: Lionel Messi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQbIuSci7bFNJl7hsLRyvdhtFXpKbI5SNSmL0_49gBxJqj9pDa2zy4Z8R3twopIp3FTCWfIQRjW" alt="2022 FIFA World Cup predictions, picking every game: Lionel Messi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Only a few more sleeps until the World Cup kicks off on Nov. 20 but before we get to that point, what better time to try predicting the entire tournament&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dezeen.com/2022/11/15/2022-fifa-world-cup-qatar-stadium-architecture/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dezeen&#39;s guide to the 2022 FIFA World Cup Qatar stadium ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLyiuQ0CJfjlZDYNs38du0svkVXVf9efbngiAN9x3q8U-6fBiJQBJltWPro5r9b3vhnpp66sg0" alt="Dezeen&#39;s guide to the 2022 FIFA World Cup Qatar stadium ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All located in and around the Qatari capital city of Doha, the eight stadiums will be the backdrop to the international football tournament that runs from 20&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/soccer/story/2022-11-15/qatar-stadiums-worker-deaths-world-cup-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>World Cup 2022: A guide to the eight stadiums hosting games</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTu4jIgANS84ZIVn_NyVnKOX1w5TdOdAAZTaEB3Rp_7vk0ZH66gJi9-cVGIvgm7jsCl5FwadsKE" alt="World Cup 2022: A guide to the eight stadiums hosting games" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The eight stadiums hosting games at the 2022 World Cup in Qatar hold grim legacies because of their association with migrant worker deaths in the country.</p></div>
            </div>
        </a><a href='https://theprint.in/sport/soccer-world-cup-2022-fixtures-full-schedule-of-games-and-kick-off-times/1217563/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Soccer-World Cup 2022 fixtures: full schedule of games and kick-off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQSLfUn4pBTbK5u-6t_Fy0wEwlZGWA6C9TuajXrpDWSF2k_PnzJAY04wJG_nF1H-o7Fx0p97cvc" alt="Soccer-World Cup 2022 fixtures: full schedule of games and kick-off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>(Reuters) – The 2022 World Cup in Qatar — the first edition to be held in the Middle East and second in Asia after Japan and South Korea hosted the 2002&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}