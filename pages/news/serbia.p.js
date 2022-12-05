import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Serbia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Serbia"/>
        <meta name="description" content="Trending News about Serbia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Serbia</h1>
            <Image width={800} height={500} src="https://images.livemint.com/img/2022/12/03/original/SOCCER-WORLDCUP-SRB-SWI-REPORT-525_1670028536570_1670028536570.JPG" alt="Serbia"/>
            <h3>Recent News</h3>
            <a href='https://www.livemint.com/sports/football-news/switzerland-overwhelm-serbia-reach-round-of-16-11670027765732.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland overwhelm Serbia, reach Round of 16 | Mint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSzY_t1oCYjUWUhRYsEXBR7lVcMfw00Qx97lsEz2F6wSxLa8H34qXNsvIMjDtLY2WhRWK9BeQO0" alt="Switzerland overwhelm Serbia, reach Round of 16 | Mint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Xherdan Shaqiri took off as soon as the ball hit the back of the net. It was no surprise where he was headed after scoring the first goal in Switzerland&#39;s&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wionews.com/sports/switzerland-edge-serbia-in-goalfest-to-reach-last-16-cameroon-beat-brazil-1-0-539593'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Switzerland edge Serbia in goalfest to reach last 16; Cameroon beat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRGrWTRmcDU_T6_tBQII4JlGsUm3N_xPiKhQ7itEcZ6Q1uy8vaH54kTuLwgrvdTQIZVR9ygIN_P" alt="Switzerland edge Serbia in goalfest to reach last 16; Cameroon beat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Switzerland reached the World Cup knockout round for the third successive tournament after prevailing 3-2 over Serbia on Friday to finish runners-up in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/fifa-world-cup/story/4823464/fiery-world-cup-win-for-switzerlands-shaqiri-vs-serbia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Fiery World Cup win for Switzerland&#39;s Shaqiri vs. Serbia</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQEOJpfAC_kkvo7Wwl2ce_YaIpiGZcv6zZ02KRSnXPgzsVQNEDStLRrO8fINahVZTdQFZKKpX3h" alt="Fiery World Cup win for Switzerland&#39;s Shaqiri vs. Serbia" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite intense pressure and jeering, Xherdan Shaqiri stepped up and Switzerland advance in the 2022 World Cup as Serbia fell short yet again.</p></div>
            </div>
        </a><a href='https://www.al-monitor.com/originals/2022/11/egypt-reaches-out-serbian-muslims'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Egypt reaches out to Serbian Muslims</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQETzeVqudat5kFfDsIVHrTNQr1aAzPARUgXB5eC1LqPRy-Y8gbtTKdeinPVgvXIYZTx0iJMhL4" alt="Egypt reaches out to Serbian Muslims" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Cairo is making overtures toward Muslims in Serbia amid the Muslim Brotherhood&#39;s growing influence in neighboring Kosovo.</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/football/why-xhakas-testicles-grabbing-act-and-shaqiris-finger-on-lips-has-created-a-controversy-in-the-serbia-vs-switzerland-game-8303734/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Xhaka&#39;s testicles-grabbing act and Shaqiri&#39;s finger-on-lips has ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUiMy3tJEKFeGrNP9alJo4bdJoAMzTGV76hho8X2lwY52qQaIDredexIE6SFswqRPrjcHmCZu7" alt="Why Xhaka&#39;s testicles-grabbing act and Shaqiri&#39;s finger-on-lips has ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the 2018 world cup, the two Kosovo-Albanian origin players Shaqiri and Xhaka had done the &#39;eagle-salute&#39;. Balkan politics yet again invaded the football&nbsp;...</p></div>
            </div>
        </a><a href='https://english.jagran.com/sports/fifa-world-cup-2022-switzerland-dominate-serbia-32-to-storm-into-round-of16-10056190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA World Cup 2022: Switzerland Dominate Serbia 3-2 To Storm ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQaTCirMzVatf0ul7yud0w0Ew1z12JIjerMULjJG9PgYZEZOqvsfB70SvjOuPp9cRHKJQwioq7d" alt="FIFA World Cup 2022: Switzerland Dominate Serbia 3-2 To Storm ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022: Serbia&#39;s replacement Nemanja Radonjic nearly scored an equalizer in the dying seconds of stoppage time as the two teams battled it out,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/fifa-world-cup/news/serbia-vs-switzerland-live-score-fifa-world-cup-qatar-2022-updates-lineups-group-g-round-of-16-qualification-scenario/article66214228.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Serbia 2-3 Switzerland HIGHLIGHTS, FIFA World Cup 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTK17AnOx_s3OE9rE2fy1lMEH4RQApie1eHN89fkzIgDnI9Wv14lqeP90b-NmLP9AYFPPOtOub8" alt="Serbia 2-3 Switzerland HIGHLIGHTS, FIFA World Cup 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SRB vs SUI: Welcome to Sportstar&#39;s highlights of the FIFA World Cup Group G clash between Serbia and Switzerland at Stadium 974 in Doha.</p></div>
            </div>
        </a>
        </Template></>;
}