import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Warriors</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Warriors"/>
        <meta name="description" content="Trending News about Warriors" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Warriors</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221130130141-02-mavericks-warriors-112922.jpg?c=16x9&q=w_800,c_fill" alt="Warriors"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/30/sport/luka-doncic-steph-curry-mavericks-warriors-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Luka Doncić racks up 41-point triple-double to help the Dallas ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRrHLpHM3vCDmA4aVQOeGRp1TpkBspSu_7QgwQx5Cl-sQciPmt-jIPeND26JDju6kdogXFc4CwO" alt="Luka Doncić racks up 41-point triple-double to help the Dallas ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Luka Doncić dropped 41 points and his fifth triple-double of the season as his Dallas Mavericks beat Steph Curry&#39;s Golden State Warriors 116-113.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/nba/2022/11/30/23486126/golden-state-warriors-nba-traveling-violation-consistency'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Golden State Warriors are latest victim of the NBA&#39;s new ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSi2NA7DbxKFk8LhDWHzZBWG-sF_lSE1FfKIFSUPqDnUZVvlJHGXkQhNCRkVnoj7R5B_0dRoWHp" alt="The Golden State Warriors are latest victim of the NBA&#39;s new ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>NBA emphasis on traveling violations was on full display last night in the Warriors and Mavericks game.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/warriors-mavericks-first-clash-lives-hype-despite-late-controversy'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors-Mavericks first clash lives up to hype despite late controversy</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRm2UrqXWVoBS4wAk6mgSwmxw8nZsUUJead6a-JuK0yaqbgOq5JM5hbMq9CR0HKN_Ii0kcaLMPc" alt="Warriors-Mavericks first clash lives up to hype despite late controversy" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The final score wasn&#39;t what the Warriors wanted, but these two teams gave fans a show in Dallas.</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/real-sports/nba/warriors-mavericks-preview-streaking-warriors-look-unstoppable/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Warriors-Mavericks Preview: Streaking Warriors Look Unstoppable</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTELYLxh7HrMc3K-ncxcGTW3dTh9kFAFkIdrepLuh3QmMbyxyxroVl3ITQyvGRo5pPqkSuFyQBF" alt="Warriors-Mavericks Preview: Streaking Warriors Look Unstoppable" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steph Curry and the surging Golden State Warriors will travel to Dallas to take on Luka Doncic and the Mavericks with the Warriors ready to feast.</p></div>
            </div>
        </a><a href='https://www.sfchronicle.com/sports/warriors/article/Bench-play-improves-but-Warriors-fall-116-113-to-17619852.php'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bench play improves, but Warriors fall 116-113 to Doncic and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdjqmXwdPUniBfYD62bq0Yhaf3kTvGiqEjamQj94IkLb5OdhS7SVmUyTO6U6OxW_0xYSKT9sbK" alt="Bench play improves, but Warriors fall 116-113 to Doncic and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Golden State Warriors continued to get improved play from their second unit, but it...</p></div>
            </div>
        </a><a href='https://www.mercurynews.com/2022/11/30/currys-late-travel-in-warriors-loss-to-mavs-upheld-by-nba-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Curry&#39;s late travel in Warriors&#39; loss to Mavs upheld by NBA report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT6bIvCg3yJ3LRgx72i-1VVIzikSSIT6pQyHp0p3r9mzCOWSIiHNPCjEdhKijR8zYJ2Z_Ei169l" alt="Curry&#39;s late travel in Warriors&#39; loss to Mavs upheld by NBA report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DALLAS — The NBA&#39;s last two-minute report confirmed a controversial traveling call against Warriors star Stephen Curry in the final seconds of the close&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/bayarea/warriors/steph-curry-warriors-guards-pushing-pace-while-attacking-glass'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steph Curry, Warriors guards pushing pace while attacking glass</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT4lKA60iZ4q1c7P-ZlWXpKhikvC_NMG-cb5WSgvmABlJP1dN7EcnBoPrCKtnH1o32x-iQE2Fbr" alt="Steph Curry, Warriors guards pushing pace while attacking glass" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Steph Curry is having the best rebounding season of his career, and the Warriors have been on the run as of late.</p></div>
            </div>
        </a>
        </Template></>;
}