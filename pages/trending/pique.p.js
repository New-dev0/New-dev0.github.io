import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pique</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pique"/>
        <meta name="description" content="Trending News about Pique" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pique</h1>
            <Image width={800} height={500} src="https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1104%2Fr1085858_1296x729_16%2D9.jpg" alt="Pique"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.in/football/barcelona-espbarcelona/story/4790468/gerard-pique-retirement-laliga-chief-tips-defender-to-be-great-barcelona-president'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique tipped to become &#39;great&#39; Barcelona president</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ9-J9Rf5qleXNCW99TrTwZ_IRbzRXhEaGmUTPsx9uQzZI5o1_jMU-l7bt3jQ75-xtbmWxOyAgb" alt="Gerard Pique tipped to become &#39;great&#39; Barcelona president" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>LaLiga president Javier Tebas has said he has doubt Gerard Pique will one day become a &quot;great president of Barcelona.&quot;</p></div>
            </div>
        </a><a href='https://zeenews.india.com/cricket/laliga-why-fc-barcelona-star-gerard-pique-retired-mid-season-and-shakiras-reaction-on-it-2531036.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LaLiga: Why FC Barcelona star Gerard Pique retired mid-season ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYxueiuc6F9_5TrzXzGoerMvJL-_5CV9hZl6yrauxn6zaxaPNfiabL9OmiLoSAV_BtYHgAyQ9T" alt="LaLiga: Why FC Barcelona star Gerard Pique retired mid-season ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many were expecting Shakira to react on her former partner Pique retiring from the sport of football after an astonishing career.</p></div>
            </div>
        </a><a href='https://www.goal.com/en-in/news/barcelona-boss-xavi-pique-retirement-gesture-announcement/blta9408c2f3a066cb8'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;I&#39;ve tried to be honest&#39; - Barcelona boss Xavi hails Pique for ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxybood8NjcCJSmQOPX5Pky5bSKvX93BTncyKpN4Z3rJ3cAG_p9nYqsuG-4jo2AraVqNd4iE7Y" alt="&#39;I&#39;ve tried to be honest&#39; - Barcelona boss Xavi hails Pique for ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona boss Xavi says he was honest with Gerard Pique about his future in the team following the defender&#39;s announcement that he will retire.</p></div>
            </div>
        </a><a href='https://theprint.in/sport/barcelona-legend-gerard-pique-hangs-up-his-boots-to-play-last-game-at-camp-nou-on-saturday/1196873/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Barcelona legend Gerard Pique hangs up his boots, to play last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQGrBgTbTTC2UKykPSXv10zelGW0CWepcMsRbQyu3_Jg_HbEvgdWQM4GDuoO0P8eR_xui2L72il" alt="Barcelona legend Gerard Pique hangs up his boots, to play last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona [Spain], November 4 (ANI): Barcelona&#39;s star defender Gerard Pique announced his retirement from football on Thursday in a video shared by the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/soccer/barcelona-espbarcelona/story/4790520/gerard-piques-retiresexits-barcelona-his-own-way'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique retires and exits Barcelona his own way</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQgjy7WfBXIf8DnuWwtzUR3XZFqJfE3TxweWmINoMvcnm-f3CTkr9FNPpfCmvDiat4gWSaoT_Ey" alt="Gerard Pique retires and exits Barcelona his own way" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona legend Gerard Pique didn&#39;t want to spend a season on the sidelines. He made his choice to leave now and departs as one of the best ever.</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/pique-retiring-not-as-important-or-useful-as-before-xavi-barcelona-news/article66096690.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Retiring Pique not as “important or useful” as before - Xavi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS_gmxS9G_9ND9IJ4kbym6fkfDBQKZ7Zkt0LC94vAaR2Ec24oXyzXUG5NO4zpjtaEGMEf6a2qXw" alt="Retiring Pique not as “important or useful” as before - Xavi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Barcelona coach Xavi Hernandez says he understands Gerard Pique&#39;s decision to retire halfway through the season, because the 35-year-old defender doesn&#39;t&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/other-gerard-pique-announced-his-retirement-after-stellar-career-in-football-23181285.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique: बार्सिलोना के जेरार्ड पिक ने संन्यास की घोषणा की, शनिवार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZ_FpL_6128Xd1YnwSoJoz6wakgHbT0sypo_gg-bBbKYXAYzyd8RtIBpoT4ho6_d9R2VJwspj3" alt="Gerard Pique: बार्सिलोना के जेरार्ड पिक ने संन्यास की घोषणा की, शनिवार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बार्सिलोना के जेरार्ड पिक ने गुरुवार को फुटबाल से रिटायरमेंट की घोषणा की।</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/story/barcelona-star-gerard-pique-announces-retirement-before-fifa-world-cup-2022-pop-star-shakira-ex-husband-tspo-1568251-2022-11-04'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique Retirement: शकीरा के पूर्व पति गेरार्ड पिक का फुटबॉल से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIutTQ_TUb7Fv1YmIT2ns36SQurrOvLgpjJZxynx4X6e1JBEHuZiqvg3wxWULGM4hP4uDRMHNw" alt="Gerard Pique Retirement: शकीरा के पूर्व पति गेरार्ड पिक का फुटबॉल से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>35 साल के स्पेनिश स्टार फुटबॉलर गेरार्ड पिक ने फुटबॉल से संन्यास का ऐलान कर दिया है.</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/football/barcelona-defender-gerard-pique-announces-retirement-gerard-career-with-barca-and-spain-2252025'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique Retirement: बार्सिलोना के स्टार डिफेंडर ने किया संन्यास का ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTUucudOsyZjzx427FI4S8AO-8ymZYHQQQahUF6X9092Pl8keE_1SEr_-PxiIgQLFejLgn_UHEZ" alt="Gerard Pique Retirement: बार्सिलोना के स्टार डिफेंडर ने किया संन्यास का ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerard Pique Retires: बार्सिलोना के स्टार डिफेंडर जेरार्ड पिके (Gerard Pique) ने संन्यास का एलान कर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagranjosh.com/current-affairs/spanish-legend-gerard-pique-announced-his-retirement-from-football-1667567571-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gerard Pique: स्पेनिश फुटबॉलर जेरार्ड पिक ने की रिटायरमेंट की घोषणा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRL5aiJNGaPQWe_KFfYdx54LBVWoFglckxAlfD0jZUzeIRoonYK7HxaaOqKVhHsLWd52vMKCAyi" alt="Gerard Pique: स्पेनिश फुटबॉलर जेरार्ड पिक ने की रिटायरमेंट की घोषणा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gerard Pique: स्पेनिश फुटबॉलर जेरार्ड पिक ने फुटबॉल से संन्यास लेने की घोषणा कर दी है।</p></div>
            </div>
        </a>
        </Template></>;
}