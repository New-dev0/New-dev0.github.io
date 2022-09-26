import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>IND vs Australia</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,IND vs Australia"/>
        <meta name="description" content="Trending News about IND vs Australia" /></Head><Template>
            <h1 style={{fontSize: "30"}}>IND vs Australia</h1>
            <Image width={800} height={500} src="" alt="IND vs Australia"/>
            <h3>Recent News</h3>
            <a href='https://www.amarujala.com/live/cricket/cricket-news/india-vs-australia-live-cricket-score-ind-vs-aus-3rd-t20-2022-match-at-hyderabad-rajiv-gandhi-stadium'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS 3rd T20: रोमांचक मैच में भारत ने ऑस्ट्रेलिया को छह विकेट से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="IND vs AUS 3rd T20: रोमांचक मैच में भारत ने ऑस्ट्रेलिया को छह विकेट से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>रोमांचक मुकाबले में भारत को आखिरी ओवर में 11 रन की जरूरत थी। तब विराट कोहली और हार्दिक&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/india-vs-australia-live-score-3rd-t20-2022-ind-vs-aus-today-cricket-match-latest-scorecard-at-hyderabad-101664105566477.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia 3rd T20I Highlights: IND win thriller by six wickets</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSbqWqf1dx04pGZy8Q2Giwb3e3-9QqHYYiss5Wy2X_31d70BuQgmfvobhTIns52S7gbgTdH39Mr" alt="India vs Australia 3rd T20I Highlights: IND win thriller by six wickets" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia 3rd T20I Highlights: Virat Kohli and Suryakumar Yadav&#39;s half centuries put India in control in the chase before Australia pulled things&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ind-vs-aus-3rd-t20-live-updates-india-playing-against-australia-3rd-t20-international-at-rajiv-gandhi-stadium-2223878'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS: तीसरे टी20 में टीम इंडिया ने ऑस्ट्रेलिया को चटाई धूल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSjPJk5DAI3eRDlRRIqHmVat8MWidTP2_dZkolATtnEDAdJPRgyxEOMFkJoMMnamPfLaEEleesU" alt="IND vs AUS: तीसरे टी20 में टीम इंडिया ने ऑस्ट्रेलिया को चटाई धूल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS, 3rd T20, Rajiv Gandhi Stadium: ऑस्ट्रेलिया ने पहले खेलने के बाद 20 ओवर में 7 विकेट पर 186 रन बनाए&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/ind-vs-aus-3rd-t20-live-score-updates-8172256/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS 3rd T20 Highlights: Kohli, SKY star as India defeat ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQqqk6KKEL4pR-xUc43Ek_J3wsmET9UkUKUaIJ3xpvzsl5fZ92vxUywlzqyUm_-rvtqXrLYQLJM" alt="IND vs AUS 3rd T20 Highlights: Kohli, SKY star as India defeat ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS 3rd T20 highlights, India vs Australia 3rd T20I Match Ball-by-Ball Commentary: For India, Axar Patel (3/33) scalped three wickets,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/sport/cricket/india-vs-australia-third-t20-cricket-match-september-25-2022-report/article65934693.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia, third T20 | Match report</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcR6k-37RXGS5QNWaEQYgAzAVmttjmNkD7VmOKMa7uoOdypDfQJHwQaTqXUK0Hu0bn97Zh3Ye1DP" alt="India vs Australia, third T20 | Match report" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suryakumar Yadav and Virat Kohli carved out half-centuries to orchestrate India&#39;s thrilling six-wicket win with a ball to spare in the third and final T20I&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/cricket/match-report-ind-vs-aus-3rd-t20i-india-vs-australia-live-cricket-match-score-at-ma-chidambaram-stadium-chennai-rohit-sharma-aaron-finch-lb-23097391.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ind vs Aus 3rd T20I: कोहली व सूर्यकुमार के अर्धशतक से भारत ने तीसरा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQpDQC1-mSL3Myf3Xy7AXiyGPWoDXx9TqsCZhU4k-8pncDnRvMi2IufWlieFErxh_-MYA6ULUxg" alt="Ind vs Aus 3rd T20I: कोहली व सूर्यकुमार के अर्धशतक से भारत ने तीसरा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ind vs Aus 3rd T20I: भारत ने सूर्यकुमार यादव और विराट कोहली ने नाबाद अर्धशतकीय पारी के दम पर इस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/sports/cricket/story/india-vs-australia-3rd-t20i-series-win-suryakumar-virat-kohli-hyderabad-2004671-2022-09-25'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia: Suryakumar Yadav blitz, vintage Virat Kohli help ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRxoTT-qktdBkQOvHVhiD48RwYaZ-Jypw8F32QqfgLkseR7rPJQjjitu0MOTdElv6aNWiI5LLUu" alt="India vs Australia: Suryakumar Yadav blitz, vintage Virat Kohli help ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India vs Australia: Virat Kohli and Suryakumar Yadav stitched a 104-run stand to help India successfully chase down 187 and complete a 2-1 series victory.</p></div>
            </div>
        </a><a href='https://www.tv9hindi.com/sports/cricket-news/india-vs-australia-live-score-today-ind-vs-aus-3d-t20-cricket-match-playing-xi-scorecard-schedule-hyderabad-weather-latest-updates-in-hindi-au487-1472558.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भारत Vs ऑस्ट्रेलिया 3rd T20 मैच Highlights: टीम इंडिया का दिखा दम ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSseRwXabl6C1SC_RgTWfaU3N4bppuKo-bntEYvr2joAe2MCNyp1guYEpEsxzyS1XWCMdrr9_M0" alt="भारत Vs ऑस्ट्रेलिया 3rd T20 मैच Highlights: टीम इंडिया का दिखा दम ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>India Vs Australia Match Highlights: भारतीय क्रिकेट टीम ने रविवार को हैदाराबाद में खेले गए तीसरे टी20&nbsp;...</p></div>
            </div>
        </a><a href='https://www.skysports.com/cricket/news/12123/12705322/india-vs-australia-suryakumar-yadav-stars-to-help-hosts-to-six-wicket-win-in-t20i-series-decider'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>India vs Australia: Suryakumar Yadav stars to help hosts to six ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTNHaOb0ptRtwhZwU68kBfsylZpVzSWKmgtxjwTDMFwtIw_QG64sYZ7m0TTo10eWbj--FgsUeVm" alt="India vs Australia: Suryakumar Yadav stars to help hosts to six ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Suryakumar Yadav and Virat Kohli struck half-centuries as India beat Australia by six wickets in their third and final Twenty20 International in Hyderabad&nbsp;...</p></div>
            </div>
        </a><a href='https://sportstar.thehindu.com/cricket/ind-vs-aus-live-score-2nd-t20-india-australia-hyderabad-commentary-highlights/article65934269.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs AUS 3rd T20I HIGHLIGHTS: Suryakumar, Kohli 50s help ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRUyqFZF4YRAWHQUTxlQtSftQakqpIgSGMXNdnExmB_uJ4RS9_zT6BpCxLETp7RJyRzCX8cV4Iv" alt="IND vs AUS 3rd T20I HIGHLIGHTS: Suryakumar, Kohli 50s help ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs AUS HIGHLIGHTS: Catch all the updates of all action, scores, highlights, commentary, updates, stats and more from India vs Australia, 3rd T20I in&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}