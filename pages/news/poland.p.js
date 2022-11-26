import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Poland</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Poland"/>
        <meta name="description" content="Trending News about Poland" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Poland</h1>
            <Image width={800} height={500} src="" alt="Poland"/>
            <h3>Recent News</h3>
            <a href='https://www.channelstv.com/2022/11/15/poland-puts-military-on-alert-after-reported-russia-strike/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland Puts Military On Alert After Reported Russia Strike</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTdwvgy7gFFhMEWoV6ATZ3FjoEdR6WbrGOBFW53mqG2lFWIfg662oG9yDpMbglLW448AB_NkEY1" alt="Poland Puts Military On Alert After Reported Russia Strike" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Poland put its military on heightened readiness Tuesday after Russian missiles reportedly landed inside the NATO member&#39;s borders in a potentially major&nbsp;...</p></div>
            </div>
        </a><a href='https://apnews.com/article/russia-ukraine-war-zelenskyy-kherson-9202c032cf3a5c22761ee71b52ff9d52'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland: Russian-made missile fell on our country, killing 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpkzKgGqA2YGS005IB-1QYbc8801mHM34aMbSQNtyx5MCTFYi6flGKusf56qCDMGdj1JSiVusj" alt="Poland: Russian-made missile fell on our country, killing 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>KYIV, Ukraine (AP) — Poland said early Wednesday that a Russian-made missile fell in the eastern part of the country, killing two people in a blast that&nbsp;...</p></div>
            </div>
        </a><a href='https://www.whitehouse.gov/briefing-room/statements-releases/2022/11/15/readout-of-president-joe-bidens-call-with-president-andrzej-duda-of-poland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Readout of President Joe Biden&#39;s Call with President Andrzej Duda ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Readout of President Joe Biden&#39;s Call with President Andrzej Duda ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>President Joseph R. Biden, Jr. spoke with President Andrzej Duda of Poland and expressed deep condolences for the loss of life in Eastern Poland.</p></div>
            </div>
        </a><a href='https://www.ft.com/content/6606c639-2632-443b-9359-52d8a9964068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland blames &#39;Russian-made missile&#39; for deadly blast near Ukraine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTk86e4MEz5m9s9xbKjfuvmy73Ifm0IqLTuZzh42NUuitS_RgLWxHAFgHxkuM8b_o8MgEdAbdbD" alt="Poland blames &#39;Russian-made missile&#39; for deadly blast near Ukraine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Biden says it is &#39;unlikely&#39; that missile strike on Polish village that killed 2 people was fired from Russia.</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/nov/15/stray-russian-missiles-feared-landed-poland-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland considers calling meeting of Nato ministers after missile strike</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSwUsSyossL2i-Svw1sCegUbFMigtMNCcPf1mEWrrE0eiNrw2H87L_ppCNUUgFzLmTT1ScNgkIv" alt="Poland considers calling meeting of Nato ministers after missile strike" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two farmers killed near border with Ukraine by what Poland has claimed were Russian-made weapons.</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/15/1136768133/kyiv-ukraine-missiles-russia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden says it&#39;s &#39;unlikely&#39; that missile that hit Poland was fired from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRu2n7PosZR8WfOfETxHHzf1__fMPjktyI-3lJ1EvGeUs9Y8FGfOGHX_DYksQOn4zDYnR42zKLN" alt="Biden says it&#39;s &#39;unlikely&#39; that missile that hit Poland was fired from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The explosion came as Russia unleashed a wave of missile strikes Tuesday at cities across Ukraine, hitting residential buildings and knocking out electricity in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}