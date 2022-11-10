import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Breathe Into The Shadows season 2</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Breathe Into The Shadows season 2"/>
        <meta name="description" content="Trending News about Breathe Into The Shadows season 2" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Breathe Into The Shadows season 2</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2022/11/breathe-2-review.jpg" alt="Breathe Into The Shadows season 2"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/entertainment/web-series/breathe-into-the-shadows-season-2-review-abhishek-bachchan-amit-sadh-8258270/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breathe Into The Shadows Season 2 review: Abhishek Bachchan ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTsIii1YReLlYyyvt0CoR8LTfxl0pxdJsmBf-zs3z8YfHHIGyHLIVCNsWySb7XIuYQ7befUNs3y" alt="Breathe Into The Shadows Season 2 review: Abhishek Bachchan ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breathe Into The Shadows Season 2 review: The Abhishek Bachchan and Amit Sadh starrer fails to raise any feeling of dread, or fear and is saddled with all&nbsp;...</p></div>
            </div>
        </a><a href='https://telanganatoday.com/netizens-shower-love-on-season-2-of-breathe-into-the-shadows'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Netizens shower love on season 2 of &#39;Breathe: Into the Shadows&#39;</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Netizens shower love on season 2 of &#39;Breathe: Into the Shadows&#39;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hyderabad: The most awaited season 2 of &#39;Breathe&#39; starring Abhishek Bachchan has been released and fans are going gaga over how engaging this sequel is.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/technology-science/breathe-into-the-shadows-season-2-is-live-on-amazon-prime-video-plans-that-will-allow-you-to-watch-the-series-article-95398756'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breathe: Into the Shadows Season 2 is live on Amazon Prime Video ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcS9ysEXPpFd3rNWmwFjedu6oioQhw4ZxLiXsbzM_W3cHwbmJadJa6HMFy312m3cT4iFmciaLDX-" alt="Breathe: Into the Shadows Season 2 is live on Amazon Prime Video ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Breathe: Into the Shadows is a crime drama thriller series created and directed by Mayank Sharma and produced by Abundantia Entertainment. The series stars&nbsp;...</p></div>
            </div>
        </a><a href='https://www.123telugu.com/reviews/breathe-into-the-shadows-s2-hindi-movie-review.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breathe Into The Shadows S2 Hindi Movie Review</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7ldiNXroczmK9VdirRkaNeDcT6bIdZtKH5qapFpSoMvfhd0Z2bibkzSFDP5Xjkkl1XnPy9cYn" alt="Breathe Into The Shadows S2 Hindi Movie Review" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Amazon Prime Video has returned with season 2 of Breathe Into The Shadows, with Abhishek Bachchan in the lead role. Season 1 was a big hit, and Abhishek&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tellychakkar.com/digital/breathe-the-shadows-season-2-twitter-review-abhishek-bachchan-starrer-gets-mixed-response'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Breathe Into The Shadows season 2 Twitter Review: Abhishek ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR8MnFhLdZuuts9cVHA7dvmcZAfQHj--RyVPXaVMz6uZQL8YOIihAjrYgkhmSFk2Vzw0bbNaYKI" alt="Breathe Into The Shadows season 2 Twitter Review: Abhishek ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Abhishek Bachchan starrer Breathe Into The Shadows season 2 has started streaming on Amazon Prime Video. The netizens have already started watching it and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}