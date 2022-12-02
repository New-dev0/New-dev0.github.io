import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Westlife</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Westlife"/>
        <meta name="description" content="Trending News about Westlife" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Westlife</h1>
            <Image width={800} height={500} src="https://i2-prod.mirror.co.uk/incoming/article28614819.ece/ALTERNATES/s1200/4_Westlife-Perform-At-Manchester-AO-Arena.jpg" alt="Westlife"/>
            <h3>Recent News</h3>
            <a href='https://www.irishmirror.ie/showbiz/celebrity-news/westlife-perform-cardboard-cut-out-28626155'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Westlife perform with cardboard cut-out of Mark Feehily as he battles ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTo5M1SgfpGcc2sO7LSkDjQSYhiSoXD15qs0H__QGwFjdMT-tZ1EkOQhWspCs40BtBAeeL8Y09i" alt="Westlife perform with cardboard cut-out of Mark Feehily as he battles ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Irish singer Mark Feehily, who has been part of Westlife for over two decades, has been missing from recent shows on the Westlife tour as he battles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.sundayworld.com/showbiz/irish-showbiz/westlife-replace-mark-feehily-with-cardboard-cut-out-as-he-recovers-from-pneumonia/844653666.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Westlife replace Mark Feehily with cardboard cut-out as he recovers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRdf83G4cGhWa7t7UIgkYd-AzZhjaBsS-gnElwgkJL0UAy_2YvO6wYy1gkt17OmJunbgeiwyrGQ" alt="Westlife replace Mark Feehily with cardboard cut-out as he recovers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Westlife took to the stage in Liverpool without ill Mark Feehily last night, instead replacing him with a cardboard cut-out.</p></div>
            </div>
        </a><a href='https://www.rsvplive.ie/news/celebs/westlife-find-hilarious-replacement-mark-28626214'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Westlife find a hilarious replacement for Mark Feehily as he recovers ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXcDzZoE6zJlY3p5V_LSjGnSiDeyhsDZ57MUMjx9D_jw9BVRt_ABOqxFNNVA3gB_Z2wWuJ4hjY" alt="Westlife find a hilarious replacement for Mark Feehily as he recovers ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The talented singer has missed the past few Westlife concerts after being diagnosed with pneumonia and taking the time to recover, but his band mates found&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manchestereveningnews.co.uk/whats-on/westlife-trios-heartwarming-mid-concert-25645909'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Westlife trio&#39;s heartwarming mid-concert tribute to seriously ill Mark ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqNHAOm2QO0x1ERFfOvWT4sE1RRn_JNjHfUnjmO6LDTzUzqZBvwiqpAyaJ95V468s3iGm3TBwM" alt="Westlife trio&#39;s heartwarming mid-concert tribute to seriously ill Mark ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Westlife made a heartwarming tribute to their bandmate Mark Feehily after pausing their concert. It comes after it was confirmed Mark was suffering from&nbsp;...</p></div>
            </div>
        </a><a href='https://www.birminghammail.co.uk/whats-on/music-nightlife-news/westlifes-mark-feehily-might-miss-25651740'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Why Westlife&#39;s Mark Feehily might miss their Birmingham concerts ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRqNHAOm2QO0x1ERFfOvWT4sE1RRn_JNjHfUnjmO6LDTzUzqZBvwiqpAyaJ95V468s3iGm3TBwM" alt="Why Westlife&#39;s Mark Feehily might miss their Birmingham concerts ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Shane Filan, Kian Egan and Nicky Byrne paused their performance in Sheffield to pay tribute to Mark Feehily.</p></div>
            </div>
        </a>
        </Template></>;
}