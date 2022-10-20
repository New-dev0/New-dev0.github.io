import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>NBA</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,NBA"/>
        <meta name="description" content="Trending News about NBA" /></Head><Template>
            <h1 style={{fontSize: "30"}}>NBA</h1>
            <Image width={800} height={500} src="http://s.espncdn.com/stitcher/sports/basketball/nba/events/401468016.png?templateId=espn.com.share.1" alt="NBA"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/nba/recap?gameId=401468016'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>76ers vs. Celtics - NBA Game Recap - 19 October 2022 | ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTjf8llV_mxb7OG2oG6SALy1i6V0xStxQHjinZqNP35vvfDj6UuO5N7hoIdElmt7i1D76vfv8KX" alt="76ers vs. Celtics - NBA Game Recap - 19 October 2022 | ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visit ESPN for the game recap of the Philadelphia 76ers vs. Boston Celtics NBA basketball game on 19 October 2022.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/nba-stephen-curry-golden-state-warriors-celebrate-championship-beat-los-angeles-lakers-news-231015'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Stephen Curry, Golden State Warriors Celebrate ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQbWZQVEusnf9OYVuY8ogh-f2zgX-NnTde1JPph0OeHUXwDXZqkbSSu-8mnX9zXhhsSMGiuYqYR" alt="NBA: Stephen Curry, Golden State Warriors Celebrate ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors beat LeBron James and the Los Angeles Lakers 123-109 after receiving their championship rings in a pregame ceremony.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/oct/18/nba-opening-night-celtics-sixers-warriors-lakers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA opening night: Warriors top Lakers to open title defense as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT410QIEAP_jX5cX6z1zhkPH7Q_S0Rf0_ODbqDLzDYbm4mwiYcqU-iLUXE3M5e3zhKaz6h6O3Qs" alt="NBA opening night: Warriors top Lakers to open title defense as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stephen Curry&#39;s Warriors beat LeBron James and the Lakers on Tuesday night after receiving their championship rings in a pre-game ceremony.</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/sneakers/news/top-five-shoes-from-nba-opening-night'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top Five Shoes from NBA Opening Night</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXZct00Gm2tGWzH0nUJN0JxnTAiEWO23yBvmp6F8VyUSwJ0J3RRn3qFQdBNAAkZMDRiP4N7Ft2" alt="Top Five Shoes from NBA Opening Night" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Listing the top five basketball shoes worn during the opening night of the 2022-23 NBA season.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/basketball/nba-golden-state-warriors-vs-la-lakers-steph-curry-lebron-james-opening-night-titles-rings/article66026140.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: LeBron, Curry begin hunt for 5th ring as Warriors face Lakers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRDj0-fgezxhX47vE0TZJjwCW_wA7f00Vd4W2PGATgX_65HJWugiheT1RbOlAco2MHS_AeNWoBJ" alt="NBA: LeBron, Curry begin hunt for 5th ring as Warriors face Lakers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Stephen Curry equalled LeBron James at four title wins when his team Golden State Warriors won the NBA Finals against Boston Celtics last season.</p></div>
            </div>
        </a><a href='https://www.news18.com/news/sports/nba-boston-celtics-beat-philadelphia-76ers-126-117-6194653.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA: Boston Celtics Beat Philadelphia 76ers 126-117</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRCWhpf-crFCETYMLuzVhhO1QX7x5dJczA9iunBRpro-vfbF9FVHZHkMHKgU8xdYRqz4hdSe85t" alt="NBA: Boston Celtics Beat Philadelphia 76ers 126-117" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jayson Tatum and Jaylen Brown of the Celtics scored 35 each as the Boston-based team romped to a win over James Harden&#39;s 76ers in the opening fixture of the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nba.com/news/5-takeaways-celtics-76ers-opening-night'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>5 takeaways from the Celtics&#39; season-opening victory over 76ers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS0h_ZEUgqUJUVmnB2N441jxYCSt8lss-9Xj-26fNJnnjEjE5wMsPson3NbYtqRUOR10FOjXlbN" alt="5 takeaways from the Celtics&#39; season-opening victory over 76ers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jayson Tatum has confidence-booster game, James Harden shows lethal touch and 76ers&#39; new faces have rough debuts.</p></div>
            </div>
        </a><a href='https://www.sportstiger.com/news/nba-2022-23-when-and-where-to-watch-philadelphia-76ers-vs-milwaukee-bucks-in-india-us'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA 2022-23: When and where to watch Philadelphia 76ers vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyVGmQKf5CGG8wUzwKLMrwCp5iRmiwgOF1wdfMFy8dH3rgbiGhO1aMNoliQOptqEYHhi5BN_ya" alt="NBA 2022-23: When and where to watch Philadelphia 76ers vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The NBA match between 76ers and Bucks will take place on October 21 at 5:00 am IST (Oct 20, 7:30 pm ET) at the Wells Fargo Center.</p></div>
            </div>
        </a><a href='https://www.rotowire.com/basketball/article/nba-best-bets-tonight-free-expert-picks-for-opening-night-66764'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA Best Bets Tonight: Free Expert Picks for Opening Night</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSxTED6rk-mlVbUzJoBiOD317C9_4eQ2DMFlZdorTHboapQdsssiPxe01UwmAbDHbmcNdPhtNQW" alt="NBA Best Bets Tonight: Free Expert Picks for Opening Night" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The RotoWire NBA crew offers their favorite bets for opening night. Will Joel Embiid dominate the glass against a shorthanded Boston frontcourt?</p></div>
            </div>
        </a><a href='https://www.slamonline.com/nba/7-takeaways-from-opening-night/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seven Takeaways From The NBA&#39;s 2022 Opening Night | SLAM</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRYdOb-qvhx60uopIqrL8xLPS9OdD1uv2lLGLzvaFB_wZ-YT6UBGPfP-vrMQWTS7lObZC3WLvh1" alt="Seven Takeaways From The NBA&#39;s 2022 Opening Night | SLAM" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The wait is finally over. The NBA is back, and Monday night&#39;s opening matchups did not disappoint: from the tunnel fits to a head-to-head matchup in Boston&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}