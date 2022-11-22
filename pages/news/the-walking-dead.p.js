import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>The Walking Dead</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,The Walking Dead"/>
        <meta name="description" content="Trending News about The Walking Dead" /></Head><Template>
            <h1 style={{fontSize: "30"}}>The Walking Dead</h1>
            <Image width={800} height={500} src="https://media.cnn.com/api/v1/images/stellar/prod/221121074719-redus-in-the-walking-dead-season-11.jpg?c=16x9&q=w_800,c_fill" alt="The Walking Dead"/>
            <h3>Recent News</h3>
            <a href='https://www.cnn.com/2022/11/21/entertainment/the-walking-dead-series-finale/index.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Walking Dead&#39; finally comes to an end, after biting off more than ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS23H25FtL7Fu0aQWXHA55SqRf-1uqJhk3E5ptKzRzqlG6yIVHNik6W2X4iSP4JUvPoXnpu786L" alt="&#39;The Walking Dead&#39; finally comes to an end, after biting off more than ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Norman Reedus and Melissa McBride in the series finale of &quot;The Walking Dead.&quot; Jace Downs/AMC. Editor&#39;s Note: The following contains spoilers about “The Walking&nbsp;...</p></div>
            </div>
        </a><a href='https://www.denofgeek.com/tv/the-walking-dead-series-finales-biggest-easter-egg-wasnt-what-we-expected/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Walking Dead Series Finale&#39;s Biggest Easter Egg Wasn&#39;t What ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQxKR99JVEaRrDfHRYDvPGGzNAaRdUitabvsr6bshu9uBHXXv4R6v0udMUyBJoqXReP5GYSpLu9" alt="The Walking Dead Series Finale&#39;s Biggest Easter Egg Wasn&#39;t What ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The most unexpected surprise in The Walking Dead finale didn&#39;t even occur in the episode itself.</p></div>
            </div>
        </a><a href='https://www.digitalspy.com/tv/ustv/a42020828/walking-dead-ending-explained/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Here&#39;s how The Walking Dead finally ended</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQjsX2Ciu96-2_dSC6ZuRBYJftjoijQBKv77MoYBxNKeddOed2QLRdKraiaHyVIrj8pxSd2LLZa" alt="Here&#39;s how The Walking Dead finally ended" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Walking Dead season 11 episode 24 marks the end of TV&#39;s biggest horror show. But who died? Who survived? And most crucially of all, who returned?</p></div>
            </div>
        </a><a href='https://www.gamespot.com/reviews/the-walking-dead-series-finale-review-a-bittersweet-ending-marks-a-new-beginning/1900-6418001/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Walking Dead Series Finale Review - A Bittersweet Ending ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRk1SEZt4KtgxFqq9q0ccmstXm84ntEX-eLe-EAzUA3FKKHJNW8anlhImsvSbWT2XLY1kNvid2K" alt="The Walking Dead Series Finale Review - A Bittersweet Ending ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Capping off 11 seasons and 177 episodes of a show that&#39;s had its ups and downs is no small feat, but The Walking Dead managed to pull it off.</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/paultassi/2022/11/21/the-walking-dead-series-finale-was-bad-because-it-wasnt-a-series-finale/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;The Walking Dead&#39; Series Finale Was Bad Because It Wasn&#39;t A ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRyTubv4D3oZ5Ey6y2qxsFBmr8XDUsdpA98GLVWHgfIDIrmP6XGEq1cTAQjS9eSQKv5L_-hqylz" alt="&#39;The Walking Dead&#39; Series Finale Was Bad Because It Wasn&#39;t A ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After 11 seasons and 12 years, The Walking Dead series finale ended with a montage that included the phrase “the end is just the beginning.”</p></div>
            </div>
        </a><a href='https://www.joe.ie/movies-tv/the-walking-dead-finale-reviews-759853'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>The Walking Dead has officially ended after 12 years and 177 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRWfOFN4ZWYN3tCgSdQGdgd4q0pIbYZeZiCF70ocwY62ISCBppZxL2stoqmFCmRsREWUnUijWfg" alt="The Walking Dead has officially ended after 12 years and 177 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The reviews are in for the long-running horror series The Walking Dead&#39;s finale &#39;&#39;Rest in Peace.</p></div>
            </div>
        </a>
        </Template></>;
}