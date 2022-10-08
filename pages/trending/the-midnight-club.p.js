import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Midnight Club</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Midnight Club"/>
        <meta name="description" content="Trending News about The Midnight Club" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Midnight Club</h1>
            <Image width={800} height={500} src="" alt="The Midnight Club"/>
            <h3>Recent News</h3>
            <a href='https://www.rogerebert.com/reviews/the-midnight-club-tv-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Midnight Club movie review (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCWV_OlwwKnAcqhCfaIMy6_Li_09erFzrnIbAkQAJzB6on8sBhoBbsQXnKJAnFRTPLH-QqJ8-PuA" alt="The Midnight Club movie review (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Think of this as a gateway drug for potential new horror fans, young people thinking about death in a new way for maybe the first time.</p></div>
            </div>
        </a><a href='https://collider.com/the-midnight-club-ending-explained-mike-flanagan-netflix/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Midnight Club&#39; Ending Explained: Death Is Inexorable, but so Is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ90YkbIu1loW9tZjkXQm1BikM1JeQbnnGAQjudpbInwmLO20C26Kbuyq_1debbUDwcFryDwmLu" alt="&#39;The Midnight Club&#39; Ending Explained: Death Is Inexorable, but so Is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Flanagan and Leah Fong&#39;s new series might be grim and even depressing sometimes. Still, by the end of the season, it becomes clear this is another horror&nbsp;...</p></div>
            </div>
        </a><a href='https://www.vulture.com/article/the-midnight-club-season-1-episode-1-recap-the-final-chapter.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Midnight Club Series-Premiere Recap: Making Ghosts</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQaiOMAnd9xlRLQDEeF1GTQEAp3p1tj3T-RSj1V9IjUjryR1g94rkyCyW-SLYqgPyHkbuvj-hPt" alt="The Midnight Club Series-Premiere Recap: Making Ghosts" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Flanagan&#39;s fourth Netflix horror series, an adaptation of a Christopher Pike novel, introduces us to a group of terminally ill young adults in the&nbsp;...</p></div>
            </div>
        </a><a href='https://variety.com/2022/tv/reviews/the-midnight-club-review-netflix-1235395032/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Midnight Club&#39; Is a Teen Horror Show That&#39;s Actually Scary: TV ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSjLO1FLmqGCfaVK3BGk6Te1Qud19zjAHqkPqeijdlC3_kjdXxAVFaIA9l73wmE8YW2D0IdQO87" alt="&#39;The Midnight Club&#39; Is a Teen Horror Show That&#39;s Actually Scary: TV ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Flanagan&#39;s latest Netflix series &quot;The Midnight Club&quot; takes place at a teen hospice.</p></div>
            </div>
        </a><a href='https://www.elle.com/culture/movies-tv/a41561163/the-midnight-club-netflix-true-story/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is The Midnight Club on Netflix Based on a True Story?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRyhniv6PhXEuE9U19Vdxt_uib-dTq1ASOoyTi5-IQwMGZ5feOILOMjo_thWIZsJZacWiWgI8FF" alt="Is The Midnight Club on Netflix Based on a True Story?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Netflix&#39;s The Midnight Club, from the creator of The Haunting of Hill House and Midnight Mass, is based on the popular teen book by Christopher Pike.</p></div>
            </div>
        </a><a href='https://gizmodo.com/netflix-horror-the-midnight-club-mike-flanagan-series-1849629931'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Midnight Club&#39;s First Episode Is a Horror Record-Breaker</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1jjeApT0xbpldmzSNbNCeXMKlpiqa0XZnalD-Tm-Y9h8BsRWvcPAOFkITE8jek7VRjhIWeT4P" alt="The Midnight Club&#39;s First Episode Is a Horror Record-Breaker" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mike Flanagan&#39;s new Netflix show is a full-on love letter to Christopher Pike&#39;s unflinching horror sensibilities.</p></div>
            </div>
        </a>
        </Template></>;
}