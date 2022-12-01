import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Denmark</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Denmark"/>
        <meta name="description" content="Trending News about Denmark" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Denmark</h1>
            <Image width={800} height={500} src="https://www.aljazeera.com/wp-content/uploads/2022/11/2022-11-30T164732Z_2040717641_UP1EIBU1AN7MR_RTRMADP_3_SOCCER-WORLDCUP-AUS-DNK-REPORT.jpg?resize=1200%2C675" alt="Denmark"/>
            <h3>Recent News</h3>
            <a href='https://www.aljazeera.com/gallery/2022/11/30/photos-australia-v-denmark'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Photos: Australia stun Denmark, claim place in World Cup last 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSE-Fxqhu1UIxuT00dTnc05IEy7mse_wDaNIUTnkeuD3IWUa9sblNX9UxzX00lyMLfGd0kHN9Bz" alt="Photos: Australia stun Denmark, claim place in World Cup last 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Socceroos are into the knockout stage with a second-half goal from Mathew Leckie.</p></div>
            </div>
        </a><a href='https://www.news24.com/sport/soccer/worldcup/australia-reach-world-cup-last-16-and-send-denmark-home-20221130'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia reach World Cup last 16 and send Denmark home</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ8J6tbN_rfWvi807JffFr6MznjY_cPckG_pDDt2VlxjW_7gb2g1pM0WCLTUwEVqDCFTWG_3-sC" alt="Australia reach World Cup last 16 and send Denmark home" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Winger Mathew Leckie scored the winner on the hour with a smart run and finish to end Denmark&#39;s Qatar hopes at the group stage. Australia, who made the knockout&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nytimes.com/2022/11/30/sports/soccer/france-tunisia.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisia&#39;s World Cup exit was a wild ride. Denmark&#39;s was a frustrating ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKJjF4qV9laIWeVxyk1jIX1GZyJUQwn_Br59eA5Iiuy0mlbxb_-HdVS4pznHoO2pSTZ4d95yj4" alt="Tunisia&#39;s World Cup exit was a wild ride. Denmark&#39;s was a frustrating ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two games, played simultaneously in stadiums only six miles apart, settled the Group D standings: France (6 points) edged Australia (6) on goal difference,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.goal.com/en-za/news/australia-vs-denmark-lineups-and-live-updates/blt62ca5ef6e33fa223'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia vs Denmark: Lineups and LIVE Updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSpxFfiv9AuB0IUFCCxKZKR2oCSMDSsUXxF_6a2xEH2RQCGetlcB--d7Wco3lY_EOimMxNezwfv" alt="Australia vs Denmark: Lineups and LIVE Updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>90&#39;+5&#39;missAttempt missed. Andreas Cornelius (Denmark) header from a difficult angle on the right is just a bit too high. Assisted by Christian Eriksen with a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.iol.co.za/sport/world-cup/australia-shock-denmark-to-waltz-into-world-cup-last-16-9b7ba54e-b06b-40b4-85f1-536b8b947ccd'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia shock Denmark to waltz into World Cup last 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ1IzHZxjITeLaOLHutqVE3wpNdrqicg6ZB2luAzs8vh-PAhXYxsWSFGWzNLHgtSN4K3Pye4wWM" alt="Australia shock Denmark to waltz into World Cup last 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mathew Leckie scored the only goal of the game as Australia beat Denmark to book their spot in the round of 16 as runners up in Group D.</p></div>
            </div>
        </a><a href='https://supersport.com/football/fifa-world-cup-2022/news/f276d782-7094-465a-bc57-4552e8ee4dcb/over-emotional-denmark-lacked-quality-says-dejected-hjulmand'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Over-emotional Denmark lacked quality, says dejected Hjulmand ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR1yFUq1l7VB-nKMipjj1DQE_NKsiVBPKunK48RC4PfKsnqK57-m6iqb8TvPCU299MS1IBxBFCo" alt="Over-emotional Denmark lacked quality, says dejected Hjulmand ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Denmark coach Kasper Hjulmand said his side got too emotional as they slumped to a 1-0 defeat by Australia on Wednesday to crash out of the World Cup after&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/11/30/football/denmark-australia-world-cup-2022-spt-intl/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia stuns Denmark to reach World Cup knockout stages</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRJdV4dBfEIuayVYR79ro4wnT5Z-Km65YK6kaw8NLFQuMcPZx94ZqNd_hRrs1GEd8-rdNWGgGou" alt="Australia stuns Denmark to reach World Cup knockout stages" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia stunned Denmark -- a team ranked 28 places above the Socceroos in FIFA&#39;s World Rankings -- to reach the World Cup knockout stages thanks to a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.moroccoworldnews.com/2022/11/352726/australia-beats-denmark-qualifying-for-world-cup-knockout-stage'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia Beats Denmark Qualifying for World Cup Knockout Stage</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcT4a5e7G6fTqgkpX92emhzh4P_JgPGcTCt9B69SUUO_9tfaTCE_1sme1pNlCUb1DinKwTJS7ygm" alt="Australia Beats Denmark Qualifying for World Cup Knockout Stage" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Australia&#39;s national football team has officially made it to the World Cup&#39;s round of 16 after beating Denmark 1-0 in the two teams&#39; last group stage match.</p></div>
            </div>
        </a><a href='https://www.skysports.com/football/australia-vs-denmark/report/462997'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Australia 1-0 Denmark: Mathew Leckie strike seals World Cup last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRG3pQts-0jtByb_bWOGjbfx4PKa2dN75sZoSCjZCA05x8deNWZG7dNbjYlpgrhoGSEktamIDAZ" alt="Australia 1-0 Denmark: Mathew Leckie strike seals World Cup last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Report as Australia seal runners-up spot in Group D to qualify for World Cup last 16 for only the second time; Euro 2020 semi-finalists Denmark eliminated&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thisdaylive.com/index.php/2022/11/30/tunisia-win-but-australia-grab-ticket-with-victory-over-denmark/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tunisia Win But Australia Grab Ticket with Victory over Denmark</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSnlvp2PuzYAkbOnFu-RDBVSkME1O9h-FNWn2WoeALMcu1J0DemmjMCfD2iLhpokMe_t5puRsKh" alt="Tunisia Win But Australia Grab Ticket with Victory over Denmark" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>France had a goal ruled out by VAR for offside in the final minute of stoppage-time as Tunisia held on to register a shock victory, but failed to qualify&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}