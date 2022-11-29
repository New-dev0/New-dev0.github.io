import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Seahawks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Seahawks"/>
        <meta name="description" content="Trending News about Seahawks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Seahawks</h1>
            <Image width={800} height={500} src="https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/maczf1sc9ji04d78yyn0" alt="Seahawks"/>
            <h3>Recent News</h3>
            <a href='https://www.nfl.com/news/nfl-sunday-s-nine-worst-week-12-losses-seahawks-crashing-back-to-earth-packers-b'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL Sunday&#39;s nine worst Week 12 losses: Seahawks crashing back ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgMuIcmMB_TvBO5BkDMKEkqGDMAlUj8-JGtjnuLWs6sSKBEcIIGQNej1wvf7_JEiC3WnKVehDu" alt="NFL Sunday&#39;s nine worst Week 12 losses: Seahawks crashing back ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Thanksgiving week provided a delicious football feast at all levels of the sport, but a host of NFL teams suffered serious indigestion.</p></div>
            </div>
        </a><a href='https://www.seattletimes.com/sports/seahawks/what-national-media-are-saying-about-seahawks-after-ot-loss-in-week-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What national media are saying about Seahawks after OT loss in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT-S2DAaFoKHgCE1Re0CiqMBPF0XcmX2AlZ3pd-CWvNVwFVkfFU2fdCm6YG3QE34Aaw6jZXH_Pb" alt="What national media are saying about Seahawks after OT loss in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But how do you explain losing at home after a bye to a three-win Raiders team? The Seahawks were on the wrong end of some questionable calls, but they also&nbsp;...</p></div>
            </div>
        </a><a href='https://www.seahawks.com/news/what-the-seahawks-said-following-their-40-34-ot-loss-to-the-raiders'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>What The Seahawks Said Following Their 40-34 OT Loss To The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdjNphKPSnQW64wh2CiC4e9GFrZmboCJuzJBPI9aVEBN41sIMQKznK3XQqAzYXKWJTXMhz5LBn" alt="What The Seahawks Said Following Their 40-34 OT Loss To The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Head Coach Pete Carroll; QB Geno Smith; Wide Receiver Tyler Lockett; Free Safety Quandre Diggs; Linebacker Jordyn Brooks; Wide Receiver Marquise Goodwin&nbsp;...</p></div>
            </div>
        </a><a href='https://www.seahawks.com/news/seahawks-get-good-news-on-safety-ryan-neal-s-injury'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seahawks Get Good News On Safety Ryan Neal&#39;s Injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSFwhJhBw3t2X809ByL2XASGjLHis_hxLkDiyZQ_nbrrt9fN5yB1Xc3ijpO2ugucfMIr0qXv3Mt" alt="Seahawks Get Good News On Safety Ryan Neal&#39;s Injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seahawks coach Pete Carroll gave a positive update on the injury that knocked safety Ryan Neal out of Sunday&#39;s loss to the Raiders.</p></div>
            </div>
        </a><a href='https://seahawkswire.usatoday.com/gallery/seahawks-pro-football-focus-grades-week-12-loss/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seahawks Pro Football Focus grades from a brutal OT loss to Raiders</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRjVrufH9kuHg_OAqbTGflPoHjoyLHdbDEw_ndaIn5vOojcweItRAhzP_QhwrPKJxafILGXe0P3" alt="Seahawks Pro Football Focus grades from a brutal OT loss to Raiders" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Seattle Seahawks fell to 6-5 with yesterday&#39;s overtime loss to the Las Vegas Raiders. This was a significant and potentially season-changing kind of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportsgrid.com/video/the-seahawks-stepped-up-this-season/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Seahawks Stepped Up This Season!</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNfu4cnpFy2HM0Jct5JUoFlzt2Zq1JotKvDa5h1hEi7xxOWesNl_-M0oGEb_cyJKn8aVc8C3wb" alt="The Seahawks Stepped Up This Season!" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike and Cam discuss the Seattle Seahawks season so far.</p></div>
            </div>
        </a><a href='https://www.fieldgulls.com/2022/11/28/23481683/seattle-seahawks-nfl-playoffs-probability-las-vegas-raiders-49ers-rams-chiefs-panthers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How far Seahawks playoffs probability dropped after loss to Raiders</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJT1DQsXh2dLWAnuy9U6r7OHOssWSQD3BbyEWf-mA_C7OcsWLmqhycqQzEy6N8cOJpIUyvVosL" alt="How far Seahawks playoffs probability dropped after loss to Raiders" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Sunday the Seattle Seahawks dropped a game in which they were unable to stop the offense of the Las Vegas Raiders any way besides turnovers.</p></div>
            </div>
        </a><a href='https://www.silverandblackpride.com/2022/11/28/23482267/raiders-seahawks-week-12-winners-losers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Raiders Week 12: Winners and losers against Seahawks</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQWGkuaUq71xJdLaT6fNt3aYLYpwsYYDzKlmmDqbTxrok4RC3Z93nNX89z2qbinPhMGh03BQL3L" alt="Raiders Week 12: Winners and losers against Seahawks" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Back-to-back road wins for Las Vegas as Josh Jacobs continues to be one of the NFL&#39;s best running backs.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/seahawks/news/seattle-seahawks-las-vegas-raiders-overtime-loss-pete-carroll-josh-jacobs-geno-smith'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;We Should&#39;ve Won&#39;: Seahawks Pete Carroll in Disbelief After OT ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxhUOtIKmgErxLknXSP2QKGIieqBJSLpl0f2FBU7WgKNMkBzzm4GUiW9-UHaaJJYAwLgucumjf" alt="&#39;We Should&#39;ve Won&#39;: Seahawks Pete Carroll in Disbelief After OT ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Seattle Seahawks had multiple chances to win on Sunday against the Las Vegas Raiders. But behind their own mistakes and some controversial calls,&nbsp;...</p></div>
            </div>
        </a><a href='https://seahawkswire.usatoday.com/2022/11/28/mina-kimes-wants-jalen-carter-for-seahawks/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mina Kimes manifesting solution for Seahawks&#39; recurring run ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXVhPmeQlzgJ8qmm2XX_OC_5XkQs_EWGqQAxXmDtbdKf0WrK9rbV298LCcv5y7yPZG90q1eOOY" alt="Mina Kimes manifesting solution for Seahawks&#39; recurring run ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ESPN analyst Mina Kimes wants to see Georgia DT Jalen Carter go to the Seahawks in the 2023 NFL draft.</p></div>
            </div>
        </a>
        </Template></>;
}