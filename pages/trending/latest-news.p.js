import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Latest News</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Latest News"/>
        <meta name="description" content="Trending News about Latest News" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Latest News</h1>
            <Image width={800} height={500} src="https://i.guim.co.uk/img/media/55510de9398a39e676d9dd383fdc7f9dbe85c86c/0_267_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f277e6d66618c26f9eea732ac1a47ca3" alt="Latest News"/>
            <h3>Recent News</h3>
            <a href='https://www.theguardian.com/world/2022/oct/11/russia-ukraine-war-latest-what-we-know-on-day-230-of-the-invasion'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia-Ukraine war latest: what we know on day 230 of the invasion</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRbCo27-1lrwGQySpmn-113URunvSpJL8D5I_mRtzls_s5LZAzQ3yr3QJoCKkmm_UIRT4yVPr6x" alt="Russia-Ukraine war latest: what we know on day 230 of the invasion" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Biden condemns Putin&#39;s &#39;brutality&#39; after missile strikes; UN general assembly rejects Russia&#39;s call for secret ballot.</p></div>
            </div>
        </a><a href='https://www.cnbc.com/2022/10/10/russia-ukraine-live-updates.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>G-7 leaders to hold emergency meeting on Ukraine; Russian missile ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTGT1NvOaFYG_ImTIXH1AHJutm4VAvtaIrGGJQFJXPdi9A5tJFPGYVVPNYJ4VXmwmsFy3usaDCh" alt="G-7 leaders to hold emergency meeting on Ukraine; Russian missile ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Multiple explosions hit the center of Ukraine&#39;s capital Kyiv Monday, with reports of dead and injured, according to the city&#39;s emergency services.</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/ukraine-indian-embassy-in-kyiv-issues-advisory-as-russia-strikes-hard-101665410146024.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine: Indian embassy in Kyiv issues advisory as Russia strikes ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ0AtVmsKhtuE7qQB9HTUs4NTfI-z-fOe8qyrPlmowU4dLytsE9TetEK3h-HdJdrg99KqWcDpJ6" alt="Ukraine: Indian embassy in Kyiv issues advisory as Russia strikes ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In its advisory, the embassy urged Indians to avoid all non-essential travel to and within Ukraine. They are asked to strictly follow the safety and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bloomberg.com/news/articles/2022-10-10/ukraine-latest-explosions-hit-kyiv-cities-across-ukraine'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine Latest: Biden Pledges Air Defenses Amid Putin&#39;s Threats</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRkCbAjNx30qxlep-JseyRPR89AiYWsNBcjlSOsK0fC26NOGj7ktEEMsDr1NWJDstKVMSZ5dq0U" alt="Ukraine Latest: Biden Pledges Air Defenses Amid Putin&#39;s Threats" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russian President Vladimir Putin threatened more strikes against Ukrainian infrastructure after his country&#39;s missiles hit cities across Ukraine.</p></div>
            </div>
        </a><a href='https://www.bbc.co.uk/news/live/world-63193124'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ukraine war latest: Strikes across country are revenge for bridge ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRAGWz8XLRmGKGneH1l6iDA9DKE1q90dsc_AhPa_omKtG02J6fTQzVlpfFJk0Im0AKY70CSZ4el" alt="Ukraine war latest: Strikes across country are revenge for bridge ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ukraine says 14 people have died as Russia launches dozens of missiles at Kyiv and other Ukrainian cities.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/international/us/russias-revenge-missile-strikes-in-kyiv-and-other-ukrainian-cities-leave-several-dead-all-latest-updates-here/articleshow/94766050.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Russia&#39;s &#39;revenge&#39; missile strikes in Kyiv, and other Ukrainian cities ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTgHVDcQwov5Hq5MV3VzDDMZv20KqTDHDoBzdL-j-uAj_m9o-TGqKAqNv8-8qCeqdRTWrXuAA8I" alt="Russia&#39;s &#39;revenge&#39; missile strikes in Kyiv, and other Ukrainian cities ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Russian strikes on Ukrainian cities have left many dead as the war continues unabated. Kyiv and many more cities in Ukraine were struck by missiles,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}