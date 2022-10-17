import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Leeds United vs Arsenal</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Leeds United vs Arsenal"/>
        <meta name="description" content="Trending News about Leeds United vs Arsenal" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Leeds United vs Arsenal</h1>
            <Image width={800} height={500} src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt076a10d282815e61/63480a15318144758a13d4b9/GettyImages-1431977241.jpg" alt="Leeds United vs Arsenal"/>
            <h3>Recent News</h3>
            <a href='https://www.goal.com/en-us/news/leeds-united-vs-arsenal-lineups-live-updates/bltf6b519670dbebed4'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs Arsenal : Lineups and LIVE updates</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQV8j-xeBZYSUznZe5Aw9m3TBBL5Z97NuU90LHOwHwfRIgKtrHDWcq6v8EJTaNCOgpOiGVAoHWy" alt="Leeds United vs Arsenal : Lineups and LIVE updates" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>League leaders Arsenal lock horns with Leeds United at Elland Road as Mikel Arteta and company would look to build on their excellent start to the Premier&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sportingnews.com/us/soccer/news/leeds-vs-arsenal-live-score-highlights-premier-league/jhjmpiqowtyg0ykuznzacjhr'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs. Arsenal result, highlights &amp; analysis from Premier ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTSoJ72ghtWswtQCVmNt9tyqObU7WjanDl7RO4lKfHyoU_-JtbSGbR9awhbjBYMaF4y0pfxzvwR" alt="Leeds United vs. Arsenal result, highlights &amp; analysis from Premier ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>ELLAND ROAD, LEEDS — Bukayo Saka made it nine wins out of 10 for Arsenal as the Premier League leaders came through a frantic afternoon at Leeds with a&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/english-premier-league/leeds-united-vs-arsenal-premier-league-when-and-where-to-watch-live-telecast-live-streaming-3436214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs Arsenal, Premier League: When And Where To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSF5fr8OkjCH-86Cdoy8MQ3smLdF51gLSMajI8saVpKy6-Mh7_XACQYSnW9saXFPsCBDct-cJto" alt="Leeds United vs Arsenal, Premier League: When And Where To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Premier League leaders Arsenal face a trip to struggling Leeds United at Elland Road on Sunday. Arsenal sit a point above high-scroring Manchester City,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.espn.in/football/report/_/gameId/637922'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Leeds United vs. Arsenal - Football Match Report - October 16, 2022 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSWej7-zRUM-nVSgxPex6zyPCANILnekdP9YZPyuE74OIaXumCEui0g3YWke3NvjDQqL5Z3XKz3" alt="Leeds United vs. Arsenal - Football Match Report - October 16, 2022 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Leeds United vs. Arsenal 2022-23 English Premier League football match.</p></div>
            </div>
        </a>
        </Template></>;
}