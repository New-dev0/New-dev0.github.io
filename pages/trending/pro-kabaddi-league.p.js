import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pro Kabaddi League</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pro Kabaddi League"/>
        <meta name="description" content="Trending News about Pro Kabaddi League" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pro Kabaddi League</h1>
            <Image width={800} height={500} src="https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0221%2Fr977275_2_1296x729_16%2D9.jpg" alt="Pro Kabaddi League"/>
            <h3>Recent News</h3>
            <a href='https://www.espn.com/kabaddi/story/_/id/34696604/up-yoddhas-full-squad-pro-kabaddi-league-season-9-pkl-pardeep-narwal'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>UP Yoddhas full squad for Pro Kabaddi League Season 9</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS_ekyCpX-O61pe4VhajEUmaY5-8OrN62sE0DyiIhUdufPTuvEaFmj8lDMBzi110mG4FGrargD9" alt="UP Yoddhas full squad for Pro Kabaddi League Season 9" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>All eyes will be on Pardeep Narwal as he begins his second season with UP Yoddhas. Here is UP Yoddhas&#39; full squad for the ninth season of the Pro Kabaddi&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.com/kabaddi/story/_/id/34689778/patna-pirates-full-squad-pro-kabaddi-league-season-9-rohit-gulia-mohammedreza-shadloui'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Patna Pirates full squad for Pro Kabaddi League Season 9</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTbu-ruW5-UVMZujDP5vJafd3ZgFBoLLNKHr4nR88--YzcvEOpQr-l4CG5uMWAlz5xMPED6KqkB" alt="Patna Pirates full squad for Pro Kabaddi League Season 9" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patna Pirates, three-time PKL champions and runners-up in PKL season 8, retained Iranian all-rounder Mohammadreza Shadloui Chiyaneh, while roping in raider&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/sports/dabang-delhi-kabaddi-club-renews-title-sponsorship-deal-with-jk-super-cement/articleshow/94564584.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dabang Delhi Kabaddi Club renews title sponsorship deal with JK ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQDlfKj_z5bhVntceQUKPbzBEp1ryBhCUs3elRwZaZuagZdY86DU1XT6j55Ir9kjTo3MBP00h8d" alt="Dabang Delhi Kabaddi Club renews title sponsorship deal with JK ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pushp Raj Singh, Group President, Marketing, Grey Cement, added, “We are extremely pleased to support Kabbadi, an Indian sport that celebrates grit,&nbsp;...</p></div>
            </div>
        </a><a href='https://khelnow.com/kabaddi/pkl-9-match-timings-and-fixtures-of-up-yoddha'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>PKL 9: UP Yoddha fixtures and schedule</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ6r5_t1uvvQFtVUo69FgWmPANOVR5L-DLAgvLjxQqjRXuCpsrPmel8NXi33GfsouB0dpnViskD" alt="PKL 9: UP Yoddha fixtures and schedule" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>UP Yoddha have never won the Pro Kabaddi League (PKL) title but they have made it to the playoffs every time.</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/kabaddi/if-playing-kabaddi-comedy-the-kapil-sharma-show-sachin-tanwar-rohit-gulia-alternative-careers-ahead-pro-kabaddi-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;If he was not playing kabaddi, he would be doing comedy on The ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRMOyXb9Gfb4YO3x6H2SLvFdJ-Ca5dwpmtvQM_G5H6UXVWOVWEtY9PXiDxBLhUwjJM3wyziiFgJ" alt="&quot;If he was not playing kabaddi, he would be doing comedy on The ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Patna Pirates stars Sachin Tanwar and Rohit Gulia spoke about their respective likes and dislikes in a special chat with Sportskeeda ahead of Pro Kabaddi&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}