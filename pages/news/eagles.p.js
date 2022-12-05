import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Eagles</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Eagles"/>
        <meta name="description" content="Trending News about Eagles" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Eagles</h1>
            <Image width={800} height={500} src="https://metrophiladelphia.com/wp-content/uploads/2022/12/AP22338714364678-1200x800.jpg" alt="Eagles"/>
            <h3>Recent News</h3>
            <a href='https://metrophiladelphia.com/hurts-has-3-td-passes-plus-td-run-eagles-beat-titans/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hurts has 3 TD passes plus TD run, Eagles beat Titans 35-10 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqHwyXatvXFyOGtnkWuvDjZxAG0SxJCdP8lQlrKVaiFcjIqISlhc_MlN6Q0CAXaS21nGl-aGB2" alt="Hurts has 3 TD passes plus TD run, Eagles beat Titans 35-10 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jalen Hurts strengthened his MVP bid by throwing for 380 yards and three touchdowns and running for another score, and A.J Brown caught two touchdown passes&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/eagles-wr-a-j-brown-on-two-td-game-vs-titans-this-one-meant-a-lot-to-me'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles WR A.J. Brown on two-TD game vs. Titans: &#39;This one meant a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTXCiSVzU957h4sbSSFqddn9ImQ2MMedNyNJYcDteOCVj3QpR4ZoqGDo0_7J2H6dshBZWDDfryM" alt="Eagles WR A.J. Brown on two-TD game vs. Titans: &#39;This one meant a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With eight receptions for 119 yards and two touchdowns in a win over the Titans, Eagles WR A.J. Brown explains how important it was to get some revenge&nbsp;...</p></div>
            </div>
        </a><a href='https://www.philadelphiaeagles.com/news/game-recap-titans-vs-eagles-week-13-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Recap: Eagles 35, Titans 10</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRxH_bak5rUtppNFgjZej4voCksISRGSmf2-peV5Prte93QllZA4H7CqQVyt7G-H3Wrjc3FMkiG" alt="Game Recap: Eagles 35, Titans 10" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Eagles dominated the Tennessee Titans for a 35-10 victory at Lincoln Financial Field. Quarterback Jalen Hurts was magnificent, throwing for 380 yards&nbsp;...</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/philadelphia/eagles/eagles-overreactions-learning-important-lesson-even-huge-win-vs-titans'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles overreactions: Learning important lesson even in huge win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ-yvaAmV2OVaAE8XZ6HfaHupwIvYHYjNztwtJYzCY8wvg2fvSwuu3kNlupSK0o-37lORf5uE_v" alt="Eagles overreactions: Learning important lesson even in huge win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Howie Roseman once had an up-and-down relationship with Eagles fans. Right now it&#39;s nothing but up. Roseman evaluated his roster after the loss to the Bucs&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/nfl/story/_/id/35180940/eagles-aj-brown-scores-emphatic-40-yard-td-former-team'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles&#39; A.J. Brown scores twice against former team</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS10EPgvD5OlBiGKQAtfYN8X2h8_jj5nH7FKlSiUSUPOuzjSO_Du1skrP7I13eXiYN2yMEiJ1n4" alt="Eagles&#39; A.J. Brown scores twice against former team" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>WR broke through a ____ penalty to walk into the end zone against team that traded him on draft night.</p></div>
            </div>
        </a><a href='https://www.tennesseetitans.com/news/titans-drop-second-straight-this-one-a-35-10-loss-to-the-eagles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Titans Drop Second Straight, This One a 35-10 Loss to the Eagles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRoEo06C2yk9Y35hSFifS7M6vECUQXbZTiK3kvu9d2SP5FcqGGM5JyhhjQH1iQln_rVRI4Z7M8w" alt="Titans Drop Second Straight, This One a 35-10 Loss to the Eagles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>PHILADELPHIA – Oh, brother. In the city of brotherly love, the Philadelphia Eagles proved to be too much to handle for the Tennessee Titans.</p></div>
            </div>
        </a><a href='https://www.nbcsports.com/philadelphia/eagles/eagles-injury-update-quez-watkins-eagles-vs-titans-nfl'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles injury update: Quez Watkins leaves with shoulder injury</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRC5ImHt4qlSlykUp9P36hvViOff-SNCvVbxSJmzxYxD8TmR7A7Wz4V-khSYMkK4qrgKYPsRD4p" alt="Eagles injury update: Quez Watkins leaves with shoulder injury" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Quez Watkins exited the Eagles&#39; game against the Titans on Sunday afternoon late in the third quarter.</p></div>
            </div>
        </a>
        </Template></>;
}