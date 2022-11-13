import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>F1</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,F1"/>
        <meta name="description" content="Trending News about F1" /></Head><Template>
            <h1 style={{fontSize: "30"}}>F1</h1>
            <Image width={800} height={500} src="https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/11/12/16682711025077.jpg" alt="F1"/>
            <h3>Recent News</h3>
            <a href='https://www.marca.com/en/f1-directo/2022/11/12/05_0501_20221112_21_20.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Sprint Qualifying at Brazilian Grand Prix: Russell takes the victory ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTaXYH3nLUhHp1_UHZ0Z8o-JqiP5ko0_F7FYgihxSTPJXkcNHUQYvE34rRTHutj2lRn52sJJj-x" alt="F1 Sprint Qualifying at Brazilian Grand Prix: Russell takes the victory ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russell takes the chequered flag! It was all fairly easy for Russell in the end, as he crosses the line four seconds ahead of Sainz. Hamilton, Verstap.</p></div>
            </div>
        </a><a href='https://www.formula1.com/en/latest/article.live-coverage-f1-sprint-in-brazil-2022.4YDTDgUqS2cVaSc3FsIQ70.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE COVERAGE - F1 Sprint in Brazil | Formula 1®</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRU8xT2IxFsEsZGqjFGPMmy86YWU9-WxOU54wH3RZOpMjfoNEZHWbqWFBDpN49xTN_YvlJuMcJx" alt="LIVE COVERAGE - F1 Sprint in Brazil | Formula 1®" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Qualifying yesterday certainly did, with a wet-dry-wet session that culminated in a disbelieving Kevin Magnussen stood on the nose of his car in the Haas&nbsp;...</p></div>
            </div>
        </a><a href='https://racingnews365.com/live-f1-2022-brazilian-grand-prix-sprint-2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>LIVE: F1 2022 Brazilian Grand Prix Sprint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQTEYbpA1o1xj5C4nGpgiz2AwGGWOljEttxwEspDKNLIlJWeNk_ta2KsSNXn8otwnfgIFl3N2N0" alt="LIVE: F1 2022 Brazilian Grand Prix Sprint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Follow the F1 Sprint Race for the Brazilian GP live. Keep up to date with everything that happens during the Sprint Race at Interlagos.</p></div>
            </div>
        </a><a href='https://www.carandbike.com/news/f1-george-russel-stuns-by-grabbing-brazil-sprint-race-win-3203783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: George Russel Stuns By Grabbing Brazil Sprint Race Win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-Tr6Os0cekOzkt0eBBbAlM4ZgoZ3GhYD9h4RGQpH-DFZE-AJuDORShNwReJv8G6RtTDPhAfNp" alt="F1: George Russel Stuns By Grabbing Brazil Sprint Race Win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The final F1 Sprint of the season proved to be a brilliant affair, as plenty of wheel to wheel action filled the 24 laps.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/12/george-russell-wins-brazilian-gp-sprint-race-as-mercedes-take-front-of-grid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Russell wins Brazilian GP sprint race as Mercedes take front ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGCBfoFXY_yPVnubKLHW7iRZZX85HpuGtjb9N6_rKfpmehnQqrxmE7V7V0pScyqY_SENsBJdmN" alt="George Russell wins Brazilian GP sprint race as Mercedes take front ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Russell won the sprint race in São Paulo, Carlos Sainz finished second but a grid penalty dropped him back and put Lewis Hamilton second on the grid&nbsp;...</p></div>
            </div>
        </a><a href='https://www.motorsport.com/f1/news/f1-brazilian-gp-russell-takes-sprint-race-win/10398885/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Brazilian GP: Russell takes sprint race win as Verstappen struggles</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcREoiSRX9mTA1erghZtQDruuGerV1mqTm0-6C1lm5OPKVhh6sa5fFAiB4fkcAoGibJgFH_I3drU" alt="Brazilian GP: Russell takes sprint race win as Verstappen struggles" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Russell sensationally ended the Mercedes winless run as he overthrew Max Verstappen to win the final sprint race of the 2022 Formula 1 season in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/gk/what-is-formula-one-race-f1-race-competition-formula1-race-point-system-2257801'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 Race: क्या होती है फॉर्मूला-1 रेस? क्या रफ्तार का ये जुनून सिर्फ कुछ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRXAy_hWEZVw_HQKUq32uF3mcw8gULz5xjdwFgwgDwQRFM95tQWT_LtkP8SXgpKsC_IloCaDYM8" alt="F1 Race: क्या होती है फॉर्मूला-1 रेस? क्या रफ्तार का ये जुनून सिर्फ कुछ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>फार्मूला-1 रेस को हम F1 के नाम से भी जानते हैं. यह दुनिया की सबसे बड़ी ऑटोमोबाइल रेस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.racefans.net/2022/11/12/albon-told-to-be-harder-with-his-team-to-get-the-best-out-of-them/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: Albon told to be &quot;harder&quot; with his team in debriefs · RaceFans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTNJW7YEuRcJtVn3IKGH8tlESUoMYz7T1x7BcWzyTAQzB5Uqz6TwOQUq4Y7qsXKldmSCiGHNI50" alt="F1: Albon told to be &quot;harder&quot; with his team in debriefs · RaceFans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Williams technical director FX Demaison told Alexander Albon he needs to be harder with the team &quot;if you want to be a world champion&quot;.</p></div>
            </div>
        </a>
        </Template></>;
}