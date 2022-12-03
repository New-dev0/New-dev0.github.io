import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Jerry Jones photo</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Jerry Jones photo"/>
        <meta name="description" content="Trending News about Jerry Jones photo" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Jerry Jones photo</h1>
            <Image width={800} height={500} src="https://ca-times.brightspotcdn.com/dims4/default/8616524/2147483647/strip/true/crop/4633x2432+324+341/resize/1200x630!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F09%2F99%2F0e8274494128823fefe8a7f69a97%2Fcowboys-prescott-contract-football-20534.jpg" alt="Jerry Jones photo"/>
            <h3>Recent News</h3>
            <a href='https://www.latimes.com/sports/story/2022-12-02/jerry-jones-desegregation-1957-cowboys-dak-prescott-lebron-james-kyrie-irving'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dak Prescott, LeBron James comment on 1957 Jerry Jones photo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQrwE0hYbo_TeqgfVOzr1LcSXcjg1Tt91ssndipl_2Q3m6bf9NAZFOL7W_ykq-mf1O-TAVhvFiX" alt="Dak Prescott, LeBron James comment on 1957 Jerry Jones photo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Dallas Cowboys quarterback Dak Prescott was questioned about a controversial 1957 photo of team owner Jerry Jones after Lakers star LeBron James commented&nbsp;...</p></div>
            </div>
        </a><a href='https://www.tmz.com/2022/12/02/jerry-jones-praises-lebron-james-after-1957-photo-criticism/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jerry Jones Praises LeBron James After 1957 Photo Criticism</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ-nPrEtMZZkaq_qJPjqEeQhL11qevLJ42bARzRTyEccHaXNBunG5I1ObD331vqle8K0nRHFf-S" alt="Jerry Jones Praises LeBron James After 1957 Photo Criticism" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jerry Jones showered LeBron James with praise ... after the Lakers star&#39;s criticism earlier this week.</p></div>
            </div>
        </a><a href='https://www.cbssports.com/nfl/news/dallas-cowboys-owner-jerry-jones-responds-to-lebron-james-comments-about-resurfaced-little-rock-photo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dallas Cowboys owner Jerry Jones responds to LeBron James ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQMPBdbMTJ7INYVKCsQ5wu9nYVbhWPm3jY32W2g9FLuvDSUYFKOLipDXWGdNM7PoFFl2rVptsnP" alt="Dallas Cowboys owner Jerry Jones responds to LeBron James ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jones says he doesn&#39;t know of anybody that he respects more than the four-time NBA MVP.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/le-bron-james-and-others-focus-on-1957-jerry-jones-photo-obscures-the-point-its-about-what-cowboys-owner-has-done-since-192012745.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James and others&#39; focus on 1957 Jerry Jones photo ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQLfB9Wn52pHT8lcBbYexJthKevhPjPr8pOo4hiox00P8xIvMg1z7UvuqSwY3CJVxz8sbZTvD26" alt="LeBron James and others&#39; focus on 1957 Jerry Jones photo ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jerry Jones has done nothing to fix the NFL&#39;s lack of diversity among coaches and executives. That matters much more than an old photo.</p></div>
            </div>
        </a><a href='https://profootballtalk.nbcsports.com/2022/12/01/dak-prescott-addresses-the-jerry-jones-photo/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Dak Prescott addresses the Jerry Jones photo</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRnAxCNa9GG_H_17nN9H7AZAf_IWyalQjr4-jAKS2zKuPEG8nHSAL8Qr7BFtOEt-0mVRFlEgwcY" alt="Dak Prescott addresses the Jerry Jones photo" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A day after NBA star LeBron James expressed disappointment that reporters hadn&#39;t asked him about the Jerry Jones segregation-era photo, Cowboys quarterback&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnn.com/2022/12/01/sport/lebron-james-jerry-jones-photo-intl-spt/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LeBron James: A photo of Dallas Cowboys owner Jerry Jones ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRTY5ty0g8KhI-ygFLVmVhgTmcFJUclmWwZrUFH2vg74cqwqB6bQ5kzdJUc3-8K-hTvCDqtiRnT" alt="LeBron James: A photo of Dallas Cowboys owner Jerry Jones ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The issue of race and its historical legacy in the US was at the forefront of NBA star LeBron James&#39; mind on Wednesday as he asked reporters why he hadn&#39;t&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}