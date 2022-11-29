import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Tampa Bay Buccaneers</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Tampa Bay Buccaneers"/>
        <meta name="description" content="Trending News about Tampa Bay Buccaneers" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Tampa Bay Buccaneers</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/buccaneers/ulmyddd6xjfwmkq6drpd" alt="Tampa Bay Buccaneers"/>
            <h3>Recent News</h3>
            <a href='https://www.buccaneers.com/news/takeaways-bucs-loss-to-browns-week-12-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Takeaways from the Bucs Loss to the Browns | Week 12</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQhb-IqtOpaTjg4nrDsx-KMYb25XWoWgBKPN3Ux1fK9vo8Sgdv5I5cUpkgfFzKQ_hXIssq2GbOd" alt="Takeaways from the Bucs Loss to the Browns | Week 12" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The dreary rainy day in Cleveland personified the outcome of Sunday&#39;s Week 12 matchup for the Tampa Bay Buccaneers. As the Bucs and Browns battled at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/buccaneers/news/major-injury-update-on-bucs-all-pro-tackle-tristan-wirfs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Major Injury Update on Bucs&#39; All-Pro Tackle Tristan Wirfs</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRSQfh5iP3nIsTExmz8C5zcWkA5eZHksSD6oPju7jN2fTyzc09v-HQcnvFmYGmE-tDHrIFA7MjQ" alt="Major Injury Update on Bucs&#39; All-Pro Tackle Tristan Wirfs" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Bay Buccaneers let the game vs. the Cleveland Browns get away from them late in the 4th quarter, allowing the Browns to tie the game up at 17 and&nbsp;...</p></div>
            </div>
        </a><a href='https://bucsreport.com/2022/11/28/the-tampa-bay-buccaneers-offense-is-broken/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Tampa Bay Buccaneers Offense Is Broken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxj-hWEsbsefV-r-VCOyO89_IUOb3Ep_pIcRsKSs4X44K1Jxd-CtzRQ92O0HNfOZiXZFHDKiHw" alt="The Tampa Bay Buccaneers Offense Is Broken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With two weeks to prepare for three and seven Browns, the Tampa Bay Buccaneers traveled to Cleveland and looked completely anemic.</p></div>
            </div>
        </a><a href='https://theathletic.com/3941732/2022/11/27/bucs-tristan-wirfs-injury/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Bucs All-Pro Tristan Wirfs expected to miss 3-4 weeks with ankle injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSTlyuhvbTgn80kNBkpXu6bq3qpvr6xxe8vKbvmek7JIMEOdzMTLSFhiL2xRmHxdnKa7Vsa6FRX" alt="Bucs All-Pro Tristan Wirfs expected to miss 3-4 weeks with ankle injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tampa Bay Buccaneers offensive tackle Tristan Wirfs is expected to miss three to four weeks with an ankle injury he suffered during Sunday&#39;s 23-17 loss to&nbsp;...</p></div>
            </div>
        </a><a href='https://www.beaconjournal.com/story/sports/pro/browns/2022/11/27/browns-vs-buccaneers-score-updates-highlights-analysis-nfl-week-12-tom-brady-myles-garrett/69671038007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Replay: Browns defeat Buccaneers 23-17 with clutch performances ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQwOgXRPt45e7FOD0PTm9MBTbpLGAFaDB-7Xfu1xbhhUHVk1f-tkWQsSUKon4HTNyMq3C_f8lFn" alt="Replay: Browns defeat Buccaneers 23-17 with clutch performances ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Check back throughout today for the latest scoring and updates on the Cleveland Browns game vs. Tom Brady and the Tampa Bay Buccaneers.</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10056951-3-takeaways-from-buccaneers-week-12-loss-vs-browns'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>3 Takeaways from Buccaneers&#39; Week 12 Loss vs. Browns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcReBfrRQSnYYDfd8yFp0tcffjqUDscdhpx5gKLLDxrP0kHgNg6T79zuKN2H-IulAYP7b3rB-nfZ" alt="3 Takeaways from Buccaneers&#39; Week 12 Loss vs. Browns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Heading into their Week 11 bye, the Tampa Bay Buccaneers had finally reestablished some positive momentum. After getting off to a 3-5 start, they got back&nbsp;...</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/buccaneers/gameday/gameday-recap-the-tampa-bay-buccaneers-fail-to-win-third-straight'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gameday Recap: The Tampa Bay Buccaneers Fail to Win Third ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTnAIhgZoitB6mCqz5MibRUoKETr9bzoKq_YNv8TtT0dZXp7VgcUUYBvPh_gaCJFAiKu4BSmDeT" alt="Gameday Recap: The Tampa Bay Buccaneers Fail to Win Third ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Bay Buccaneers can&#39;t continue their momentum in a 23-17 OT loss to the Cleveland Browns.</p></div>
            </div>
        </a><a href='https://www.seattletimes.com/sports/relieved-bucs-wirfs-injury-not-as-bad-as-initially-feared/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Relieved Bucs: Wirfs&#39; injury not as bad as initially feared</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyZow9WltTSF0O8P3aDQemU6PIjZ6TVo9SU4oPQFj4HMKUE69q2MhGHVRveG3G9Ff0bWHJQyGa" alt="Relieved Bucs: Wirfs&#39; injury not as bad as initially feared" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The news coming out of another disappointing loss to an opponent with a losing record was not as bad as it could have been for the first-place Tampa Bay&nbsp;...</p></div>
            </div>
        </a><a href='https://bucswire.usatoday.com/lists/nfl-bucs-browns-recap-tom-brady-jacoby-brissett-nick-chubb-rachaad-white-chris-godwin-devin-white/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Browns 23, Bucs 17: Everything you need to know about Tampa ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQz62YfWrwCa3fBASiKbpRJZfTnGLQhZm4EjYY71QIu8ezWFKgzcM3D0eRRljrqr69aGqCGTWzJ" alt="Browns 23, Bucs 17: Everything you need to know about Tampa ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Tampa Bay Buccaneers fell back down to earth with another crushing loss Sunday, dropping their Week 12 road tilt to the Cleveland Browns in overtime.</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35124166/tristan-wirfs-carted-buccaneers-ot-loss-browns'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tristan Wirfs carted off in Buccaneers&#39; OT loss to Browns</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS_VPgA4EE7p-6KVeVBBzrcqbSQ2-FR1v7qAR2Kqx98jCD2qcoqWfvOJwE5jJn-v00-hSndOHSp" alt="Tristan Wirfs carted off in Buccaneers&#39; OT loss to Browns" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All-Pro right tackle Tristan Wirfs suffered a left leg injury in overtime of Tampa Bay&#39;s loss in Cleveland.</p></div>
            </div>
        </a>
        </Template></>;
}