import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jacqueline Fernandez</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jacqueline Fernandez"/>
        <meta name="description" content="Trending News about Jacqueline Fernandez" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jacqueline Fernandez</h1>
            <Image width={800} height={500} src="" alt="Jacqueline Fernandez"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cities/delhi-news/delhi-court-grants-jacqueline-fernandez-bail-in-200-cr-extortion-case-101664215117268.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi court grants Jacqueline Fernandez bail in ₹200-cr extortion ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRFDbhaQOgnU3afGlHTw9OAUMXAmH6lp3KbXrakDlNMvbOuxIl2I6cLS757HoHPQ-ktG9tL3Vp4" alt="Delhi court grants Jacqueline Fernandez bail in ₹200-cr extortion ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Granting temporary relief to Fernandez, special judge Shailendra Malik allowed her interim bail plea at a personal and surety bond ₹50000.</p></div>
            </div>
        </a><a href='https://youthistaan.com/jacqueline-fernandez-gets-interim-bail/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacqueline Fernandez gets interim bail</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSWfGr_S0HfkKdTEotv-9OWmnMZY0LyfAyLeUr7avNVczsUyFm6-sJdGyj60f8VwDnxmTkMAFwL" alt="Jacqueline Fernandez gets interim bail" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Delhi, A Delhi court has granted interim bail to actress Jacqueline Fernandez in a Rs 200 crore money laundering case related to alleged thug Sukesh&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businesstoday.in/latest/trends/story/watch-jacqueline-fernandez-walks-out-of-court-after-getting-bail-in-money-laundering-case-348192-2022-09-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Watch: Jacqueline Fernandez walks out of court after getting bail in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTUglLt5rVqkaPk_B9Uf2c2kl4904x7i1NliBu0u2BA_w8-GgfZmaGqn1cYjawfdL5tXW9AfmZ4" alt="Watch: Jacqueline Fernandez walks out of court after getting bail in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Bollywood actress Jacqueline Fernandez has been granted interim bail in the Sukesh Chandrashekhar&#39;s Rs 200 crore money laundering case.</p></div>
            </div>
        </a><a href='https://www.tribuneindia.com/news/nation/jacqueline-gets-interim-bail-in-200-cr-pmla-case-435629'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jacqueline Fernandez gets interim bail in Rs 200-cr PMLA case</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSrZ2Gk18gFaglAEYVcDoOJnwfPs7SfW6s66IUkZlErKNqfjMJ6DDfNg_DhAH8byQbMeb27jb5s" alt="Jacqueline Fernandez gets interim bail in Rs 200-cr PMLA case" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A special court today granted interim bail to Bollywood actor Jacqueline Fernandez in a Rs 200 crore money laundering case against alleged conman Sukesh&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}