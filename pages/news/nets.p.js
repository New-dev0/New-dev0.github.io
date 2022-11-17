import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Nets</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Nets"/>
        <meta name="description" content="Trending News about Nets" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Nets</h1>
            <Image width={800} height={500} src="https://cdn.theathletic.com/app/uploads/2022/11/16070736/GettyImages-1441822247-scaled.jpg" alt="Nets"/>
            <h3>Recent News</h3>
            <a href='https://theathletic.com/3902850/2022/11/16/nets-ben-simmons-frustrations/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Inside the Nets&#39; building frustration with Ben Simmons as team looks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSqnKtmr1Sb2Q1kcFCr84EcJJdOUlqQq6O9JjtpHGcHjc3qPNGmGssccv9mOM5wZt2MzqpR1drV" alt="Inside the Nets&#39; building frustration with Ben Simmons as team looks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simmons had his best performance as a Nets player in Sacramento. It was a necessary first step toward rebuilding the team&#39;s trust in him.</p></div>
            </div>
        </a><a href='https://www.si.com/nba/2022/11/16/kevin-durant-honest-take-on-brooklyn-nets-current-starting-lineup-what-are-you-expecting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant Shares Honest Take on Nets&#39; Current Starting Lineup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHRUsK1Vkvw2A5AbGqqPCE_CoqlszTjlaFvOg-Czrfw1dNGR1QYNVehBqRBJbzAC6x0SudewbW" alt="Kevin Durant Shares Honest Take on Nets&#39; Current Starting Lineup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The forward admitted that he can “play with anybody” based on how many players he&#39;s competed with in his career.</p></div>
            </div>
        </a><a href='https://www.sbnation.com/nba/2022/11/16/23462681/kevin-durant-why-he-requested-trade-brooklyn-nets-interview'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant revealed why he requested a trade from the Nets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTgJeV_xeH5d1Sh7xEye_X3ey1SD6__x2-N9AqKOdFjEj1cnaRBwXwYjJ9_qvTR0fexZjasrUfp" alt="Kevin Durant revealed why he requested a trade from the Nets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kyrie Irving is suspended for an undisclosed amount of time for anti-Semitic postings made on his social media accounts, Ben Simmons is still trying to find a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amny.com/sports/kevin-durant-happiness-with-nets/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant addresses happiness with Nets, trade request over ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRfjal6pF18ra53lxhe7ug8oAuGcI57AV7_3vA_2xJjfi351WrVKkYEyHM74xqjAkQJVBHFZ075" alt="Kevin Durant addresses happiness with Nets, trade request over ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Durant is pushing back on the ongoing perceptions that he isn&#39;t happy these days in Brooklyn with the Nets. The team is coming off a rough loss to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nba/news/nets-have-building-frustration-surrounding-ben-simmons-availability-and-level-of-play-per-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nets have &#39;building&#39; frustration surrounding Ben Simmons ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQKdbbGVYKmbTypmwZ1Hbf3U_8mX763Odl_6pEIg7g2Pbh2C2LYJwy-lMoay4IQsjxPbiX5hA9Q" alt="Nets have &#39;building&#39; frustration surrounding Ben Simmons ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Simmons has already missed five games this season due to knee issues.</p></div>
            </div>
        </a><a href='https://deadspin.com/kevin-durant-s-legacy-is-at-risk-with-these-dumpster-fi-1849791714'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant&#39;s legacy is at risk with these dumpster-fire Nets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRBo9cVOUwNXT8BFrI-Y6au4ohBof-HTKoyjZp9xfe03sRm8kGz8nKh9DMvVRgEx0urkSPxO33s" alt="Kevin Durant&#39;s legacy is at risk with these dumpster-fire Nets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From championship contender to leader of the NBA&#39;s biggest, stupidest mess — is this how people will remember KD?</p></div>
            </div>
        </a><a href='https://nba.nbcsports.com/2022/11/16/nets-players-coaches-reportedly-growing-frustrated-with-ben-simmons-he-pushes-back/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nets players, coaches reportedly growing frustrated with Ben ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRDLi9taFALvV49yB8HKhUFupWB_4zpVUP783wpb2_mD3cLHGCHYvQzugAUphy9pqNdl_qUuCWI" alt="Nets players, coaches reportedly growing frustrated with Ben ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brooklyn Nets players and coaches reportedly are growing increasingly frustrated with Ben Simmons but he pushed back talking about his injuries.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/nba-nets-are-reportedly-already-frustrated-with-ben-simmons-161706149.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nets are reportedly already frustrated with Ben Simmons</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS8BpiFcReyXp37eYiPqlNYizDvPxQgThNPDM0b7lzsh4UdRlL2hPx-6M_gPtHKh5-xeOwBwaby" alt="Nets are reportedly already frustrated with Ben Simmons" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>No, you haven&#39;t time traveled back to mid- to late 2021. This is reportedly happening right now, in Nov. 2022, on the Brooklyn Nets (not the Philadelphia 76ers,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amny.com/sports/nets-growing-frustrated-with-ben-simmons/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Nets growing frustrated with Ben Simmons: Report | amNewYork</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRsMrt5QhOeIGv__JyJO12FBODwANbzLXhpVYjHlCdY3ywQaMzFoG9wgeZMNAxfbeOEhnlZ-DpC" alt="Nets growing frustrated with Ben Simmons: Report | amNewYork" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brooklyn Nets guard Ben Simmons (10) points during the first half of a preseason NBA basketball game against the Philadelphia 76ers, Monday, Oct. 3, 2022,&nbsp;...</p></div>
            </div>
        </a><a href='https://nba.nbcsports.com/2022/11/16/kevin-durant-says-trade-request-based-on-how-team-prepared-says-nets-roster-has-limits/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kevin Durant says trade request based on how team prepared, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQnaZInirJv6Qed4UtYtMcElDmM-J6650c3snmiqhQS5fnlgW00K8U7zVZAcCU_gnwGxtWA93r" alt="Kevin Durant says trade request based on how team prepared, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Kevin Durant opened up about why he requested a trade from the Nets and said he felt they were not pushing and preparing the way a contender should.</p></div>
            </div>
        </a>
        </Template></>;
}