import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Austria vs Italy</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Austria vs Italy"/>
        <meta name="description" content="Trending News about Austria vs Italy" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Austria vs Italy</h1>
            <Image width={800} height={500} src="" alt="Austria vs Italy"/>
            <h3>Recent News</h3>
            <a href='https://football-italia.net/line-ups-austria-vs-italy/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Line-ups: Austria vs. Italy - Football Italia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQCupoTQ3MSWvGpVPvE7C5mhcM7gh20fWrNe6ixS08Zm9VYHX5bJHB7VYsC2qwT5iSZDKxjW1iV" alt="Line-ups: Austria vs. Italy - Football Italia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Italy continue to experiment with the 3-4-3 formation against Marko Arnautovic&#39;s Austria, with the likes of Gianluigi Donnarumma, Nicolò Barella and Matteo.</p></div>
            </div>
        </a><a href='https://www.vavel.com/en-us/soccer/2022/11/19/1129878-austria-vs-italy-live-stream-score-updates-and-how-to-watch-in-friendly-match.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Goals and Highlights: Austria 2-0 Italy in Friendly Match</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSBA4D2YpGELZSXJfrzId2t_yiotdf4ki8UvCWHNWwmvFlk-_8ckMLwJlcpBpOmO293wDhZ-s1N" alt="Goals and Highlights: Austria 2-0 Italy in Friendly Match" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Austria won the friendly match against Italy, with two goals from Xaver Schlager and captain David Alaba. The Italians could do little in this game,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/tv/soccer/2022/11/20/austria-italy-stream-international-friendly-live'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How to Watch Austria vs Italy: Stream International Friendlies Live ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeF5uWpTLFFZnGjNzlvCIzQMdVZit-deSy3aLo_DiZVNhcgRB1-GPWKTF3HCkFkkjGqM6a0dbR" alt="How to Watch Austria vs Italy: Stream International Friendlies Live ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both the Azzurri and Das Team exited World Cup qualifying in the UEFA play-off semi-finals, where Wales eased Austria out of the running while Italy lost out to&nbsp;...</p></div>
            </div>
        </a><a href='https://cultofcalcio.com/italy-player-ratings-vs-austria-unbalanced-azzurri-suffer-defeat-in-vienna/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Italy Player Ratings vs Austria: Unbalanced Azzurri Suffer Defeat in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTt8p99T-wr4HCOKxH7ADn8xD2pbAwSZ7118AxESs8Pe0dL6lsAGWKzRarndmn5ui4O8EDckazo" alt="Italy Player Ratings vs Austria: Unbalanced Azzurri Suffer Defeat in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here are our player ratings for Italy who succumbed to a 0-2 defeat at the hands of Austria in their last fixture of the year.</p></div>
            </div>
        </a>
        </Template></>;
}