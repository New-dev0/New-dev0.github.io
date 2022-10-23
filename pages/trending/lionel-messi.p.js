import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Lionel Messi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Lionel Messi"/>
        <meta name="description" content="Trending News about Lionel Messi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Lionel Messi</h1>
            <Image width={800} height={500} src="https://img.etimg.com/thumb/msid-95036515,width-1070,height-580,imgsize-14142,overlay-economictimes/photo.jpg" alt="Lionel Messi"/>
            <h3>Recent News</h3>
            <a href='https://economictimes.indiatimes.com/news/international/uk/fifa-world-cup-2022-lionel-messi-says-argentina-is-not-afraid-of-any-team-in-qatar/articleshow/95036503.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>FIFA world cup 2022: Lionel Messi says Argentina is not afraid of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeEzCRgWKnOJxFhh3dQ_exTlK7MJnvzEoBu0NgjoYnmppMJ10KoWibLezD8HEFnfWTImsGEFS5" alt="FIFA world cup 2022: Lionel Messi says Argentina is not afraid of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi exuded confidence that Argentina was fearless and ready to face any team at the FIFA world Cup 2022 in Qatar.</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/sports/football/lionel-messi-blows-world-cup-bugle/cid/1893573'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi blows World Cup bugle</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSdKsKg9VtjWZzQR7OXUVQF-_7qpdiGVuL76UCu3Y1gkH3Cq9gWfEk1Hr7f3x7D7dGKwfG2TkJH" alt="Lionel Messi blows World Cup bugle" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>We are eager, we are going to fight, we are not afraid of anyone because we are ready to play against anyone: Argentina captain.</p></div>
            </div>
        </a><a href='https://www.planetfootball.com/quick-reads/lionel-messi-stats-2022-23-crazy-goals-assists-dribbles-psg-argentina-qatar-2022/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch out, Qatar: 12 crazy stats that show Messi is back to his very ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQua2L-xFBmTfhqNWBd6gJGJRmRIwP7vaVDBcXDPUWgw_N-Txih_eTLIpdk_EIqHdq7HWL6J68e" alt="Watch out, Qatar: 12 crazy stats that show Messi is back to his very ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Lionel Messi of Paris Saint Germain runs in the field during the Ligue 1 match between. Planet Football; 22nd October 2022. Lionel Messi is approaching the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/football/story/lionel-messi-form-argentina-fifa-world-cup-2022-2288377-2022-10-22'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Lionel Messi says Argentina are not afraid of anyone in FIFA World ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQcfwWeT2bSMpkakHIOOuUDbMvTXjEG4O5ahqV8eWA4Tv7rufALnLKuSHJM4AHq3dBJDgexcXuD" alt="Lionel Messi says Argentina are not afraid of anyone in FIFA World ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>FIFA World Cup 2022: Argentina are not afraid of facing anyone, Lionel Messi has proclaimed in his latest interview. The captain comes into the tournament&nbsp;...</p></div>
            </div>
        </a><a href='https://m.sakshi.com/telugu-news/sports/journalist-breaks-down-tears-after-meeting-lionel-messi-interview-1495804'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>మెస్సీతో ఇంటర్య్వూ.. జర్నలిస్ట్‌ కన్నీటి పర్యంతం</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQfiIvWFi3xUTM-sVH2_vArrYFjNez01VTJeTjIitpcUk8B9J137VJiJ8ySFqkyOI5s2RJq1sM6" alt="మెస్సీతో ఇంటర్య్వూ.. జర్నలిస్ట్‌ కన్నీటి పర్యంతం" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>అర్జెంటీనా ఫుట్‌బాల్‌ స్టార్‌ లియోనల్‌ మెస్సీ గురించి ప్రత్యేకంగా పరిచయం అవసరం లేదు.</p></div>
            </div>
        </a><a href='https://www.sportskeeda.com/football/news-we-afraid-anyone-lionel-messi-gives-confident-response-asked-argentina-s-chances-2022-fifa-world-cup-qatar'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&quot;We are not afraid of anyone&quot; - Lionel Messi gives confident ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcStzXD3iczsFMOUrX0kVa-8puYQCbOWwIw5dSyUKhFeYpYW-k_BlyYsvLbhhxQJaAgRAttGsEgT" alt="&quot;We are not afraid of anyone&quot; - Lionel Messi gives confident ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paris Saint-Germain (PSG) superstar Lionel Messi has insisted that Argentina are feeling confident as a team ahead of the 2022 FIFA World Cup in Qatar.</p></div>
            </div>
        </a><a href='https://newsable.asianetnews.com/gallery/sports/football-qatar-world-cup-2022-can-argentina-lift-coveted-trophy-lionel-messi-gives-ultimate-response-snt-rk3yxs'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Qatar World Cup 2022: Can Argentina lift coveted trophy? Lionel ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQNnBJgJPcL3DeozTJkHeYJK3bkWHbiYkZD8DUCY21lTOUhBDXs560F6H08-E4mhRWhIbadDq4P" alt="Qatar World Cup 2022: Can Argentina lift coveted trophy? Lionel ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The 2022 World Cup in Qatar will mark the last tournament for Paris Saint-Germain (PSG) star Lionel Messi. With just a month left for the showpiece event,&nbsp;...</p></div>
            </div>
        </a><a href='https://sportsbrief.com/football/paris-saint-germain/26324-leo-messi-issues-strong-warning-teams-2022-world-cup/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Fearless&#39; Argentina Captain Leo Messi Issues Strong Warning to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRe8yD1_qrL66o0cqZzDjOJk0t2nM67ScRYumPSkiQfLctP_qa77HQM3fhF6yOu3xydWQYrpPkf" alt="&#39;Fearless&#39; Argentina Captain Leo Messi Issues Strong Warning to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>SportsBrief.com News ☆ PSG superstar Lionel Messi has issued a bold statement ahead of the FIFA World Cup which kick starts in less than a month with&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}