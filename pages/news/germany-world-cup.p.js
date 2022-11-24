import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Germany World Cup</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Germany World Cup"/>
        <meta name="description" content="Trending News about Germany World Cup" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Germany World Cup</h1>
            <Image width={800} height={500} src="https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1123%2Fr1095538_1296x729_16%2D9.jpg" alt="Germany World Cup"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/soccer/fifa-world-cup/story/4806879/germany-stunned-by-japan-comeback-in-latest-world-cup-shock'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany stunned by Japan comeback in latest World Cup shock</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT2dmUMkmasOMhYwoWLALq21In1vkexloeuCSoGTHrWKMyv2j57fZt6zQVdFAVXe24L3TWwG1U8" alt="Germany stunned by Japan comeback in latest World Cup shock" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Germany made a prematch statement about their OneLove armband ban, but Japan made the statement on the pitch by picking up a shock win.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/23/1138963632/japan-germany-world-cup-upset-qatar-doan-asano'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan gets 2 late goals to beat Germany 2-1 at the World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTuayileKD49MjFtaIHBLAtyB46NZlFcWuhJOkq5h8QvuCdOV3Cc6RIwDMQxWarK3WvSl1Rwd4t" alt="Japan gets 2 late goals to beat Germany 2-1 at the World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ritsu Doan and Takuma Asano — who both play for German clubs — subbed in and put balls past goalie Manuel Neuer after the 76th minute.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/23/1138967472/german-players-cover-their-mouths-at-the-world-cup-to-protest-fifa'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>German players cover their mouths at the World Cup to protest FIFA</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnHEb21_InkZfPFVU1P9HzkEBs0A-yeMLOf0bZdhQU_xMVyEVQKfhH-tvOLK0xkOz6NUy-bDho" alt="German players cover their mouths at the World Cup to protest FIFA" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The players covered their mouths for their team photo in an apparent rebuke of FIFA&#39;s clampdown on plans to wear armbands to protest discrimination in host&nbsp;...</p></div>
            </div>
        </a><a href='https://www.washingtonpost.com/sports/2022/11/23/japan-germany-world-cup-upset/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan upends Germany in Qatar, and another World Cup darling is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQgCq4-N22AgCQsIO0wcOixd1zXDJQKmgPOtPrZEill8H5Qmk3xgXUyuweh-4NzvoO8_yxOl5Nf" alt="Japan upends Germany in Qatar, and another World Cup darling is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Japan beat Germany, 2-1, at the World Cup in Qatar on Wednesday.</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/23/sports/soccer/germany-japan-upset-world-cup-score.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Japan Upset Germany, the World Cup&#39;s Latest Fallen Favorite</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcREa_Nsu1zmHONFAZEVmlQtzIhJrhOOJ68ZxHkQwdhvfbLUNIboA2q4Bwp3wK5yB7lvEJNTVUjr" alt="How Japan Upset Germany, the World Cup&#39;s Latest Fallen Favorite" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>DOHA, Qatar — These are the days in which the mighty fall. On Day 3 of the World Cup, Argentina was left reeling after suffering a chastening defeat to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/manuelveth/2022/11/23/germany-fall-to-japan-and-face-second-historic-world-cup-exit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany Fall To Japan And Face Second Historic World Cup Exit</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT51qL-HtrRK9ZO4UESYPDqfSwQgOpRQYIsA3NzlMysHS_YvFyeU1wFe2yrdIbo3YuqR3UDztet" alt="Germany Fall To Japan And Face Second Historic World Cup Exit" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Japan has come from behind to shock Germany at the FIFA World Cup in Qatar. The Blue Samurais overturned a 1-0 Germany lead, Ilkay Gündogan (33&#39;),&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sbnation.com/2022/11/23/23475107/japan-germany-fifa-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Japan shocks Germany at the FIFA World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQii7H0ePyUjMsP7JIpqZkWF6DIuwBvK91GmLQYErFJbfyeRxmuYXoVjl2rE6RT8u2g5xI5nxj" alt="Japan shocks Germany at the FIFA World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 FIFA World Cup has already seen some massive upsets, most notably the win from Saudi Arabia over Argentina on Tuesday. But on Wednesday, Japan&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/fannation/soccer/futbol/news/why-germany-players-covered-their-mouths-for-world-cup-team-photo'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why 11 Germany Players Covered Their Mouths During World Cup ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRCMTxiBdtXDYG0pfO8gGhWei4VOI44XLoNMI7-fq-fZtN11J8VIwgNmG95ViItLQ_xU-weMy_9" alt="Why 11 Germany Players Covered Their Mouths During World Cup ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All 11 members of Germany&#39;s starting team made the gesture in a united response to FIFA banning players from wearing OneLove armbands. Nine team captains,&nbsp;...</p></div>
            </div>
        </a><a href='https://thehill.com/policy/3748030-german-players-cover-mouths-in-protest-at-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>German players cover mouths in protest at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNYQRg83V969jfZXUtr1a1zTKtMMHmGPcJF9LegKisgNS1NVzij85FcHHiJi8Og8fHgJHkBCi3" alt="German players cover mouths in protest at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Members of Germany&#39;s national soccer team protested FIFA&#39;s ban on players wearing LGBTQ armbands at the World Cup by covering their mouths when posing for a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/23/sports/soccer/german-player-protest-armbands-world-cup.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Germany Protests FIFA Decision That Blocked Rainbow Armbands</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQEPcpF3y8bmkQjkl9xByWGEFWS-H8XDH7wRvL9LX7neK7U1AcWV42mDAkD2VmTUorPlaS7sgH" alt="Germany Protests FIFA Decision That Blocked Rainbow Armbands" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Soccer&#39;s governing body had moved to block a plan by seven European team captains to wear armbands promoting gay rights by threatening them with yellow&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}