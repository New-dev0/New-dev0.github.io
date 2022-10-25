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
            <Image width={800} height={500} src="" alt="AQI Delhi"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/india-news/how-air-quality-in-delhi-compares-to-mumbai-bengaluru-chennai-kolkata-after-diwali-101666660333987.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>How Delhi AQI fares compared to Mumbai, Bengaluru, Kolkata ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRTkzCvxqw8Iiwwmn_1MnI7-6uHblxzVzShQZ5Tf2M6QmchFdjP8fDyJwTZsDOZBSj8FaDEwpEW" alt="How Delhi AQI fares compared to Mumbai, Bengaluru, Kolkata ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Air pollution in Delhi-NCR becomes a huge concern at this time of the year. Stubble burning is one of the many factors attributed for it.</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-delhi-air-pollution-on-diwali-air-quality-remains-very-poor-category-aqi-evening-23161214.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Air Pollution: दिवाली के बाद दमघोंटू हुई दिल्ली की आबोहवा, NCR का AQI ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQ_8Len-G5-Fhas3vLdVmIERoA6w-9tCSnSDXqrFDbKZz2T2HNhbiM7fKHkTSqzAnhFTJfbQmI5" alt="Air Pollution: दिवाली के बाद दमघोंटू हुई दिल्ली की आबोहवा, NCR का AQI ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi Air Pollution AQI दिवाली की देर रात दिल्ली एनसीआर की आबोहवा बहुत खराब की श्रेणी में पहुंच&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/delhi-ncr/delhi-news-people-breathing-in-poisonous-air-aqi-reaches-very-poor-category-2244992'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi Air Quality: जहरीली हवा में सांस ले रहे हैं दिल्लीवासी, &#39;बहुत खराब ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTfAnNAlKCVor60LA7VfL2P0Ul76eEgeFtGbviCo4CbnhX0nqcpmPbidYd_oidndqUJEbG9DIEm" alt="Delhi Air Quality: जहरीली हवा में सांस ले रहे हैं दिल्लीवासी, &#39;बहुत खराब ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>AQI of Delhi: केंद्रीय प्रदूषण नियंत्रण बोर्ड के आंकड़ों के अनुसार, अगर पिछले साल की बात की&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/delhi-most-polluted-city-in-the-world-on-diwali-aqi-reaches-very-poor-11666629749421.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi most polluted city in the world on Diwali, AQI reaches &#39;very ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQloJl6RQgfWup66Zp3gSzuIrvFGXA3mfYgduhhyPkV4Oeq10KzGtsiQ23eouUv-frZYizv8Z6l" alt="Delhi most polluted city in the world on Diwali, AQI reaches &#39;very ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Monday, Delhi&#39;s air quality deteriorated to &quot;very poor&quot; with maximum temperature reaching 31.2 degrees Celsius, slightly below the season&#39;s normal.</p></div>
            </div>
        </a><a href='https://hindi.news18.com/news/delhi-ncr/delhi-aqi-very-bad-but-second-best-in-last-7-years-on-diwali-4793065.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi AQI: दिल्ली का एक्यूआई हुआ &#39;बहुत खराब&#39;, लेकिन दिवाली पर पिछले 7 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQlnTY4IP7YLBQ3hclM941-yf-8wVpYGUWuDvg8MWZfreQUPa_3s62rPmr60r7NMTqRSSphZu8w" alt="Delhi AQI: दिल्ली का एक्यूआई हुआ &#39;बहुत खराब&#39;, लेकिन दिवाली पर पिछले 7 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दिल्ली की वायु गणवत्ता सोमवार को पटाखे फोड़ने, पराली जलाने की घटनाओं में बढ़ोतरी और&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/ncr/story-delhi-ncr-aqi-delhi-air-turns-very-poor-but-still-2nd-best-on-diwali-in-7-years-7262995.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi Pollution on Diwali : दिल्ली की आबोहवा हुई &#39;बहुत खराब&#39;, दिवाली पर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTM5-c7wQaSzWIRBEXiCi75MqQcPtsGTwQm3jWSSpNuW9a3wb1MnN6iPCfdPDpqKaIt3yP57F9c" alt="Delhi Pollution on Diwali : दिल्ली की आबोहवा हुई &#39;बहुत खराब&#39;, दिवाली पर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>केंद्रीय प्रदूषण नियंत्रण बोर्ड (सीपीसीबी) के मुताबिक पिछले साल दिवाली पर दिल्ली में&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/delhi/delhis-aqi-worsens-diwali-day-8227874/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi&#39;s AQI worsens, Diwali day becomes first &#39;very poor&#39; air day of ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSQgKLIkegEX-sanFs4Py9t3ZT5yTU5VTjgFK5j3Q2Rr6ehHFa9cEGSmLrdf-U9vvvqcr1hdTJJ" alt="Delhi&#39;s AQI worsens, Diwali day becomes first &#39;very poor&#39; air day of ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi&#39;s air quality plummeted on the Diwali day, hitting the “very poor” category with an air quality index (AQI) of 312. This is the first “very poor” air&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thequint.com/news/india/delhi-witnesses-very-poor-air-quality-amid-diwali-celebrations-pollution-levels'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>AQI Over 380, Delhi Witnesses &#39;Very Poor&#39; Air Quality Amid Diwali ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcS20A-22u1ae63qhJy6eyi9jgTCPVDxWaEucOl5Ht22mGc_-OPKa7tcBnDMkUS43jgeEVX-MLcv" alt="AQI Over 380, Delhi Witnesses &#39;Very Poor&#39; Air Quality Amid Diwali ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Aided by the bursting of firecrackers, the level of air pollution in Delhi was in the red on Diwali night, according to data displayed by the Central&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/india/delhi/story/pollution-on-diwali-delhi-air-polluted-10-times-more-than-normal-air-quality-index-very-poor-category-cpcb-data-delhi-ncr-aqi-updates-lbs-1561979-2022-10-24'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi Pollution: पटाखे जलाने का असर, दिल्ली के कई इलाकों में सामान्य से ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRJ1APUnG5SRMBPhWy_ZUI1XmFUvt3BfYe0-Ub6pQpNv5PA2QEZkHKDl8NSnCXOjNJxuw7DqMik" alt="Delhi Pollution: पटाखे जलाने का असर, दिल्ली के कई इलाकों में सामान्य से ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Air Quality Index: राष्ट्रीय राजधानी दिल्ली का औसत AQI &#39;बेहद खराब&#39; स्थिति में पहुंच चुका है.</p></div>
            </div>
        </a><a href='https://www.outlookindia.com/national/delhi-s-aqi-very-poor-on-diwali-2nd-best-in-7-years-on-auspicious-day-news-232307'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Delhi&#39;s AQI &#39;Very Poor&#39; On Diwali, 2nd Best In 7 Years On Auspicious ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRaqgRdo2Jj6ChPodu2Y2R-uDs6JkQc2IpF7NaYytSOdvL3crplpRgdaPXeYW92GPpwqUXg4Tu0" alt="Delhi&#39;s AQI &#39;Very Poor&#39; On Diwali, 2nd Best In 7 Years On Auspicious ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi had recorded an AQI of 382 on Diwali last year, 414 in 2020; 337 in 2019; 319 in 2017; and 431 in 2016, according to the Central Pollution Control&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}