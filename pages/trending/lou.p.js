import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lou</title>
        <meta name="description" content="Trending News about Lou" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lou</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-94424444,width-1070,height-580,imgsize-12728,overlay-economictimes/photo.jpg" alt="Lou"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/allison-janneys-lou-imitation-of-liam-neesons-taken-heres-what-viewers-say/articleshow/94424444.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Allison Janney&#39;s &#39;Lou&#39; imitation of Liam Neeson&#39;s &#39;Taken&#39;? Here&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTHn98j55CQ2qH7KqlTViJJpYMLLNzxZQCGZs8A6I5SkUD_ImLJ65fRPd0ju36xw8fVwiSmmBHx" alt="Allison Janney&#39;s &#39;Lou&#39; imitation of Liam Neeson&#39;s &#39;Taken&#39;? Here&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Why is Lou being called a Taken imitation? Viewers believe Lou is similar to Taken, as Lou revolves around Janney on a mission to rescue a kidnapped daughter.</p></div>
            </div>
        </a><a href='https://www.cinemaexpress.com/english/review/2022/sep/24/lou-movie-reviewa-below-par-plot-sinks-the-acting-exploits-of-janney--co-35010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lou Movie Review: A below-par plot sinks the acting exploits of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJ63JYCjzbUhIOet-VquAR9Hy41dww9i0Fhdn1afG5qpSao_PMPtbtnRwJjhSVkItn2u0csK8g" alt="Lou Movie Review: A below-par plot sinks the acting exploits of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The calibre of Allison Janney isn&#39;t enough to extricate this forgettable action thriller from the depths of mediocrity.</p></div>
            </div>
        </a><a href='https://dmtalkies.com/lou-ending-explained-2022-netflix-film-anna-foerster-allison-janney/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Lou&#39; Ending, Explained: Do Hannah And Lou Rescue Young Vee In ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT0w7A-JxRX9EvO3mIo7_kkFcBdbYF4Ro4VZgEWWzkmQcAwErTcBWEE9dFOQs6fJ1IEFBuzpd6j" alt="&#39;Lou&#39; Ending, Explained: Do Hannah And Lou Rescue Young Vee In ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The new action-drama film on Netflix, &quot;Lou,&quot; is an average watch at best, with predictable plot points, no exceptional acting performances, and dialogues&nbsp;...</p></div>
            </div>
        </a><a href='https://collider.com/allison-janney-jurnee-smollett-lou-interview-netflix-true-love/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Allison Janney and Jurnee Smollett Talk &#39;Lou,&#39; Making Their Netflix ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQjGsvnQ7LKsxAyEsULoB_cqUZpZXtyy7qx-awMHNb0fI84jc-0rL6ACLi4_tDT2PuHLztiEIEg" alt="Allison Janney and Jurnee Smollett Talk &#39;Lou,&#39; Making Their Netflix ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lou stars Allison Janney and Jurnee Smollett reveal what it was really like making their Netflix action thriller and filming the big action scenes.</p></div>
            </div>
        </a><a href='https://www.rogerebert.com/reviews/lou-movie-review-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lou movie review &amp; film summary (2022) | Roger Ebert</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSKlRDBJfnJ-tdZQPYMQsjwOzYg4Hifi308WNxkJ7nE41daSfhPBbqd0aj0ES4dAaB5cIE5rPak" alt="Lou movie review &amp; film summary (2022) | Roger Ebert" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Watching this talented actress give so much to a movie that gives absolutely nothing back starts to get depressing.</p></div>
            </div>
        </a><a href='https://www.ign.com/articles/lou-review-allison-janney-jurnee-smollett'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lou Review - IGN</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR5OZagk7lLAjPcYwpY3IOtya7YT2gVQ7CT55Pte38CJQjN8ZG_IQND1vhYt9vUDUDpNwRSedMP" alt="Lou Review - IGN" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Allison Janney and Jurnee Smollett are a fierce but reluctant duo racing to rescue a kidnapped child in a gripping, Taken-esque thriller.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/film/2022/sep/23/lou-review-allison-janney-gets-her-taken-but-leaves-us-wanting'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lou review – Allison Janney gets her Taken but leaves us wanting</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQZHcmRGpAH1mbChdhUSXuoPrSNwo0wfkuMGxw-qdM8MRfQApaTrAPOSuplujDxzntwzd-43a5F" alt="Lou review – Allison Janney gets her Taken but leaves us wanting" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A welcome action lead for the Oscar winner is wasted in a Netflix kidnap thriller that underwhelms and exhausts.</p></div>
            </div>
        </a><a href='https://www.ladbible.com/entertainment/lou-netflix-taken-liam-neeson-20220924'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netflix: Viewers comparing new thriller to Liam Neeson&#39;s Taken</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR39treg6gpMRgpOg--4Oys9S1DNP32FJmaAOyuyhCqlW7XVIZ9jDdEuWGITyG1ie82vfG_gUzE" alt="Netflix: Viewers comparing new thriller to Liam Neeson&#39;s Taken" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The thriller has just dropped on the streaming service and people can&#39;t help but compare it to the popular Neeson film.</p></div>
            </div>
        </a>
        </Template></>;
}