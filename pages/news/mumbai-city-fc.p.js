import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Mumbai City FC</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Mumbai City FC"/>
        <meta name="description" content="Trending News about Mumbai City FC" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Mumbai City FC</h1>
            <Image width={800} height={500} src="https://www.mumbaicityfc.com/static-assets/waf-images/f3/df/62/16-9/344JRdADSe.jpg" alt="Mumbai City FC"/>
            <h3>Recent News</h3>
            <a href='https://www.mumbaicityfc.com/news/match-report-mumbai-city-fc-4-0-bengaluru-fc'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Match Report: Mumbai City FC 4-0 Bengaluru FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQDFV1w64cJ2svHvTFCAtkRQiKaB76VmZ_S7vEao8q1nesPRGDTCB36cUaivdQCTpQsYEtQDkud" alt="Match Report: Mumbai City FC 4-0 Bengaluru FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>They were flanked by Rahul Bheke and Vignesh. Apuia Ralte was partnered with the creative Ahmed Jahouh and the dynamic Greg Stewart in midfield. Jorge Pereyra&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/football/isl-2022-2023-mumbai-city-fc-beats-bengaluru-fc-match-result/article66150419.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL 2022-23: Mumbai City FC thrashes Bengaluru FC 4-0 to remain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSGzG67oeRZXE2mCAXe0uJGtG3-046n2LWTupmuHwMyu91ajMEf6ONt_ZnbMwoI73NPwwQUm-tt" alt="ISL 2022-23: Mumbai City FC thrashes Bengaluru FC 4-0 to remain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai City made full use of poor defending by Bengaluru FC as Lalengmawia Ralte made it 2-0 in the 32nd minute.</p></div>
            </div>
        </a><a href='https://www.indiansuperleague.com/news/were-now-seeing-consistency-to-what-we-do-mumbai-city-fc-head-coach-buckingham'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>We&#39;re now seeing consistency to what we do: Mumbai City FC head ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQsFulpEr8WqI4opndrytkHg1FD2QAGKQAjpnyKLBtAxuue80hyoeB50d5he2e6unEmamzVhi53" alt="We&#39;re now seeing consistency to what we do: Mumbai City FC head ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Buckingham was delighted with the result and the performance against BFC and the Englishman heaped praise on his squad as they extended their unbeaten run&nbsp;...</p></div>
            </div>
        </a><a href='https://sports.ndtv.com/indian-super-league/isl-mumbai-city-fc-blank-bengaluru-fc-4-0-3530978'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL: Mumbai City FC Blank Bengaluru FC 4-0</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ8Q0YqRG76kjp7CUNIAaSGgiWkyFo8krbPBjGjjZPDDgmek-aVI5igvYZDpAA1i3AeI0la6xJO" alt="ISL: Mumbai City FC Blank Bengaluru FC 4-0" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jorge Diaz (14th minute), Lalengmawia Ralte (32nd minute), Bipin Singh (58th minute) and Lallinzuala Chhangte (74th minute) were on target for Mumbai City.</p></div>
            </div>
        </a><a href='http://www.espn.in/football/report?gameId=653355'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai City FC vs. Bengaluru FC - Football Match Report ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSmADBuOgNhACfuTlOUp8KvB3csIn_YdK5RTJ9xeVcb86x1taqn7-SWtXTkH-yyBNtXivUe0m75" alt="Mumbai City FC vs. Bengaluru FC - Football Match Report ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Get a report of the Mumbai City FC vs. Bengaluru FC 2022-23 Indian Super League, Regular Season football match.</p></div>
            </div>
        </a><a href='https://theprint.in/sport/isl-high-flying-mumbai-city-fc-host-desperate-bengaluru-fc/1221490/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ISL: High-flying Mumbai City FC host desperate Bengaluru FC</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRBkCqjQGQJN_mPe8ZxM75RMffvneAsr7S09tIfo3JGIuNxy3XJOcUQ7oyObUR4IjS5T2dBnVyF" alt="ISL: High-flying Mumbai City FC host desperate Bengaluru FC" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mumbai (Maharashtra) [India], November 17 (ANI): The Indian Super League (ISL)&#39;s Matchweek 7 begins with two former champions – Mumbai City FC and Bengaluru&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thequint.com/sports/mumbai-city-vs-bengaluru-fc-live-streaming-hero-indian-super-league-match-2022-when-and-where-to-watch-live-telecast-of-match'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mumbai City vs Bengaluru FC Live Streaming: Hero Indian Super ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcThPux-r1ZjuoqH6wqPJKYq3W8u94kXgtqnpQc43ezRXJXVWgpw3zCbKdivlmj6iGo7IgVkQqYp" alt="Mumbai City vs Bengaluru FC Live Streaming: Hero Indian Super ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 7th week of Hero Indian Super League 2022 will begin today with a nail baiting match between the two past champions - Mumbai City FC and Bengaluru FC on&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}