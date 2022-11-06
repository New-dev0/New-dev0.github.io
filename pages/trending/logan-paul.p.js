import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Logan Paul</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Logan Paul"/>
        <meta name="description" content="Trending News about Logan Paul" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Logan Paul</h1>
            <Image width={800} height={500} src="https://imagez.tmz.com/image/d4/16by9/2022/11/05/d4af3c3b8a1141e5938c6f3fbdede167_xl.jpg" alt="Logan Paul"/>
            <h3>Recent News</h3>
            <a href='https://www.tmz.com/2022/11/05/logan-paul-loses-crown-jewel-match-roman-reigns-jake-paul-wwe-debut/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul Loses To Roman Reigns At Crown Jewel, Jake Makes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQFOGk2HJtVOMmZ4wgAP7Gqg0TM2WM0yxD2VRvoKWt0-ZY_vxiv_NkNymTtVR6kwW7wQQ51MTBN" alt="Logan Paul Loses To Roman Reigns At Crown Jewel, Jake Makes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Logan Paul proved once again he belonged in the ring on Saturday ... showing off his athleticism against Roman Reigns, the undisputed WWE Universal Champion&nbsp;...</p></div>
            </div>
        </a><a href='https://bleacherreport.com/articles/10052163-roman-reigns-defeats-logan-paul-retains-wwe-universal-title-at-crown-jewel-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roman Reigns Defeats Logan Paul; Retains WWE Universal Title at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQzrztIUnNe8XA4zQiVJKYZiBMKqKkNsaodtm7WvWaA0iijl7Ox-QYP6dh31pj7aiIkkRMcKVi0" alt="Roman Reigns Defeats Logan Paul; Retains WWE Universal Title at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Reigns beat Logan Paul at Crown Jewel in Saudi Arabia on Saturday to retain the Undisputed WWE Universal Championship.</p></div>
            </div>
        </a><a href='https://www.si.com/wrestling/2022/11/05/logan-paul-wwe-crown-jewel-star-making-performance-roman-reigns'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Logan Paul Delivers Star-Making Performance vs. Roman Reigns at ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRSaEPxDlXDaCjzG3qcGEcLalRa4LHn8uu8HjuwnUMz06Bmq9Fp-3wdzoUJ8lrjLFSz3ItWvKxs" alt="Logan Paul Delivers Star-Making Performance vs. Roman Reigns at ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The celebrity influencer was excellent in a must-watch bout against the promotion&#39;s biggest star.</p></div>
            </div>
        </a><a href='https://www.timesnownews.com/sports/wwe/wwe-crown-jewel-results-logan-paul-delivers-the-lucky-punch-but-falls-short-against-roman-reigns-article-95327247'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WWE Crown Jewel results: Logan Paul delivers the lucky punch but ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRl8B3YfAXEiXaXOsvq5sKRaN2XYEqSmTNKZKak8iiW-fnx0xe18aZbX8qXit4M_Y40KbpHBNJn" alt="WWE Crown Jewel results: Logan Paul delivers the lucky punch but ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Reigns extended his reign as the Undisputed Universal Champion with a win over Logan Paul in the main event of Crown Jewel. The match ended with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.wwe.com/shows/wwe-crown-jewel/2022/roman-reigns-vs-logan-paul-results'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Roman Reigns survives Logan Paul&#39;s One Lucky Shot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQq94G9OMbuPfuduQ77xgp55UdzpmwZYqHJlPp1FyhWnTK81eFKWFd-skwccmNDKjLEzw2H0ea8" alt="Roman Reigns survives Logan Paul&#39;s One Lucky Shot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Paul had been training with Shawn Michaels ahead of the match and emulated the two-time WWE Hall of Famer by tuning up the band. The Sweet Chin Music attempt&nbsp;...</p></div>
            </div>
        </a><a href='https://www.forbes.com/sites/blakeoestriecher/2022/11/05/wwe-crown-jewel-2022-results-logan-paul-steals-the-show-despite-loss-to-roman-reigns/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WWE Crown Jewel 2022 Results: Logan Paul Steals The Show ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIEmmx2pJRmxSbxI3gXxtykMn01p4ofW2O-rrzrYVWMw-ds8A1ctw2Zv7wbK1fiKgph5guazZM" alt="WWE Crown Jewel 2022 Results: Logan Paul Steals The Show ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Roman Reigns has carried WWE as its Universal Champion for more than two years, and despite a hard-fought instant classic against social media celebrity&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}