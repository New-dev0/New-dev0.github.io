import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Bengals</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Bengals"/>
        <meta name="description" content="Trending News about Bengals" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Bengals</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/ravens/bub4x50zid3iqlue5mmw" alt="Bengals"/>
            <h3>Recent News</h3>
            <a href='https://www.baltimoreravens.com/news/bengals-offense-humming-jamarr-chase-samaje-perine-joe-mixon-concussion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Around the AFC North: Bengals Offense Hums Without Stars Joe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRtnXbV4t3SUxVPjptYQ9wgxsR1WUsuSgUMnEd-jLU-tCDcCN2SrYcYaXiriHxIyfX-6fSVItvC" alt="Around the AFC North: Bengals Offense Hums Without Stars Joe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>T.J Watt on Steelers&#39; woes: &#39;Sitting here sulking about it isn&#39;t going to do anything.&#39; Myles Garrett is worried that Browns are wasting prime years of key&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bengals.com/news/bengals-roster-moves-isaiah-prince-mike-thomas-tegray-scales'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals Roster Moves: Prince to Active Roster, Wide Receiver ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTTL2K6ppOrRUbwQHUgiteIEAPcEA9300TLFVGqirChQ3t-SDO7nBFP61VCBTMGfYhDMyZIxlfz" alt="Bengals Roster Moves: Prince to Active Roster, Wide Receiver ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Designated OT Isaiah Prince for return from the Reserve/Injured list and returned him to the active roster. &middot; Waived WR Mike D. Thomas. &middot; Released LB Tegray&nbsp;...</p></div>
            </div>
        </a><a href='https://www.steelers.com/news/labriola-on-the-loss-to-the-bengals-x3629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Labriola on the loss to the Bengals</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStyU-aU3FXtBtVALFvQf2Xw9l8kmvFegQ_OdnaF1wmL5RDkj211OUoVwMMEUO2X98amRVyej8r" alt="Labriola on the loss to the Bengals" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The defense made some plays, such as Heyward&#39;s sack, but also allowed two 90-yard TD drives.</p></div>
            </div>
        </a><a href='https://theathletic.com/3920393/2022/11/21/bengals-jamarr-chase-practice/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals WR Ja&#39;Marr Chase returning to practice field this week ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRME1mL94_BgQ_FnI3O9hx6UZqhkEFCnECMMGlY3vi6SlxmQ1hJEFZhgdFT72jxeV_6gJO4gGrZ" alt="Bengals WR Ja&#39;Marr Chase returning to practice field this week ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cincinnati Bengals wide receiver Ja&#39;Marr Chase will return to practice this week, according to coach Zac Taylor.</p></div>
            </div>
        </a><a href='https://apnews.com/article/joe-mixon-burrow-cincinnati-bengals-pittsburgh-steelers-zac-taylor-5b034d9f1549b22d153cad4f9249ab25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals, Burrow look to keep momentum after beating Steelers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT5VHcMRP4M8qVWr_MFonoAP4CI3bR2AsT9g6RQoPaYyZC17af0JcPxxeskq2IbhH5z-60FfaW_" alt="Bengals, Burrow look to keep momentum after beating Steelers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CINCINNATI (AP) — Cincinnati quarterback Joe Burrow said Sunday&#39;s 37-30 win over the Steelers was “one of my favorites since I&#39;ve been here.</p></div>
            </div>
        </a><a href='https://www.bengals.com/news/bengals-throttle-steelers-with-second-half-onslaught'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals Upend Steelers With Second Half Onslaught</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS-Tr-izvYA-RaS7aFN6s2-s1lur12HL_tFsr6G-du0U1hnn0X4m9sssG2TX_o3vV3DeMNg3ucu" alt="Bengals Upend Steelers With Second Half Onslaught" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PITTSBURGH -- Joe Burrow gave Steelers rookie Kenny Pickett an NFL quarterbacking clinic Sunday when he sliced the Steelers for four touchdown passes and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cincinnati.com/story/sports/nfl/bengals/2022/11/21/bengals-wr-jamarr-chase-injury-updated-ahead-of-titans-game/69669222007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals will ease Ja&#39;Marr Chase back into practice ahead of AFC ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSq2lI9G_eQErkq-Hqq34RWCsmi_iPY3fM7aHhV__lcNuEho-mNriSj-3HrUYZCl3R-6PN7zxVT" alt="Bengals will ease Ja&#39;Marr Chase back into practice ahead of AFC ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The second-year wide receiver will be back at practice, but his status against the Tennessee Titans is unknown.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/nicholasmcgee/2022/11/21/cincinnati-bengals-offense-inspiring-hope-of-another-deep-playoff-run/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cincinnati Bengals&#39; Offense Inspiring Hope Of Another Deep Playoff ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQ8Zl58AYP4GHa_VNonUziviv_YOhG9qv2ZdF7pkcOBKGntKkqwKQbaPt63XZRIPDzbKfAppFPT" alt="Cincinnati Bengals&#39; Offense Inspiring Hope Of Another Deep Playoff ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Though Joe Burrow was intercepted twice, the second a phenomenal play by returning Steelers defensive end T.J. Watt, the Bengals still racked up 408 net yards&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/bengals-jamarr-chase-hip-to-resume-practice-labeled-as-day-to-day-ahead-of-week-12-matchup-with-titans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals&#39; Ja&#39;Marr Chase (hip) to resume practice, labeled as &#39;day to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRjRfdnI615FpPE2xFUQyIZJIUmDBQaLpns-UpTnyoaGwAIdOqX7Vw-uwPxlvTVPLHylZO8tnhR" alt="Bengals&#39; Ja&#39;Marr Chase (hip) to resume practice, labeled as &#39;day to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Bengals are 2-1 this season without Chase, who had not missed an NFL game prior to sustaining his hip injury. His absence was clearly felt during the&nbsp;...</p></div>
            </div>
        </a><a href='https://titanswire.usatoday.com/2022/11/21/bengals-jamarr-chase-has-chance-to-play-vs-titans-in-week-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bengals&#39; Ja&#39;Marr Chase has chance to play vs. Titans in Week 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRHGFUgMJz5rfoz01PT4U5tqD1WNzWxpwWkF8wOSCT7V4VwI2CqLXyy8LgQwfSFIUuv_H22yvV4" alt="Bengals&#39; Ja&#39;Marr Chase has chance to play vs. Titans in Week 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cincinnati Bengals WR Ja&#39;Marr Chase has a chance to return from his hip injury and play in Week 12 against the Tennessee Titans.</p></div>
            </div>
        </a>
        </Template></>;
}