import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Margot Robbie</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Margot Robbie"/>
        <meta name="description" content="Trending News about Margot Robbie" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Margot Robbie</h1>
            <Image width={800} height={500} src="https://c.nau.ch/i/WbvqO/1024/margot-robbie.jpg" alt="Margot Robbie"/>
            <h3>Recent News</h3>
            <a href='https://www.nau.ch/people/welt/wolf-of-wall-street-margot-robbie-trank-sich-mut-fur-rolle-an-66351761'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>«Wolf of Wall Street»: Margot Robbie trank sich Mut für Rolle an</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQR63l5l5yXD7iHfEgLXMfnl_nwrpBizYfj-AbERgoB0sd2sSmGiQKNsTEyiayy0NZiCgJpAoR2" alt="«Wolf of Wall Street»: Margot Robbie trank sich Mut für Rolle an" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Vor ihrer Nacktszene in «The Wolf of Wall Street» sah sich Margot Robbie anscheinend gezwungen, mit Tequila-Shots aufzulockern.</p></div>
            </div>
        </a><a href='https://www.rtl.de/cms/margot-robbie-die-wahrheit-ueber-die-beruehmte-nacktszene-5018301.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie: Die Wahrheit über die berühmte Nacktszene</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Margot Robbie: Die Wahrheit über die berühmte Nacktszene" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ganz ehrlich und ohne ein Blatt vor den Mund zu nehmen, spricht Margot Robbie nun über ihre Nacktszene im Film &quot;The Wolf of Wall Street&quot;.</p></div>
            </div>
        </a><a href='https://www.lessentiel.lu/de/story/margot-robbie-trank-sich-vor-nacktszene-in-wolf-of-wall-street-mut-an-766790531644'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tequila-Shots: Margot Robbie trank sich vor Nacktszene in «Wolf of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQnTTJtnQVMCPWzygEC1R2lf6a1OS8mWhF9KiVrrmdxdQu3ApX7zQXBjYuPZm-I-i2euz3AQtIR" alt="Tequila-Shots: Margot Robbie trank sich vor Nacktszene in «Wolf of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Für Schauspielerin Margot Robbie war es nicht einfach, vor der Kamera blankzuziehen, wie sie nun verrät. Um die intime Szene mit Leonardo DiCaprio zu&nbsp;...</p></div>
            </div>
        </a><a href='https://outnow.ch/News/2022/11/28/Neuer-Trailer-zum-wilden-Babylon-mit-Brad-Pitt-und-Margot-Robbie'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Neuer Trailer zum wilden «Babylon» mit Brad Pitt und Margot Robbie</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTOwAfq4D6IWDhB7UKxEv0IfQnS1MQT_PjN33CTYrZbn9bDjcfF4A3HDpa3Ci3EyG93X79Yw0lv" alt="Neuer Trailer zum wilden «Babylon» mit Brad Pitt und Margot Robbie" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Damien Chazelle («La La Land») nennt sein neustes Werk einen Hassbrief an Hollywood, aber einen Liebesbrief an Filme. Einen neuen Vorgeschmack auf das&nbsp;...</p></div>
            </div>
        </a><a href='https://www.promiflash.de/news/2022/11/27/margot-robbie-trank-vor-nacktszene-in-wolf-of-wall-street.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Margot Robbie trank vor Nacktszene in &quot;Wolf of Wall Street&quot;</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTq0GJQqmnr1SvWOt-WZ70NE4TJ_4ofvIb8qZCW4mXsSGcJ3LF1ZaHw1hS0QNbrTxYq4hkHObhk" alt="Margot Robbie trank vor Nacktszene in &quot;Wolf of Wall Street&quot;" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Musste Margot Robbie (32) sich etwa Mut antrinken? Die Schauspielerin stellte im biografischen Comedy-Crime-Film &quot;The Wolf of Wall Street&quot; die Frau des&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}