import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Commanders</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Commanders"/>
        <meta name="description" content="Trending News about Commanders" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Commanders</h1>
            <Image width={800} height={500} src="https://cdn.sportsgrid.com/wp-content/uploads/2022/11/USATSI_19434663-scaled-e1669394993955_1669418102.webp" alt="Commanders"/>
            <h3>Recent News</h3>
            <a href='https://www.sportsgrid.com/real-sports/nfl/falcons-commanders-spread-moneyline-total-game-picks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falcons-Commanders: Spread, Moneyline, Total Game Picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS6uIU5gEDIifqcoZfoVopaGbe9g0CDi2Bh67Bm0C1BZ_JC_Q6zmlMC6XcCzLhMJR_r0De8wIsr" alt="Falcons-Commanders: Spread, Moneyline, Total Game Picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Atlanta Falcons and Washington Commanders are hanging around in the NFC playoff race, and winning this game will go a long way in helping.</p></div>
            </div>
        </a><a href='https://www.atlantafalcons.com/news/who-will-win-falcons-or-commanders-expert-picks'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Who will win, Falcons or Commanders? Expert Picks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQg6U08CrfI2qzAVuTASh2nVnksvrM-i6tjs4X4zxpU4dkztXNIqvfQ2ds36NNpowAFu9FHuGfR" alt="Who will win, Falcons or Commanders? Expert Picks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Falcons are heading into Week 12 coming off a crucial win against the Chicago Bears. Facing the Washington Commanders, who have won back-to-back games&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/nfl/falcons-commanders-meet-in-game-with-playoff-implications/2022/11/25/8dcf5222-6cfa-11ed-8619-0b92f0565592_story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falcons, Commanders meet in game with playoff implications</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS5rRtz3sNCMgbvD3wpNqfIH4i-fzMm1zZFZf0YmyWOJLRdfq6pNCxyCiom3-hC2f6_lwnCsmj1" alt="Falcons, Commanders meet in game with playoff implications" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Atlanta Falcons and Washington Commanders are meeting after Thanksgiving in a meaningful game with potentially significant playoff implications.</p></div>
            </div>
        </a><a href='https://riggosrag.com/2022/11/25/william-jackson-iii-injury-update-bad-news-commanders-steelers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why William Jackson III injury update is bad news for Commanders</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTD_hjSswcoZOrkcsyPzw5ZrPouG7t03saRUwaRtLteoMyTH2vocB-EHcHXMVpb6sxt4Ozn3D1Y" alt="Why William Jackson III injury update is bad news for Commanders" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Steelers placed former Commanders cornerback William Jackson III on injured reserve. Here&#39;s why that&#39;s bad news for Washington.</p></div>
            </div>
        </a><a href='https://riggosrag.com/2022/11/25/kevin-durant-interested-joining-commanders-ownership-group-snyder/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant joining Commanders new ownership group needs to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSf3S2Eml7d07VhyzMYw8Qo2WxlwmUrojP8rDkl02pQPSpbyX5IRH2ifYQonc2p1mrXAe-e5o0w" alt="Kevin Durant joining Commanders new ownership group needs to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>D.C. native and lifelong Washington football fan Kevin Durant is interested in joining the Commanders new ownership group if Dan Snyder sells the franchise.</p></div>
            </div>
        </a><a href='https://riggosrag.com/2022/11/25/5-commanders-reality-checks-week-12-falcons-heinicke-del-rio/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 Commanders reality checks for Week 12 against the Falcons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcROE4BR40r49NP-FGZje_7jXn6d6hWd0woFehV3rfTF3d42sEjcUO38B7MDmYaJpw528ej30ab5" alt="5 Commanders reality checks for Week 12 against the Falcons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Commanders sound defeat of the woeful Houston Texans was a layup.. They have another chance for a similar win this week as Atlanta comes to town.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/where-washington-offensive-line-ranked-140118906.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Where is Washington&#39;s offensive line ranked ahead of Week 12?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRRM91Eq5MdFNIoloexNR9ND0E_fRE0WdJk0HHjLyYltw40iS4nXjSvplWyiOj7JD2izTPFdmnp" alt="Where is Washington&#39;s offensive line ranked ahead of Week 12?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Washington Commanders sit at 6-5 on the season ahead of Sunday&#39;s showdown against the Atlanta Falcons. A primary reason for Washington&#39;s recent success&nbsp;...</p></div>
            </div>
        </a><a href='https://www.covers.com/nfl/falcons-vs-commanders-week-12-picks-predictions-november-27-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Falcons vs Commanders Week 12 Picks and Predictions: Atlanta&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS72LID0NW1o4vW-GNtWwCsdp5UYlaw9-i_8YutwB2RHBH9NrR3y5nG4OZaQEmUyNQ9InUw8vwS" alt="Falcons vs Commanders Week 12 Picks and Predictions: Atlanta&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NFL odds, picks and predictions for Atlanta Falcons vs Washington Commanders. NFL betting best bet and game analysis.</p></div>
            </div>
        </a>
        </Template></>;
}