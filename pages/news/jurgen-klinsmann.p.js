import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jurgen Klinsmann</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jurgen Klinsmann"/>
        <meta name="description" content="Trending News about Jurgen Klinsmann" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jurgen Klinsmann</h1>
            <Image width={800} height={500} src="https://img2.thejournal.ie/article/5931308/river/?height=400&version=5931312" alt="Jurgen Klinsmann"/>
            <h3>Recent News</h3>
            <a href='https://www.the42.ie/jurgen-klinsmann-carlos-queiroz-5931308-Nov2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jurgen Klinsmann seeks to cool tensions in Carlos Queiroz row</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkYsN9EK9YIUECbacYakuYy9krtrMtdWVwO5GBenoBgClA7l0mQwKkzMuRMJGUdXM8WZ5SLoz4" alt="Jurgen Klinsmann seeks to cool tensions in Carlos Queiroz row" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>JURGEN KLINSMANN WANTS to speak to Iran coach Carlos Queiroz in a bid to calm the situation between them, after the Portuguese took exception to comments&nbsp;...</p></div>
            </div>
        </a><a href='https://www.eurosport.com/football/world-cup/2022/carlos-queiroz-calls-for-jurgen-klinsmann-to-resign-from-fifa-role-following-outrageous-remarks-abou_sto9246502/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Carlos Queiroz calls for Jurgen Klinsmann to resign from FIFA role ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQuJRvoyV0E-7qPmYF36g_-mjOq7091G8gBsCUIMSV2Je_W7MN3C0ME5eqX-y54lBnD2ty0vuqW" alt="Carlos Queiroz calls for Jurgen Klinsmann to resign from FIFA role ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carlos Queiroz has called for Jurgen Klinsmann to resign from his role at Fifa following “outrageous remarks” he made about the Iran national team.</p></div>
            </div>
        </a><a href='https://www.irishtimes.com/sport/soccer/2022/11/27/jurgen-klinsmann-to-call-carlos-queiroz-and-calm-things-down-after-iran-dispute/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jurgen Klinsmann to call Carlos Queiroz and &#39;calm things down ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSWSwn4laU97kMiU5iTpKXymcNwM7AfNP8Pr23QXe4ToKmVrUKajpKA5CxcNSlULskuvWZ7awZu" alt="Jurgen Klinsmann to call Carlos Queiroz and &#39;calm things down ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>German pundit said that fouls and confronting officials was &#39;in their culture&#39; after Iran v Wales game.</p></div>
            </div>
        </a><a href='https://www.irishmirror.ie/sport/soccer/iran-jurgen-klinsmann-world-cup-28593963'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Iran issue scathing statement in response to Jurgen Klinsmann and ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSsZkxymZc3U6PH9dAqnXtXgVPRMmjO0Rq0fXB3BgVC3QXGhD-B5ZqkTHVundKqi7JhzowBJfh8" alt="Iran issue scathing statement in response to Jurgen Klinsmann and ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Former Germany striker Klinsmann made comments which enraged in his role as a World Cup 2022 pundit for the BBC, with Iran now calling for FIFA to axe him&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11474977/Jurgen-Klinsmann-tries-play-clash-Carlos-Queiroz.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jurgen Klinsmann tries to play down clash with Carlos Queiroz.</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS5IzQ5N0AuF_K6ZlxdsIh66cDy7se-qSSiprh1MP1iXfBx8NEUG1rQq5W9QX2Tn3R5iFWLlNmz" alt="Jurgen Klinsmann tries to play down clash with Carlos Queiroz." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Queiroz took issue with Klinsmann&#39;s comments, sending out a series of tweets labelling the 1990 World Cup winner&#39;s remarks a &#39;disgrace to football&#39;.</p></div>
            </div>
        </a>
        </Template></>;
}