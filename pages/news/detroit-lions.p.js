import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Detroit Lions</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Detroit Lions"/>
        <meta name="description" content="Trending News about Detroit Lions" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Detroit Lions</h1>
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/lions/rm7cuxhyadzol14gnz6l" alt="Detroit Lions"/>
            <h3>Recent News</h3>
            <a href='https://www.detroitlions.com/news/lions-offense-dominates-in-victory-over-jaguars-goff-stbrown-swift'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FOUR DOWNS: Lions&#39; offense dominates in victory over Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRZW5Ql9iCq4gTOkHNPAhUb_vFxgB0BvtsHHy7y5kT3qK4O6x0TzxLVlmrt5EPhf3j1fU5vxsL-" alt="FOUR DOWNS: Lions&#39; offense dominates in victory over Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Four Downs following the Detroit Lions&#39; 40-14 victory over the Jacksonville Jaguars includes offense rolling, Swift usage, setting the tone and St. Brown&nbsp;...</p></div>
            </div>
        </a><a href='https://www.detroitlions.com/news/recap-lions-vs-jaguars-goff-stbrown-swift'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>RECAP: Lions vs. Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXJ1gRdOKlxdJTK2pO3FlqVIBw4XEUn8rdhshdqfbN1HYoup2kW0H4OoPv89giJACGrw5S-LKO" alt="RECAP: Lions vs. Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>When asked this week about facing the Jacksonville Jaguars at Ford Field on Sunday, Detroit Lions head coach Dan Campbell said he thought the two teams were&nbsp;...</p></div>
            </div>
        </a><a href='https://www.mlive.com/lions/2022/12/live-updates-lions-try-to-keep-playoff-dreams-alive-against-jaguars-in-week-13.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions dominate Jaguars 40-14 for fifth win: Live updates recap</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT43EH-RloZVxwyBFEGNcGiLCL4tpVmcnbwORnIRGweeYpFne6ht-BQgTm0eSiHHYYtYy32NxFa" alt="Detroit Lions dominate Jaguars 40-14 for fifth win: Live updates recap" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FINAL: Detroit Lions 40, Jacksonville Jaguars 14. Fourth quarter. 2:37 -- Jacksonville Jaguars drive starts on own 23. Trevor Lawrence&#39;s day is done,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jacksonville.com/story/sports/nfl/2022/12/04/jacksonville-jaguars-takeaways-vs-detroit-lions-nfl-week-13/10790183002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jaguars shut down in Motown, fall 40-14 to Detroit Lions. Here are ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5SUGm4v8HPB4jzMt6w9KjFiChKEy1YLvpwAwqEhAyuWCV48SuGtbZGCdZspKFKYaTnA5riEet" alt="Jaguars shut down in Motown, fall 40-14 to Detroit Lions. Here are ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With just two minutes left in the contest, Jaguars head coach Doug Pederson yanked all of the team&#39;s offensive starters except for right tackle Jawaan Taylor.</p></div>
            </div>
        </a><a href='https://www.jacksonville.com/story/sports/nfl/2022/12/04/jags-vs-lions-game-score-live-updates-jacksonville-jaguars-detroit-nfl-week-13/10800220002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Postgame recap: Trevor Lawrence hurt but returns, Jacksonville ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSYF0P5EklnLC_8PsYH359xE_vCoo_ncRbo7mP-g9sVUXok86QRjXSOscttf_H2RfneqpypOUqI" alt="Postgame recap: Trevor Lawrence hurt but returns, Jacksonville ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Jacksonville Jaguars (4-7) faced the Detroit Lions (4-7) in a Week 13 NFL football game on Sunday, December 4, 2022 at Ford Field.</p></div>
            </div>
        </a><a href='https://www.si.com/nfl/lions/news/detroit-lions-inactive-list-brockers'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions&#39; Week 13 Inactive List</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcS7hrxnc88lbY1lv_Kp_cQWXfNyTrCOE_z_m_H6U749g5DZIVNUgwy9OG2uyX73H08TBF5Re0L4" alt="Detroit Lions&#39; Week 13 Inactive List" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>“It is a growing team. Again, I think you guys think that we should be in the Super Bowl with all these new players,&quot; Lions defensive coordinator Aaron Glenn&nbsp;...</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/nfl/lions/2022/12/04/detroit-lions-roll-past-jacksonville-jaguars-for-4th-win-in-5-games/69699582007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lions &#39;continue to grow,&#39; as offense powers rout of Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSC6SeTAb2yfeYxE44HONVk2kMt50G3EOqwd4A3Vm9TebVu5_tQucFHIgT6osHMQpy2XlTeVRFz" alt="Lions &#39;continue to grow,&#39; as offense powers rout of Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Lions scored on the first eight of the team&#39;s possessions, prior to taking a knee to end the game, dismantling the visiting Jaguars, 40-14.</p></div>
            </div>
        </a><a href='https://www.detroitnews.com/story/sports/nfl/lions/2022/12/04/live-updates-detroit-lions-vs-jacksonville-jaguars/69684631007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Recap: Lions dominate, never punt in blowout win over Jaguars</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT7Fi40bX_KCx9OBzzi2UhOiElztYlkEEFkSuXeyoS1rwmn1Km6MKqFbHAeOj4jD-fPvmWs4URb" alt="Recap: Lions dominate, never punt in blowout win over Jaguars" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow along here for live updates from Detroit News contributor Matthew Scheidel as the Lions play host to the Jacksonville Jaguars.</p></div>
            </div>
        </a><a href='https://www.freep.com/story/sports/nfl/lions/2022/12/04/detroit-lions-game-recap-jacksonville-jaguars/69699515007/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions dominate Jacksonville Jaguars, 40-14, for fourth win in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQOvjVqi99-s1ERtQ8JQFOBE9DSIjkxJooMZuh8_GJgH-E9qdP5tDQ7oM0lYMQZ-keUEmCV43QE" alt="Detroit Lions dominate Jacksonville Jaguars, 40-14, for fourth win in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jared Goff threw for 340 yards and two TDs and D&#39;Andre Swift and Jamaal Williams ran for scores as the Lions beat the Jaguars, 40-14, at Ford Field.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/detroit-lions-freight-train-runs-210045404.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Detroit Lions freight train runs all over the Jaguars in a dominating ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQYd6w0GTXL-ds3Fo6DBX3NqHvdcIt-SeyWG3DbF0V-qeixvBMN3pziEduir0luPQuRv4Tq7J-r" alt="Detroit Lions freight train runs all over the Jaguars in a dominating ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jaguars QB Trevor Lawrence shaking off what could have been a nasty knee injury when sacked by Lions rookie James Houston on the final play of the first half&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}