import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Hamilton Weather</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Hamilton Weather"/>
        <meta name="description" content="Trending News about Hamilton Weather" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Hamilton Weather</h1>
            <Image width={800} height={500} src="https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/26/2c76065b4e56dad86837dbbeb7f40c6f1669443119828581_original.png?impolicy=abp_cdn&imwidth=1200&imheight=628" alt="Hamilton Weather"/>
            <h3>Recent News</h3>
            <a href='https://www.abplive.com/sports/cricket/india-vs-new-zealand-2nd-odi-hamilton-weather-update-rain-2267846'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: हैमिल्टन में दूसरा वनडे खेलने के लिए उतरेंगे भारत-न्यूजीलैंड ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTyDgnRvoq8TpipMSuZYVoS-dBZZMei-IUUy71Uu4VBBnX-IdgaCCDSZRdSI3HKeDSWnp7VJY1Q" alt="IND vs NZ: हैमिल्टन में दूसरा वनडे खेलने के लिए उतरेंगे भारत-न्यूजीलैंड ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hamilton Weather Update: भारत और न्यूजीलैंड के बीच पहला वनडे खेला जा चुका है और अब दोनों टीमें&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/new-zealand-vs-india-hamilton-weather-forecast-will-rain-wash-out-2nd-odi-match-2302122-2022-11-26'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Zealand vs India, Hamilton weather forecast: Will rain wash out ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSXwcQF1vjJv1-5GTxNn5KCTucGUlWPX6CUmyEuI9G83JgN9wyN-bfLKch7yB3xvNv-c_OlrPmh" alt="New Zealand vs India, Hamilton weather forecast: Will rain wash out ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand vs India, 2nd ODI: Shikhar Dhawan&#39;s team India will look to bounce back against the hosts after a thorough drubbing in the first game.</p></div>
            </div>
        </a><a href='https://www.news18.com/cricketnext/news/india-vs-new-zealand-2nd-odi-hamilton-weather-forecast-rain-threat-looms-large-as-india-look-to-bounce-back-6478309.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs New Zealand, 2nd ODI, Hamilton Weather Forecast: Rain ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTryHC0WCeoQm2rjH6vinQMd1e1fWT99isnLghwc5HQD_QRIWszd3SBg2syIdKA3FBlksioQgE0" alt="India vs New Zealand, 2nd ODI, Hamilton Weather Forecast: Rain ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Seddon Park, Weather Report, IND vs NZ: Check the weather forecast for Sunday&#39;s second ODI match between India and New Zealand.</p></div>
            </div>
        </a><a href='https://www.insidesport.in/hamilton-weather-report-rain-to-play-spoilsport-in-india-vs-newzealand-2nd-odi-as-dhawan-and-co-aim-to-keep-series-alive-check-hamilton-weather-pitch-report-and-follow-ind-vs-nz-live/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hamilton Weather Report: Good news, Covers off at Seddon Park ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-4fjwUrMIWNzvLqJAobbvhZ-w1_zQlJUGe17EAgQz7ZSE13JOu47CwCgtsh4QZdGRYYJ17LNt" alt="Hamilton Weather Report: Good news, Covers off at Seddon Park ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Hamilton Weather Report: Good news, Covers off at Seddon Park after a passing shower in INDIA vs NewZealand 2nd ODI as Dhawan and Co aim to keep series alive –&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/cricket/cricket-news/india-vs-new-zealand-2nd-odi-2022-hamilton-weather-forecast-seddon-park-stadium-pitch-report-news-in-hindi'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ: हैमिल्टन में 13 साल से नहीं जीता भारत, बारिश डाल सकती है ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTi-ZBSgHmI93dCvjjkjljJmNov1QnUI0C9rzJdQC4pnC_BZ_e9h6e2l4WQDrHNuHY756MZglk-" alt="IND vs NZ: हैमिल्टन में 13 साल से नहीं जीता भारत, बारिश डाल सकती है ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत और न्यूजीलैंड के बीच दूसरा वनडे रविवार को हैमिल्टन के सेडोन पार्क में खेला जाएगा&nbsp;...</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/cricket/ind-vs-nz-weather-forecast-will-rain-affect-2nd-odii-between-india-and-new-zealand-at-seddon-park-in-hamilton-article-95785674'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ weather forecast: Will rain affect 2nd ODI between India ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSV2a7LXYzhZl4WF10uHLyqM1nYt6N-PvkwM0GUUEu7dFWn1J-1iRost6G3KiRspQKGQ3Sh2pVH" alt="IND vs NZ weather forecast: Will rain affect 2nd ODI between India ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the second ODI, the rain is expected to play a spoilsport. As per accuweather, there is 97 percent possibility of precipitation and 19 percent&nbsp;...</p></div>
            </div>
        </a><a href='https://crickettimes.com/2022/11/new-zealand-vs-india-2nd-odi-2022-team-news-and-hamilton-weather-report/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>New Zealand vs India, 2nd ODI 2022: Team News and Hamilton ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRT8mO3a1EzL_eJS6D6vJiMSnXNtvH_pQqSsGFRhJQe0SaonRhQcA-SWJl3c3M-84LAOcdbk34r" alt="New Zealand vs India, 2nd ODI 2022: Team News and Hamilton ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>New Zealand and India are scheduled to lock horns with each other at the Seddon Park in Hamilton on Sunday, November 27.</p></div>
            </div>
        </a><a href='https://www.latestly.com/sports/cricket/hamilton-weather-updates-live-ind-vs-nz-2nd-odi-2022-hourly-rain-forecast-and-weather-report-for-india-vs-new-zealand-cricket-match-at-hamilton-4511134.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hamilton Weather Updates Live, IND vs NZ 2nd ODI 2022: Hourly ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTNsY85jWk8ctYl3lfSEgKqCmmQJFDH44xSJ8NUr5-B8d7qiuHnajVIWfeB-acmVzMBQzcZxtDZ" alt="Hamilton Weather Updates Live, IND vs NZ 2nd ODI 2022: Hourly ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Check Hamilton weather updates live, hourly rain forecast and present conditions ahead of India vs New Zealand 2nd ODI at Seddon Park.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/sports/cricket-india-vs-new-zealand-weather-updates-rain-forecast-in-seddon-park-hamilton-odi-4961689.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ Hamilton ODI Weather: भारत बनाम न्यूजीलैंड दूसरे वनडे पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSruMAm1ZdFvH6tqV5JoejuTuK4JyBbZL1js2UpAjMzyQ0zrubGPWGjyJlKSa8LvYwgyN3D1KKv" alt="IND vs NZ Hamilton ODI Weather: भारत बनाम न्यूजीलैंड दूसरे वनडे पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs NZ 2nd ODI Hamilton Pitch Weather Report: भारत और न्यूजीलैंड की क्रिकेट टीमें आज यानी रविवार (27&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jansatta.com/khel/india-vs-new-zealand-2nd-odi-2022-weather-forecast-and-pitch-report-of-seddon-park-stadium-hamilton/2521259/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs NZ 2nd ODI Weather Report: टीम इंडिया के अरमानों पर फिर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTDcUxuiRHq4xSNumakTHa4C-Es_RlhdgOFT28w6Fc3n95Rf_vv-ggfUzmz0x_506DcYQJLzRH" alt="IND vs NZ 2nd ODI Weather Report: टीम इंडिया के अरमानों पर फिर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs New Zealand 2nd ODI Weather Report: हैमिल्टन (Hamilton) में रविवार को 90 प्रतिशत बारिश की संभवाना है।</p></div>
            </div>
        </a>
        </Template></>;
}