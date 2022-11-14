import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tottenham</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tottenham"/>
        <meta name="description" content="Trending News about Tottenham" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tottenham</h1>
            <Image width={800} height={500} src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1668329876.webp?utm_source=fb" alt="Tottenham"/>
            <h3>Recent News</h3>
            <a href='https://www.outlookindia.com/sports/premier-league-2022-23-tottenham-hotspur-stage-late-comeback-to-win-4-3-against-leeds-united-in-pics-photos-237037'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier League 2022-23: Tottenham Hotspur Stage Late Comeback ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSQ90iTxbRSq3jDtZnv3y80J0kj3C_Ln2lRwY2QoltFp6FHVg4TpyEnwdtU7qCAdsuaBGX4l4Ar" alt="Premier League 2022-23: Tottenham Hotspur Stage Late Comeback ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Conte&#39;s men went down thrice and came back thrice, eventually finding the winner in a 4-3 thrilling clash against Leeds United.</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=637971'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham Hotspur vs. Leeds United - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT3g8yGoH3FDEFbf2Wwnwl0HL2jKNR6_e98wKibWTo3FDzjaAZ8z-aFgkoh2znnAwsz3KYNIzlI" alt="Tottenham Hotspur vs. Leeds United - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Tottenham Hotspur vs. Leeds United 2022-23 English Premier League football match.</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/tottenham-hotspur/spurs-star-likely-head-home-conte-trust-levels-continue-bite'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham star likely to &#39;head back home&#39; as Antonio Conte trust ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQgDx2RuD-AJmLayzD3ExwcA9DoVYEAvLyXqA7DM6LPgS3qmBQWuksrW198kPWFvMwLCZ0A3h2N" alt="Tottenham star likely to &#39;head back home&#39; as Antonio Conte trust ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Tottenham defender Alan Hutton has tipped a current star to quit the club and return to Spain if his lack of game time does not improve.</p></div>
            </div>
        </a><a href='https://www.teamtalk.com/tottenham-hotspur/star-named-one-of-worlds-most-underrated-players-antonio-conte-champions-league-belief'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham star named one of world&#39;s most underrated players as ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRtxMbH7JH_cEpdPbTLy8Hmw7Np8b9SSEf5o3fDd5E6H5BqLn2XQv3bMBW6qkEszQvFDcq5-xgs" alt="Tottenham star named one of world&#39;s most underrated players as ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Conte says &quot;anything is possible&quot; for Tottenham in the Champions League, while a Spurs man has been named one of the world&#39;s most underrated stars.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/football/premier-league/tottenham-leeds-directo/2022/11/12/01_0106_20221112_6_2.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham - Leeds live - Premier League</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcT0fO0bxfmlaYl0ymIK4qG3sgEaiLcIGrrQE-cfNur89p89ou66b80kEZo0Odws899p2-6YvHkb" alt="Tottenham - Leeds live - Premier League" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goal! Tottenham Hotspur 4, Leeds United 3. Rodrigo Bentancur (Tottenham Hotspur) left footed shot from the centre of the box to the centre of the goal. Assisted&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/epl/epl-tottenham-beats-bournemouth-bentancur-double-kulusevski-kane-premier-league-results-table-football/article66129929.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Premier League: Bentancur&#39;s late double gives Spurs win in thriller ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRKuBwetyFaCCe53RwQ4LlAH-SJVaSDcR-I2cNQzGUnjU4J9_GFaE6DjArty3Y8hyMvQZMV0oiy" alt="Premier League: Bentancur&#39;s late double gives Spurs win in thriller ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tottenham Hotspur produced a fightback to beat Leeds United 4-3 in a Premier League thriller as Rodrigo Bentancur scored two late goals on Saturday.</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11420789/Tottenham-boss-Antonio-Conte-insists-needs-signings-January.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham boss Antonio Conte insists he needs more signings in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS8Cd3T7TiTyfwuk1gp2vRDQB1S_VPYgSUwguhhQuzEbGeEFzzIgq1xk4TY3GICx87ErXHuwetN" alt="Tottenham boss Antonio Conte insists he needs more signings in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Antonio Conte has hinted that he needs to add more quality to his Tottenham squad after seeing his side come out on top in a dramatic 4-3 win against Leeds&nbsp;...</p></div>
            </div>
        </a><a href='https://www.footballinsider247.com/bryan-gil-tipped-to-quit-tottenham-and-sign-for-spanish-club-pundit/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tottenham expert has tipped Bryan Gil to return to Spain</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRCqaMNGJH_9tfdtP7n9yfuKMHYcg9hsmvvMVZ3WP7rFkdosWW1w4uvRTBBBZMD1Vc0tpfyfm9E" alt="Tottenham expert has tipped Bryan Gil to return to Spain" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Football Insider has been told Alan Hutton that Bryan Gil could return to Spain if his situation at Tottenham does not improve.</p></div>
            </div>
        </a>
        </Template></>;
}