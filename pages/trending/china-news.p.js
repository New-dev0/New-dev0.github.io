import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>China news</title>
        <meta name="description" content="Trending News about China news" /></Head><Template>
            <h1 style={{fontSize: "30"}}>China news</h1>
            <Image width={800} height={500} src="https://news.un.org/en/sites/news.un.org.en/files/styles/large/public/entermedia/Libraries/Production%2BLibrary/AYNwaq9umAoKpel2eXBu.jpg?itok=PgSYDAI3" alt="China news"/>
            <h3>Recent News</h3>
            <a href='https://news.un.org/en/story/2022/09/1127901'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>At UN, Foreign Minister Wang Yi sees &#39;hope&#39; in turbulent times ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcT_BqHbdq-UMeKkusNPjPE1i2el0XVZTcfXgu4q4c5fgFdhkQrhjzl_q5kkOgl2yOEnJW-knOXO" alt="At UN, Foreign Minister Wang Yi sees &#39;hope&#39; in turbulent times ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite the world&#39;s current phase of “turbulence and transformation”, there are “reasons for hope” amid broadening cooperation and deepening economic&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/world/2022/sep/24/russias-allies-china-and-india-call-for-negotiations-to-end-ukraine-war'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia&#39;s allies China and India call for negotiations to end Ukraine war</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQjCwFko_-bG9cLlFsWODLtunU-6EoCWUPrqjz4GlzwE6p6U-SKWyLAa8CL_mUMcLnNDsstBAON" alt="Russia&#39;s allies China and India call for negotiations to end Ukraine war" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>China and India have called for a negotiated end to the Ukraine war, stopping short of robust support for traditional ally Russia.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/world-news/pressing-priority-in-ukraine-is-to-facilitate-peace-talks-china-101664042467718.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pressing priority in Ukraine is to facilitate peace talks: China</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ5vwUGMxPEOHg2QVdBCsIaxKeo0g4tgrPtXLVVzIACxFauDqh853lpHXoGeqW3jogzugz6i8X_" alt="Pressing priority in Ukraine is to facilitate peace talks: China" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russia&#39;s strategic partner China has been firmly on the fence, criticizing Western sanctions against Russia but stopping short of endorsing or assisting in&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/military-coup-in-china-xi-jinping-under-house-arrest-general-li-qiaoming-next-president-say-social-media-rumours-2513977.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Military Coup in China, Xi Jinping under house arrest, General Li ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTOp7bTehJ3jpqEaiV4eI2ffn0M-RAIaasw901VzhkBIlNFyYLSLQxfAgI0GghwNXlyG4F_a5nC" alt="Military Coup in China, Xi Jinping under house arrest, General Li ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Social media is abuzz with the rumours of Chinese President Xi Jinping being put under house arrest, and a possible coup taking place in the country,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/world/china-us-china-tension-china-angered-by-antony-blinken-talk-on-taiwan-says-america-giving-dangerous-signals-23095127.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>US China Tension: ताइवान पर एंटोनी ब्लिंकन की बात से भड़का चीन, कहा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR7dUE819kr9bjDVpz70iPQjXePniANh-4jAPC9Z44BJbH503Jk7o9OsgNo-XvUYetsxZIov1me" alt="US China Tension: ताइवान पर एंटोनी ब्लिंकन की बात से भड़का चीन, कहा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>अमेरिका के विदेश मंत्री एंटोनी ब्लिंकन ने अपने चीनी समकक्ष वांग यी से कहा कि ताइवान की&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.moneycontrol.com/news/india/trends/china-coup-claims-on-social-media-rumors-of-pla-placed-xi-jinping-under-house-arrest-792731.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China: सोशल मीडिया पर चीन में तख्तापलट का दावा, शी जिनपिंग को नजरबंद ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQHxv8jghQqd_uauBmBhIls_35xPbIGmgvZaIGH2aLZcwo1NhZ7Nx0wbAc-6HaO61ZtgOFv0_Kt" alt="China: सोशल मीडिया पर चीन में तख्तापलट का दावा, शी जिनपिंग को नजरबंद ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दावा किया जा रहा है कि राष्ट्रपति शी जिनपिंग (Xi Jinping) को पीपुल्स लिबरेशन आर्मी (PLA) ने&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/aviation/china-cancels-over-9000-flights-across-country-for-unknown-reason-report-2513927.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Flight tracking website shows empty sky over China amidst rumours ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVOlHCsBReO0ETnDfJXhX7toUsyW770fqVqtI5uVYUEncoODg5eq8RQAbis9Fxs0PIr3gssphk" alt="Flight tracking website shows empty sky over China amidst rumours ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>China has started mass cancellations of flights, based on reports from state media. However, the reason for the flight cancellation is unclear.</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/09/rumours-of-military-coup-in-china-and-arrest-of-xi-jinping-turns-out-to-be-false/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As rumours of a military coup in China turns out to be false, here is ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSM9UN3BeeIGiFoN_4hN-rxlWRlSszceU-Oga3gKXIa68T0akC1hJaHauNH4LQWKZMOVSA2gcId" alt="As rumours of a military coup in China turns out to be false, here is ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rumours had appeared claiming that Chinese premier XI Jinping was removed from the control of military and was put under house arrest by PLA.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/navbharatgold/breaking-news-in-hindi/is-xi-jinping-under-arrest-in-china/story/94417273.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>XI Jinping News: क्या सच में चीन में शी जिनपिंग का तख्तापलट हो गया?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTDmLLMsJM1pvAF_90hx6FLdeh2gt6m2TTFj9_UZG_heamcnknxzD54yZsb7rfHtMji3ojcTyXL" alt="XI Jinping News: क्या सच में चीन में शी जिनपिंग का तख्तापलट हो गया?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>China Latest News: सोशल मीडिया पर चल रहे मेसेज, चीन के स्थानीय लोगों ने बताया- बीजिंग पर सेना का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/world/china-taiwan-issue-china-vows-forceful-steps-to-oppose-taiwan-interference-2223480'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>China Taiwan Issue: ताइवान में अमेरिकी दखल से बौखलाया चीन, कहा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQVG88oOVfI7P6ogh0Jeheyaza0w2djhQijQ4tIZRGLYysb2OCsYE9TAdj2evVmf1l5xeeIHbGB" alt="China Taiwan Issue: ताइवान में अमेरिकी दखल से बौखलाया चीन, कहा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>China Taiwan News: चीन के शीर्ष राजनयिक ने संयुक्त राष्ट्र महासभा के एक भाषण में कहा कि चीन के&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}