import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Ben Stokes</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Ben Stokes"/>
        <meta name="description" content="Trending News about Ben Stokes" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Ben Stokes</h1>
            <Image width={800} height={500} src="https://resources.pulse.icc-cricket.com/ICC/photo/2022/10/13/8c2ba445-2305-41c0-a8ed-5bf1ae162465/Stokes1.png" alt="Ben Stokes"/>
            <h3>Recent News</h3>
            <a href='https://www.icc-cricket.com/news/2849190'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Ben Stokes pulls off a stunning fielding effort against ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRENz7AjC9XwwVJi13DGC-8RFvUWOkiMZFleiRS_27BF0StmiU1OPicymGDONpFURN1lA69MMGl" alt="WATCH: Ben Stokes pulls off a stunning fielding effort against ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>England all-rounder Ben Stokes pulled off a sensational fielding effort to deny Mitchell Marsh a six during the second T20 international between Australia&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/sports/cricket/watch-ben-stokes-insane-boundary-line-save-in-eight-run-win-over-australia-8205216/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>WATCH: Ben Stokes&#39; insane boundary line save in eight run win ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSE23xJrgy0bNVePION2B69Obzz8iAamLGQYVLeBFJ06bvLEYR6JDUlPCzS7hrfewOIXptxKooG" alt="WATCH: Ben Stokes&#39; insane boundary line save in eight run win ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In the 12th over of Australia&#39;s chase, Stokes managed to save four runs at long off after he leaped in the air to throw the ball in.</p></div>
            </div>
        </a><a href='https://www.espncricinfo.com/story/aus-vs-eng-2nd-t20i-is-ben-stokes-among-the-best-seven-t20i-batters-in-england-1339706'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Is Ben Stokes among the best seven T20I batters in England?</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQMUoj3SarR5-OYVChlRSHyAthXUGFoT271XKxJDVrWI8nnGTpqD449Zb3lqVT8lUMY5SsNBy7R" alt="Is Ben Stokes among the best seven T20I batters in England?" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On the international stage, it has been the least convincing of the three formats in Stokes&#39; career - currently a batting average of 19.08 and strike-rate of&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cricket/ben-stokes-you-can-not-do-that-incredible-fielding-effort-takes-twitter-by-storm-watch-101665576490573.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Stokes&#39;s &#39;Incredible&#39; fielding effort takes Twitter by storm</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSzqzkU7fK3mH84HA8PDkIfXd9XK3sR2-xkdpVbMtxsbdtdjp_6AK2IdSVO6IKC7uZTuVULdwz8zg" alt="Stokes&#39;s &#39;Incredible&#39; fielding effort takes Twitter by storm" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Ben Stokes turned on his inner acrobat to save what looked like a certain six during England&#39;s second T20I against Australia. | Cricket.</p></div>
            </div>
        </a><a href='https://www.aajtak.in/sports/cricket/story/ben-stokes-flying-fielding-vs-australia-viral-video-australia-vs-england-t20-match-tspo-1554846-2022-10-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ben Stokes Fielding: बेन स्टोक्स नहीं सुपरमैन! बाउंड्री पर हवा में उछल ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRiqal42FNkls0-21wCwT2pbpAk6IxI2EQmYlDx5bTDak_3ZDziVtJcCiW5QWJmWI1VlBRAiZpA" alt="Ben Stokes Fielding: बेन स्टोक्स नहीं सुपरमैन! बाउंड्री पर हवा में उछल ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंग्लैंड के खिलाड़ी बेन स्टोक्स ने ऑस्ट्रेलिया के खिलाफ हुए टी-20 मैच में कमाल की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/sports/cricket/ben-stokes-makes-superhuman-effort-to-save-a-six-against-australia-watch-video-2236518'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs ENG: बेन स्टोक्स ने हवा में उड़ते हुए बाउंड्री पर शानदार तरीके से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRq7KiXVz-7P7CiqjYTKW31UGGh7nm2U9V56NLU5NnmVg9P9S79LSdUKeuHx3WTnMPDKrxt8iNk" alt="AUS vs ENG: बेन स्टोक्स ने हवा में उड़ते हुए बाउंड्री पर शानदार तरीके से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बेन स्टोक्स (Ben Stokes) ने ऑस्ट्रेलिया के खिलाफ दूसरे टी20 में अपनी फील्डिंग का कमाल दिखाया&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/sports/cricket/ben-stokes-incredible-fielding-viral-video-australia-vs-england-2nd-t20-aus-vs-eng/1392231'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Ben Stokes: बेन स्टोक्स ने दिखाई हैरतअंगेज फुर्ती, बाउंड्री लाइन पर एक ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSp5Gcb3xqmxSxjJhPQAC0dv7xDqqWMs3Q1L6IeEHuXIuAK05TQrAmtdAfvEBy0G76u24SYuakj" alt="Ben Stokes: बेन स्टोक्स ने दिखाई हैरतअंगेज फुर्ती, बाउंड्री लाइन पर एक ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>इंग्लैंड और ऑस्ट्रेलिया के बीच बुधवार को खेले गए दूसरे टी-20 मैच में एक रोमांचक टक्कर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.foxsports.com.au/cricket/australia/ben-stokes-dazzles-with-ridiculous-boundary-save-as-england-clinch-t20-series/news-story/71f2559f237e1f816b5e459408b94bf2'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;He&#39;s a freak&#39;: Stokes&#39; &#39;ridiculous&#39; piece of fielding stuns cricket fans</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRZNgI1Wedl32PSyn4aPdSIIhs4KlAdtuJp9yWkY4Duft6ME1YieK55ENXF7Aw89ZXkwvaPYPbU" alt="&#39;He&#39;s a freak&#39;: Stokes&#39; &#39;ridiculous&#39; piece of fielding stuns cricket fans" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A batting masterclass from England No. 3 David Malan and an inspired bowling display from all-rounder Sam Curran was enough for the visitors to seal the three-&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/cricket/story-ben-stokes-saves-six-with-some-acrobatics-on-the-rope-in-eng-vs-aus-2nd-t20i-7209039.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>बेन स्टोक्स ने हवा में उड़कर एक हाथ से बचाया SIX; देखने वाले भी रह गए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTdMsieH_XQsEU6zsa9Ss1y9ZMUG0z1PKO-N2cD4O7ks3LUpVUMPpEphSva94jH3Pc4tKBqAymp" alt="बेन स्टोक्स ने हवा में उड़कर एक हाथ से बचाया SIX; देखने वाले भी रह गए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>पारी का 12वां ओवर सैम कुरेन डाल रहे थे और मिचेल मार्श स्ट्राइक पर थे। मार्श ने कुरेन की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatv.in/sports/cricket/aus-vs-eng-ben-stokes-video-did-such-a-feat-on-the-field-fingers-will-press-under-his-teeth-video-2022-10-12-892512'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AUS vs ENG : बेन स्टोक्स ने मैदान पर किया ऐसा कारनामा, दांतों तले दबा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcS7h6rT6mwm_VeNxekRYboLuyZLSHLF3-FZQ7IDMEib0BA_h572Oi8StoyFRZyG2M7vOuICTvKw" alt="AUS vs ENG : बेन स्टोक्स ने मैदान पर किया ऐसा कारनामा, दांतों तले दबा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AUS vs ENG Ben Stokes Fielding Video : टी20 विश्व कप 2022 से पहले बेन स्टोक्स ने कमाल की फील्डिंग कर पूरी&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}