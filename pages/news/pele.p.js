import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Pele</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Pele"/>
        <meta name="description" content="Trending News about Pele" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Pele</h1>
            <Image width={800} height={500} src="https://i.eurosport.com/2022/12/09/3505549-71458148-2560-1440.jpg" alt="Pele"/>
            <h3>Recent News</h3>
            <a href='https://www.eurosport.com/football/world-cup/2022/neymar-levels-pele-as-brazils-all-time-top-scorer-with-strike-against-croatia-in-world-cup-quarter-f_sto9265564/story.shtml'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar levels Pele as Brazil&#39;s all-time top scorer with strike against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRFweQ2in69YyLLu8T3JF2JfF1OssV-wF1uNF4AkNPKUBsCWpm-qmbN-ge--t3Ux_3B4WGENKZq" alt="Neymar levels Pele as Brazil&#39;s all-time top scorer with strike against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar came into the World Cup in Qatar on 75 Brazil goals, two behind Pele&#39;s tally of 77. Now with his goal against Croatia in the quarter-final he has finally&nbsp;...</p></div>
            </div>
        </a><a href='https://www.dailymail.co.uk/sport/football/article-11520427/Neymar-equals-Peles-record-77-Brazil-goals-Brazilian-Confederation-insist-legend-scored-95.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar equals Pele&#39;s record off 77 Brazil goals but Brazilian ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTedVEtDPIzKtzTQ6zLQ-yus2WrzNskvf4ajAFQxA6m9IodYonStyI36pCDQCj1zdKQOw7YEFpD" alt="Neymar equals Pele&#39;s record off 77 Brazil goals but Brazilian ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar, who could well move beyond the total of 77 goals at the Qatar World Cup, is highly unlikely to match Pele&#39;s achievements in football&#39;s most coveted&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxsports.com/stories/soccer/world-cup-2022-neymar-ties-peles-all-time-record-for-goals-scored'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar ties Pelé&#39;s all-time record for goals scored in Brazil&#39;s loss</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSM6CFgPCRfzMuQP4A6qwbnAQWGNtb1GKq2ebb5kw-LcC-NeKy3YIyZhX9cH7hugHt3hAS-ATGd" alt="Neymar ties Pelé&#39;s all-time record for goals scored in Brazil&#39;s loss" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian superstar Neymar moved into a tie with Pelé for the most goals scored in Brazil men&#39;s national team history in Friday&#39;s loss to Croatia.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63867421'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar equals Pele&#39;s &#39;official&#39; Brazil goal record</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRtZ2Dz2LNFVRJ_81T5wZ4X9Rhh7PwQZ3QC2pilqI19zg5ThoBxq2B6VDVTkjOl0vVkcnuEOUYb" alt="Neymar equals Pele&#39;s &#39;official&#39; Brazil goal record" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>World governing body Fifa recognises the record, but the Brazilian Football Confederation and Pele will not because they say he scored 95 goals. Fifa only&nbsp;...</p></div>
            </div>
        </a><a href='https://www.usnews.com/news/sports/articles/2022-12-09/neymar-ties-peles-all-time-record-with-brazil-at-world-cup'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar Ties Pelé&#39;s Record but Loses Again at World Cup</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRwjlMSBrHbGNAt-Zta23o_pvC8B3dv9yHt7F4n2zbOe4EO7J74o698mA1cc90MWXl3FaWK5S4H" alt="Neymar Ties Pelé&#39;s Record but Loses Again at World Cup" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AL RAYYAN, Qatar (AP) — Neymar walked off the field with teammate Dani Alves by his side, tears still rolling down the Brazil forward&#39;s cheeks.</p></div>
            </div>
        </a><a href='https://www.marca.com/en/world-cup/2022/12/09/639372fd268e3efc108b45f5.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar&#39;s tearful record: He equals Pele and is now Brazil&#39;s all-time ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQz8bnJvoM1gzNf4u1qsWAoN3OUf3jltSQkndeVuHfgLL4kZpcI-kcyOIiAngpLuJhZfK1fahn7" alt="Neymar&#39;s tearful record: He equals Pele and is now Brazil&#39;s all-time ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>December 9, 2022 is part of the glorious history of soccer and, more especially, of Brazil, although the elimination against Croatia filled the whole&nbsp;...</p></div>
            </div>
        </a><a href='https://dailytrust.com/neymar-equals-peles-goal-record-for-brazil/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar equals Pele&#39;s goal record for Brazil - Daily Trust</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ1s0Soo7E46YFewdfAxmC9B1jRiXZb3p8PflPs08vj73v5oim2vmUqzYzqfN7um9wGLaNVjl0f" alt="Neymar equals Pele&#39;s goal record for Brazil - Daily Trust" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar&#39;s strike, which saw him beat Croatia goalkeeper Dominik Livakovic and convert from a tight angle, put Brazil 1-0 ahead in stoppage...</p></div>
            </div>
        </a><a href='https://www.nbcwashington.com/news/sports/neymar-to-pele-the-history-of-brazilian-footballers-mononyms/3229706/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neymar to Pelé, the History of Brazilian Footballers Mononyms</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ9cY3QUKDnJEO35NKTp8s292r-g_5L-m_eV6HTBrisoD35Xqld7YCUKyc_1yjxDDCujnpgdYx4" alt="Neymar to Pelé, the History of Brazilian Footballers Mononyms" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Neymar is the latest in a long line of Brazilian players like Pelé and Kaká who have gone by a mononym and shined at the FIFA World Cup.</p></div>
            </div>
        </a>
        </Template></>;
}