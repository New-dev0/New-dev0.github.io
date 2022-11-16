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
            <a href='https://apnews.com/article/russia-ukraine-war-zelenskyy-kherson-9202c032cf3a5c22761ee71b52ff9d52'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland: Russian-made missile fell on our country, killing 2</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRpkzKgGqA2YGS005IB-1QYbc8801mHM34aMbSQNtyx5MCTFYi6flGKusf56qCDMGdj1JSiVusj" alt="Poland: Russian-made missile fell on our country, killing 2" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A second person said that apparent Russian missiles struck a site in Poland about 15 miles from the Ukrainian border. A statement from the Polish Foreign&nbsp;...</p></div>
            </div>
        </a><a href='https://www.businessinsider.co.za/russian-missiles-struck-nato-ally-poland-and-killed-2-people-2022-11'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russian missiles struck NATO ally Poland and killed 2 people</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQdmmrNOHKY0R44LPKND4dA3W9beemJTTQmADk4IvF-YQcySiic_ZjRZ5MngU7Ph4McXMsBlp6C" alt="Russian missiles struck NATO ally Poland and killed 2 people" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Two people were reportedly killed after Russian missiles landed in an eastern Polish village on Tuesday, a US intelligence official told the Associated&nbsp;...</p></div>
            </div>
        </a><a href='https://www.npr.org/2022/11/15/1136768133/kyiv-ukraine-missiles-russia'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Biden says it&#39;s &#39;unlikely&#39; that missile that hit Poland was fired from ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRu2n7PosZR8WfOfETxHHzf1__fMPjktyI-3lJ1EvGeUs9Y8FGfOGHX_DYksQOn4zDYnR42zKLN" alt="Biden says it&#39;s &#39;unlikely&#39; that missile that hit Poland was fired from ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The explosion came as Russia unleashed a wave of missile strikes Tuesday at cities across Ukraine, hitting residential buildings and knocking out electricity in&nbsp;...</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/11/16/missile-strike-poland-called-isolated-incident-allies-on-standby.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Polish president says apparent missile strike in Poland was &#39;isolated ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRMahLXvuEtFpEWmAcZ22vCUjeGQhQUD3uTsdT_naM2jIufSZfz1fsmCynjA3vXrYA8KMBKmQcu" alt="Polish president says apparent missile strike in Poland was &#39;isolated ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The explosion, which took place near the Ukrainian border, came as Russia was launching a massive wave of missiles at Ukrainian cities before dusk Tuesday.</p></div>
            </div>
        </a><a href='https://notesfrompoland.com/2022/11/15/two-dead-in-explosion-amid-unconfirmed-report-of-russian-missiles-hitting-poland/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russian missile killed two in Poland near Ukraine border, says ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQqrMPEduc_ve11gpDjc1RktAOxhJOwTNFUVxJ_kEvLj6aYQ2L3R5EbHriqklptTaTUUIghT1j2" alt="Russian missile killed two in Poland near Ukraine border, says ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Following an explosion in a Polish village near the border with Ukraine on Tuesday that killed two people, Poland&#39;s foreign ministry has issued a statement&nbsp;...</p></div>
            </div>
        </a><a href='https://www.ft.com/content/6606c639-2632-443b-9359-52d8a9964068'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Poland blames &#39;Russian-made missile&#39; for deadly blast near Ukraine ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTk86e4MEz5m9s9xbKjfuvmy73Ifm0IqLTuZzh42NUuitS_RgLWxHAFgHxkuM8b_o8MgEdAbdbD" alt="Poland blames &#39;Russian-made missile&#39; for deadly blast near Ukraine ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Joe Biden says it is &#39;unlikely&#39; that missile strike on Polish village that killed 2 people was fired from Russia.</p></div>
            </div>
        </a>
        </Template></>;
}