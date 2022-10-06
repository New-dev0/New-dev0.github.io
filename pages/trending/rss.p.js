import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>RSS</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,RSS"/>
        <meta name="description" content="Trending News about RSS" /></Head><Template>
            <h1 style={{fontSize: "30"}}>RSS</h1>
            <Image width={800} height={500} src="https://navbharattimes.indiatimes.com/photo/msid-94655094,imgsize-36278/pic.jpg" alt="RSS"/>
            <h3>Recent News</h3>
            <a href='https://navbharattimes.indiatimes.com/india/rss-chief-mohan-bhagwat-vijayadashami-address-live-broadcast/articleshow/94652804.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Mohan Bhagwat LIVE: RSS का जनसंख्या नियंत्रण कानून लाने पर जोर ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSZQkzECbB2untLVwbIhXZ-1WDQqnbOGh45L_LLjnu-NGn3jWTjbTliByFkQ-EyPBkpGTzoJl8q" alt="Mohan Bhagwat LIVE: RSS का जनसंख्या नियंत्रण कानून लाने पर जोर ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mohan Bhagwat Live Dussehra Speech 2022 : आरएसएस प्रमुख मोहन भावगत हर वर्ष की तरह इस वर्ष भी विजयादशमी पर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/states/jharkhand/jharkhand-foundation-day-of-rss-celebrated-with-full-enthusiasm-in-jamshedpur-ann-2231324'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Jamshedpur में उत्साह के साथ मनाया गया RSS का स्थापना दिवस, हुआ ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcRQ9I_BGgKXMqXFogkyT3u--LRnT5NC-8KcMvVbCx2tFlWl9Lk3HV2w34ix6jDhoecHbRoSUihh" alt="Jamshedpur में उत्साह के साथ मनाया गया RSS का स्थापना दिवस, हुआ ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Jamshedpur News: झारखंड (Jharkhand) के जमशेदपुर में RSS का स्थापना दिवस उत्साह के साथ मनाया गया.</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/politics-and-nation/rss-chief-bhagwat-bats-for-term-hindu-rashtra/articleshow/94667791.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>No need to be apologetic about Hindu Rashtra, will only bind us ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTgLyQiVYSlREixu_4MnrHcqgYxNpYuaZZD6ZvCXF_SmQXxV7ADNL4LE1i-GW_0mfwTpEBcD_P3" alt="No need to be apologetic about Hindu Rashtra, will only bind us ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>He was delivering his annual Vijayadashami speech outlining the RSS&#39; vision for the coming year, and comes close on the heels of his meeting with&nbsp;...</p></div>
            </div>
        </a><a href='https://www.hindustantimes.com/india-news/indias-growing-prowess-women-empowerment-in-focus-at-rss-chief-vijayadashami-speech-101664944422900.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Hindu Rashtra, women empowerment in focus in RSS chief&#39;s ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcRRT_IAPNVy_yuVOzIvuApXZbk245fgWI0UZoSXEKojEQ_EblPxCAbYSx8IYVNrt_UDvTnnNzjd" alt="Hindu Rashtra, women empowerment in focus in RSS chief&#39;s ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Acclaimed mountaineer Santosh Yadav - the first woman to climb Mount Everest twice, first in May 1992, and then again in May 1993 - is the chief guest at&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/india/community-based-population-imbalance-shouldnt-be-ignored-mohan-bhagwat-says-no-threat-to-minorities/cid/1890325'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Community-based &#39;population imbalance&#39; shouldn&#39;t be ignored ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQql3wGcY28EEKKfghAReWnq54M5vwJzIGFvTJNGSDoPrJb_-itOO0On-tJ04BnpBgi4iVo-l2l" alt="Community-based &#39;population imbalance&#39; shouldn&#39;t be ignored ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Rashtriya Swayamsevak Sangh (RSS) chief Mohan Bhagwat said on Wednesday India should frame a well-thought-out, comprehensive population control policy&nbsp;...</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/dna-exclusive-analysis-of-rss-chief-mohan-bhagwats-statement-on-population-control-2518341.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>DNA Exclusive: Analysis of RSS Chief Mohan Bhagwats statement ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSCSh9eUai0lfALoz24j_TQRbulm0Kqh-y-WsB705DoDIpQQklrYGJ3Ty5BjogRRsI3r0U3XPcl" alt="DNA Exclusive: Analysis of RSS Chief Mohan Bhagwats statement ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>In Today DNA, Zee News&#39; Rohit Ranjan will analyse RSS Chief Mohan Bhagwat&#39;s statement on population control.</p></div>
            </div>
        </a><a href='https://www.jagran.com/news/national-rss-chief-mohan-bhagwat-address-on-vijayadashami-in-nagpur-23119922.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>विजयादशमी पर नागपुर में RSS का कार्यक्रम, मोहन भागवत बोले ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSXbqXFsv_83dsQcQYGUC11x0ZOmaOu6KuBq7cwYD491E_oPcdf_XnxR0asBT0_96VzTKiM5eoL" alt="विजयादशमी पर नागपुर में RSS का कार्यक्रम, मोहन भागवत बोले ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>नई दिल्ली, ऑनलाइन डेस्क। राष्ट्रीय स्वयंसेवक संघ (Rashtriya Swayamsevak Sangh) का आज स्थापना दिवस है।</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/population-control-religion-based-population-balance-can-no-longer-be-ignored-rss-chief-mohan-bhagwat/article65971011.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Religion-based population balance can no longer be ignored: RSS ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQkuchXZUPDWN4hxK1zQ8Ug3saqUuB6Xei53TV29HL-oRmN-_oGhPbd5thbOYl5t80MWN5ksagF" alt="Religion-based population balance can no longer be ignored: RSS ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>After 75 years of Independence, India now needs a population control policy applicable to all for the next 50 years to make population an &#39;asset&#39; to the&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/rss-chief-mohan-bhagwat-addressing-rally-in-reshmibagh-nagpur-occasion-of-vijayadashami-festival-2230839'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vijayadashmi: RSS चीफ मोहन भागवत ने नागपुर में की शस्त्र पूजा ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcQ3ztXCtj8yFHx1rqbYM5qcBJx6fqImb_VRwlNchL8wXa_wEwXxgYwOnMxS8-aRogQL5HGcAlMF" alt="Vijayadashmi: RSS चीफ मोहन भागवत ने नागपुर में की शस्त्र पूजा ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Mohan Bhagwat Speech: आरएसएस (RSS) प्रमुख मोहन भागवत (Mohan Bhagwat) ने विजयादशमी उत्सव के मौके पर नागपुर&nbsp;...</p></div>
            </div>
        </a><a href='https://www.opindia.com/2022/10/vijayadashami-2022-rss-head-mohan-bhagwat-asks-swayamsevaks-to-stay-firm-on-sanatan-dharma/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Vijayadashami 2022: RSS Chief Mohan Bhagwat asks ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTe3j8xhfF0HWt33fRZQUoimXBocwGuNKvBqTLWu0aSesThHu97zsaK5shwjgnf-zPVOAMJhgs2" alt="Vijayadashami 2022: RSS Chief Mohan Bhagwat asks ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>On Wednesday, the Rashtriya Swayamsevak Sangh (RSS) conducted a rally in the Nagpur district of Maharashtra on the occasion of Vijayadashami.</p></div>
            </div>
        </a>
        </Template></>;
}