import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Clippers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Clippers"/>
        <meta name="description" content="Trending News about Clippers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Clippers</h1>
            <Image width={800} height={500} src="https://www.si.com/.image/t_share/MTk0MTIxMDcxMTI3OTYzMTQx/usatsi_19484062.jpg" alt="Clippers"/>
            <h3>Recent News</h3>
            <a href='https://www.si.com/nba/clippers/news/la-clippers-vs-utah-jazz-full-injury-report-revealed'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LA Clippers vs. Utah Jazz Full Injury Report Revealed</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS4908VctoINsimSkZea-xV0RV7XjNymj8Fgo3GfA5UCpzczFKqwg57YsBEIkb4yr-5QK1_ia5Q" alt="LA Clippers vs. Utah Jazz Full Injury Report Revealed" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The LA Clippers got a huge win against the Portland Trail Blazers on Tuesday night, coming from 18 points down to win the game. They did it without Kawhi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.blazersedge.com/2022/11/30/23486388/portland-trail-blazers-los-angeles-clippers-final-damian-lillard-anfernee-simons-norman-powell'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers Loss Leave a Sour Taste in Trail Blazers Fans&#39; Mouths</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9U42mGxTvT9c1y0z9hYOB1GyTwlxZQXjbzKF-TNw4jJ-Bic6RLmOb3fksR1vh9_Gp087W8JfK" alt="Clippers Loss Leave a Sour Taste in Trail Blazers Fans&#39; Mouths" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Leading by 13 at the start of the fourth period then dropping the game to a team without its two best players will do that to you. Watching former Blazers&nbsp;...</p></div>
            </div>
        </a><a href='https://www.latimes.com/sports/clippers/story/2022-11-29/clippers-at-trail-blazers-nba-recap'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Norma Powell, Clippers bench rally late to beat Trail Blazers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR3E-58rfAmq7Zs2m-6dEYkGOTUh9XYIBcmn9J4EJPFCmj5a6KnJWRiTfHz_ymBmbwhCC62iC3G" alt="Norma Powell, Clippers bench rally late to beat Trail Blazers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Norman Powell scored 32 points, and the Clippers bench rallied from 18 points late to beat the Trail Blazers 118-112 on Tuesday in Portland.</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/story/_/id/35134087/the-hoop-collective-clippers-pot-committed-kawhi-giannis-vs-free-throws-warriors-awaken'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Hoop Collective - Clippers are pot committed to Kawhi, Giannis ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQPKAL2k0cm9ZA2B177lqhinWXTRazYQiWZZLNPWnp1vGb7S0FvLIOEOQHsFJ4Zldvlooq2IBOn" alt="The Hoop Collective - Clippers are pot committed to Kawhi, Giannis ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Clips put in all their chips on Kawhi Leonard, the Bucks&#39; MVP isn&#39;t letting a ladder get in his way and Golden State&#39;s return to winning in this week&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://deadspin.com/steve-ballmer-has-got-to-be-sick-thinking-about-how-goo-1849837167'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Steve Ballmer has got to be sick thinking about how good his ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQjK-DM320l-ej9M75bfxSc9c73dq8PrrRjhDE3ZGwnla0nfNaAfzeRzqCUiX9TUC-CltZGK3Q1" alt="Steve Ballmer has got to be sick thinking about how good his ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Coming into the season, the Los Angeles Clippers were viewed as one of the favorites to represent the Western Conference in the NBA Finals.</p></div>
            </div>
        </a><a href='https://www.espn.com/nba/recap/_/gameId/401468466'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers vs. Trail Blazers - NBA Game Recap - November 29, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQQQqqAcw_mZ1Net-smcQCn9sVp5tFsFV_L8UD2tQYBXSh1P-XvghmW1js_xYbPkvAgxWz_5uHL" alt="Clippers vs. Trail Blazers - NBA Game Recap - November 29, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Visit ESPN for the game recap of the LA Clippers vs. Portland Trail Blazers NBA basketball game on November 29, 2022.</p></div>
            </div>
        </a><a href='https://kslsports.com/496003/jazz-host-injury-riddled-clippers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Injury Report Gives Jazz Hope Against Clippers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ7BjkWAeuLEd5gBJMZWWYM40KSKHWeYZWuSpwieh5RYffngpExr3zURwgkUDosPL3bua_CqFrr" alt="Injury Report Gives Jazz Hope Against Clippers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Several key members of the Los Angeles Clippers appear on the team&#39;s injury report as they travel to face the Utah Jazz on Wednesday.</p></div>
            </div>
        </a><a href='https://www.clipsnation.com/2022/11/30/23486845/los-angeles-clippers-reggie-jackson-norman-powell-utah-jazz-injury-report'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NBA News: Reggie Jackson and Norman Powell could miss ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTR1KMMT91KQOoJ3O48aOO_EbYX3iunQMzP-nVLWP6-cw1fc3wZ_BkeK2XXWhdCvPlB9AY091rh" alt="NBA News: Reggie Jackson and Norman Powell could miss ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LA Clippers list Reggie Jackson (low back contusion) as QUESTIONABLE for tonight&#39;s game against Utah while Norman Powell (left groin strain) is DOUBTFUL. Paul&nbsp;...</p></div>
            </div>
        </a><a href='https://213hoops.com/clippers-comeback-big-in-portland-118-112/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Clippers comeback big in Portland, 118-112 • 213hoops.com</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTekJx433mgZZhxXO9oXmEnxTxugZDL0-OW0kBWpsZwaHQQi1Op67TLK2Q1pAW2nWjW7tEEEvel" alt="Clippers comeback big in Portland, 118-112 • 213hoops.com" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Both teams started the game slow, but the Blazers went on to finish the first quarter with 30 points and a five point lead. They were led by Anfernee Simons,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.oregonlive.com/galleries/OFYFCQYRGNDSZCSUZXAUSHUCOE/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Trail Blazers vs. Clippers: Nov. 29, 2022</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVrobC9iTIb_GydlSZ026T4cAvgIaRK1LCaA0zk-Om3Y1_lEkPHHySVgoHOirq3Hf47w8RzDrT" alt="Trail Blazers vs. Clippers: Nov. 29, 2022" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Trail Blazers head coach Chauncey Billups gives direction as Portland faces the Los Angeles Clippers in an NBA game at Moda Center in Portland, Oregon on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}