import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Matt Hancock</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Matt Hancock"/>
        <meta name="description" content="Trending News about Matt Hancock" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Matt Hancock</h1>
            <Image width={800} height={500} src="https://ichef.bbci.co.uk/news/1024/branded_news/15567/production/_127799378_shutterstock_editorial_13639537f.jpg" alt="Matt Hancock"/>
            <h3>Recent News</h3>
            <a href='https://www.bbc.com/news/entertainment-arts-63634455'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Hancock: MP finishes third on I&#39;m A Celebrity</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQUE-Qgd30UU6EyXdW7gt80BJnerE35DHgiRnLYn76kLjqZOT-Gav5M0_7Mm35tqmFSdxJg5zB4" alt="Matt Hancock: MP finishes third on I&#39;m A Celebrity" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The former health secretary was beaten by footballer Jill Scott and actor Owen Warner in the final.</p></div>
            </div>
        </a><a href='https://www.politico.eu/article/king-of-the-jungle-7-highlights-of-matt-hancocks-uk-reality-tv-romp/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>King of the jungle? 7 &#39;highlights&#39; of Matt Hancock&#39;s UK reality TV romp</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT7oKl5gMvoFhuxkVauON6AGPyb_WdMBtGcwRe9mDWzJAFUsmtAfRLUb9Vt6hQiBuaWa6LmI9Md" alt="King of the jungle? 7 &#39;highlights&#39; of Matt Hancock&#39;s UK reality TV romp" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>British politics reaches its ultimate form as a scandal-hit ex-Cabinet minister spends weeks in the Australian jungle eating cow&#39;s anus for &#39;I&#39;m A Celebrity&nbsp;...</p></div>
            </div>
        </a><a href='https://www.irishexaminer.com/world/arid-41016377.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Hancock to face angry colleagues and constituents after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQG8lOvsMQVDmpG4lCAZY-XJLtPiQjlOgiJ57X1fyjs4JxXWsKoEmY_9fecxvSdYTP9MzYvGZ1G" alt="Matt Hancock to face angry colleagues and constituents after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The West Suffolk MP surpassed the expectations of many by reaching the final but came behind Euro 2022 winner Jill Scott and Hollyoaks actor Owen Warner in a&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/news/entertainment-arts-63653325'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Matt Hancock on I&#39;m A Celebrity: Has the controversial MP been ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRgNJzPpCLjnixVG2HJjmHrAkIP0-2y7nUNgorbNRfiZ5a_n8swnCk329snJfz35I5El2YGfKat" alt="Matt Hancock on I&#39;m A Celebrity: Has the controversial MP been ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The ex-health secretary was eliminated from I&#39;m a Celebrity, so was his appearance a failure?</p></div>
            </div>
        </a><a href='https://www.theguardian.com/politics/2022/nov/27/matt-hancock-im-a-celebrity-tiktok-votes-jungle'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How did he survive? PR and TikTok votes kept Matt Hancock in I&#39;m a ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTJFr7QugDKh0XSb6AH1HGQkO0U6Xsrr8UNKfsr1RP4g2F5QNRVQDYSRkn5yPZaZQHXKONLi-89" alt="How did he survive? PR and TikTok votes kept Matt Hancock in I&#39;m a ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>An online campaign to boost his popularity has helped the former Tory minister to the final four of the TV reality contest.</p></div>
            </div>
        </a><a href='https://www.thesun.ie/tv/9807935/im-a-celeb-matt-hancock-booted-out/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>I&#39;m A Celeb viewers celebrate as Matt Hancock gets booted out of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTI4WswV9C4sy1I_9tWnxxRMggOB2I9IxWVJJ0xrfgLcXcIqViiICaK0_yYBB-cpnf6JkyQEcBb" alt="I&#39;m A Celeb viewers celebrate as Matt Hancock gets booted out of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>MATT Hancock has finally lost his place in the jungle.The former health secretary came in third place on I&#39;m A Celebrity as Owen Warner and Jill Scott.</p></div>
            </div>
        </a>
        </Template></>;
}