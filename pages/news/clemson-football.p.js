import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clemson football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clemson football"/>
        <meta name="description" content="Trending News about Clemson football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clemson football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/26/PGRE/c739206b-c760-44cc-a0b9-b6c59103e670-1126_Clemson_USC_1Q_13.JPG?auto=webp&crop=2399,1350,x0,y80&format=pjpg&width=1200" alt="Clemson football"/>
            <h3>Recent News</h3>
            <a href='https://www.greenvilleonline.com/story/sports/college/clemson/2022/11/26/clemson-football-score-updates-south-carolina-gamecocks/69670120007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clemson football: Observations as Tigers&#39; playoff hopes smashed by ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdYE1ra1T7-uz6STDTmTeAkAg3-EeKy4WQ2p89AbXbhWTSgjMn3fwd0FUULgZnaKtrogQOctg4" alt="Clemson football: Observations as Tigers&#39; playoff hopes smashed by ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson&#39;s dreams of the College Football Playoffs smashed as South Carolina pulls out second Top 10 upset.</p></div>
            </div>
        </a><a href='https://www.greenvilleonline.com/story/sports/college/clemson/2022/11/26/clemson-football-out-of-playoff-race-in-31-30-loss-to-south-carolina/69670157007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clemson&#39;s College Football Playoff hopes dashed with 31-30 loss to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdYE1ra1T7-uz6STDTmTeAkAg3-EeKy4WQ2p89AbXbhWTSgjMn3fwd0FUULgZnaKtrogQOctg4" alt="Clemson&#39;s College Football Playoff hopes dashed with 31-30 loss to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson (10-2) needed to win its last two games, this one and Dec. 3 (8 p.m., ABC) in the ACC championship game against North Carolina in Charlotte, to remain&nbsp;...</p></div>
            </div>
        </a><a href='https://rubbingtherock.com/2022/11/26/clemson-football-tigers-fall-gamecocks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clemson Football: Tigers fall to Gamecocks as passing game sputters</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQVwN6w9ULlGX8blJV4Moyp2WVchbP924nFCNviAUmO303cgUQgJpMgaTdH2_OAJuMbZXfV4t7Z" alt="Clemson Football: Tigers fall to Gamecocks as passing game sputters" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson football fell to South Carolina 31-30 as the seven game winning streak and 40 game home winning streak ended in Death Valley.</p></div>
            </div>
        </a><a href='https://www.si.com/college/clemson/football/game-notes-from-clemsons-loss-to-south-carolina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Notes from Clemson&#39;s Loss to South Carolina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSeD5rAtaC7X0sfMIdeg3ddDYM78sJruHyL7TiNQN_SsV3BOyweunlCIynnx4FZ424EHIePD0B2" alt="Game Notes from Clemson&#39;s Loss to South Carolina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson dropped to 76-2 when rushing for 200 yards under Dabo Swinney. Saturday&#39;s game joined the 2009 ACC Championship Game as the only games under Swinney in&nbsp;...</p></div>
            </div>
        </a><a href='https://247sports.com/college/clemson/Article/Snap-Judgments-South-Carolina-31-Clemson-30-198667534/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Snap Judgments: South Carolina 31, Clemson 30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSBrBkO-4hQgW-tP6HnG-2vs0HSCp4UkHBtohiwCPUEeEA5oqdF8-QehpbHeJg20TBMuzlo61ck" alt="Snap Judgments: South Carolina 31, Clemson 30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CLEMSON — Below are immediate, initial observations following Clemson&#39;s 31-30 loss to South Carolina.</p></div>
            </div>
        </a><a href='https://www.espn.com/college-football/story/_/id/35115601/clemson-cfp-hopes-crash-tigers-fall-south-carolina'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clemson&#39;s CFP hopes crash as Tigers fall to South Carolina</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSZMRhM4k14QtA1Q8vrqa2ryPEghmiPrMQ45WtKzH7X2A98T13WjWnnCeiwkIjoPIhzTuyKW2O6" alt="Clemson&#39;s CFP hopes crash as Tigers fall to South Carolina" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson had its nation-leading 40-game home winning streak snapped on Saturday, losing to rival South Carolina 31-30 in a mistake-filled performance that&nbsp;...</p></div>
            </div>
        </a><a href='https://rubbingtherock.com/2022/11/26/clemson-football-watch-tigers-gamecocks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clemson Football: Announcers, TV, streaming – How to watch ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSemiiXMSA7bs8ERLk5haWcnb9Mq_0mJZ-PkoDu4fwtMiH9b0lgg8jkIECsbBDZ58G_b1h2f7De" alt="Clemson Football: Announcers, TV, streaming – How to watch ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Clemson football looks to extend the nation&#39;s longest winning streak and extend a seven game winning streak over South Carolina Saturday in Memorial&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/college/clemson/football/south-carolina-at-clemson-5-things-to-watch-for'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Carolina at Clemson: 5 Things to Watch For</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTNBcqZpxKa5ISGb8gtsffUqlfHKpGzR_vGzDkBDh19_hgW-2pJhzogFibKpBpeSs_KtoQ5h_xN" alt="South Carolina at Clemson: 5 Things to Watch For" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Five storylines to follow in the annual rivalry matchup between the Clemson Tigers and South Carolina Gamecocks.</p></div>
            </div>
        </a><a href='https://www.thestate.com/sports/college/university-of-south-carolina/usc-football/article269249272.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>South Carolina vs. Clemson live updates: USC wins 31-30</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQrCZaGQ4ou9SAjYrrgku6zg8CeF_TyPJ8rJq1lQFatB42TXfwH_iIRmEdrmkqaP5vHi9unMTkE" alt="South Carolina vs. Clemson live updates: USC wins 31-30" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The USC Gamecocks and Clemson Tigers face off in a college football game today at Death Valley. What&#39;s the TV channel, score right now?</p></div>
            </div>
        </a><a href='https://clemsontigers.com/xavier-thomas-2022-program-story/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Xavier Thomas | Matter of Faith</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ6ZtP7KnNYY8YXmsbT8jEMmQlHxH6VdxbWUtZMba94HJZGf8K_nr9HNvpQb7CHtsSUY3B99amw" alt="Xavier Thomas | Matter of Faith" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Note: The following appears in the South Carolina football gameday program. When Xavier Thomas walked onto the Clemson University campus in 2018,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}