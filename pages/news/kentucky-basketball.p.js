import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Kentucky basketball</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Kentucky basketball"/>
        <meta name="description" content="Trending News about Kentucky basketball" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Kentucky basketball</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/P4pA6Ks7m1-dm8Q-0tyN1m_eu-M=/0x0:3616x1893/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24200769/1441789343.jpg" alt="Kentucky basketball"/>
            <h3>Recent News</h3>
            <a href='https://www.aseaofblue.com/2022/11/15/23459870/kentucky-basketball-michigan-state-final-score-recap-takeaways-oscar-tshiebwe'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kentucky Basketball falls to Michigan State: Final score, recap and 4 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTvZKGUXnBuj12Xkzfh4SQDuhHfxhyxSdh3j0qtWhCMG5ieAk663Dd7k4wVVoJu9cCaG10-_veQ" alt="Kentucky Basketball falls to Michigan State: Final score, recap and 4 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite fouling out in OT, Oscar Tshiebwe makes his case as the nation&#39;s top returning player.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10055822-twitter-rips-kentucky-for-lackluster-performance-in-upset-loss-vs-michigan-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twitter Rips Kentucky for Lackluster Performance in Upset Loss vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS2A5cQO8eauWpOJsCttYXHeIn30AshkWGXYnT3cwIIrR2B-2L3DeD0USFcKqfyEDHE-S1oa2M1" alt="Twitter Rips Kentucky for Lackluster Performance in Upset Loss vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The No. 4 Kentucky men&#39;s basketball team held two-point leads over Michigan State in the final seconds of both regulation and overtime, but the Spartans&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/college-basketball/news/kentucky-vs-michigan-state-live-stream-watch-online-tv-channel-prediction-pick-spread-game-odds/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kentucky vs. Michigan State live stream, watch online, TV channel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTXFGotIjr_eMG4LjfWli5ekIqmh2bpQragkURoxw7yp9l3DBeip1W81vvbpLxEQcoV98GSl-vV" alt="Kentucky vs. Michigan State live stream, watch online, TV channel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The first of two Champions Classic games features two Hall of Famers going head-to-head.</p></div>
            </div>
        </a><a href='https://www.si.com/college/michiganstate/basketball/michigan-state-spartans-basketball-five-takeaways-kentucky-wildcats-champions-classic-tom-izzo-111522'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Five Takeaways: Michigan State outlasts No. 4 Kentucky in huge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaITTffwXoj47eEhnhNURbJT7GPTd_dH8G2cOi18UAFErbMvpz-dSJDvLsDQnbiaDWpBpiQWwK" alt="Five Takeaways: Michigan State outlasts No. 4 Kentucky in huge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michigan State Spartans men&#39;s basketball scored a massive upset victory over No. 4 Kentucky Wildcats in double-overtime in the annual Champions Classic.</p></div>
            </div>
        </a><a href='https://www.kentucky.com/sports/college/kentucky-sports/uk-basketball-men/article268792757.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Oscar Tshiebwe to make Kentucky men&#39;s basketball season debut ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRLLrwhE5cFjJJfpdeV9T8N4ylBLLCBThw1TqbsXj07Br-ZXzlXD5rSdROfHdi_zojMX-ajUurR" alt="Oscar Tshiebwe to make Kentucky men&#39;s basketball season debut ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kentucky basketball national player of the year Oscar Tshiebwe to make 2022-23 season debut at State Farm Champions Classic Michigan State.</p></div>
            </div>
        </a><a href='https://www.courier-journal.com/story/sports/college/kentucky/2022/11/16/michigan-state-beats-dominant-oscar-tshiebwe-kentucky-basketball/69650485007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Michigan State upset No. 4 Kentucky in double OT despite ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSQfdEG_3Zeys7fSmP8_AXxj7V6e8Ekf0-fpEaXRJNtiCeGV8ikknnh16kYW7wisuKGn91k_-Gn" alt="How Michigan State upset No. 4 Kentucky in double OT despite ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>INDIANAPOLIS — Tuesday night was college basketball at its finest. Two titans of the sport, Kentucky and Michigan State, traded blows at Gainbridge&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}