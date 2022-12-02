import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Gold</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Gold"/>
        <meta name="description" content="Trending News about Gold" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Gold</h1>
            <Image width={800} height={500} src="https://images.moneycontrol.com/static-hindinews/2022/04/GOLD30-770x430.jpg" alt="Gold"/>
            <h3>Recent News</h3>
            <a href='https://hindi.moneycontrol.com/news/your-money/gold-silver-rate-1st-december-2022-gold-rise-to-53000-silver-up-63000-wedding-season-planning-to-buy-gold-jewellary-913701.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Silver Price: घर की शादी के लिए गोल्ड ज्वैलरी खरीदने वालों के लिए ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTqZ-jfu-PBbsFdX9f4IJ5qNfnRDFfQ6ftCLXwf-Y7bG7z3dqyj-YJhyGYersslh6asb8ow7NfY" alt="Gold Silver Price: घर की शादी के लिए गोल्ड ज्वैलरी खरीदने वालों के लिए ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आज सोने का भाव 53,000 रुपये को पार कर गया। Gold Silver Price Today 1st December 2022: शादी (Wedding Season) के सीजन में&nbsp;...</p></div>
            </div>
        </a><a href='https://www.reuters.com/markets/commodities/gold-scales-2-week-high-hopes-smaller-us-rate-hikes-2022-12-01/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold soars 2% as Fed rate hike slowdown prospects hit dollar</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQhYW32cDnxKwxNWa2uN46LcXGqBARmoyPGTrjP-K-zEmbqXwwoGCTYzq1twxcxBLnDdmzmLgup" alt="Gold soars 2% as Fed rate hike slowdown prospects hit dollar" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold prices rose 2% on Thursday to climb above the key $1800 per ounce pivot, as the dollar weakened on the prospect of slower rate hikes from the Federal&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indianews.in/india-news/gold-silver-price-increased-price-of-gold-and-silver-know-the-new-prices-here/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Silver Price: सोने और चांदी की बढ़ी कीमत, यहा जाने नए दाम</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRpTgi4fbKolXbFMlLz3V9NdDJ0UcViCBgnu_esBwh3pEBOBRontzK8izKoxceqkTZYlea8Syry" alt="Gold Silver Price: सोने और चांदी की बढ़ी कीमत, यहा जाने नए दाम" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>साल के आखिरी महीने की पहली तारीख के साथ ही इंटरनेशनल मार्केट में सोने और चांदी के भाव&nbsp;...</p></div>
            </div>
        </a><a href='https://www.amarujala.com/business/bazaar/gold-price-aaj-ka-sone-chandi-ka-bhav-gold-silver-price-today-december-01-2022'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Sone Chandi Ka Bhav: ग्लोबल मार्केट में मजबूती से सोना में 352 रुपये ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSlNfT-IBQP1fTK8CbEPbja-JPyAmGMM7QMkWHCXBvM9mZpHPG6ZNrmbLdEVs9q8YNEmzD8xYp8" alt="Sone Chandi Ka Bhav: ग्लोबल मार्केट में मजबूती से सोना में 352 रुपये ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold-Silver Prices Today: राष्ट्रीय राजधानी सर्राफा बाजार में गुरुवार को सोना 352 रुपये बढ़कर 53677&nbsp;...</p></div>
            </div>
        </a><a href='https://www.globenewswire.com/news-release/2022/12/01/2565662/0/en/Pipeline-West-Clipper-Gold-Project-Exploration-Update.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Pipeline West/Clipper Gold Project Exploration Update</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcRKOuRgQQNLmkCemwijSbuwmFEae7f2Ym41IWhaTJ-9KtbvBjjiGxLNU_lURn2YwG51B_5V5DC1" alt="Pipeline West/Clipper Gold Project Exploration Update" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>VANCOUVER, British Columbia, Dec. 01, 2022 (GLOBE NEWSWIRE) -- Riley Gold Corp. (TSX.V: RLYG) (OTCQB: RLYGF) (“Riley Gold” or the “Company”) is pleased...</p></div>
            </div>
        </a><a href='https://smallcaps.com.au/gold-rare-earth-capital-raises-september-quarter-exploration-spend-new-record/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold, rare earth capital raises dominate September quarter ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSHcIjiXqAsu7NEc6jbhKULLVjXkZlYPp25BSNy78sFPLOta4dJi2uUVbmoHCStC1528BfP_kNp" alt="Gold, rare earth capital raises dominate September quarter ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Capital raisings by Australian exploration companies totalled $1.29 billion in the three months to 30 September, with gold stocks taking more than a quarter&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news24online.com/business/gold-silver-jewelry-rate-price-latest-update-on-1-december-2022-know-rates-in-india-pmvn/99240/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Price Today, 1 December 2022: सोने और चांदी की कीमत में बड़ी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTBfR-k35rYi-B47tlKa7pM2MDA55qL4974dayjSZ7K7akxJKiMknR00sb1gLqRaKd6Vs3TYrb8" alt="Gold Price Today, 1 December 2022: सोने और चांदी की कीमत में बड़ी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold Price Today, 1 December 2022: शादियों के सीजन में एकबार फिर सोने के साथ-साथ चांदी ने बड़ी छलांग&nbsp;...</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/business/gold-rises-rs-352-silver-rallies-rs-1447-check-24-november-2022-latest-sona-ka-bhav-4984631.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold Price Today: सोने-चांदी की कीमतों में लगी आग, चांदी पहुंची 63 हजार ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQyFOgGAoXAgzCvvprhMSbwL106aUCi4x5SBhn9_tIHOPKJqZN6S9CRq7jBmOwvt-EG50EaEVl2" alt="Gold Price Today: सोने-चांदी की कीमतों में लगी आग, चांदी पहुंची 63 हजार ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Gold Price 1 December, 2022: दिल्ली सर्राफा बाजार में गुरुवार को सोना 352 रुपये बढ़कर 53677 रुपये&nbsp;...</p></div>
            </div>
        </a><a href='https://in.investing.com/news/gold-hits-5month-high-on-growing-hopes-of-fed-rate-pivot-3439479'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Gold hits 5-month high on growing hopes of Fed rate pivot</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQT182o2qZwoWdntyb5VPPOv0hWCg2qqRA1NibcZWrmbJS8MgEicrZrFngcDGqWLCftzd7JkvNX" alt="Gold hits 5-month high on growing hopes of Fed rate pivot" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>U.S. gold futures&#39; benchmark February contract settled at $1,815.20 per ounce on New York&#39;s Comex, rising $55.30, or 3.1%, on the day. The session peak was&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/india/video-commodities-live-yellow-metal-crosses-rs-53400-on-mcx-will-the-bull-run-continue-in-gold-watch-to-know-experts-opinion-106523'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Commodities Live: MCX पर Gold का भाव ₹53400 के पार निकल गया ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRIgbkzLVCnV4kRuMpMRPHLpHubbSGYAsgetxoXtNi5hE_sOExbgV9Cua8PSeaYJfE08Z4LmCf1" alt="Commodities Live: MCX पर Gold का भाव ₹53400 के पार निकल गया ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Commodities Live: MCX पर Gold का भाव ₹53,400 के पार निकल गया; क्या Gold में जारी रहेगा Bull Run? Updated: Thu, Dec 01, 2022&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}