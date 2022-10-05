import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Champions League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Champions League"/>
        <meta name="description" content="Trending News about Champions League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Champions League</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/g3h1ic/article65970663.ece/alternates/LANDSCAPE_615/salah.jpg" alt="Champions League"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/uefa-champions-league-liverpool-vs-rangers-liv-ran-live-streaming-commentary-highlights/article65970331.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool 2-0 Rangers, Champions League live: Salah penalty ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQpamPRMJMfDepK_PNSPnrP7gATgtAH5C9xICx4rfiOeblc8PjPySalaAi8rXQeGgfUhUBjQ80f" alt="Liverpool 2-0 Rangers, Champions League live: Salah penalty ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool vs Rangers LIVE: Follow the live blog of UEFA Champions League match between Liverpool and Rangers at the Anfield stadium.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/inter-milan-vs-barcelona-ucl-live-score-updates-commentary-highlights-champions-league-group-stage/article65970444.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inter Milan 1-0 Barcelona, HIGHLIGHTS Champions League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRa6zX4MWZd9OSzCaK3ho68Qbc6bRZX0s1Vey1c7PDXwSBXDnkuLmCaSvyYhQL_W7Vsm75op4FU" alt="Inter Milan 1-0 Barcelona, HIGHLIGHTS Champions League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Inter Milan vs Barcelona, UEFA Champions League: Score, updates, commentary and highlights from the Group C match at San Siro in Milan.</p></div>
            </div>
        </a><a href='https://khelnow.com/football/uefa-champions-league-top-five-oldest-winners'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Top five oldest UEFA Champions league winners</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpi0mTvgxE0gzokyvRBAuKmtfUMGmdVl-kmRkDdleTtxvaFnkc55iwvk7vHQSWA-8nAK7Wh_Kq" alt="Top five oldest UEFA Champions league winners" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Here, we focus on the oldest players to have their hands on this prestigious trophy - the UEFA Champions League.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/oct/04/champions-league-roundup-napoli-pummel-ajax-inter-beat-barcelona'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League roundup: Napoli pummel Ajax 6-1, Inter beat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTvQw3hl2gqqpknty0s-qmI1ohon74GeuEgwglKjV1DrGuFCkioQxk46DIrjzDTcobA9RkbT7Gk" alt="Champions League roundup: Napoli pummel Ajax 6-1, Inter beat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Serie A leaders Napoli overcame an early Ajax goal to win 6-1 in Amsterdam while Hakan Calhanoglu scored to give Internazionale a 1-0 victory against&nbsp;...</p></div>
            </div>
        </a><a href='https://apnews.com/article/sports-soccer-barcelona-la-liga-43b43d8b9bb1a12c986a4959bef5b7ef'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Inter beats Barça; Napoli, Bayern win big</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSxHEr_tQ_T-WZygtAg-mRrUVDrR3wXcYWg8MJ-Xe2nFz_RYANa3b1ZdTAHmty-g4xo3n33oGDK" alt="Champions League: Inter beats Barça; Napoli, Bayern win big" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MADRID (AP) — Barcelona&#39;s high-powered attack faltered against Inter Milan and the Italian club gained an edge in the battle for second place in their&nbsp;...</p></div>
            </div>
        </a><a href='https://www.deccanherald.com/sports/football/liverpool-stroll-past-rangers-in-champions-league-after-pl-stutter-1150786.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Liverpool stroll past Rangers in Champions League after PL stutter</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSP2WN2sQJJAjQicrLbvQqcMULR6su1EciFfci1iPARf_gryc2o69Q2ZK7k3B41SMMvdl3Q1M1h" alt="Liverpool stroll past Rangers in Champions League after PL stutter" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Liverpool put their recent stutters behind them to comfortably beat Rangers 2-0 in the Champions League on Tuesday and move into second spot in Group A. The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/football/2022/oct/04/eintracht-frankfurt-tottenham-champions-league-match-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Spurs and Antonio Conte frustrated in Champions League Frankfurt ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLlKA7DygyRH6KeeEF4p3sXNmvt1rAcDwsh4r1dVxiLPseXUUeerX4FVDQEO7jLgpFgpQdm3c7" alt="Spurs and Antonio Conte frustrated in Champions League Frankfurt ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chances were at a premium in Germany as Tottenham drew 0-0 at Eintracht Frankfurt in the Champions League.</p></div>
            </div>
        </a><a href='https://www.vanguardngr.com/2022/10/champions-league-barcelona-travel-to-inter-as-liverpool-look-to-bounce-back-against-rangers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Barcelona travel to Inter as Liverpool look to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSJL75VgHygswDKV_GEpP5MKLMqOCvWPfnuXzmEemAPJItY5eNrAnMgBpBiuFBr2TSgeo6yrmBH" alt="Champions League: Barcelona travel to Inter as Liverpool look to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>European heavyweights Inter Milan and Barcelona will clash at the San Siro on Tuesday night in the UEFA Champions League matchday 3.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/champions-league/inter-milan-barcelona-directo/2022/10/04/01_0103_20221004_127_178.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inter 1-0 Barcelona: Goal and highlights - Champions League 22/23</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRijLzo1H4MjIc_h-PhmmB2vTHI47dI0nAUogTnAdHdh7rTCxB1FHyR0TF2dzC4yQ5YCGcbS9Yt" alt="Inter 1-0 Barcelona: Goal and highlights - Champions League 22/23" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The two clubs enter Tuesday&#39;s match on three points after they both fell to Bayern Munich, but the Blaugrana sit atop the LaLiga Santander standings with rivals&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/champions-league-carlo-ancelotti-real-madrid-steps-up-against-shakhtar-donetsk/article65970240.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Champions League: Ancelotti urges Real Madrid players to step up ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRi3W6sLsB8jbDc8Y2ust9kNFX82oyKILY8SohZaRd5tURSSHnZpwzreYP9Ex1CkM_bk8x1zWzN" alt="Champions League: Ancelotti urges Real Madrid players to step up ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ancelotti stressed to his players that they need to up their game at home on Wednesday against a Shakhtar side that is are unbeaten in its two Champions&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}