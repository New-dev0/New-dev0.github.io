import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Knicks</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Knicks"/>
        <meta name="description" content="Trending News about Knicks" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Knicks</h1>
            <Image width={800} height={500} src="https://cdn.vox-cdn.com/thumbor/v9P_F8KEq7V2PnL-KleyNr6bcMs=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24243733/1437555877.jpg" alt="Knicks"/>
            <h3>Recent News</h3>
            <a href='https://www.postingandtoasting.com/2022/11/30/23486016/game-preview-knicks-at-bucks-11-29-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Preview: Knicks at Bucks- 11/29/22</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS7E4inX9SBFywAZXzMe5V-7_0RhIOAVuDJRDDh1Fnlo_3dhjsUAXMnvur_H2_rF-AOu_MUjIvG" alt="Game Preview: Knicks at Bucks- 11/29/22" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jrue Holiday (6&#39;3”, 205 lb.), who is currently averaging 17.7 PPG, 6.1 APG, and 4.5 RPG with a career-high 50.3% field goal percentage, will get the start as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/recap/_/gameId/401468464'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Knicks vs. Pistons - NBA Game Recap - November 29, 2022 | ESPN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNnO67ha-Ce6-KawURF8SthA360hdn8vSJfMe7yUWn_KyvotLv3KemHDm_4N3AnjLP8Wvdzn-7" alt="Knicks vs. Pistons - NBA Game Recap - November 29, 2022 | ESPN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visit ESPN for the game recap of the New York Knicks vs. Detroit Pistons NBA basketball game on November 29, 2022.</p></div>
            </div>
        </a><a href='https://www.jsonline.com/story/sports/nba/bucks/2022/11/30/milwaukee-bucks-vs-new-york-knicks-game-updates-madison-square-garden-november-30-2022/69687427007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Live coverage: Giannis Antetokounmpo and the Milwaukee Bucks vs ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQt_VaVN_sIeE5caYYXV-kj-TBCsXvcttK1ad8pEqtoiC6fbcv8EYcJn1VYcJf297P2Fi6YM72n" alt="Live coverage: Giannis Antetokounmpo and the Milwaukee Bucks vs ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Giannis Antetokounmpo and the Bucks take on Julius Randle and the New York Knicks Wednesday night. Follow here for updates.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/knicks-vs-bucks-predictions-odds-line-spread-2022-nba-picks-nov-30-best-bets-from-proven-model/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Knicks vs. Bucks predictions, odds, line, spread: 2022 NBA picks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFZOLbpF19RU5NyIu_flMWIcetb3MK3rVxTw2fjjG-gmnODYdibt4DniXnyQP2aTIlCgXDYGVW" alt="Knicks vs. Bucks predictions, odds, line, spread: 2022 NBA picks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsLine&#39;s computer model simulated Milwaukee Bucks vs. New York Knicks 10000 times and revealed its NBA picks today.</p></div>
            </div>
        </a><a href='https://www.brewhoop.com/2022/11/30/23485330/milwaukee-bucks-vs-new-york-knicks-game-preview-november-30-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Milwaukee Bucks vs. New York Knicks Preview: Big Apple Showdown</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQp2eYfyR8138wAP1FSSm1pdP3USEz7-uTjDyJEkXboSaiK3hU6hirb-G9wgk0Y1aq-Ekv8gw0V" alt="Milwaukee Bucks vs. New York Knicks Preview: Big Apple Showdown" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jevon Carter seems to be fully entrenched as a rotational player for the Bucks. Even with Pat Connaughton returning, that has not seen Carter&#39;s minutes drop.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/knicks/news/new-york-knicks-game-preview-milwaukee-bucks-rj-barrett-giannis-antetokounmpo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Knicks vs. Bucks: How &amp; Who To Watch as Scary Homestand Begins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8T2inaUf-vL0EIccX8qB9r9FwEZTFBgdkfcpoJQd62_jLDvZ1PWc8dkMIMtlHnXJG3YK-kKZc" alt="Knicks vs. Bucks: How &amp; Who To Watch as Scary Homestand Begins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A Wednesday visit from Giannis Antetokounmpo is the first step of a brutal homestand for the New York Knicks.</p></div>
            </div>
        </a>
        </Template></>;
}