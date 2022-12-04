import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Juice WRLD</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Juice WRLD"/>
        <meta name="description" content="Trending News about Juice WRLD" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Juice WRLD</h1>
            <Image width={800} height={500} src="https://assets3.cbsnewsstatic.com/hub/i/r/2022/12/03/2ddd74b1-3a42-485e-b364-afde0668b183/thumbnail/1200x630/9d115a2fb2fe036173e3caa5cde465e6/1e7de920e7a36ab5e405e1d02e36020a.jpg" alt="Juice WRLD"/>
            <h3>Recent News</h3>
            <a href='https://www.cbsnews.com/chicago/news/homewood-brewery-juice-wrld/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homewood brewery honors legacy of rapper Juice WRLD</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTtv_zycVjzPaX4vQZrzA4VQrDHaAIEAz6x_-k60JToibXwxqYwWnc27Mv1dXl5jR_-blnTacab" alt="Homewood brewery honors legacy of rapper Juice WRLD" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>CHICAGO (CBS) -- There&#39;s a new brewery coming to the south suburbs that aims to honor the legacy of Jarad Higgins, known as Juice WRLD.</p></div>
            </div>
        </a><a href='https://www.udiscovermusic.com/news/homewood-brewing-juice-wrld/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homewood Brewing Company Breaks Ground In Honor Of Jarad ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTkLEe8PlLl6s-3bHConVih8tzRLNgUzlMn0FLkz8cwnBFluU7PlWU_0HvvUsxxfG43gW3G6IlO" alt="Homewood Brewing Company Breaks Ground In Honor Of Jarad ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Homewood Brewing Company, in collaboration with Jarad Higgins&#39; mother Carmela Wallace, have broken ground in honor of Juice WRLD.</p></div>
            </div>
        </a><a href='https://abc7chicago.com/juice-wrld-birthday-b-day-homewood-il-restaurant/12519175/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Juice WRLD&#39;s mom speaks about new Homewood brewpub being ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQOPzRCgsLhAtGqyTv2V0iRby4swHLTyN81TSr-1aO0Ptmdhivh-L8dJcumoj8XUxD7IyIFzdiZ" alt="Juice WRLD&#39;s mom speaks about new Homewood brewpub being ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Juice WRLD&#39;s birthday, his mother kicked off construction of a restaurant in Homewood in his memory. He died 6 days after turning 21 in 2019.</p></div>
            </div>
        </a><a href='https://nnn.ng/new-brewery-honors-juice-wrld/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New brewery honors Juice Wrld</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCG1peOiK8DPeDkXvOGFb8tH8rsQcJXhHI3O4kaqJ6SAVrzcAqlcM43ggTqaK8SSov1eLW6ee9" alt="New brewery honors Juice Wrld" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New brewery honors Juice Wrld Homewood Brewing Company breaks ground near Chicago To honor the life of Jarad &quot;Juice Wrld&quot; Higgins on his birthday,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fox32chicago.com/news/homewood-brewpub-will-honor-juice-wrld-and-the-community-that-nurtured-him'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homewood brewpub will honor Juice WRLD and the community that ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBZRMJBEq0JSyP7S6Fyyb0pdQWx3QynYorv31pPtRHdpNJKQAR92CLpEFT9IkvdRTpQns-09Kq" alt="Homewood brewpub will honor Juice WRLD and the community that ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carmela Wallace described her time in south suburban Homewood as special for her and her son Jarad Anthony Higgins, better known to millions as&nbsp;...</p></div>
            </div>
        </a><a href='https://www.chicagotribune.com/suburbs/daily-southtown/ct-sta-homewood-brewery-rapper-st-1204-20221202-ma3yhnc74jds5dej5sjcp5pj5u-story.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Homewood brewpub &#39;a work of love,&#39; mother of late rapper Juice ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQl95S55drpGhndM8oeGjJeatOY5HGzJ3PUYWEdG6QYNbO1eZ5tDhDLQArDFiDf44Jtgy-yTfCu" alt="Homewood brewpub &#39;a work of love,&#39; mother of late rapper Juice ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Carmela Wallace, mother of the late Jarad Higgins, known as Juice Wrld, envisions her Homewood brewpub featuring art work and musical performances.</p></div>
            </div>
        </a>
        </Template></>;
}