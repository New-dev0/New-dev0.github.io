import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Arsenal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Arsenal"/>
        <meta name="description" content="Trending News about Arsenal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Arsenal</h1>
            <Image width={800} height={500} src="https://www.arsenal.com/sites/default/files/styles/desktop_16x9/public/images/youtube_highlights_1920x1080_01.png?itok=c6aI1Qyq" alt="Arsenal"/>
            <h3>Recent News</h3>
            <a href='https://www.arsenal.com/news/highlights-arsenal-3-1-tottenham-hotspur'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Highlights: Arsenal 3-1 Tottenham Hotspur | Video | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQQRHrRtrdd1ihwk21cAo5SXLOoM1-Iee0ULYA0KI044X7Ek5X-3bpkhv7mObcEdfmrKVc1LVek" alt="Highlights: Arsenal 3-1 Tottenham Hotspur | Video | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>It was a derby day to remember as we claimed a 3-1 win against Tottenham Hotspur at Emirates Stadium, and you can watch the best of the action now.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/arsenal-vs-tottenham-live-score-updates-8184091/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs Tottenham Highlights: Partey, Jesus, Xhaka goals guide ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgHOwIMmeFIV-9GzM2CGvDWY2kQ0DGTzZj0zji8VLevT4CeVkau-NZvzD1N9YBHzUSUZgt_nMt" alt="Arsenal vs Tottenham Highlights: Partey, Jesus, Xhaka goals guide ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal vs Tottenham, North London derby Highlights: Mikel Arteta&#39;s Arsenal have now won seven of their opening eight games and lead the standings by four&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report?gameId=637899'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal vs. Tottenham Hotspur - Football Match Report - October 1 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRsoyLPaatrakbE4QVNSQW46EYVXCqF3U0e_wQGb-9W7i55CsQG7_19lxiLYvWBKgkHfEWdwrKj" alt="Arsenal vs. Tottenham Hotspur - Football Match Report - October 1 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Arsenal vs. Tottenham Hotspur 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/arsenal-win-3-1-vs-tottenham-to-remain-top-of-premier-league-table/article65959313.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal downs 10-men Tottenham 3-1 to stay top of Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTg4VS65T7JYJn6lTNxY59I6JGgNnhIAMSlsc8Ul5nYycJ8-kRQh2W7c51n68XJUjeE7mUccJF2" alt="Arsenal downs 10-men Tottenham 3-1 to stay top of Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mikel Arteta&#39;s Arsenal haas now won seven of its opening eight games and lead the standings by four points with second-placed Manchester City facing&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/sports/football/arsenal-beat-ten-man-tottenham-3-1-to-stay-atop-premier-league-table-101664635800557.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal beat ten-man Tottenham 3-1 to stay atop Premier League ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTY-OfAjWFV5FX0xJVQ18plrC4OPa_Ik-gbuNO1uPcguNqGl1gdh3Dhwt2vN2kyBsWdqPLwhvN_" alt="Arsenal beat ten-man Tottenham 3-1 to stay atop Premier League ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>City can climb back within one point of Arsenal with a win over crosstown rival Manchester United on Sunday. | Football News.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/north-london-red-again-arsenal-winners-losers-spurs-derby-defeat/blt656d0d02d5290847'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>North London is red once again! Arsenal&#39;s winners, losers and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSijH_fhH5nW7ISGiH-3J_V_tyWclsG2ORzHgKoEF4HMSknHdMnb5Q4VmvRMoc-zX-s4IflqoEZ" alt="North London is red once again! Arsenal&#39;s winners, losers and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Arsenal moved four points clear at the top of the Premier League with a rousing 3-1 victory over bitter rivals Tottenham at the Emirates, so who were the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/arsenal-engarsenal/story/4758276/arsenal-win-over-tottenham-proves-we-can-dominate-premier-league-elite-mikel-arteta'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal win over Tottenham proves we can dominate Premier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSnjmie2CpDhXfV_R_z2HZkgtTEqR_3z7WlSr9m8SCiaJ6-KI9ZQIpBj2MbKS7RifJwRrwcvYlW" alt="Arsenal win over Tottenham proves we can dominate Premier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mikel Arteta has said he believes Arsenal&#39;s 3-1 win over Tottenham has sent a message to his players they can beat the Premier League&#39;s elite.</p></div>
            </div>
        </a><a href='https://www.arsenal.com/news/odegaard-reveals-parteys-strike-was-planned'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Odegaard reveals Partey&#39;s strike was planned | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSI3M94C6i-KWVKi803gIwV7FV0EkHkocVQu-tKWwXVlCPX23EgciNaxS1mUtoEyQ9CoOCth-m8" alt="Odegaard reveals Partey&#39;s strike was planned | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Martin Odegaard revealed that Thomas Partey&#39;s wonderful strike that opened the scoring in the 3-1 win against Tottenham Hotspur was something straight off&nbsp;...</p></div>
            </div>
        </a><a href='https://www.arsenal.com/news/arteta-praises-best-atmosphere'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arteta praises &quot;best atmosphere&quot; | News</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRIGnEvHU2_qWTMSRoFZT6gGfhcS8AcaF1ZoUDBw9WE2ppue0PAOIZni1iUCpAPMLBmjYsJb7_c" alt="Arteta praises &quot;best atmosphere&quot; | News" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mikel Arteta has heaped praise on our supporters following the 3-1 win over Tottenham Hotspur.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/arsenal-xhaka-north-london-derby-red-card-warning/blt35c052c744039241'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Arsenal star Xhaka sent north London derby red card warning</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSW50QAv-SQUH7MCZ6qv_kVXahJYcvgbWouYei7S8i-S35CNvfvwmgvmLesY0BGP2SV81xH-ahu" alt="Arsenal star Xhaka sent north London derby red card warning" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>David Seaman has urged Granit Xhaka to &#39;keep his head&#39; and avoid getting sent off in Saturday&#39;s north London derby between Arsenal and Tottenham.</p></div>
            </div>
        </a>
        </Template></>;
}