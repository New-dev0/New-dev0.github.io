import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Sports</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Sports"/>
        <meta name="description" content="Trending News about Sports" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Sports</h1>
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/22112022/22_11_2022-sport_science_pic_23220649.jpg" alt="Sports"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/news/career-ncr-sports-science-new-career-options-are-opening-in-sports-jagran-special-23220649.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports Science :खेलों में खुल रहे नये करियर विकल्प</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTcShdtDfYbh9c3fKV0oJQuYLv-I6x0_TIGj4qKUCiiDuuO6muQplrJdi9Q9Cmda-Ii3x45_4r7" alt="Sports Science :खेलों में खुल रहे नये करियर विकल्प" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>स्पोर्ट्स इंडस्ट्री में विगत कुछ वर्षों से ऐसे पेशेवर एवं कुशल लोगों (स्पोर्ट्स&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/cities/kozhikode/kozhikode-revenue-district-sports-meet-opens/article66170636.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Kozhikode revenue district sports meet opens</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTz299AbzWMrEH4CqJK8mP9ufOqXh9tsuzH89k_JrQkXHC0LfeSqBhRpqFOcn8bsxbV6ehITcl0" alt="Kozhikode revenue district sports meet opens" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mayor Beena Philip inaugurated the Kozhikode revenue district sports meet that began at Olympian Rahman Stadium of the Kozhikode Medical College on Tuesday.</p></div>
            </div>
        </a><a href='https://www.iucn.org/events/iucn-event/sports-nature-new-pathway-sports-achieve-nature-positive-action'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports for Nature: A new pathway for sports to achieve nature ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcShBOywD0LMJSCFHGvOPHv9eC5EITEyUnT7qlulURONqV6YE_JyZzegcL4VjYnTn9Q-8tx7NdK3" alt="Sports for Nature: A new pathway for sports to achieve nature ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Secretariat of the Convention on Biological Diversity, along with IUCN and the United Nations Environment Programme, and support from the International&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/lucknow-news/hausla-sports-meet-concludes-with-gymnastics-dance-performance-101669143818425.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Hausla&#39; sports meet concludes with gymnastics, dance performance</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQTGBw7J9G_2GPmV05aEQRHxw3uWu6oRG3zXpfN7VWoRW1-3l8OIWU6tU7VrMnK9nfc8Z4mRMsX" alt="&#39;Hausla&#39; sports meet concludes with gymnastics, dance performance" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Prizes were awarded for powerlifting and bocce on the final day. Sudha Bajpai, chairperson of the event, announced that the &#39;Hausla&#39; games will be back next&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/brianroberts/2022/11/22/50-cent-taking-over-tv-sports-and-now-teaching-kids-how-to-hustle/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>50 Cent: Taking Over TV, Sports, And Now, Teaching Kids How To ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQCWtkhrTt9ruahqSCmXHwwYzWkHmGsfBTSgfy49dd3VTOoN5NCWcb41MQJ6_FJwMc-XVgN13fn" alt="50 Cent: Taking Over TV, Sports, And Now, Teaching Kids How To ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Curtis “50 Cent” Jackson has been partnering with major sports franchises non-stop via his Sire Spirits company&#39;s Branson Cognac, Le Chemin du Roi Champagne&nbsp;...</p></div>
            </div>
        </a><a href='https://telanganatoday.com/sports-cultural-events-play-vital-role-in-shaping-personality-of-students-warangal-cp'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sports, cultural events play vital role in shaping personality of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVkKKEaXk8LNLwA5RtCFW1a0kQsnVjOv_ezlw_pFUBY7fRxDiOR9FJ_HOM7ZMsoQI5FR9EUPjD" alt="Sports, cultural events play vital role in shaping personality of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Skill Stork International School, Bheemaram, conducted the sports festival called “Udaan- 22” on its sprawling campus here on Tuesday.</p></div>
            </div>
        </a>
        </Template></>;
}