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
            <Image width={800} height={500} src="" alt="Earthquake in Delhi"/>
            <h3>Recent News</h3>
            <a href='https://www.hindustantimes.com/cities/delhi-news/tremors-turn-spotlight-on-delhi-s-earthquake-prep-101668373804831.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Tremors turn spotlight on Delhi&#39;s earthquake prep</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcSol-P9lOGs72iEwd_t7lrXjeh9NqgEVsrgUNw5FbPSXFpw5q7mXNCTapSFMEmLhatnLOTq6Wjy" alt="Tremors turn spotlight on Delhi&#39;s earthquake prep" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Despite repeated interventions of the Delhi high court, the urban local bodies have been slow in ensuring compliance with structural safety audits and&nbsp;...</p></div>
            </div>
        </a><a href='https://www.jagran.com/delhi/new-delhi-city-ncr-earthquake-tremors-felt-across-delhi-ncr-23200016.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi: सप्ताह भर में दूसरी बार आया दिल्ली NCR में भूकंप ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcSgYvIOfUiLkj5xfZlBLz9ped6Qp1ypy41vbEifiOXTfaSN3W1RpoUDnaopi7QP82fCFihuQ1WY" alt="Earthquake in Delhi: सप्ताह भर में दूसरी बार आया दिल्ली NCR में भूकंप ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi NCR दिल्ली एनसीआर में सप्ताह भर के अंदर एक बार फिर से तेज भूकंप के झटके महसूस&nbsp;...</p></div>
            </div>
        </a><a href='https://www.livemint.com/news/india/earthquake-tremors-felt-in-delhi-noida-11668263397092.html'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t2.gstatic.com/images?q=tbn:ANd9GcQAybq_knAe7nJD8IxzL_MM56IKiwqMQKVNbnTckSDQp-1xJvZYrMc5z8wSxBC4VTowkCGS8zkq" alt="Earthquake in Delhi: 5.4 magnitude earthquake strikes Nepal ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Delhi, NCR and some other northern states witnessed earthquake tremors on Saturday. The tremors were felt as an earthquake measuring 5.4 jolted Nepal,&nbsp;...</p></div>
            </div>
        </a><a href='https://indianexpress.com/article/cities/delhi/earthquake-tremors-delhi-ncr-8265048/'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Nepal, tremors felt in Delhi for second time this week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcQZ4W6fzONid5HDuTERe4JWffhTFw7WdhFhJ1qUbJbUPwbHv2oz7LozjR827fl1UAnPw3q_hQ3f" alt="Earthquake in Nepal, tremors felt in Delhi for second time this week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>According to the National Earthquake Monitoring and Research Centre, Nepal, the epicentre of the quake was in Bajhang. Earthquake of Magnitude:5.4, Occurred on&nbsp;...</p></div>
            </div>
        </a><a href='https://www.aajtak.in/india/news/story/earthquake-in-noida-delhi-latest-updates-ntc-1574234-2022-11-12'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: दिल्ली-NCR और उत्तराखंड में भूकंप के तेज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcSpByJYAOVkgy5kcXVJvlt8iuHXps-uxotwFC6RvEhNw-t6iOZfAgnb9Dq_kxUFkoUoWwKX9T6X" alt="Earthquake in Delhi-NCR: दिल्ली-NCR और उत्तराखंड में भूकंप के तेज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: दिल्ली-एनसीआर की धरती एक बार फिर कांपी है. आज शनिवार को दिल्ली, नोएडा,&nbsp;...</p></div>
            </div>
        </a><a href='https://www.zeebiz.com/hindi/india/earthquake-termors-felt-in-delhi-and-noida-103790'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake In Delhi: एक हफ्ते में दूसरी बार दिल्ली-एनसीआर में कांपी ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t1.gstatic.com/images?q=tbn:ANd9GcR9hn7EBCMAxSsfkViu-G8Ym1bT1KnKZeizyW_WF-dtn4oUpiXW0NWr78hVmkmeDv7gLlKf3Q2A" alt="Earthquake In Delhi: एक हफ्ते में दूसरी बार दिल्ली-एनसीआर में कांपी ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake Today: दिल्ली-NCR में शनिवार को एक बार फिर भूकंप के तेज झटके महसूस किए गए. भूकंप करीब&nbsp;...</p></div>
            </div>
        </a><a href='https://www.abplive.com/news/india/breaking-news-earthquake-today-tremors-felt-in-delhi-ncr-2258028'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: दिल्ली-NCR में महसूस किए गए भूकंप के तेज ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t3.gstatic.com/images?q=tbn:ANd9GcRQZ6B0z9EpLgNpl1mmSmBSA3YvHaS-w06NLRcX7qEY5s0kXzmxaEKHw45Y6XtN5rcqRI2KbctE" alt="Earthquake in Delhi-NCR: दिल्ली-NCR में महसूस किए गए भूकंप के तेज ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: दिल्ली एनसीआर में एक बार फिर भूकंप आया है. हफ्ते में ये दूसरी बार है कि&nbsp;...</p></div>
            </div>
        </a><a href='https://www.telegraphindia.com/india/earthquake-tremors-felt-in-delhi-second-time-in-a-week/cid/1897749'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake tremors felt in Delhi, second time in a week</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR6gdUNZ5EJMe7xBBTzPv1IhBS1JvClGnLA7kKZK3khsDNl959TEDufi9lCLVc7-b8spjmfLeac" alt="Earthquake tremors felt in Delhi, second time in a week" height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>The origin of the earthquake was 10 km deep and 3 km from Silanga town of Nepal. The affected countries are India, China and Nepal: IMD official.</p></div>
            </div>
        </a><a href='https://www.indiatvnews.com/trending/news/earthquake-in-delhi-ncr-netizens-shake-up-twitter-with-funny-memes-reactions-nepal-weather-2022-11-12-823406'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR: Netizens shake up Twitter with funny ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcR5fVlgtKLoBAggy0_i5h-57mTO8MGEgmqsMVwAjoCb3PepyxD9zmoJYghHGgcryZXkp8UYn_Mr" alt="Earthquake in Delhi-NCR: Netizens shake up Twitter with funny ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>Earthquake in Delhi-NCR: Social media lit up with funny memes and reactions as for the second time this week tremors were felt in the National capital.</p></div>
            </div>
        </a><a href='https://zeenews.india.com/india/live-updates/earthquake-in-delhi-ncr-strong-tremors-felt-in-noida-ghaziabad-gurgaon-details-here-2534499'>
            <div className={styles.card} style={{ maxWidth: "90%", width: md ? "auto": "90vh"}}>
                <h3>Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ...</h3>
                <div style={{ display: "flex" }}>
                <Image src="https://t0.gstatic.com/images?q=tbn:ANd9GcTw9b-vvEwxRmXvDF2XRjLTzvIIsr29D17ecrI49eezJQEAu91GbPr6aKZjbbqcqz286oWrFTRX" alt="Earthquake in Delhi-NCR LIVE UPDATES: Strong tremors felt in ..." height={150} width={150} style={{marginLeft: "15px"}}/>
                <p style={{marginLeft: "15px"}}>5.4 Magnitude Earthquake in Delhi-NCR Live Updates: Mild earthquake tremors were in Delhi-NCR today. People in the Delhi&#39;s adjoining cities - Noida,&nbsp;...</p></div>
            </div>
        </a>
        </Template></>;
}