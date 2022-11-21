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
            <Image width={800} height={500} src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_12_desktop/eagles/bxsakhu6radcambqqh2n" alt="Eagles"/>
            <h3>Recent News</h3>
            <a href='https://www.philadelphiaeagles.com/news/game-recap-eagles-vs-colts-week-11-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Game Recap: Eagles 17, Colts 16</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrJRQDf4n3uLcfdsoBzF_NGctDaw9pvdW2LCR6LoOr42WrgXkKeBNjvNcnE4V1PkcB6zLZ-QKq" alt="Game Recap: Eagles 17, Colts 16" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Eagles overcame a 13-3 fourth-quarter deficit as Jalen Hurts&#39; 7-yard touchdown run with 1:20 left helped Philadelphia improve to 9-1.</p></div>
            </div>
        </a><a href='https://www.nfl.com/news/eagles-coach-nick-sirianni-after-win-over-colts-i-m-emotional-because-i-love-fra'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles coach Nick Sirianni after win over Colts: &#39;I&#39;m emotional ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSWtaFw1VQIWQe2PJzDhpzKijL5aIYhHloY9mZoKOy7M04ORxDyDFWi27ghBWYmXjaRUJvRvNxa" alt="Eagles coach Nick Sirianni after win over Colts: &#39;I&#39;m emotional ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Nick Sirianni explained the raw emotion he displayed following the Eagles&#39; 17-16 victory over the Colts in Indianapolis.</p></div>
            </div>
        </a><a href='https://www.inquirer.com/eagles/eagles-colts-jalen-hurts-comeback-week-11-20221120.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles-Colts analysis: Jalen Hurts delivers a comeback win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcStgZhZEiAnPFVWRcc8o6P-pytOi8AKq8Qb-s6_oTprEJzpLz4m67qeiSy3RlwbSI9bBKipbkAn" alt="Eagles-Colts analysis: Jalen Hurts delivers a comeback win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hurts ran for the game-winning touchdown as the Eagles avoided the upset to the Colts thanks to their quarterback overcoming the team&#39;s slow start.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/20/nfl-roundup-eagles-win-late-as-pats-crush-jets-hearts-with-last-minute-td'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL roundup: Eagles win late as Pats crush Jets&#39; hearts with last ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR4aANwFfI7171ytS7fdAz77KupS5ISWhzB3_-oyl67039Zs0cG1wd9AAVPHIKJVoWG_7gWIfzS" alt="NFL roundup: Eagles win late as Pats crush Jets&#39; hearts with last ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jalen Hurts ran for an eight-yard touchdown with 1:20 remaining, and the Philadelphia Eagles rallied past the Indianapolis Colts.</p></div>
            </div>
        </a><a href='https://www.bleedinggreennation.com/2022/11/20/23469249/eagles-colts-final-score-17-16-jalen-hurts-quez-watkins-nick-sirianni-jonathan-gannon-philadelphia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Eagles-Colts final score: Philadelphia wins ugly in Indianapolis, 17 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRsEDZeivHG9vqEL5RjMB-Lqj38OjijjGsz1fZTFb4Iw8G6euERP40IW7pFgXIiot2fOAo6Ue5X" alt="Eagles-Colts final score: Philadelphia wins ugly in Indianapolis, 17 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>But they did not! Down six points with 4:37 remaining in the game, the Eagles badly needed a touchdown to lead for the first time. After struggling for way too&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/nfl-winners-and-losers-eagles-pull-out-clutch-win-but-they-struggled-vs-jeff-saturdays-colts-212737767.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>NFL Winners and Losers: Eagles pull out clutch win, but they ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSK3xtAVBF015QjOxI49JUgudAeUm4mKLyexaK0KE-yFXhjeg_avu_8AllsyNZwuqVz0c6s5lpd" alt="NFL Winners and Losers: Eagles pull out clutch win, but they ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Philadelphia Eagles won, as everyone figured going into Sunday&#39;s game against the Indianapolis Colts. But there are probably more questions about the&nbsp;...</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/11/20/ndamukong-suh-chose-eagles-over-49ers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ndamukong Suh chose Eagles over 49ers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSkAYXl0fk-Jrts15G4ez37u6z7P164akho1Arpq32IeeMUnHATSIi3OcW0b2Z8ABXqzwG_YPgV" alt="Ndamukong Suh chose Eagles over 49ers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suh said that he was attracted to the 49ers because of the presence of defensive line coach Kris Kocurek on the coaching staff. Kocurek first arrived as a coach&nbsp;...</p></div>
            </div>
        </a><a href='https://www.inquirer.com/eagles/eagles-marlon-tuipulotu-injury-defensive-line-20221120.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sources: Eagles DT Marlon Tuipulotu suffered a torn meniscus ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTva5c7Fja1a-ABaaD-PJlH2YJOSh7sBjTgUT_9Mopbm5YntTdAZEd5ALkhIpYwmLJlGFfqa8n2" alt="Sources: Eagles DT Marlon Tuipulotu suffered a torn meniscus ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Eagles second-year defensive tackle Marlon Tuipulotu suffered a torn meniscus last Monday during the team&#39;s game against Washington, league sources told The&nbsp;...</p></div>
            </div>
        </a><a href='https://www.profootballrumors.com/2022/11/dt-ndamukong-suh-makes-debut-with-eagles'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DT Ndamukong Suh Makes Debut With Eagles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTnbxOFth7zgPJumBPuuHgH-foX32b_eESbO_IzhpWZXAz1Mn2snSDr4d1B_LV_znKQQICgQIgT" alt="DT Ndamukong Suh Makes Debut With Eagles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After failing to find a home through the first ten weeks of the 2022 NFL season, defensive tackle Ndamukong Suh made his season-debut today with the Eagles,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.49erswebzone.com/articles/163533-ndamukong-suh-says-decision-came-down-eagles-49ers/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ndamukong Suh says decision came down to Eagles, 49ers</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRdmfUWVonHPx6ZKSTDbzT7_hlq05xnJteYeqZxXIdabODvzNNQbGtCc3cDpLDMVNTkXTsHCVQw" alt="Ndamukong Suh says decision came down to Eagles, 49ers" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>This past week, defensive tackle Ndamukong Suh signed with the Philadelphia Eagles, making his debut on Sunday in a 17-16 win over the Indianapolis Colts.</p></div>
            </div>
        </a>
        </Template></>;
}