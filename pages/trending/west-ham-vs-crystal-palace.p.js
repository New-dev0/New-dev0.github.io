import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>West Ham vs Crystal Palace</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,West Ham vs Crystal Palace"/>
        <meta name="description" content="Trending News about West Ham vs Crystal Palace" /></Head><Template>
            <h1 style={{fontSize: "30"}}>West Ham vs Crystal Palace</h1>
            <Image width={800} height={500} src="" alt="West Ham vs Crystal Palace"/>
            <h3>Recent News</h3>
            <a href='https://www.skysports.com/football/west-ham-vs-c-palace/464783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham 1-2 Crystal Palace: Michael Olise nets injury-time winner ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQlFpLyE5djDuT2LPnteQXKpAf5JegG3Je3OHNv_Abro1gHXsO-3vr3QF5H_kmQb3yNkBcE_ZVu" alt="West Ham 1-2 Crystal Palace: Michael Olise nets injury-time winner ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Report and free match highlights as Michael Olise nets injury-time winner to secure Palaces first away win of season; Said Benrahma had fired West Ham ahead&nbsp;...</p></div>
            </div>
        </a><a href='https://www.standard.co.uk/sport/football/west-ham-vs-crystal-palace-prediction-kick-off-time-tv-live-stream-team-news-2022-latest-h2h-results-odds-premier-league-preview-today-b1037640.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham vs Crystal Palace: Prediction, kick-off time, TV, live stream ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSGVtzyzG-QDm2e2ZVjHFMN0lGsAFEAbUSx6RjRNTM2DcRkB9fzkzBBg2ZSH8bQ0xChWdpHr70k" alt="West Ham vs Crystal Palace: Prediction, kick-off time, TV, live stream ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>London Stadium hosts a capital clash today as West Ham meet Crystal Palace in the Premier League.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/sport/football/63443728'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Late Olise goal sees Crystal Palace beat West Ham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRJncXTbnt6sO6Q006I5Mani2DxXkBPOVUVNujkR0jma_KbPcSZEhHMpl6Z1og5FYrko3yFO0is" alt="Late Olise goal sees Crystal Palace beat West Ham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Michael Olise&#39;s dramatic injury-time strike gives Crystal Palace a first Premier League away win of the season as they beat West Ham.</p></div>
            </div>
        </a><a href='https://soccer.nbcsports.com/2022/11/06/west-ham-vs-crystal-palace-video-highlights-recap-reaction/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Surging Crystal Palace grabs late, late win at West Ham</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQV6hRjSo7hVod5YYigayeq8JZji1yqR4ia4aSg5ZSTR3Lj2PyJQ0pmRUNtbyQX3W3FXvm-GC2g" alt="Surging Crystal Palace grabs late, late win at West Ham" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>West Ham have 14 points and have lost the of the last four. WATCH FULL MATCH REPLAY. Latest Premier League news.</p></div>
            </div>
        </a><a href='https://www.independent.co.uk/sport/football/michail-antonio-west-ham-crystal-palace-paul-tierney-premier-league-b2218933.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Michael Olise hits late winner as Crystal Palace come from behind to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRBwxg_WFKhuSPNGgNio44E_s7xOaBRNt-bhAnyEUvkJk-Uf40uFYg-X-SRlJCLLdIg6mb2pWfp" alt="Michael Olise hits late winner as Crystal Palace come from behind to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>West Ham 1-2 Crystal Palace: Olise seals first away win in the Premier League this season for the Eagles.</p></div>
            </div>
        </a><a href='https://sports.yahoo.com/west-ham-vs-crystal-palace-023009313.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>West Ham vs Crystal Palace, live! Score, updates, how to watch</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSdGDtiv5zt5jwAPD_vG0T2FiUY-UyXJZ1TTywQ2cIXNKPEHB454cpE-b7Q7ApIF9oM7B30sUtj" alt="West Ham vs Crystal Palace, live! Score, updates, how to watch" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Though they have won just one of their last four PL games, the Hammers were only beaten by Liverpool and then Manchester United, both by the narrowest of 1-0&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}