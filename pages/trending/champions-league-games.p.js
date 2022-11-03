import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Champions League games</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Champions League games"/>
        <meta name="description" content="Trending News about Champions League games" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Champions League games</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1dcc6e86f7f6bf43/636288dc385f345d7bf14e7e/WorstTeams.jpg" alt="Champions League games"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-in/lists/worst-teams-champions-league-history/blte518bd355063ae17'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Zero points: The worst teams in Champions League history ranked</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSspgDQt0j6CuzKU-qX7GBur4Fvt_Iy8iUyiA-ASHaJKtyrSX1KF0jPqdOO16wVpoFPZ4LT_2NS" alt="Zero points: The worst teams in Champions League history ranked" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Rangers having lost all six of their games in this season&#39;s group stage, GOAL runs through all the sides to have suffered total humiliation. The Champions&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}