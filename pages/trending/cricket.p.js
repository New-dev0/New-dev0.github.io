import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Cricket</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Cricket"/>
        <meta name="description" content="Trending News about Cricket" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Cricket</h1>
            <Image width={800} height={500} src="https://images.indianexpress.com/2019/08/henry-olonga-1200.jpg" alt="Cricket"/>
            <h3>Recent News</h3>
            <a href='https://indianexpress.com/article/sports/cricket/paid-price-for-standing-up-to-mugabe-dont-miss-cricket-much-henry-olonga-8244882/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Paid price for standing up to Mugabe, don&#39;t miss cricket much: Henry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQ1nkqMjXc3zvMFZAZLFFaT5tbJ1NKzeO8Wq93nIxwun_rCQI5ho_5AORIrP8EVe3wry_96i_jucw" alt="Paid price for standing up to Mugabe, don&#39;t miss cricket much: Henry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The lasting memory of Olonga in a Zimbabwe jersey was the 2003 World Cup when he and Andy Flower wore black arm-bands in one of the games as a protest&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/cities/chandigarh-news/u16-cricket-chandigarh-bundles-out-for-238-against-haryana-101667419242131.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>U-16 cricket: Chandigarh bundles out for 238 against Haryana</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTULFvI7xioOo6BEfY-MI_zibCcY8JrvReEaG7DnxWDifFpTiWTRGor19yA25PkNKU4SZ8oViWC" alt="U-16 cricket: Chandigarh bundles out for 238 against Haryana" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In reply to Haryana&#39;s 274 on the second day of 2nd Balramji Das Tandon Under -16 multi-day&#39;s cricket tournament being played at Sector 16,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.theguardian.com/sport/2022/nov/02/travis-bavesi-the-statsguru-visionary-who-transformed-cricket-spin'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Travis Basevi: the Statsguru visionary who transformed cricket</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRI-YxHLl0Y3s1nLZnwercjlrler3lNSulDljCnM3gTC9WVTEm_UWRs4XFJ5fXfpVQuNg3YiQa8" alt="Travis Basevi: the Statsguru visionary who transformed cricket" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The man behind Cricinfo&#39;s search engine, who has died aged 47, was a one-off genius who paved the way for today&#39;s data-driven game.</p></div>
            </div>
        </a><a href='https://navbharattimes.indiatimes.com/sports/cricket/t20worldcup/news/what-is-duckworth-lewis-law-how-does-it-work-which-changes-the-result-of-a-cricket-match/articleshow/95256573.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DLS Method: जानिए उस DLS नियम के बारे में जिसने भारत को दिला दी 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRi5V2wMhRUG_sQCX63mpdQrgjdlBTMR3_oRR16Soz-psdmJoEI8VJ2w1lhlkhHhIR9R5uyt0Rp" alt="DLS Method: जानिए उस DLS नियम के बारे में जिसने भारत को दिला दी 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>डकवर्थ लुईस का नियम क्रिकेट फैंस को हमेशा से चकराती रही है। इस नियम के तहत दिए जाने&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thequint.com/news/webqoof/clip-of-zimbabwe-cricket-team-dancing-to-jai-shri-ram-is-edited-fact-check'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No, Zimbabwe&#39;s Cricket Players Are Not Dancing to &#39;Jai Shri Ram&#39; in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQKfznvCrKfdLnaXUlhLWfIBHw4L9p0QAkrCswkFU5HWhsZ7C-UiNpihs3wPrMaCDvXP5yd-K6h" alt="No, Zimbabwe&#39;s Cricket Players Are Not Dancing to &#39;Jai Shri Ram&#39; in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>A video being shared on social media shows people associated with the Zimbabwean cricket team dancing along to song called &#39;Jai Shri Ram&#39;.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/hindi/zee-hindustan/sports-news/live-updates/ind-vs-ban-live-cricket-score-india-vs-bangladesh-t20-world-cup-2022-ball-by-ball-commentary-scorecard-follow-live-updates/1420948'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN Highlights: भारत ने लगभग पक्की की सेमीफाइ</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ0Mv1ankqWBgOz90Q4yjMQ9Oa7lA1_muQlgb1HpnuveMQq-MkcEnkLyxNljje0I7fm-449FrQf" alt="IND vs BAN Highlights: भारत ने लगभग पक्की की सेमीफाइ" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>IND vs BAN Live Cricket Score: भारत और बांग्लादेश के बीच एडिलेड के मैदान पर खेले जाने वाले मैच में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.bbc.com/hindi/sport-63485498'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>भारत और बांग्लादेश मैच पर पाकिस्तान के क्रिकेट प्रेमी कर रहे हैं बारिश की ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSHXc73tIjCTtUjCB5w-GuwzidVC7QZsPgFrPJC3wy_SieV-lMDTAVm-QsqphOwmg34vH2VyYfS" alt="भारत और बांग्लादेश मैच पर पाकिस्तान के क्रिकेट प्रेमी कर रहे हैं बारिश की ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>बांग्लादेश ने बेहतरीन बल्लेबाज़ी करते हुए सात ओवरों में 66 रन बना लिए हैं. तभी बारिश आ गई&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/live/cricket/cricket-news/ind-vs-ban-live-cricket-score-t20-world-cup-2022-super-12-india-vs-bangladesh-t20i-match-at-adelaide-oval'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>IND vs BAN T20: टी20 वर्ल्ड कप में भारत की तीसरी जीत, बारिश से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTVUANBmAgd1o8MdZ7fNREbN7G4c9vigvSLMHp5Lof69AkTtmfTFcSNfDc8_n0wr78SPoKMlChJ" alt="IND vs BAN T20: टी20 वर्ल्ड कप में भारत की तीसरी जीत, बारिश से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Live Cricket Score, India vs Bangladesh (IND vs BAN) T20 Match: नमस्कार, अमर उजाला के लाइव ब्लॉग में आपका स्वागत है&nbsp;...</p></div>
            </div>
        </a><a href='https://www.manoramaonline.com/sports/cricket/2022/11/02/chinese-cricket-fan-cheers-for-india-in-hindi.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>ഇന്ത്യന്‍ ക്രിക്കറ്റ് ടീമിന് &#39;കട്ട ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcTRzz04SV9smDkv_nnomw5DTeS1fEKPeDKwy5j_ekRvkrGKDB4Y0jHWd2tykzN5tXcfJZTOuyGPyw" alt="ഇന്ത്യന്‍ ക്രിക്കറ്റ് ടീമിന് &#39;കട്ട ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Tags: T20 World Cup 2022 &middot; Indian Cricket Team. തൽസമയ വാർത്തകൾക്ക് മലയാള മനോരമ മൊബൈൽ ആപ് ഡൗൺലോഡ് ചെയ്യൂ.</p></div>
            </div>
        </a><a href='https://telugu.news18.com/photogallery/sports/from-ipl-to-maiden-call-in-team-india-here-is-young-bowler-yash-dayal-journey-srd-1489560.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Cricket : IPLలో కోట్ల వర్షం.. ఇప్పుడు టీమిండియాలో స్థానం.. ఒక్క ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgR8HT_z1KHnT11CylLid3yGfemw8EuU-m8LnG4jXt_Yzd-K-fZ9FKVYmM59uB7ANJoPo2_Nbl" alt="Cricket : IPLలో కోట్ల వర్షం.. ఇప్పుడు టీమిండియాలో స్థానం.. ఒక్క ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>From IPL To Maiden Call in Team India Here is Young Bowler Yash Dayal Journey srd - Cricket : బంగ్లాదేశ్‌ టూర్‌ కోసం బీసీసీఐ&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}