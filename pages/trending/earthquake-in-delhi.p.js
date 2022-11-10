import {Template} from "../_template";
import styles from "../../styles/Projects.module.css";
import Head from "next/head";
import { useMediaQuery } from './../useMediaQuery';
import Image from "next/image";

export default function Page() {
    const md = useMediaQuery(960);
    return <><Head>
        <title>Earthquake in Delhi</title>
        <meta name="keywords" content="news,trending,latest,sports,breaking,top,Earthquake in Delhi"/>
        <meta name="description" content="Trending News about Earthquake in Delhi" /></Head><Template>
            <h1 style={{fontSize: "30"}}>Earthquake in Delhi</h1>
            <Image width={800} height={500} src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/000_par1464254-sixteen_nine.jpg?VersionId=PBxolaS2xTetD8UGYnNyfHkxQwwN5b_u" alt="Earthquake in Delhi"/>
            <h3>Recent News</h3>
            <a href='https://www.indiatoday.in/india/story/earthquake-in-nepal-tremors-in-delhi-what-it-means-to-be-in-seismic-zone-4-2295276-2022-11-09'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Nepal, tremors in Delhi: What it means to be in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcR6aKsuNBpy4w_3bvV4Au1VNhEHO-JxtmPgq5uehscvaEr_Ks0VkOOunprJ_sFOZoxIdJo3EiDsHw" alt="Earthquake in Nepal, tremors in Delhi: What it means to be in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>As a 6.3 Richter earthquake struck Nepal early on Wednesday, the tremors and aftershocks were felt in the Delhi-NCR. North India, being in the seismic zone&nbsp;...</p></div>
            </div>
        </a><a href='https://www.prabhatkhabar.com/national/earthquake-in-delhi-ncr-magnitude-63-on-richter-scale-was-recorded-3-people-died-in-nepal-prt'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: दिल्ली-यूपी समेत पूरे उत्तर भारत में कांपी धरती, नेपाल-चीन ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcT5eh51oq0ZvYTtIyMCJTxafiq0GbiZ2LvJHDA_qbtnfmwhZDFs9n62TlniLlJFRYxzs8TS8fGc" alt="Earthquake: दिल्ली-यूपी समेत पूरे उत्तर भारत में कांपी धरती, नेपाल-चीन ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दिल्ली-एनसीआर में मंगलवार देर रात भूकंप के झटके महसूस किए गये. भूकंप देर राक करीब 2 बजे&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-earthquake-hits-delhi-ncr-biggest-earthquake-of-the-21st-century-hit-delhi-ncr-at-tuesday-night-jagran-special-23191846.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake In Delhi: दिल्ली में तेज भूकंप आने पर इन तीन इलाकों में हो ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcTQ2XQskeJ0DdKCsg5hmf0TqqjR3k3JgptIkzwrO8_ggPlIP2sBnDQ7psLKuw5wxPLDBYIUNu-K" alt="Earthquake In Delhi: दिल्ली में तेज भूकंप आने पर इन तीन इलाकों में हो ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake Hits Delhi-NCR दिल्ली-एनसीआर में मंगलवार-बुधवार को सर्वाधिक तीव्रता का भूकंप आया।</p></div>
            </div>
        </a><a href='https://tech.hindustantimes.com/tech/news/horrific-earthquake-in-delhi-protect-yourself-check-these-5-earthquake-apps-now-71667976082740.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Horrific Earthquake in Delhi! Protect yourself, check these 5 ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcSIJl43Gk2nUoSfNB9MYUs974yNQh9XVeqhqYPgLdyOhwRDz7Tkjf6ojXFVQV4nU76fef93dvUi" alt="Horrific Earthquake in Delhi! Protect yourself, check these 5 ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi experienced strong tremors from the 6.3 magnitude earthquake in Nepal today. To make sure you&#39;re protected from such deadly disasters, check out these&nbsp;...</p></div>
            </div>
        </a><a href='https://economictimes.indiatimes.com/news/new-updates/as-delhi-feels-the-effect-of-nepals-earthquake-residents-rush-to-twitter-to-confirm/articleshow/95393553.cms'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>As Delhi feels the effect of Nepal&#39;s earthquake; residents rush to ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQbeogjs116Gb1xRTb8wTYBUGIbiA4iE4ik3Djr3sCNq_XWuDGBAOdQENZkPkeaMlZW_JWVlrOf" alt="As Delhi feels the effect of Nepal&#39;s earthquake; residents rush to ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Many turned to social media to document the effects of the earthquake with many sharing videos of swaying ceiling fans and light fixtures.</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/trending/earthquake-in-delhi-ncr-what-is-seismic-zone-or-earthquake-zone-in-india-how-it-decided-and-in-which-zone-delhi-comes-103281'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: क्‍या होता है Seismic Zone, भारत में कितने ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQMYwopr4fBj4jIdqwII_qulo_wUWSpIcAUPDkoV0ODlmM16J8jrHZvf10l-jogZDrz-73tQa2C" alt="Earthquake in Delhi-NCR: क्‍या होता है Seismic Zone, भारत में कितने ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>भारत में दिल्‍ली को हाई रिस्‍क सिस्मिक जोन में रखा गया है. आइए आपको बताते हैं कि क्‍या&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/earthquake-in-delhi-ncr-no-casualties-recorded-2255291'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake: भूकंप से भारत समेत 3 देशों में दहशत, दिल्ली-NCR से MP ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTnwHx7UauIDA0hoG_AlYECUw52sMut6SmDLsv--TahyQSQqAWJ_R4frVCc-qDe_V-rkZcMm8Ad" alt="Earthquake: भूकंप से भारत समेत 3 देशों में दहशत, दिल्ली-NCR से MP ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दिल्ली-एनसीआर में मंगलवार देर रात करीब 2 बजे भूकंप के झटके लगे. इससे लोगों में दहशत का&nbsp;...</p></div>
            </div>
        </a><a href='https://www.thehindu.com/news/national/earthquake-tremors-felt-in-delhi/article66112993.ece'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>6.3 magnitude earthquake hits Nepal; tremors felt in Delhi</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcQK9kkLDqXPHxx57T04d4zLdPU4ptMtZ6ysGuH5dBcAzQpMfC6xeuEkVlnoHlsPGESop5D1Vo28" alt="6.3 magnitude earthquake hits Nepal; tremors felt in Delhi" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The National Centre for Seismology (NCS) said the epicenter of the earthquake was in Nepal, about 90 km east-southeast of Pithoragarh in Uttarakhand, and it&nbsp;...</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/news/india/earthquake-in-delhi-ncr-live-updates-nepal-6-3-magnitude-quake-tremors-in-north-india-death-toll-damages-latest-news-2022-11-09-822386'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: Late night tremors rock North India after ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQrUx4-ogwUdQ4ZfWF5HZcjczDMoZPgegSjFHNaXyEilI1Wh01TPdNzsfRx8ktRL3fcY-X6Wsdc" alt="Earthquake in Delhi-NCR: Late night tremors rock North India after ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: Strong tremors were felt in Delhi and nearby cities including Noida, Ghaziabad and Gurugram and even in Lucknow.</p></div>
            </div>
        </a><a href='https://www.livehindustan.com/national/story-earthquake-in-dellhi-ncr-tremors-for-10-seconds-in-ghaziabad-delhi-noida-updates-7327636.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>दिल्ली-UP समेत कई राज्यों में भूकंप, देर तक महसूस हुए झटके; नींद से जाग ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcTFL3ADIWJkQcKAMcPsMqM7tjwo8-B6yezUaC-NMeiADJwLoLFMT9TDTN_xLTCvPUi3zWviYK64" alt="दिल्ली-UP समेत कई राज्यों में भूकंप, देर तक महसूस हुए झटके; नींद से जाग ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>दिल्ली-एनसीआर में आधी रात को भीषण भूकंप देखने को मिला। कई लोगों को अपनी चारपाई अथवा&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}