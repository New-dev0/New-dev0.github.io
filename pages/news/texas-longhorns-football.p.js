import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Texas Longhorns football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Texas Longhorns football"/>
        <meta name="description" content="Trending News about Texas Longhorns football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Texas Longhorns football</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/ar_1.91%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_xy_center%2Cq_auto:good%2Cw_620%2Cx_677%2Cy_200/MTk0MDA0MjkzNjUxNTM5NDYx/usatsi_19499733.jpg" alt="Texas Longhorns football"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/college/texas/football/texas-longhorns-baylor-bears-bijan-robinson-jaylon-ford-final-score-game-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Longhorns Beat Baylor Behind Bijan Robinson, Jaylan Ford Heroics</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQtN4CC1x4cwu3xxU_eaDvhQMI0m-tF_DTIaeL87iuysPZEc5d1PLhrLKOk_VxqJo2mu4_BV-df" alt="Longhorns Beat Baylor Behind Bijan Robinson, Jaylan Ford Heroics" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bijan Robinson once again came up huge for the Longhorns, this time against the Baylor Bears in the regular season finale.</p></div>
            </div>
        </a><a href='https://247sports.com/college/texas/LongFormArticle/Texas-Longhorns-football-Instant-Analysis-Bijan-Robinsons-legs-carried-Texas-to-win-over-Baylor-after-Steve-Sarkisian-kept-putting-game-on-Quinn-Ewers-arm-198521201/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Instant Analysis: Sarkisian kept putting game on arm of Ewers, but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRj_vuBOE1AofOckWeSNTNfsUS3XMvq_YYszdkYxp2Qv8lXuWh2rGx9nyfCVlLAfx4S8het3tgT" alt="Instant Analysis: Sarkisian kept putting game on arm of Ewers, but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUSTIN, Texas — Steve Sarkisian kept putting the game on the arm of Quinn Ewers instead of the legs of Bijan Robinson - until it was almost too late - but&nbsp;...</p></div>
            </div>
        </a><a href='https://www.burntorangenation.com/football/2022/11/25/23478188/initial-thoughts-texas-longhorns-38-baylor-bears-27-bijan-robinson-jaylan-ford'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Initial thoughts from No. 23 Texas&#39; 38-27 win over Baylor</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs3ZSe_hCp4uRvUvEIaNWBCwtBgQy8HLXt1u-z_gnzgoJUN0H81YFFCS2yWrR73Dm5QuJIpk50" alt="Initial thoughts from No. 23 Texas&#39; 38-27 win over Baylor" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Texas mowed its own lawn, solidifying a three-game regular season improvement with a chance to sneak into the Big 12 title game.</p></div>
            </div>
        </a><a href='https://www.kxan.com/sports-general/horns-report/no-23-longhorns-need-to-control-what-they-can-in-big-12-title-game-race/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No. 23 Texas does what it needed to do, puts away Baylor 38-27 in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQD9dn00fpVcCOTPkisz3N2dEnjlZzD8OGC9MlM1EmusTaLGIlkYfwtvy5ETU6pL4-KYZGh_A1X" alt="No. 23 Texas does what it needed to do, puts away Baylor 38-27 in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A win against the Bears coupled with a Kansas win on Saturday over Kansas State will send the Longhorns to the Big 12 Conference championship game against&nbsp;...</p></div>
            </div>
        </a><a href='https://www.statesman.com/story/sports/college/longhorns/football/2022/11/25/live-updates-texas-hosts-baylor-in-critical-big-12-showdown/69666071007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Replay: Texas football beats Baylor, keeps Big 12 hopes alive in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQY9xeMbw-eczNIpdilNPsssH_irBERNCsEtjH32eoRFAXwS7MGD1EBnppfZ71tYNro1H6pqkML" alt="Replay: Texas football beats Baylor, keeps Big 12 hopes alive in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>At least the Texas Longhorns know where they stand in their final game of the regular season: They have already qualified for a bowl game, and in order to&nbsp;...</p></div>
            </div>
        </a><a href='https://hookemheadlines.com/2022/11/25/how-texas-football-can-make-it-to-the-2022-big-12-championship-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Texas football can make it to the 2022 Big 12 Championship ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStXik2TYz1RqkJrU5Gob71ZyTPQwvcEj3NDaU8rhs0c7qY1kMpH5Ql55sRAEDYokT4Eokcj0hm" alt="How Texas football can make it to the 2022 Big 12 Championship ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>If Texas football beats Baylor on Nov. 25, and then Kansas upsets Kansas State on Nov. 26, the Longhorns would have a spot in the Big 12 title game.</p></div>
            </div>
        </a>
        </Template></>;
}