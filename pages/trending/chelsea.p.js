import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Chelsea</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Chelsea"/>
        <meta name="description" content="Trending News about Chelsea" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Chelsea</h1>
            <Image width={800} height={500} src="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1011%2Fr1074403_1296x729_16%2D9.jpg" alt="Chelsea"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/uefa-champions-league/story/4768229/chelsea-beat-ac-milan-in-champions-league-as-tomori-sees-red'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea beat AC Milan in Champions League as Tomori sees red</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFtW9yIKqeZDEFszMCURelzL9np-pwORPVYf__HDbWGjfz22FcOfDj4jeZfgZ5XQ3FbeYA2Ll5" alt="Chelsea beat AC Milan in Champions League as Tomori sees red" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An early and controversial red card put AC Milan in a bind against Chelsea, but the Blues so far are riding high under Graham Potter.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/lists/chelsea-winners-losers-ratings-mount-milan-tomori-red-card/blt947147a422b8ef9f'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea winners, losers and ratings as Mount makes Milan pay after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR3sfbPJ28Ab5tcw-U1cLnJmXV6scrPIoGVv95c-81dUfSTyh6fPQM0emPqi-XYx42TrFvj15sP" alt="Chelsea winners, losers and ratings as Mount makes Milan pay after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea made it four successive wins and moved to the top of their Champions League group with a 2-0 win over 10-man AC Milan at San Siro.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/uefa-champions-league-2022-23-chelsea-beat-ac-milan-to-advance-to-next-round-in-pics-photos-229286'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League 2022-23: Chelsea Beat AC Milan To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQq36R5knt1_mb4TcfjPlIrcSdM8xc5O75x8jXxBaIE88kRF_N4XI3ErZ0yIRdOVEfE3I0l-spr" alt="UEFA Champions League 2022-23: Chelsea Beat AC Milan To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea was at the bottom of Group E but two straight victories over Serie A champion AC Milan has seen it move into pole position to progress to the UEFA&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/chelsea-graham-potter-first-team-mentality-winning-run-champions-premier-league-ac-milan-english-football/article65999819.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Potter emphasizes team-first mentality as Chelsea continue winning ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSG-Dy7Ob_la8MVY8-Y_sVRqfolw1W8TDlZOrxEjKsODEvGU8sZAWDGnCkufr4koDyJE6u60j08" alt="Potter emphasizes team-first mentality as Chelsea continue winning ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Goals from Jorginho and Pierre-Emerick Aubameyang saw Chelsea complete the double over Milan and record a fourth straight victory and is now top off Group&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report?gameId=652639'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AC Milan vs. Chelsea - Football Match Report - October 12, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRUtpoyhJ5kVJ2_EHUxOqhgztVKqUXf7rHFUk-2HMX5rg5LsV5qHdCN1uS76LozQQaxajsgXjhx" alt="AC Milan vs. Chelsea - Football Match Report - October 12, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the AC Milan vs. Chelsea 2022-23 UEFA Champions League, Group Stage football match.</p></div>
            </div>
        </a><a href='https://www.football.london/chelsea-fc/news/todd-boehly-chelsea-news-flexjet-25246711'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Todd Boehly gives green light for £2bn deal to boost Chelsea ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSPU_AzNfFZLxpaN23-IZm9BC_8aggDt2k9LDFu92EfeHmn8c3x3VodaMFCJNtvctiqlVDoAryj" alt="Todd Boehly gives green light for £2bn deal to boost Chelsea ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea news: Blues owner Todd Boehly is leading a deal to take a US company called Flexjet public, and this could be positive news for those at Stamford&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/lifestyle/sports/chelsea-top-group-with-comfortable-win-10-man-milan-2022-10-12/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea top group with comfortable win at 10-man Milan</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTH8ObBOewdDqf1llygSTerbvAxpIuWTS6QrV3eCiev5eseJ19vfv8bIp-H4ZeglwvD1l1XB_4x" alt="Chelsea top group with comfortable win at 10-man Milan" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea completed the double over AC Milan to top Champions League Group E with a 2-0 victory at San Siro on Tuesday, a match the hosts had to play the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/sports/uefa-champions-league-2022-23-chelsea-beat-10-man-ac-milan-2-0-to-take-control-of-group-e-news-229279'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UEFA Champions League 2022-23: Chelsea Beat 10-Man AC Milan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSIshfoaKitb-bU8HssN3TpCi34SombqH-mMDiKiMkTHvo9_4EL5RTCrDkzJqr_QjJTMh1GNKrq" alt="UEFA Champions League 2022-23: Chelsea Beat 10-Man AC Milan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jorginho converted the spot-kick and Pierre-Emerick Aubameyang doubled Chelsea&#39;s advantage in the 34th minute to help the Blues to their first win on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.football.london/chelsea-fc/news/chelsea-jorginho-ac-milan-tonali-25240251'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Chelsea star Jorginho in AC Milan outrage after what happened ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZhYmkxs-Pm9CJe9UzleUMH_BIEr0nmvHO9MhohYVWkz3hVP2P4O6BxY6rPaedgm3v8v38UNIF" alt="Chelsea star Jorginho in AC Milan outrage after what happened ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Chelsea star Jorginho appeared to be caught laughing as AC Milan midfielder Sandro Tonali bemoaned the referee&#39;s decision to send off Fikayo Tomori.</p></div>
            </div>
        </a><a href='https://theathletic.com/3681461/2022/10/12/graham-potter-chelsea-milan-2/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Potter&#39;s Chelsea pulled Milan apart over two Champions ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQVdDsTRoqNX5UsANRf8xLipNYfHIk7SjjK-kIDMGsxXVe-six9lXn6oNn9qA6Rl7GW4jQtz6j" alt="How Potter&#39;s Chelsea pulled Milan apart over two Champions ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Graham Potter has revived Chelsea&#39;s Champions League campaign with two wins over Milan - so which tactical tweaks allowed him to do this?</p></div>
            </div>
        </a>
        </Template></>;
}