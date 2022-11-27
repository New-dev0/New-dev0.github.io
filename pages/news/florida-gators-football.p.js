import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Florida Gators football</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Florida Gators football"/>
        <meta name="description" content="Trending News about Florida Gators football" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Florida Gators football</h1>
            <Image width={800} height={500} src="https://www.gannett-cdn.com/presto/2022/11/26/PTAL/27927b9a-9967-41b3-a6c7-6dad5cbcd3b5-FSU_v_UF_first_half342.JPG?auto=webp&crop=4063,2285,x0,y133&format=pjpg&width=1200" alt="Florida Gators football"/>
            <h3>Recent News</h3>
            <a href='https://www.gatorsports.com/story/football/2022/11/25/florida-gators-football-5-takeaways-loss-florida-state-seminoles-rivalry-game/10762081002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSlghUuA5w8Zzx7MNjMa0PT72thhJ8Fi3ClB5B3au9wodqDWY6eL803-onhq4jvajnhDUzL69la" alt="Twenty-eight yards short: 5 takeaways from Florida&#39;s loss to FSU in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida drove to the FSU 28 with 39 seconds remaining, but on a 4th-and-11 play, quarterback Anthony Richardson&#39;s pass fell incomplete in the end zone.</p></div>
            </div>
        </a><a href='https://gatorswire.usatoday.com/lists/florida-football-fsu-seminoles-recap/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Saturday Hash: Breaking down Florida&#39;s season-ending loss to FSU</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRbURPLJ2ppzAjh2JaKhodIKsHBEfjqDODKzYHaLpZgwuE2lUCyTSqAloxpHi5q88CsYilXqkHR" alt="Saturday Hash: Breaking down Florida&#39;s season-ending loss to FSU" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Pat Dooley gives his morning-after breakdown of the Florida Gators&#39; loss to the Florida State Seminoles in the final regular-season game.</p></div>
            </div>
        </a><a href='https://floridagators.com/news/2022/11/24/football-the-opening-kickoff-gators-at-no-16-florida-state'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Opening Kickoff: Gators at No. 16 Florida State</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRAalSUV1MjoGVQR7amItbpVKTRtQEkenmq4mWM-l_PQ-vWjuwAZb7jx4i5flU1fupKs2dpPjme" alt="The Opening Kickoff: Gators at No. 16 Florida State" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida (6-5) and Florida State (8-3) close the regular season with the first Friday night showdown in the rivalry&#39;s storied history.</p></div>
            </div>
        </a><a href='https://www.si.com/college/florida/football/florida-gators-football-florida-state-outlasts-offensive-shootout-45-38'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Florida State Outlasts Florida Gators in Offensive Shootout, 45-38</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRs12RI_l59kh-zP-RrXWQwS0OY-YMzSAM3O7nH3MfOx8A5IE20g7pSXCQR9lvlrmkrhKqF-wf1" alt="Florida State Outlasts Florida Gators in Offensive Shootout, 45-38" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Florida Gators fail to overcome Florida State&#39;s early second-half success as they fall short of the Seminoles in Tallahassee, 45-38.</p></div>
            </div>
        </a><a href='https://www.tallahassee.com/story/sports/college/fsu/football/2022/11/25/seminoles-football-pulls-out-close-victory-over-rival-gators-here-our-takeaways/10756126002/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Seminoles hold on: FSU pulls out a close victory over rival Gators ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTBJ4jTtOW9z6zEOnLKw16tNngaTyWEbjNOv8528RXW3qAPyWKEFwvVnpdUanLlbEQ-fLlh2eXj" alt="Seminoles hold on: FSU pulls out a close victory over rival Gators ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Florida State football: Seminoles pull out a close victory over rival Gators. Here are our takeaways.</p></div>
            </div>
        </a><a href='https://www.wruf.com/headlines/2022/11/26/no-16-noles-defeat-gators-45-38-in-football-rivalrys-highest-scoring-game/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No.16 &#39;Noles Defeat Gators 45-38 in Football Rivalry&#39;s Highest ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS9ADIvh43Phyn1ci4vDpDLE83eoqyyZ9oTRKezIIY011ukvOsvAGZFXsB0yZMmnjHPzZ3V-Ca2" alt="No.16 &#39;Noles Defeat Gators 45-38 in Football Rivalry&#39;s Highest ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Gators fell to the Seminoles with a final score of 45-38 in what was the highest-scoring game in the history of the rivalry.</p></div>
            </div>
        </a>
        </Template></>;
}