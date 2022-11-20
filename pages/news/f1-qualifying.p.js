import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1 qualifying</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1 qualifying"/>
        <meta name="description" content="Trending News about F1 qualifying" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1 qualifying</h1>
            <Image width={800} height={500} src="https://cdn-1.motorsport.com/images/amp/0a9eXD40/s6/formula-1-abu-dhabi-gp-2022-ma-2.jpg" alt="F1 qualifying"/>
            <h3>Recent News</h3>
            <a href='https://www.autosport.com/f1/news/f1-qualifying-results-max-verstappen-takes-abu-dhabi-gp-pole/10402378/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 qualifying results: Max Verstappen takes Abu Dhabi GP pole</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTmmr4nllLvsht2jtHP4zNBFCU5g11YgY3xh6mc5BiStmwvm2VSlgNS9V1htWswBzp3Ye4NxLSP" alt="F1 qualifying results: Max Verstappen takes Abu Dhabi GP pole" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Red Bull&#39;s Max Verstappen took pole position for the Abu Dhabi Grand Prix ahead of the final round of the 2022 F1 world championship.</p></div>
            </div>
        </a><a href='https://www.skysports.com/f1/news/15740/12750982/abu-dhabi-gp-qualifying-max-verstappen-beats-sergio-perez-to-final-f1-2022-pole-as-mercedes-fall-back'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Abu Dhabi GP Qualifying: Max Verstappen beats Sergio Perez to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeHySdV5HvLgslrIjFQzsOULHL2RJfAfS1NoJ-ixE9wIbyU6l6Deo9B-ThHKU4XRJ5HCVZjObl" alt="Abu Dhabi GP Qualifying: Max Verstappen beats Sergio Perez to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen will start on pole position for the final race of a 2022 season he has dominated after beating Red Bull team-mate Sergio Perez in an Abu&nbsp;...</p></div>
            </div>
        </a><a href='https://www.autosport.com/f1/news/vettel-was-coming-alive-in-final-f1-qualifying-session/10402445/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vettel “was coming alive” in final F1 qualifying session</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRR1-VlAkuTTDZR65K4kCeZbOwe_PoGsTtZJYY32zh6iSmesH4teCHA-bXrmcvhwyKRRFIpraYw" alt="Vettel “was coming alive” in final F1 qualifying session" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel says he was “coming alive” as he took ninth on the grid in his final Formula 1 qualifying session in Abu Dhabi.</p></div>
            </div>
        </a><a href='https://www.formula1.com/en/latest/article.verstappen-storms-to-pole-as-red-bull-score-1-2-in-final-qualifying-session.2CWRwUulX6gvWGt2G5KHnC.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>2022 Abu Dhabi Grand Prix qualifying report and highlights ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQFy7jfAf00M3OhZuoVpLwvWKK4tSdO-EHl7xLlGAJt0QWWLZjDNCsLfOLkGaRVCL2akRa4TP7l" alt="2022 Abu Dhabi Grand Prix qualifying report and highlights ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen stormed to pole position for the Abu Dhabi Grand Prix, getting the better of Red Bull team mate Sergio Perez and Ferrari rival Charles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/verstappen-explains-abu-dhabi-gp-qualifying-scare/10402395/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Verstappen explains Abu Dhabi GP F1 qualifying &quot;scare&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSk4TM1Fx2Jse8JQkymAcpkwThVg5lUXRJ_Xe0dEuCBSCsY4q8leBKqXbEySIgUBeJb0qeb7QGv" alt="Verstappen explains Abu Dhabi GP F1 qualifying &quot;scare&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen has revealed the &#39;scare&#39; he faced ahead of grabbing pole position for Formula 1&#39;s Abu Dhabi Grand Prix when his Red Bull car completely shut&nbsp;...</p></div>
            </div>
        </a><a href='https://racingnews365.com/live-f1-2022-abu-dhabi-grand-prix-qualifying'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: F1 2022 Abu Dhabi Grand Prix - Qualifying</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTbBtBPLnAyGDqbbQ-TmdfSMImWD5OoHNv51rQ7u_9MaGqskAcDc7if7_kmTawfci4MzH2kb5K5" alt="LIVE: F1 2022 Abu Dhabi Grand Prix - Qualifying" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It&#39;s time for the final Formula 1 qualifying of the 2022 season, but who will grab pole position for the Abu Dhabi Grand Prix?</p></div>
            </div>
        </a><a href='https://www.crash.net/f1/results/1017621/1/f1-2022-abu-dhabi-grand-prix-full-qualifying-results'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 2022 Abu Dhabi Grand Prix - Full Qualifying results</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_qY4gXJCw8XfziVlLP3XpDEKH0-BQeqWWa3e_cbC6ylPjN6fiaRTCP5L__uOd7kIXDux02TwT" alt="F1 2022 Abu Dhabi Grand Prix - Full Qualifying results" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pos. Driver, Nat. Team, Q1, Q2, Q3. 1, Max Verstappen, NED, Oracle Red Bull Racing, 1m24.754s, 1m24.622s, 1m23.824s.</p></div>
            </div>
        </a><a href='https://www.formula1.com/en/latest/article.i-enjoyed-every-lap-vettel-delighted-with-final-f1-qualifying-run-but-wishes.7s0PZ4LZNEnucVWXtt26is.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I enjoyed every lap&#39; – Vettel delighted with final F1 qualifying run but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSHXfK3xVHPLzwDLMV8JLdf7loKbhfZCZUM54XJmvOX6Vz7MgPM8LlHUFM-TPAOi-BJIstmTGch" alt="&#39;I enjoyed every lap&#39; – Vettel delighted with final F1 qualifying run but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel was left feeling “very happy” with his performance after making it through to Q3 and claiming ninth on the grid for the Abu Dhabi Grand&nbsp;...</p></div>
            </div>
        </a><a href='https://racingnews365.com/vettel-was-coming-alive-in-final-f1-qualifying'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vettel was &#39;coming alive&#39; in final F1 qualifying</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQcdu6Ul15VG5RNPEjBT92ezM23IWxJSNxeNDrSNspsaN5bPgSBeHQrN41NmwVgVZ4n1mdKUIP4" alt="Vettel was &#39;coming alive&#39; in final F1 qualifying" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sebastian Vettel qualified ninth fastest for his final ever F1 race in the Abu Dhabi Grand Prix.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/formula-1/news/f1-qualifying-results-starting-grid-2022-abu-dhabi-grand-prix-verstappen-takes-pole-position-final-race-season/gczzu8ramk87kxjr9c3q43tp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 qualifying results: Starting grid for 2022 Abu Dhabi Grand Prix as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQeGiNZHMk0erYvyhKN-2ojm9P4Nyyuhdfmuo4R0GfYSGquMpO-aex60qV_xaKMejio-o9QqxRV" alt="F1 qualifying results: Starting grid for 2022 Abu Dhabi Grand Prix as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Max Verstappen will start from the front at the Abu Dhabi Grand Prix - the last race of the 2022 Formula One season.</p></div>
            </div>
        </a>
        </Template></>;
}