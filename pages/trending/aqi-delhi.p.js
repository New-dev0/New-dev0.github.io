import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>AQI Delhi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,AQI Delhi"/>
        <meta name="description" content="Trending News about AQI Delhi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>AQI Delhi</h1>
            <Image width={800} height={500} src="https://cdn.thewire.in/wp-content/uploads/2022/11/03151227/2022-11-03T055621Z_2_LYNXMPEIA20-800x400.jpg" alt="AQI Delhi"/>
            <h3>Recent News</h3>
            <a href='https://thewire.in/environment/delhi-aqi-severe-smoke-air-pollution'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>&#39;Delhi&#39;s 20 Million Effectively Breathing Smoke,&#39; Residents Worry ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSnqMuFkUyV7N7Om1hh74H_DZUgDdMc7otKEypmbiW_v4yotbVOsEvJBI95z2etnIGkEHEJSoj2" alt="&#39;Delhi&#39;s 20 Million Effectively Breathing Smoke,&#39; Residents Worry ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>&#39;Eight out of 10 children in Delhi-NCR have respiratory problems. After years of discussions, why is there a continuing lack of concern/coordination between&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatoday.in/health/story/delhi-aqi-at-500-nose-and-throat-infections-jump-by-90-doctors-express-concern-2292888-2022-11-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi AQI at 500: Nose and throat infections jump by 90%, doctors ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRNNneQN1gDaCTWYJ9VITpyvK_qjh2u4fbDPbVPKJ-qscNe33rVQg4rOos4OP595FO-2LpxMTxn" alt="Delhi AQI at 500: Nose and throat infections jump by 90%, doctors ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>With Delhi&#39;s AQI falling in the &quot;hazardous&quot; category today, citizens experience severe throat and nose infections in the capital city.</p></div>
            </div>
        </a><a href='https://www.amarujala.com/delhi-ncr/delhi-aqi-diesel-vehicles-will-not-run-in-delhi-caqm-orders'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi AQI: दिल्ली में नहीं चलेंगी बीएस-4 डीजल कारें, CAQM ने लिया फैसला ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Delhi AQI: दिल्ली में नहीं चलेंगी बीएस-4 डीजल कारें, CAQM ने लिया फैसला ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>सीएक्यूएम ने गुरुवार शाम अधिसूचना जारी करते हुए कहा कि केंद्रीय पैनल ने स्&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-delhi-air-pollution-aqi-quality-severe-caqm-orders-to-implement-grap-4-in-delhi-ncr-23180318.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi-NCR में GRAP-4 लागू, दफ्तरों में WFH की सिफारिश; राज्य सरकारें ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQqDyO8LvsIHCBfrcmt-Z3ZG5eMydZf_z4eZoxHdYkrV0NzVffOknvKJacbTGJEkvMzBA7fCaW1" alt="Delhi-NCR में GRAP-4 लागू, दफ्तरों में WFH की सिफारिश; राज्य सरकारें ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi NCR Pollution दिल्ली एनसीआर में हवा की गुणवत्ता खराब होती जा रही है। बृहस्पतिवार शाम को&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-delhi-air-quality-severe-again-parents-of-school-going-children-worried-air-pollution-struggling-to-breath-23179985.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi Air Pollution: गैस चैंबर बनी दिल्ली, बच्चों को स्कूल भेजने वाले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRvMFXgC1DjKxuDTIkSKU8bAG-5ToNwUBMe4vIU3KiyO-NIwHJfcxBuozAKQs4AuAZfhWtEzCCD" alt="Delhi Air Pollution: गैस चैंबर बनी दिल्ली, बच्चों को स्कूल भेजने वाले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi Air Pollution राजधानी दिल्ली में प्रदूषण की स्थिति खतरनाक हो गई है। दिल्ली का वायु&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/india/as-delhi-ncr-aqi-dip-whom-to-blame-politicians-citizens-farmers-or-industrialist/articleshow/95272052.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Delhi-NCR AQI dips, blame game begins</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQvBoMAZqqSwGf4fFosYi-lMmEWgEr7n01z5Zjt1OHAVSSiNp13CkT9RfNxO0-9h_84SkqXVk9a" alt="As Delhi-NCR AQI dips, blame game begins" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Overall Air Quality Index (AQI) in Delhi stood at 354; whereas it slipped to 406 (&#39;severe&#39; category) in Noida, and to 346 in Gurugram.</p></div>
            </div>
        </a><a href='https://www.thestatesman.com/cities/delhi/delhi-ncr-gasps-as-aqi-plunges-to-severe-category-1503128010.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi-NCR gasps as AQI plunges to &#39;severe&#39; category</h3>
                <div style={{ display: "flex" }}>
                <Image src="" alt="Delhi-NCR gasps as AQI plunges to &#39;severe&#39; category" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Complaints of choking and &#39;eye burning&#39; poured from all directions as smog and air pollution left people gasping for breath.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/trending/news-delhi-air-pollution-ban-imposed-on-these-vehicles-in-delhi-ncr-air-quality-panel-takes-severe-action-grap-odd-even-work-from-home-206147'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi Air Pollution: These vehicles BANNED from plying in Delhi ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRBwzSUQ4L_lZUnGtEAAINY5_WjJZjjYNCjes58jB9gya8gr77APAK6b4OTPzB_D85tYjUP770f" alt="Delhi Air Pollution: These vehicles BANNED from plying in Delhi ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi Air Pollution: The order states: &quot;Ban on plying of 4-wheeler diesel LMVs in NCT of Delhi and sections of NCR skirting Delhi, except BS- VI vehicles&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/india/delhi/story/delhi-ncr-pollution-air-quality-index-reaches-472-in-anand-viahr-noida-gaziabad-gurugram-aqi-cpcb-data-mausam-lbs-1567878-2022-11-03'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>पॉल्यूशन से बेदम होने लगी है दिल्ली, खतरनाक स्तर पर पहुंचा AQI</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSRPFP6-pMTLGFQBN9obqU_TnhwG89UO99E58n8jVLJsKcOXmfLwBEh11gcJOQaIw4H3a8Waqu0" alt="पॉल्यूशन से बेदम होने लगी है दिल्ली, खतरनाक स्तर पर पहुंचा AQI" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>आनंद विहार, आईटीओ, चांदनी चौक, नजफगढ़ समेत दिल्ली-एनसीआर के सभी इलाकों में प्रदूषण का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/delhi-air-quality-dips-to-severe-here-are-dos-and-don-ts-to-avoid-falling-ill-11667484236390.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi: Air quality dips to &#39;severe&#39;. Here are dos and don&#39;ts to avoid ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTIlqt0AHv8AOvrYFkA1SWfS0MV6zBnIF5nvKf_f_7v0_cZeSabMr2IJ2isKnurZ95YxGnkxXad" alt="Delhi: Air quality dips to &#39;severe&#39;. Here are dos and don&#39;ts to avoid ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The Air Quality Index (AQI) in Delhi dipped to &#39;severe&#39; category on Thursday morning.A thick envelope of smog was seen in the national capital region and&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}