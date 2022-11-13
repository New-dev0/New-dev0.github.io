import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Newcastle vs Chelsea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Newcastle vs Chelsea"/>
        <meta name="description" content="Trending News about Newcastle vs Chelsea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Newcastle vs Chelsea</h1>
            <Image width={800} height={500} src="https://ss-i.thgim.com/public/incoming/2rapod/article66130033.ece/alternates/FREE_1200/2022-11-12T180329Z_1962593167_UP1EIBC1E5RZH_RTRMADP_3_SOCCER-ENGLAND-NEW-CHE-REPORT.JPG" alt="Newcastle vs Chelsea"/>
            <h3>Recent News</h3>
            <a href='https://sportstar.thehindu.com/football/epl/newcastle-vs-chelsea-premier-league-live-score-che-new-updates-lineups-commentary-highlights/article66129807.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle vs Chelsea LIVE Premier League: Willock scores off ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQrAB-G7sFugdKar4m_yFEuIuQ6TsWJawnkU0bHewpOc6vzK8l2KY0XH0DXrMTrqnTO6ur_iZwP" alt="Newcastle vs Chelsea LIVE Premier League: Willock scores off ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Willock is taken off and and the Newcastle fans shows their appreciation for the potential match winner. Meanwhile, Newcastle is shutting off all the avenues&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chelseafc.com/en/news/article/newcastle-vs-chelsea-lineups'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle vs Chelsea lineups</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRF0AOfo15FQoe7AWtfhKDMl-dTLwfx5_DkvlnMBUMOzWYOk6b_CGj8vRLielqqub79rkjMLhpZ" alt="Newcastle vs Chelsea lineups" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graham Potter makes four changes from our midweek Carabao Cup defeat in Manchester, with Mason Mount among those returning to the side.</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/newcastle-vs-chelsea-score-live-stream-tv-channel-highlights/eimi7go9zh2lygzt1glzlfw0'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle United vs. Chelsea result, highlights and analysis as Joe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSn_2Cnyn5zTANHFYErJBVTglLnYAbaMXd_0ZBhJsPJKaRWje8A_0-v1sGwgNd20GRE0r826sTj" alt="Newcastle United vs. Chelsea result, highlights and analysis as Joe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Willock gave Newcastle United a 1-0 win over Chelsea in the final Premier League matchday before the 2022 World Cup in Qatar.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/newcastle-united-vs-chelsea-lineups-and-live-updates/blt116a3d88dcae8e1c'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle United vs Chelsea: Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTy3tvAj4jJCVhcvbTlo3wLd4ZmFlKckoWlN8QnTs4lZMcnZgFSKXbU5gmX-X9fKuMraL-aA__a" alt="Newcastle United vs Chelsea: Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea will be looking to get back on track after back-to-back dismal Premier League defeats when they travel to a high-flying Newcastle United side in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.london/chelsea-fc/news/chelsea-player-ratings-vs-newcastle-25501760'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea player ratings vs Newcastle: Jorginho, Kovacic poor as Joe ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTXBTlZRMTZEfgUgSAsj0clv0iyuv1UX3rKqZd-J8R1ZwV7_0ElX03w6nH_ozRDee1yfmt5YzTG" alt="Chelsea player ratings vs Newcastle: Jorginho, Kovacic poor as Joe ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Willock&#39;s fine finish was enough to separate Chelsea and Newcastle as the Blues fall to their third consecutive Premier League defeat.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63523923'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Newcastle continue winning run against Chelsea</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQiNbD6W4fPVuGbYij8dinTpYInTWA0LlzHrDChsCuMGrlrnOj5JJBsCL7BNhnRvTXCbnaHyU8f" alt="Newcastle continue winning run against Chelsea" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Newcastle boost their European ambitions with a statement win over Chelsea thanks to Joe Willock&#39;s delightful goal.</p></div>
            </div>
        </a>
        </Template></>;
}