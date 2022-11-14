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
            <Image width={800} height={500} src="https://www.jagranimages.com/images/newimg/13112022/13_11_2022-f1_racing_23200896.jpg" alt="F1"/>
            <h3>Recent News</h3>
            <a href='https://www.jagran.com/news/national-brazilian-grand-prix-racing-bernie-ecclestone-makes-f1-racing-multibillion-dollar-business-23200896.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>दुनियाभर में सिर चढ़कर बोलता है F1 Racing का क्रेज, विश्‍व के सबसे महंगे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTj93uTcYfInvxrELX2VW72dJo6Cl9STTLuv5YnpoIFf0_HzxrufSSyqmOdDLhH6D0plkFB5_RM" alt="दुनियाभर में सिर चढ़कर बोलता है F1 Racing का क्रेज, विश्‍व के सबसे महंगे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Brazilian Grand Prix Formula 1 का क्रेज पूरी दुनिया में सिर चढ़कर बोल रहा है। आज ये दुनिया के सबसे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.carandbike.com/news/f1-george-russel-stuns-by-grabbing-brazil-sprint-race-win-3203783'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1: George Russel Stuns By Grabbing Brazil Sprint Race Win</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ-Tr6Os0cekOzkt0eBBbAlM4ZgoZ3GhYD9h4RGQpH-DFZE-AJuDORShNwReJv8G6RtTDPhAfNp" alt="F1: George Russel Stuns By Grabbing Brazil Sprint Race Win" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The final F1 Sprint of the season proved to be a brilliant affair, as plenty of wheel to wheel action filled the 24 laps.</p></div>
            </div>
        </a><a href='https://www.deccanherald.com/sports/formula-1/russell-notches-first-f1-win-as-mercedes-bosses-brazilian-gp-sprint-1161874.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russell notches first F1 win as Mercedes bosses Brazilian GP sprint</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCBZbf1TuqmZ923zR2JXqXo3rYjVy3uhgKIZLftfbGom_GyJJ29Y_TlDXWdR163tO6HSxWtVVc" alt="Russell notches first F1 win as Mercedes bosses Brazilian GP sprint" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mercedes&#39; George Russell claimed the first victory of his Formula One career on Saturday when he won a closely-contested sprint race at the Brazilian Grand&nbsp;...</p></div>
            </div>
        </a><a href='https://www.marca.com/en/f1-directo/2022/11/12/05_0501_20221112_21_20.html'>
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
                <p style={{marginLeft: "15px"}}>The penultimate round of the season comes from Sao Paulo, Brazil &middot; Kevin Magnussen starts on pole for the Sprint &middot; Max Verstappen lines up alongside for Red Bull&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/12/george-russell-wins-brazilian-gp-sprint-race-as-mercedes-take-front-of-grid'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>George Russell wins Brazilian F1 GP sprint race as Mercedes take ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSGCBfoFXY_yPVnubKLHW7iRZZX85HpuGtjb9N6_rKfpmehnQqrxmE7V7V0pScyqY_SENsBJdmN" alt="George Russell wins Brazilian F1 GP sprint race as Mercedes take ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Russell won the sprint race in São Paulo, Carlos Sainz finished second but a grid penalty dropped him back and put Lewis Hamilton second on the grid&nbsp;...</p></div>
            </div>
        </a><a href='https://jantaserishta.com/sports/f1-joy-for-mercedes-as-russell-tops-brazilian-gp-sprint-race-1743864'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>रसेल के रूप में मर्सिडीज के लिए F1 खुशी ब्राजील जीपी स्प्रिंट दौड़ में सबसे ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTeG4kIH6lHbWVuNmmM-LZD-RHfYVJxHYw0AmNoTiDkbvPlABolr3-mBN1T3U0LLaCZ1AzIghdS" alt="रसेल के रूप में मर्सिडीज के लिए F1 खुशी ब्राजील जीपी स्प्रिंट दौड़ में सबसे ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>साओ पाउलो (ब्राजील): फॉर्मूला वन टीम मर्सिडीज के पास ब्राजीलियन ग्रां प्री में यादगार&nbsp;...</p></div>
            </div>
        </a><a href='https://www.fia.com/news/f1-russell-wins-sao-paulo-sprint-ahead-sainz-and-hamilton'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>F1 - Russell wins São Paulo Sprint ahead of Sainz and Hamilton</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSO6Nco8fi9p_Q6Ud5YaW4WsaSOhKwQC5cT4NTZgnmHyGEbpjM8LGJzzdtPf3KgKVyYBQ6V72Yi" alt="F1 - Russell wins São Paulo Sprint ahead of Sainz and Hamilton" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>George Russell took his first F1 Sprint victory, overtaking Max Verstappen soon after the midway point in a bruising race at Interlagos in which Verstappen&nbsp;...</p></div>
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